// ─────────────────────────────────────────────
//  DONNÉES — Fiches de Philosophie Terminale
// ─────────────────────────────────────────────

// ── 17 NOTIONS ──
const NOTIONS = [
  {
    id: "art",
    titre: "L'Art",
    definition: "L'art désigne toute activité humaine visant à produire des œuvres dotées d'une valeur esthétique. Il se distingue de la technique par la visée non utilitaire et de la nature par l'intentionnalité créatrice. La question centrale : l'art imite-t-il le réel ou crée-t-il un monde propre ?",
    refs: ["serment-horaces"],
    flashcards: [
      { type: "Définition", q: "Quelle est la distinction entre l'art et la technique selon Kant ?", r: "La technique vise l'utile selon des règles ; l'art vise le beau et suppose du génie — une disposition innée qui ne s'enseigne pas." },
      { type: "Thèse", q: "Que dit Platon sur l'art dans La République ?", r: "L'art est une imitation de l'imitation (mimêsis) : il copie les apparences sensibles qui elles-mêmes ne sont que copies du monde des Idées. Il éloigne donc du vrai et doit être soumis à la cité." },
      { type: "Thèse", q: "Comment Hegel conçoit-il l'art dans son système ?", r: "L'art est une forme d'expression de l'Esprit absolu — au même titre que la religion et la philosophie. Il incarne l'Idée dans le sensible. Hegel annonce la 'mort de l'art' : l'art moderne ne peut plus être le mode suprême de vérité." },
      { type: "Concept", q: "Qu'est-ce que le 'sublime' chez Kant ?", r: "Sentiment éprouvé face à ce qui dépasse notre faculté de représentation (la mer démontée, les montagnes). Il révèle notre grandeur morale : nous avons une raison capable de penser l'infini." },
    ]
  },
  {
    id: "bonheur",
    titre: "Le Bonheur",
    definition: "Le bonheur est un état de satisfaction complète et durable. Il se distingue du plaisir (fugace) et de la joie (intense mais ponctuelle). La philosophie distingue l'eudémonisme (bonheur comme épanouissement), l'hédonisme (bonheur comme plaisir) et le stoïcisme (bonheur comme vertu indépendante des circonstances).",
    refs: [],
    flashcards: [
      { type: "Thèse", q: "Qu'est-ce que l'eudémonisme selon Aristote ?", r: "Le bonheur (eudaimonia) est l'activité de l'âme conforme à la vertu. Ce n'est pas un état passif mais une activité : s'épanouir selon sa nature propre d'être rationnel." },
      { type: "Thèse", q: "Pourquoi Kant se méfie-t-il du bonheur comme fondement moral ?", r: "Le bonheur est empirique et subjectif : chacun en a une représentation différente. Il ne peut fonder la morale universelle. Le devoir prime sur le bonheur." },
      { type: "Concept", q: "Qu'est-ce que l'ataraxie chez Épicure ?", r: "L'absence de troubles de l'âme — état de tranquillité obtenu par la satisfaction des désirs naturels et nécessaires et la philosophie. C'est le bonheur épicurien." },
    ]
  },
  {
    id: "conscience",
    titre: "La Conscience",
    definition: "La conscience est le fait de se rapporter à soi-même et au monde de manière réfléchie. On distingue la conscience immédiate (présence au monde) et la conscience réfléchie (retour sur soi). L'inconscient freudien remet en cause l'idée d'une transparence totale à soi-même.",
    refs: ["existence-essence"],
    flashcards: [
      { type: "Définition", q: "Quelle est la formule fondatrice de Descartes sur la conscience ?", r: "« Je pense, donc je suis » (cogito ergo sum) : le seul fait de douter prouve l'existence d'un sujet pensant. La conscience de soi est le premier fondement indubitable." },
      { type: "Thèse", q: "Que signifie 'l'existence précède l'essence' pour la conscience chez Sartre ?", r: "L'homme n'a pas de nature préétablie : il se définit par ses actes et ses choix. La conscience est 'néant' — elle n'est pas une chose mais une liberté radicale qui se projette dans le monde." },
      { type: "Concept", q: "Qu'est-ce que la 'mauvaise foi' chez Sartre ?", r: "Refuser sa liberté en se comportant comme si on était déterminé — jouer un rôle social comme si c'était une nature. Le garçon de café qui 'fait le garçon de café' illustre ce phénomène." },
    ]
  },
  {
    id: "devoir",
    titre: "Le Devoir",
    definition: "Le devoir est une obligation morale qui s'impose à la volonté indépendamment des inclinations et des conséquences. Kant en fait le cœur de l'éthique : agir par devoir (et non conformément au devoir) est la seule action vraiment morale.",
    refs: ["antigone", "theorie-sentiments-moraux"],
    flashcards: [
      { type: "Concept", q: "Qu'est-ce que l'impératif catégorique selon Kant ?", r: "« Agis seulement d'après la maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle. » Contrairement à l'impératif hypothétique, il est inconditionnel." },
      { type: "Thèse", q: "Comment Antigone illustre-t-elle le conflit entre devoir moral et devoir légal ?", r: "Antigone choisit d'obéir à la loi divine (enterrer son frère) contre la loi de Créon. Elle incarne le conflit tragique entre deux obligations légitimes : la loi de la cité et la loi morale." },
      { type: "Concept", q: "Quelle est la différence entre agir 'par devoir' et agir 'conformément au devoir' chez Kant ?", r: "Agir conformément au devoir : faire la bonne action mais par intérêt ou inclination. Agir par devoir : faire la bonne action uniquement parce que c'est juste. Seul le second a une valeur morale." },
    ]
  },
  {
    id: "etat",
    titre: "L'État",
    definition: "L'État est une organisation politique souveraine exerçant un pouvoir sur un territoire et une population. Il se distingue de la société et de la nation. Les grandes questions : l'État est-il naturel ou artificiel ? Jusqu'où s'étend sa légitimité ?",
    refs: ["antigone", "zeitgeist"],
    flashcards: [
      { type: "Thèse", q: "Quelle est la thèse du contrat social chez Rousseau ?", r: "L'État légitime naît d'un pacte par lequel chaque individu aliène ses droits naturels à la communauté entière. La volonté générale — distincte de la somme des volontés particulières — est souveraine." },
      { type: "Thèse", q: "Pourquoi Hegel dit-il que l'État est la 'réalisation de l'Idée éthique' ?", r: "L'État n'est pas un simple contrat : il est l'accomplissement de la liberté concrète, la synthèse entre la famille (sphère privée) et la société civile. En lui, l'individu trouve sa vraie liberté." },
      { type: "Concept", q: "Qu'est-ce que le 'Léviathan' de Hobbes ?", r: "Métaphore de l'État absolu chez Hobbes : pour sortir de la guerre de tous contre tous (état de nature), les hommes cèdent leurs droits à un souverain puissant qui garantit la paix et la sécurité." },
    ]
  },
  {
    id: "inconscient",
    titre: "L'Inconscient",
    definition: "L'inconscient désigne l'ensemble des processus psychiques qui échappent à la conscience. Freud en fait une découverte révolutionnaire : le moi n'est pas maître dans sa propre maison. Distinguer l'inconscient freudien (dynamique, refoulé) de l'inconscient cognitif (automatismes).",
    refs: [],
    flashcards: [
      { type: "Concept", q: "Quelles sont les deux topiques freudiennes ?", r: "1ère topique : Inconscient / Préconscient / Conscient. 2ème topique : Ça (pulsions) / Moi (médiateur) / Surmoi (instance morale intériorisée). La 2ème permet de mieux expliquer les conflits psychiques." },
      { type: "Thèse", q: "Pourquoi Freud parle-t-il de 'blessure narcissique' à propos de sa découverte ?", r: "Après Copernic (la Terre n'est pas au centre) et Darwin (l'homme descend du singe), Freud inflige la 3ème humiliation : le moi n'est pas maître de lui-même, dominé par des forces inconscientes." },
    ]
  },
  {
    id: "justice",
    titre: "La Justice",
    definition: "La justice est à la fois une vertu morale (disposition à rendre à chacun ce qui lui est dû) et une institution sociale (ensemble de normes et de tribunaux). Elle soulève des questions d'égalité, d'équité et de légitimité de la loi.",
    refs: ["antigone", "theorie-sentiments-moraux", "iliade"],
    flashcards: [
      { type: "Concept", q: "Quelle est la distinction entre justice commutative et justice distributive ?", r: "Justice commutative : égalité stricte dans les échanges (même chose pour chacun). Justice distributive : répartition proportionnelle au mérite ou aux besoins. Aristote distingue les deux." },
      { type: "Thèse", q: "Qu'est-ce que le 'voile d'ignorance' de Rawls ?", r: "Pour trouver des principes de justice équitables, imaginons qu'on ignore notre place dans la société future. Derrière ce voile, on choisirait des principes qui protègent les plus défavorisés." },
    ]
  },
  {
    id: "langage",
    titre: "Le Langage",
    definition: "Le langage est un système de signes permettant la communication et la pensée. Il est propre à l'homme selon la tradition, mais cette exclusivité est discutée. La question centrale : le langage exprime-t-il la pensée ou la constitue-t-il ?",
    refs: [],
    flashcards: [
      { type: "Concept", q: "Qu'est-ce que l'arbitraire du signe chez Saussure ?", r: "Le lien entre le signifiant (image acoustique) et le signifié (concept) est arbitraire — il n'y a pas de relation naturelle entre le mot 'chien' et l'animal. Le signe est une convention sociale." },
      { type: "Thèse", q: "Que signifie 'les limites de mon langage signifient les limites de mon monde' chez Wittgenstein ?", r: "Ce qu'on ne peut pas dire, on ne peut pas le penser clairement. Le langage n'est pas l'habillage de la pensée — il en est la condition. La philosophie doit clarifier le langage." },
    ]
  },
  {
    id: "liberte",
    titre: "La Liberté",
    definition: "La liberté désigne l'absence de contrainte et/ou la capacité à se déterminer soi-même. On distingue la liberté négative (absence d'obstacles extérieurs), la liberté positive (pouvoir de se gouverner) et la liberté morale (autonomie de la volonté selon Kant).",
    refs: ["existence-essence", "antigone", "iliade"],
    flashcards: [
      { type: "Thèse", q: "Pourquoi Sartre dit-il que nous sommes 'condamnés à être libres' ?", r: "La conscience humaine est pure liberté — elle ne peut pas ne pas choisir, même l'inaction est un choix. Cette liberté est vertigineuse : sans essence préalable, l'homme porte l'entière responsabilité de ce qu'il est." },
      { type: "Concept", q: "Quelle est la différence entre liberté et licence chez Spinoza ?", r: "La licence : faire ce qu'on désire sans raison. La liberté véritable : agir selon sa nature propre, guidé par la raison. L'esclave de ses passions n'est pas libre — il est déterminé par des causes extérieures." },
      { type: "Thèse", q: "Comment Kant concilie-t-il liberté et déterminisme ?", r: "Dans le monde phénoménal (sensible), tout est déterminé. Mais l'homme appartient aussi au monde nouménal (intelligible) où la raison pratique est libre. La liberté est un postulat nécessaire de la morale." },
    ]
  },
  {
    id: "nature",
    titre: "La Nature",
    definition: "La nature désigne à la fois l'ensemble du monde physique (ce qui existe sans intervention humaine) et l'essence d'un être (sa 'nature propre'). La question centrale : y a-t-il une frontière nette entre nature et culture ?",
    refs: ["iliade"],
    flashcards: [
      { type: "Concept", q: "Qu'est-ce que l'état de nature chez Hobbes et chez Rousseau ?", r: "Hobbes : état de guerre de tous contre tous, vie 'solitaire, misérable, dangereuse'. Rousseau : état de bonheur naturel, l'homme est bon, c'est la société qui le corrompt. Deux visions diamétralement opposées." },
    ]
  },
  {
    id: "raison",
    titre: "La Raison",
    definition: "La raison est la faculté de penser de façon cohérente, de déduire, de comprendre et de juger. Elle s'oppose à l'instinct, à l'émotion et à la foi. Kant distingue l'entendement (catégories de l'expérience) et la raison pure (idées transcendantales).",
    refs: ["essence-histoire", "zeitgeist"],
    flashcards: [
      { type: "Thèse", q: "Que signifie 'tout ce qui est réel est rationnel' chez Hegel ?", r: "Le réel n'est pas irrationnel chaos : il est l'expression de la Raison (l'Esprit absolu) se déployant dans l'histoire. La philosophie doit comprendre cette rationalité immanente au monde." },
      { type: "Concept", q: "Qu'est-ce que la raison dialectique chez Hegel ?", r: "La raison progresse par contradictions : une thèse engendre son antithèse, dont la tension produit une synthèse à un niveau supérieur. Ce mouvement (dialectique) est le moteur de l'histoire." },
    ]
  },
  {
    id: "religion",
    titre: "La Religion",
    definition: "La religion est un ensemble de croyances, de pratiques et d'institutions qui relient l'homme au sacré ou au divin. Elle pose la question du rapport entre foi et raison, entre révélation et philosophie.",
    refs: [],
    flashcards: [
      { type: "Thèse", q: "Que dit Marx de la religion (la 'religion opium du peuple') ?", r: "La religion est une consolation illusoire qui détourne les opprimés de leur misère réelle et de la révolution. Elle est le soupir de la créature accablée — une protestation voilée contre la souffrance." },
      { type: "Thèse", q: "Comment Kant distingue-t-il foi et raison ?", r: "Kant limite le savoir pour faire place à la foi. La raison pure ne peut prouver ni réfuter l'existence de Dieu. La foi morale est rationnellement fondée : Dieu est un postulat de la raison pratique." },
    ]
  },
  {
    id: "science",
    titre: "La Science",
    definition: "La science est un ensemble de connaissances objectives, méthodiques et vérifiables sur le monde. Elle se distingue de l'opinion (doxa) et de la croyance. La question de la démarcation : qu'est-ce qui distingue une théorie scientifique d'une pseudo-science ?",
    refs: [],
    flashcards: [
      { type: "Concept", q: "Qu'est-ce que le critère de réfutabilité (falsifiabilité) chez Popper ?", r: "Une théorie est scientifique si et seulement si elle peut être réfutée par l'expérience. La psychanalyse et le marxisme ne sont pas scientifiques car trop souples pour être réfutées." },
      { type: "Concept", q: "Qu'est-ce qu'un 'paradigme' chez Kuhn ?", r: "Matrice disciplinaire partagée par une communauté scientifique. La science progresse par 'révolutions scientifiques' : un paradigme dominant est remplacé par un nouveau après une crise." },
    ]
  },
  {
    id: "technique",
    titre: "La Technique",
    definition: "La technique est un ensemble de procédés méthodiques visant à produire un résultat. Elle est souvent opposée à l'art (utilité vs. beauté) et à la science (application vs. théorie). Heidegger pense que la technique moderne révèle le monde comme simple 'fonds' à exploiter.",
    refs: [],
    flashcards: [
      { type: "Thèse", q: "Quelle est la thèse de Heidegger sur la technique moderne ?", r: "La technique moderne n'est pas neutre : elle impose un mode de dévoilement du monde (Gestell) où tout est réduit à une ressource exploitable. Elle menace la possibilité d'une autre relation au monde." },
      { type: "Concept", q: "Qu'est-ce que le mythe de Prométhée nous dit sur la technique ?", r: "Prométhée vole le feu (la technique) aux dieux pour le donner aux hommes. La technique est à la fois don (elle compense les faiblesses naturelles) et transgression (hubris, orgueil qui défie les limites)." },
    ]
  },
  {
    id: "temps",
    titre: "Le Temps",
    definition: "Le temps est la forme de la succession des événements. Saint Augustin formule le paradoxe : le passé n'est plus, le futur n'est pas encore, le présent est insaisissable. Hegel pense le temps comme déploiement de l'Esprit dans l'histoire.",
    refs: ["essence-histoire", "zeitgeist", "iliade"],
    flashcards: [
      { type: "Concept", q: "Qu'est-ce que la 'durée' chez Bergson ?", r: "Le temps vécu, irréductible au temps mesuré par les horloges. Le temps de la conscience est qualitatif, continu, non spatial. La science découpe le temps en instants et trahit ainsi son caractère vivant." },
      { type: "Thèse", q: "Comment Hegel pense-t-il le rapport entre temps et histoire ?", r: "L'histoire n'est pas une suite aléatoire d'événements : elle est le déploiement de l'Esprit dans le temps, progressant dialectiquement vers la conscience de sa propre liberté." },
    ]
  },
  {
    id: "travail",
    titre: "Le Travail",
    definition: "Le travail est une activité par laquelle l'homme transforme la nature pour satisfaire ses besoins. Il est à la fois aliénation (Marx) et accomplissement de soi (Hegel). La question centrale : le travail libère-t-il ou aliène-t-il ?",
    refs: [],
    flashcards: [
      { type: "Thèse", q: "Qu'est-ce que l'aliénation du travail chez Marx ?", r: "Dans le capitalisme, l'ouvrier est séparé du produit de son travail (qui appartient au patron), du processus (travail parcellaire), des autres (concurrence) et de lui-même (travail forcé). Le travail devient étrange et hostile." },
      { type: "Thèse", q: "Comment Hegel pense-t-il le travail dans la dialectique Maître-Esclave ?", r: "L'esclave, en travaillant, transforme le monde et se découvre dans son œuvre. Le maître, qui consomme sans travailler, reste dépendant. Paradoxe : c'est l'esclave qui accède à la vraie liberté." },
    ]
  },
  {
    id: "verite",
    titre: "La Vérité",
    definition: "La vérité est traditionnellement définie comme l'adéquation entre la pensée et la réalité (adaequatio rei et intellectus). Mais on peut aussi définir la vérité comme cohérence (non-contradiction), utilité (pragmatisme) ou dévoilement (Heidegger : aletheia).",
    refs: [],
    flashcards: [
      { type: "Concept", q: "Qu'est-ce que la vérité comme 'aletheia' chez Heidegger ?", r: "Aletheia (grec) : dévoilement, désoccultation. La vérité n'est pas d'abord une propriété des énoncés mais un événement : l'être se montre à travers l'existence humaine (Dasein) qui l'ouvre au monde." },
      { type: "Thèse", q: "Qu'est-ce que le perspectivisme de Nietzsche sur la vérité ?", r: "Il n'y a pas de vérité absolue : toute vérité est une interprétation depuis une perspective (biologique, sociale, psychologique). La 'volonté de vérité' est elle-même une forme de volonté de puissance." },
    ]
  },
];

// ── RÉFÉRENCES LITTÉRAIRES ──
const REFS_LIT = [
  {
    id: "antigone",
    titre: "Antigone",
    auteur: "Sophocle",
    date: "441 av. J.-C.",
    type: "Tragédie grecque",
    emoji: "🎭",
    notions: ["devoir", "justice", "liberte", "etat"],
    resume: "Après la mort de ses deux frères, Antigone brave l'édit du roi Créon qui interdit d'enterrer Polynice, considéré comme traître. Elle obéit à la loi divine contre la loi humaine et mourra pour cela.",
    interpretations: [
      {
        titre: "Le conflit entre loi morale et loi positive",
        texte: "Antigone illustre paradigmatiquement le conflit entre deux types de normes : la loi de la cité (le nomos de Créon) et la loi non écrite des dieux (la loi divine, naturelle). Hegel y voit la tragédie de deux droits également légitimes qui s'affrontent sans réconciliation possible. C'est la figure même du dilemme moral : aucune solution n'est sans faute."
      },
      {
        titre: "La désobéissance civile comme devoir",
        texte: "Antigone est la figure tutélaire de la désobéissance civile — refus d'une loi injuste au nom d'une loi supérieure. Elle préfigure les théories de Thoreau et de Rawls : l'individu peut et doit résister à la loi lorsqu'elle contredit les exigences de la conscience morale."
      },
      {
        titre: "La liberté comme autodétermination face à la mort",
        texte: "En choisissant la mort plutôt que la soumission, Antigone accomplit un acte de liberté absolue. Sartre y verrait une illustration de la liberté radicale : même condamnée, elle choisit. Son geste affirme que l'être humain est toujours libre de son attitude face au destin."
      }
    ],
    flashcards: [
      { type: "Œuvre", q: "Qui est Antigone et quel est son conflit central ?", r: "Antigone est la fille d'Œdipe. Elle s'oppose à Créon, roi de Thèbes, qui interdit d'enterrer son frère Polynice. Elle choisit d'obéir à la loi divine (inhumer son frère) contre la loi humaine, au prix de sa vie." },
      { type: "Interprétation", q: "Comment Hegel interprète-t-il le conflit dans Antigone ?", r: "Hegel y voit la collision tragique de deux puissances éthiques également légitimes : la famille (représentée par Antigone) et l'État (représenté par Créon). Ni l'une ni l'autre n'a tout à fait tort — c'est la définition même du tragique." },
      { type: "Interprétation", q: "En quoi Antigone est-elle la figure de la désobéissance civile ?", r: "Elle refuse une loi positive injuste au nom d'une loi supérieure (morale, divine). Elle préfigure les théories modernes de la désobéissance civile : l'individu a le droit — voire le devoir — de résister aux lois injustes." },
      { type: "Interprétation", q: "Quel lien peut-on établir entre Antigone et la notion de liberté ?", r: "En choisissant la mort plutôt que la soumission, Antigone illustre la liberté comme autodétermination absolue. Même face à la mort, elle exerce son choix. Pour Sartre, cela illustre que l'homme est toujours libre de son attitude." },
    ]
  },
  {
    id: "iliade",
    titre: "L'Iliade",
    auteur: "Homère",
    date: "VIIIe siècle av. J.-C.",
    type: "Épopée grecque",
    emoji: "⚔️",
    notions: ["liberte", "justice", "temps", "nature"],
    resume: "L'Iliade raconte les dernières semaines de la guerre de Troie, centrées sur la colère d'Achille après l'affront d'Agamemnon. C'est une méditation sur la guerre, la gloire (kleos), la mort et la condition humaine.",
    interpretations: [
      {
        titre: "La colère comme force tragique et liberté",
        texte: "La colère d'Achille (mênis) est le moteur de l'épopée. En refusant de combattre, Achille exerce une liberté exceptionnelle dans le monde héroïque — il refuse la contrainte sociale de l'honneur guerrier. C'est une figure de la liberté négative : l'absence de soumission, même au prix de l'isolement."
      },
      {
        titre: "Le temps, la gloire et la mort",
        texte: "L'Iliade pose la question du rapport au temps : Achille choisit une vie courte et glorieuse (kleos, la gloire immortelle dans la mémoire des hommes) plutôt qu'une vie longue et obscure. C'est une réflexion sur le sens de l'existence : que vaut-il mieux — durer ou briller ?"
      },
      {
        titre: "La pitié et les fondements de la justice",
        texte: "La scène finale où Achille rend le corps d'Hector à Priam est une des plus grandes scènes de la littérature mondiale. Elle fonde la justice sur la reconnaissance de l'humanité de l'autre — même de l'ennemi. Adam Smith y verrait une illustration de la sympathie morale."
      }
    ],
    flashcards: [
      { type: "Œuvre", q: "Quel est le sujet central de l'Iliade d'Homère ?", r: "La colère d'Achille (mênis) et ses conséquences pendant la guerre de Troie. L'épopée explore la gloire, la mort, l'honneur et la condition humaine à travers le conflit entre Grecs et Troyens." },
      { type: "Interprétation", q: "Que signifie le choix d'Achille entre longue vie et gloire éternelle ?", r: "Achille choisit une mort jeune et glorieuse (kleos) plutôt qu'une longue vie obscure. C'est une réflexion sur le sens du temps humain : l'intensité de l'existence prime sur sa durée. La mémoire des hommes donne une forme d'immortalité." },
      { type: "Interprétation", q: "Comment la scène finale entre Achille et Priam illustre-t-elle la justice ?", r: "Achille rend le corps d'Hector à son père Priam, ennemi vaincu. Il reconnaît en lui un père qui souffre, comme le sien. Cette pitié transcende l'hostilité guerrière : la justice naît de la reconnaissance de l'humanité commune." },
    ]
  },
];

// ── RÉFÉRENCES PICTURALES ──
const REFS_PICT = [
  {
    id: "serment-horaces",
    titre: "Le Serment des Horaces",
    auteur: "Jacques-Louis David",
    date: "1784",
    type: "Peinture néoclassique",
    emoji: "🗡️",
    notions: ["devoir", "liberte", "etat", "art"],
    resume: "Trois frères (les Horaces) prêtent serment à leur père de combattre pour Rome contre Albe, sachant que l'un d'eux affrontera son beau-frère. Les femmes, à droite, s'effondrent de douleur.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/1280px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
    interpretations: [
      {
        titre: "Le conflit entre devoir civique et liens affectifs",
        texte: "Le tableau met en scène le sacrifice de l'amour familial au profit du devoir envers la cité. Les hommes dressés, bras tendus vers les épées, incarnent la résolution morale kantienne : agir par devoir, sans égard aux conséquences affectives. Les femmes qui pleurent à droite représentent le monde sensible des inclinations que la vertu doit surmonter."
      },
      {
        titre: "La composition comme langage moral",
        texte: "David construit une opposition visuelle radicale : les hommes debout, rigides, géométriques (ligne droite, bras tendus) vs les femmes courbées, courbes, abandonnées. Cette rhétorique visuelle incarne le dualisme kantien raison/sensibilité, devoir/inclination. La lumière frappe les épées et les visages masculins — le foyer moral du tableau."
      },
      {
        titre: "Art, propagande et liberté politique",
        texte: "Peint en 1784, à la veille de la Révolution, le tableau est lu comme une exhortation républicaine. L'art peut-il être un instrument politique ? Platon aurait dit oui (et s'en serait méfié). Hegel y verrait l'Esprit d'une époque cherchant à s'exprimer. Le tableau pose la question de l'autonomie de l'art face au pouvoir."
      }
    ],
    flashcards: [
      { type: "Œuvre", q: "Que représente Le Serment des Horaces de David (1784) ?", r: "Trois frères romains (les Horaces) jurent à leur père de combattre pour Rome contre Albe-la-Longue. L'un d'eux devra affronter son beau-frère. Les femmes en deuil anticipé sont groupées à droite." },
      { type: "Œuvre", q: "Quel style caractérise ce tableau et qu'est-ce que cela implique philosophiquement ?", r: "Style néoclassique : rigueur géométrique, composition en frise, référence à l'Antiquité. Ce retour aux vertus romaines incarne un idéal moral : clarté, rectitude, sacrifice de soi. La forme exprime le contenu éthique." },
      { type: "Interprétation", q: "Comment le tableau illustre-t-il la notion de devoir selon Kant ?", r: "Les Horaces agissent par devoir envers la cité, contre leurs inclinations familiales. Ils incarnent l'impératif catégorique : agir selon la loi morale universelle, indépendamment des conséquences affectives. Le geste des bras tendus vers les épées est un geste de volonté pure." },
      { type: "Interprétation", q: "Que nous dit la composition visuelle sur la dualité raison/sensibilité ?", r: "David oppose visuellement les hommes (debout, droits, géométriques = raison) aux femmes (courbées, abandonnées = sensibilité). Cette opposition formelle incarne le dualisme kantien : la raison doit dominer les inclinations." },
      { type: "Interprétation", q: "En quoi ce tableau pose-t-il la question du rapport entre art et politique ?", r: "Peint à la veille de la Révolution, il fonctionne comme propagande républicaine. Il soulève la question platonicienne : l'art est-il dangereux quand il sert une idéologie ? Ou est-il, comme Hegel le pense, l'expression nécessaire de l'Esprit d'une époque ?" },
    ]
  },
];

// ── RÉFÉRENCES HISTORIQUES ──
const REFS_HIST = [
  {
    id: "existence-essence",
    titre: "« L'existence précède l'essence »",
    auteur: "Jean-Paul Sartre",
    date: "1945 — Conférence 'L'existentialisme est un humanisme'",
    type: "Thèse philosophique",
    emoji: "💭",
    notions: ["liberte", "conscience", "art"],
    resume: "Sartre renverse la métaphysique traditionnelle : contrairement aux objets (coupe-papier) dont l'essence précède l'existence, l'homme existe d'abord et se définit ensuite par ses actes. Il n'y a pas de 'nature humaine' préétablie.",
    interpretations: [
      {
        titre: "Le renversement de la métaphysique traditionnelle",
        texte: "Aristote, Descartes, et la tradition pensaient l'essence comme antérieure à l'existence (il y a une nature humaine définie). Sartre inverse : l'homme est 'jeté' dans le monde sans définition préalable. Il est d'abord, puis se choisit. Dieu n'existe pas pour définir l'homme avant sa naissance — donc l'homme est entièrement responsable de ce qu'il est."
      },
      {
        titre: "La liberté comme fardeau radical",
        texte: "Si aucune nature n'est préétablie, aucune excuse n'est possible. 'On n'est pas né lâche, on le devient' : les déterminismes biologiques ou sociaux ne suppriment pas la liberté, ils sont eux-mêmes choisis par la façon dont on les assume. C'est ce que Sartre appelle la responsabilité totale — et le vertige de la liberté."
      }
    ],
    flashcards: [
      { type: "Citation", q: "Que signifie 'l'existence précède l'essence' selon Sartre ?", r: "L'homme n'a pas de nature prédefinie : il existe d'abord, puis se définit par ses choix et ses actes. Contrairement aux choses dont la nature est fixée, l'homme est ce qu'il se fait. Il est entièrement responsable de lui-même." },
      { type: "Interprétation", q: "Pourquoi cette formule implique-t-elle une liberté radicale ?", r: "Sans nature préétablie, aucun déterminisme ne peut excuser nos choix. Nous sommes 'condamnés à être libres' : même refuser de choisir est un choix. La responsabilité est totale et irréductible." },
      { type: "Concept", q: "Quel exemple Sartre donne-t-il pour illustrer sa thèse ?", r: "Le coupe-papier : l'artisan pense d'abord sa fonction (essence) avant de le fabriquer (existence). Pour Dieu créant l'homme, ce serait pareil — mais sans Dieu, l'homme existe avant d'avoir une essence. Il se crée lui-même." },
    ]
  },
  {
    id: "essence-histoire",
    titre: "L'essence de l'Histoire — La Raison dans l'Histoire",
    auteur: "Georg Wilhelm Friedrich Hegel",
    date: "1837 (posthume)",
    type: "Philosophie de l'histoire",
    emoji: "📜",
    notions: ["raison", "temps", "etat", "liberte"],
    resume: "Hegel soutient que l'histoire universelle n'est pas un chaos d'événements mais le déploiement rationnel de l'Esprit absolu vers la conscience de sa propre liberté. 'Tout ce qui est réel est rationnel.'",
    interpretations: [
      {
        titre: "L'histoire comme progrès de la conscience de la liberté",
        texte: "Pour Hegel, l'histoire a un sens : elle progresse dialectiquement vers la liberté. Les Orientaux ne savaient qu'un seul homme était libre (le despote). Les Grecs savaient que quelques-uns étaient libres. Le monde germano-chrétien sait que tous sont libres. L'histoire est la marche de l'Esprit vers lui-même."
      },
      {
        titre: "La 'ruse de la raison'",
        texte: "Les grands hommes (Napoléon, César) croient agir pour eux-mêmes, mais ils ne sont que les instruments de la Raison universelle qui se réalise à travers eux. Hegel appelle cela la 'ruse de la raison' : l'Esprit utilise les passions humaines pour avancer vers ses fins propres, sans que les acteurs le sachent."
      }
    ],
    flashcards: [
      { type: "Thèse", q: "Quelle est la thèse centrale de Hegel sur l'histoire ?", r: "L'histoire universelle est le déploiement de l'Esprit absolu vers la conscience de sa propre liberté. Elle n'est pas un chaos : elle a un sens rationnel, progressant dialectiquement. 'Tout ce qui est réel est rationnel, tout ce qui est rationnel est réel.'" },
      { type: "Concept", q: "Qu'est-ce que la 'ruse de la raison' chez Hegel ?", r: "Les grands hommes historiques (Napoléon, César) croient agir pour leurs intérêts propres, mais ils sont les instruments inconscients de la Raison universelle. L'Esprit utilise les passions humaines pour se réaliser." },
      { type: "Interprétation", q: "Comment Hegel articule-t-il histoire et liberté ?", r: "L'histoire est un progrès de la conscience de la liberté : les Orientaux = un seul libre, les Grecs = quelques-uns libres, le monde moderne = tous libres. La liberté concrète se réalise dans l'État rationnel." },
    ]
  },
  {
    id: "zeitgeist",
    titre: "Le Zeitgeist — L'Esprit du Temps",
    auteur: "Hegel / Tradition romantique allemande",
    date: "XVIIIe–XIXe siècle",
    type: "Concept philosophique",
    emoji: "🌊",
    notions: ["temps", "raison", "etat", "art"],
    resume: "Le Zeitgeist ('esprit du temps' en allemand) désigne l'ensemble des idées, croyances et valeurs dominantes d'une époque. Hegel en fait un concept philosophique central : chaque époque historique exprime un moment du déploiement de l'Esprit absolu.",
    interpretations: [
      {
        titre: "Chaque époque a sa propre rationalité",
        texte: "Le Zeitgeist implique que les idées, les arts et les institutions d'une époque ne sont pas arbitraires : ils expriment la conscience qu'une société a d'elle-même à un moment donné. On ne peut juger une époque passée avec les critères du présent — elle avait sa propre logique interne, sa propre vérité historique."
      },
      {
        titre: "Le Zeitgeist et la philosophie de l'art",
        texte: "Pour Hegel, les formes artistiques sont l'expression du Zeitgeist : l'art grec exprime la belle totalité de l'Esprit réconcilié avec la nature. L'art romantique exprime la scission entre l'intériorité et le monde extérieur. Chaque style artistique est la traduction visible de l'Esprit d'une époque."
      }
    ],
    flashcards: [
      { type: "Concept", q: "Que signifie 'Zeitgeist' et d'où vient ce concept ?", r: "'Zeitgeist' signifie littéralement 'esprit du temps' en allemand. Concept hégélien désignant les idées, valeurs et représentations dominantes d'une époque historique — expression du moment de déploiement de l'Esprit absolu." },
      { type: "Interprétation", q: "Pourquoi le concept de Zeitgeist est-il important pour juger l'histoire ?", r: "Il invite au relativisme historique : chaque époque a sa propre rationalité interne. On ne peut pas juger les actes du passé avec les valeurs du présent sans anachronisme. Cela pose la question du progrès moral : y a-t-il des valeurs universelles ?" },
      { type: "Interprétation", q: "Quel lien Hegel établit-il entre Zeitgeist et art ?", r: "Les formes artistiques expriment le Zeitgeist : l'art grec (beau, harmonieux) = Esprit réconcilié ; l'art romantique (mélancolie, intériorité) = Esprit scindé. Chaque style est la manifestation visible de l'Esprit d'une époque." },
    ]
  },
  {
    id: "theorie-sentiments-moraux",
    titre: "La Théorie des sentiments moraux",
    auteur: "Adam Smith",
    date: "1759",
    type: "Philosophie morale",
    emoji: "🤝",
    notions: ["devoir", "justice", "liberte"],
    resume: "Avant La Richesse des Nations, Smith publie ce traité où il fonde la morale non sur la raison (Kant) ni sur le calcul (Bentham) mais sur la sympathie — la capacité naturelle de l'homme à se mettre à la place d'autrui.",
    interpretations: [
      {
        titre: "La sympathie comme fondement de la morale",
        texte: "Smith propose un fondement empirique de la morale : nous évaluons les actions en imaginant ce que ressentirait un 'spectateur impartial' — un observateur neutre et bienveillant. La justice et la vertu ne viennent pas d'une raison abstraite mais de notre capacité naturelle à ressentir avec autrui."
      },
      {
        titre: "Le spectateur impartial et la justice",
        texte: "Le 'spectateur impartial' est la figure centrale : intériorisation d'un regard neutre qui nous permet de nous juger nous-mêmes. C'est la conscience morale smithienne — non pas un impératif rationnel kantien, mais une instance imaginaire sociale. La justice naît de cette auto-régulation par la sympathie."
      }
    ],
    flashcards: [
      { type: "Thèse", q: "Sur quoi Adam Smith fonde-t-il la morale dans la Théorie des sentiments moraux ?", r: "Sur la sympathie : la capacité naturelle à se mettre à la place d'autrui et à ressentir ce qu'il ressent. Ce n'est pas la raison abstraite (Kant) ni le calcul du plaisir (Bentham) qui fonde la morale, mais cette disposition affective naturelle." },
      { type: "Concept", q: "Qu'est-ce que le 'spectateur impartial' chez Adam Smith ?", r: "Figure imaginaire d'un observateur neutre et bienveillant que nous intériorisons pour juger nos propres actions. Il représente la conscience morale : nous agissons bien quand nous pouvons approuver notre action du point de vue de ce tiers imaginaire." },
      { type: "Interprétation", q: "En quoi la sympathie smithienne diffère-t-elle du devoir kantien ?", r: "Kant : la morale vient de la raison pure, indépendamment des sentiments. Smith : la morale prend racine dans notre nature affective — la sympathie. Les deux fondent l'universalité morale différemment : par la loi rationnelle (Kant) ou par la nature commune (Smith)." },
    ]
  },
];
