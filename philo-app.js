// ─────────────────────────────────────────────
//  APP — Fiches de Philosophie Terminale
// ─────────────────────────────────────────────

(function () {
  // ── État global ──
  let currentFlashcards = [];
  let fcIndex = 0;
  let fcSource = null; // { type, id }

  // ── Utilitaires DOM ──
  const $ = (id) => document.getElementById(id);
  function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = $(id);
    if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
  }
  function setStatus(text) { $('statusText').textContent = text; }
  function setActiveNav(href) {
    document.querySelectorAll('.nav-item').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === href);
    });
  }

  // ── Construction du menu latéral ──
  function buildNav() {
    // Notions
    const notionsNav = $('notionsNav');
    NOTIONS.forEach(n => {
      const a = document.createElement('a');
      a.className = 'nav-item';
      a.href = '#notion/' + n.id;
      a.textContent = n.titre;
      notionsNav.appendChild(a);
    });

    // Références littéraires
    const litNav = $('litNav');
    REFS_LIT.forEach(r => {
      const a = document.createElement('a');
      a.className = 'nav-item';
      a.href = '#lit/' + r.id;
      a.textContent = r.emoji + ' ' + r.titre;
      litNav.appendChild(a);
    });

    // Références picturales
    const pictNav = $('pictNav');
    REFS_PICT.forEach(r => {
      const a = document.createElement('a');
      a.className = 'nav-item';
      a.href = '#pict/' + r.id;
      a.textContent = r.emoji + ' ' + r.titre;
      pictNav.appendChild(a);
    });

    // Références historiques
    const histNav = $('histNav');
    REFS_HIST.forEach(r => {
      const a = document.createElement('a');
      a.className = 'nav-item';
      a.href = '#hist/' + r.id;
      a.textContent = r.emoji + ' ' + r.titre;
      histNav.appendChild(a);
    });
  }

  // ── Vue : liste des notions ──
  function renderNotionsList() {
    showView('notionView');
    setStatus('Notions');
    setActiveNav(null);
    $('notionView').innerHTML = `
      <div class="chapter-header">
        <p class="kicker">Programme de Terminale</p>
        <h1>Les 17 Notions</h1>
        <p class="chapter-intro">Sélectionne une notion pour accéder aux fiches, références et flashcards.</p>
      </div>
      <div class="ref-grid">
        ${NOTIONS.map(n => `
          <div class="ref-big-card" onclick="navigateTo('notion/${n.id}')">
            <div class="card-body">
              <h3>${n.titre}</h3>
              <p>${n.definition.slice(0, 100)}…</p>
              <div class="ref-notions-tags" style="margin-top:10px">
                <span class="notion-tag">${n.flashcards.length} flashcards</span>
                ${n.refs.length ? `<span class="notion-tag">${n.refs.length} référence${n.refs.length > 1 ? 's' : ''}</span>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ── Vue : une notion ──
  function renderNotion(id) {
    const notion = NOTIONS.find(n => n.id === id);
    if (!notion) return;

    // Trouver les références liées (dans toutes les catégories)
    const linkedRefs = [
      ...REFS_LIT.filter(r => r.notions.includes(id)).map(r => ({ ...r, cat: 'lit' })),
      ...REFS_PICT.filter(r => r.notions.includes(id)).map(r => ({ ...r, cat: 'pict' })),
      ...REFS_HIST.filter(r => r.notions.includes(id)).map(r => ({ ...r, cat: 'hist' })),
    ];

    showView('notionView');
    setStatus(notion.titre);
    setActiveNav('#notion/' + id);

    $('notionView').innerHTML = `
      <button class="back-link" onclick="renderNotionsList()">← Toutes les notions</button>
      <div class="chapter-header">
        <p class="kicker">Notion du programme</p>
        <h1>${notion.titre}</h1>
      </div>
      <div class="notion-body">
        <div class="notion-main">
          <div class="notion-section">
            <h2>Définition & enjeux</h2>
            <div class="notion-def">${notion.definition}</div>
          </div>
          ${linkedRefs.length ? `
          <div class="notion-section">
            <h2>Références mobilisables</h2>
            <div class="ref-list">
              ${linkedRefs.map(r => `
                <div class="ref-card" onclick="navigateTo('${r.cat}/${r.id}')">
                  <div class="ref-card-top">
                    <div>
                      <h3>${r.emoji} ${r.titre}</h3>
                      <span class="ref-author">${r.auteur} · ${r.date}</span>
                    </div>
                    <span class="ref-tag">${r.type}</span>
                  </div>
                  <blockquote>${r.resume.slice(0, 120)}…</blockquote>
                </div>
              `).join('')}
            </div>
          </div>` : ''}
        </div>
        <aside class="notion-sidebar">
          <div class="sidebar-box">
            <h3>Flashcards</h3>
            <p style="font-size:13px;color:var(--muted);margin-bottom:12px">${notion.flashcards.length} questions sur cette notion</p>
            <button class="fc-launch-btn" onclick="startFlashcards('notion','${id}')">
              Réviser avec les flashcards →
            </button>
          </div>
          <div class="sidebar-box">
            <h3>Autres notions</h3>
            <div class="notions-list-small">
              ${NOTIONS.filter(n => n.id !== id).map(n => `
                <a href="#notion/${n.id}" onclick="navigateTo('notion/${n.id}');return false;">${n.titre}</a>
              `).join('')}
            </div>
          </div>
        </aside>
      </div>
    `;
  }

  // ── Vue : liste références (générique) ──
  function renderRefList(cat, data, title, kicker) {
    const viewId = cat + 'View';
    showView(viewId);
    setStatus(title);

    $(viewId).innerHTML = `
      <div class="chapter-header">
        <p class="kicker">${kicker}</p>
        <h1>${title}</h1>
      </div>
      <div class="ref-grid">
        ${data.map(r => `
          <div class="ref-big-card" onclick="navigateTo('${cat}/${r.id}')">
            ${r.imageUrl
              ? `<img class="card-img" src="${r.imageUrl}" alt="${r.titre}" style="width:100%;height:180px;object-fit:cover" />`
              : `<div class="card-img">${r.emoji}</div>`}
            <div class="card-body">
              <h3>${r.titre}</h3>
              <p class="card-meta">${r.auteur} · ${r.date}</p>
              <p>${r.resume.slice(0, 100)}…</p>
              <div class="ref-notions-tags">
                ${r.notions.map(nid => {
                  const n = NOTIONS.find(x => x.id === nid);
                  return n ? `<span class="notion-tag">${n.titre}</span>` : '';
                }).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ── Vue : détail d'une référence ──
  function renderRefDetail(cat, id) {
    const dataMap = { lit: REFS_LIT, pict: REFS_PICT, hist: REFS_HIST };
    const titleMap = { lit: 'Références littéraires', pict: 'Références picturales', hist: 'Références historiques' };
    const data = dataMap[cat];
    const ref = data.find(r => r.id === id);
    if (!ref) return;

    const viewId = cat + 'View';
    showView(viewId);
    setStatus(ref.titre);
    setActiveNav('#' + cat + '/' + id);

    const notionLinks = ref.notions.map(nid => {
      const n = NOTIONS.find(x => x.id === nid);
      return n ? `<span class="notion-tag" style="cursor:pointer" onclick="navigateTo('notion/${nid}')">${n.titre}</span>` : '';
    }).join('');

    $(viewId).innerHTML = `
      <button class="back-link" onclick="navigateTo('${cat}')">← ${titleMap[cat]}</button>
      <div class="ref-detail">
        ${ref.imageUrl
          ? `<img class="ref-detail-img" src="${ref.imageUrl}" alt="${ref.titre}" />`
          : `<div class="ref-detail-img-placeholder">${ref.emoji}</div>`}
        <p class="kicker">${ref.type}</p>
        <h2>${ref.titre}</h2>
        <p class="detail-meta">${ref.auteur} · ${ref.date}</p>
        <div class="ref-notions-tags" style="margin-bottom:20px">${notionLinks}</div>
        <p style="font-size:14px;line-height:1.75;margin-bottom:28px;color:var(--muted)">${ref.resume}</p>
        <h2 style="font-family:var(--font-display);font-size:1.2rem;margin-bottom:16px;border-bottom:1px solid var(--line);padding-bottom:8px">Interprétations philosophiques</h2>
        ${ref.interpretations.map(i => `
          <div class="interp-block">
            <h3>${i.titre}</h3>
            <p>${i.texte}</p>
          </div>
        `).join('')}
        <button class="detail-fc-btn" onclick="startFlashcards('${cat}','${id}')">
          Réviser avec les flashcards (${ref.flashcards.length} cartes) →
        </button>
      </div>
    `;
  }

  // ── FLASHCARDS ──
  function startFlashcards(cat, id) {
    let cards = [];
    if (cat === 'notion') {
      const notion = NOTIONS.find(n => n.id === id);
      if (!notion) return;
      cards = notion.flashcards;
      $('fcKicker').textContent = 'Notion · ' + notion.titre;
      $('fcTitle').textContent = notion.titre;
      $('fcIntro').textContent = 'Lis la question, réfléchis, puis révèle la réponse.';
    } else {
      const dataMap = { lit: REFS_LIT, pict: REFS_PICT, hist: REFS_HIST };
      const ref = dataMap[cat].find(r => r.id === id);
      if (!ref) return;
      cards = ref.flashcards;
      $('fcKicker').textContent = ref.type;
      $('fcTitle').textContent = ref.titre;
      $('fcIntro').textContent = 'Lis la question, réfléchis, puis révèle la réponse.';
    }

    currentFlashcards = [...cards].sort(() => Math.random() - 0.5);
    fcIndex = 0;
    fcSource = { cat, id };

    showView('flashcardView');
    renderCard();

    $('fcRevealBtn').style.display = '';
    $('fcNextBtn').style.display = 'none';
    $('flashcard').classList.remove('flipped');
  }

  function renderCard() {
    const card = currentFlashcards[fcIndex];
    $('fcType').textContent = card.type || 'Question';
    $('fcQuestion').textContent = card.q;
    $('fcAnswer').textContent = card.r;
    $('fcCounter').textContent = `Carte ${fcIndex + 1} / ${currentFlashcards.length}`;
    $('fcProgressFill').style.width = ((fcIndex) / currentFlashcards.length * 100) + '%';
    $('flashcard').classList.remove('flipped');
    $('fcRevealBtn').style.display = '';
    $('fcNextBtn').style.display = 'none';
  }

  $('fcRevealBtn').addEventListener('click', () => {
    $('flashcard').classList.add('flipped');
    $('fcRevealBtn').style.display = 'none';
    $('fcNextBtn').style.display = '';
    $('fcProgressFill').style.width = ((fcIndex + 1) / currentFlashcards.length * 100) + '%';
  });

  $('fcNextBtn').addEventListener('click', () => {
    fcIndex++;
    if (fcIndex >= currentFlashcards.length) {
      // Fin des cartes
      $('flashcardView').querySelector('.flashcard-container').innerHTML = `
        <div style="text-align:center;padding:60px 20px">
          <div style="font-size:48px;margin-bottom:16px">✓</div>
          <h2 style="font-family:var(--font-display);font-size:1.8rem;margin-bottom:8px">Bien joué !</h2>
          <p style="color:var(--muted)">Tu as parcouru les ${currentFlashcards.length} cartes.</p>
        </div>
      `;
      $('fcRevealBtn').style.display = 'none';
      $('fcNextBtn').style.display = 'none';
      $('fcProgressFill').style.width = '100%';
    } else {
      renderCard();
    }
  });

  $('fcBackBtn').addEventListener('click', () => {
    if (fcSource) navigateTo(fcSource.cat + '/' + fcSource.id);
    else navigateTo('home');
  });

  // ── ROUTEUR ──
  window.navigateTo = function (path) {
    window.location.hash = path;
  };

  function handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const parts = hash.split('/');
    const section = parts[0];
    const id = parts[1];

    // Mettre à jour le nav actif
    setActiveNav('#' + hash);

    switch (section) {
      case 'home':
      case '':
        showView('homeView');
        setStatus('Accueil');
        break;
      case 'notions':
        renderNotionsList();
        break;
      case 'notion':
        if (id) renderNotion(id);
        else renderNotionsList();
        break;
      case 'lit':
        if (id) renderRefDetail('lit', id);
        else renderRefList('lit', REFS_LIT, 'Références littéraires', 'Mythes, épopées & tragédies');
        break;
      case 'pict':
        if (id) renderRefDetail('pict', id);
        else renderRefList('pict', REFS_PICT, 'Références picturales', 'Art & philosophie');
        break;
      case 'hist':
        if (id) renderRefDetail('hist', id);
        else renderRefList('hist', REFS_HIST, 'Références historiques', 'Thèses & événements fondateurs');
        break;
      case 'methode':
        showView('methodeView');
        setStatus('Méthode');
        break;
      default:
        showView('homeView');
    }
  }

  // ── ACCUEIL : cartes de navigation ──
  $('goNotions').addEventListener('click', () => navigateTo('notions'));
  $('goLit').addEventListener('click', () => navigateTo('lit'));
  $('goPict').addEventListener('click', () => navigateTo('pict'));
  $('goHist').addEventListener('click', () => navigateTo('hist'));
  $('homeButton').addEventListener('click', () => navigateTo('home'));

  // ── INIT ──
  buildNav();
  window.addEventListener('hashchange', handleRoute);
  handleRoute();

  // Expose pour usage inline
  window.renderNotionsList = renderNotionsList;
  window.startFlashcards = startFlashcards;
})();
