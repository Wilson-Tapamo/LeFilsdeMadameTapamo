import { Project, TimelineEvent, PassionCard, BlogPost, ServiceItem, ProcessPhase } from './types';

export const projectsData: Project[] = [
  {
    id: 'crce-portal',
    title: 'CRCE Portal',
    subtitle: 'Géoportail de la Région du Centre du Cameroun',
    description: 'Une plateforme cartographique d\'analyse géospatiale et cadastrale haute performance.',
    fullDescription: 'Le portail géomatique officiel du Conseil Régional du Centre du Cameroun, développé en étroite collaboration avec Digital Solution. Ce géoportail de pointe rassemble, manipule et visualise des couches cartographiques complexes pour guider les décisions d\'aménagement du territoire, de gestion cadastrale et d\'infrastructures routières régionales.',
    category: 'SaaS / SIG',
    type: 'featured',
    technologies: ['React', 'TypeScript', 'Leaflet / OpenLayers', 'PostgreSQL / PostGIS', 'Node.js', 'Express', 'TailwindCSS'],
    demoUrl: 'https://crceportal.region-centre-cmr.com/',
    role: 'Lead Full-Stack WebGL Developer',
    metrics: ['99.9% de précision géographique', 'Rendu de 15,000+ polygones interactifs à 60 FPS', 'Utilisé par les cabinets régionaux d\'urbanisme']
  },
  {
    id: 'bb-design',
    title: 'BB Design',
    subtitle: 'Architecture intérieure Premium',
    description: 'Portfolio et configurateur haut de gamme d\'agencements d\'intérieur (Yaoundé / Distanciel).',
    fullDescription: 'Une collaboration internationale d\'envergure avec le studio BB Design (clients français, travail depuis Yaoundé). Projet de développement d\'un showroom et catalogue digital de haute couture d\'intérieur. Le site allie design épuré sous forme de transition fluide, gestion fine des galeries de réalisations ultra-haute définition, et mise en valeur de l\'esthétique minimaliste.',
    category: 'E-commerce / Showcase',
    type: 'featured',
    technologies: ['Vite', 'React', 'Framer Motion', 'TailwindCSS 4', 'Three.js / WebGL', 'Headless CMS'],
    demoUrl: 'https://bb-design.fr/',
    role: 'UI/UX Developer & Interactive Lead',
    metrics: ['Transitions d\'animation fluides à 120Hz', 'Indice SEO mobile de 100/100', 'Augmentation de 45% de l\'engagement client']
  },
  {
    id: 'nkap',
    title: 'Nkap',
    subtitle: 'Gestion commerciale + IA WhatsApp',
    description: 'Application d\'administration commerciale augmentée par agent conversationnel d\'IA.',
    fullDescription: 'Plateforme SaaS révolutionnaire d\'administration commerciale et de suivi de trésorerie autonome, intégrée directement avec WhatsApp Business API. Nkap permet aux commerçants et PME de dicter leurs écritures comptables, facturations et notes de ventes par simple message vocal ou texte à un assistant IA, qui synchronise ensuite la comptabilité.',
    category: 'Fintech / IA',
    type: 'featured',
    technologies: ['React', 'Node.js', 'Google GenAI SDK (Gemini)', 'WhatsApp API', 'Firebase / Firestore', 'TailwindCSS'],
    demoUrl: 'https://nkap-eight.vercel.app/',
    role: 'Co-fondateur & Solution Architect',
    metrics: ['80% de réduction du temps de saisie comptable', 'Moteur de parsing IA avec 97% de réussite', 'Intégration bancaire en temps réel']
  },
  {
    id: 'di-ce-management',
    title: 'DI-CE Management',
    subtitle: 'Console collaborative agile',
    description: 'Logiciel tout-en-un de pilotage de projets et gestion d\'équipes pluridisciplinaires.',
    fullDescription: 'Une solution d\'entreprise conçue pour rationaliser les flux de travail complexes. DI-CE rassemble la planification Gantt par glisser-déposer, les canaux de communication temps réel, et des rapports d\'analyse automatiques calculant la vélocité et l\'indice d\'efficacité des sprints.',
    category: 'Productivité',
    type: 'featured',
    technologies: ['Vite', 'React', 'TailwindCSS', 'DnD-Kit', 'Socket.io', 'Chart.js', 'Express'],
    demoUrl: 'https://di-ce-management.vercel.app/',
    role: 'Lead Architect',
    metrics: ['SLA de messagerie temps réel < 50ms', 'Tableau de bord interactif modulaire', 'Adopté par 12 équipes de développement de premier plan']
  },
  {
    id: 'vacci-rappel',
    title: 'Vacci-Rappel',
    subtitle: 'Suivi vaccinal national & IA Santé',
    description: 'Outil intelligent de planification de rappels vaccinaux alimenté par l\'IA médicale.',
    fullDescription: 'Projet à fort impact social. Vacci-Rappel automatise et personnalise le calendrier vaccinal des familles. L\'assistant IA analyse les carnets physiques numérisés par OCR pour en déduire les vaccins manquants et planifie des séquences d\'alertes multicanaux (SMS, email, WhatsApp).',
    category: 'Medtech / IA',
    type: 'featured',
    technologies: ['React', 'Gemini Multi-modal OCR API', 'TailwindCSS', 'Firebase Auth', 'Twilio / SMS Scheduling'],
    demoUrl: 'http://vacci-rappel.vercel.app/',
    role: 'Lead Medtech Developer',
    metrics: ['Lecture OCR de carnets manuscrits en 3 sec', 'Plus de 5,000 alertes programmées automatiquement', 'Sécurisation totale HDS des données de santé']
  },
  {
    id: 'coin-power',
    title: 'Coin Power',
    subtitle: 'Divertissement Crypto Web3',
    description: 'Jeu de hasard cryptographique décentralisé et ludique.',
    fullDescription: 'Un mini-jeu engageant exploitant les mécaniques d\'incitation et d\'apprentissage de la blockchain.',
    category: 'Web3 / Divertissement',
    type: 'other',
    technologies: ['Vite', 'React', 'Ethers.js', 'Framer Motion', 'TailwindCSS'],
    demoUrl: 'https://coin-power.vercel.app/'
  },
  {
    id: 'do-it-now',
    title: 'Do It Now',
    subtitle: 'Productivité & Motivation',
    description: 'Micro-application d\'ancrage d\'objectifs quotidiens avec système de récompenses visuelles.',
    fullDescription: 'Idéal pour chasser la procrastination avec des sprints de concentration de style Pomodoro mêlés d\'effets visuels gamifiés.',
    category: 'Productivité / Gamification',
    type: 'other',
    technologies: ['React', 'Framer Motion', 'Canvas Confetti', 'TailwindCSS', 'Localforage'],
    demoUrl: 'https://do-it-now-kappa.vercel.app/'
  },
  {
    id: 'cfaz-gold',
    title: 'CFAZ Gold',
    subtitle: 'Système ERP pour Centre Sportif',
    description: 'Plateforme d\'administration totale pour clubs et complexes multisports.',
    fullDescription: 'Permet la réservation intelligente de terrains, le suivi des cotisations, les abonnements récurrents et le contrôle d\'accès par QR code.',
    category: 'Logiciel métier / SaaS',
    type: 'other',
    technologies: ['React', 'Express', 'SQL', 'QR-Code Engine', 'TailwindCSS'],
    demoUrl: 'https://cfaz-gold.vercel.app/'
  },
  {
    id: 'constellation-scribe',
    title: 'Constellation Scribe',
    subtitle: 'Magazine digital interactif',
    description: 'Lecteur de presse numérique luxueux offrant une expérience de feuilletage immersive.',
    fullDescription: 'Une plateforme de blogging et de d\'édition haut de gamme mettant l\'accent sur la typographie éditoriale et la fluidité de lecture.',
    category: 'Showcase / Médias',
    type: 'other',
    technologies: ['React', 'D3.js', 'Framer Motion', 'TailwindCSS', 'Markdown Reader'],
    demoUrl: 'http://constellation-scribe.vercel.app/'
  },
  {
    id: 'ohg-manage',
    title: 'OHG Manage',
    subtitle: 'Planning et Suivi de Chantiers',
    description: 'Solution métier pour entreprises générales de construction et coordinateurs techniques.',
    fullDescription: 'Visualisation de plans d\'architecture, gestion de la rotation des équipes et rapports de livraison de chantiers.',
    category: 'Logiciel métier / ERP',
    type: 'other',
    technologies: ['React', 'Node.js', 'BIM Light Viewer', 'PostgreSQL', 'TailwindCSS'],
    demoUrl: 'https://ohg-manage.vercel.app/'
  },
  {
    id: 'sublike',
    title: 'SubLike',
    subtitle: 'Console Marketing de Réseaux Sociaux',
    description: 'Outil de gestion de campagnes marketing et coordination de micro-influenceurs.',
    fullDescription: 'Fournit des graphiques détaillés d\'audience, des analyses de sentiment assistées par IA et la planification des publications.',
    category: 'Adtech / Marketing',
    type: 'other',
    technologies: ['React', 'Framer Motion', 'Recharts', 'TailwindCSS', 'Instagram / TikTok API'],
    demoUrl: 'http://sublike.vercel.app/'
  },
  {
    id: 'hexapass',
    title: 'HexaPass',
    subtitle: 'Gestion globale d\'abonnements',
    description: 'Portefeuille numérique pour centraliser, optimiser et partager les abonnements familiaux ou d\'entreprise.',
    fullDescription: 'Calcule le coût d\'usage mensuel réel, alerte avant les renouvellements automatiques et propose des optimisations tarifaires intelligentes.',
    category: 'Fintech / Utitaire',
    type: 'other',
    technologies: ['Vite', 'React', 'Localforage', 'TailwindCSS', 'SimpleWebAuthn'],
    demoUrl: 'https://hexapass.vercel.app/'
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2012',
    title: 'Stage chez Kirio Game',
    subtitle: 'Yaoundé & Distanciel - Découverte de la programmation',
    description: 'Immersion précoce dans le développement de scripts de moteurs de jeu avant même l\'obtention du BEPC. Cette expérience a scellé mon obsession pour la manipulation des coordonnées cartésiennes, la physique 2D et le code de bas niveau.',
    details: ['Développement de comportements IA rigides en C#', 'Optimisation d\'atlas de sprites de pixels', 'Introduction aux lois de la trigo appliquées au mouvement informatique']
  },
  {
    year: '2016',
    title: 'Premier Contrat Freelance',
    subtitle: 'Conception d\'un noyau d\'administration comptable',
    description: 'Construction intégrale et sur-mesure d\'une application réseau d\'administration comptable fermée pour une entreprise locale. Conduite complète du projet de la modélisation à la livraison physique finale.',
    details: ['Architecture de base de données relationnelle sécurisée', 'Mise en place d\'un tableau de bord de calcul de marge brute analytique', 'Assurance d\'une réconciliation des écritures sans erreur']
  },
  {
    year: '2018 — 2024',
    title: 'Freelance Longue Durée',
    subtitle: 'Optimum Juridis Finance',
    description: 'Période d\'excellence de 6 ans au cours de laquelle j\'ai planifié, mis à niveau et maintenu des écosystèmes ERP de gestion de contrats juridico-financiers. Transition de plusieurs architectures historiques de serveurs lourds vers le cloud.',
    details: ['Automatisation complète de la génération de contrats financiers dynamiques', 'Migration vers des applications web réactives réduisant la latence globale', 'Chiffrement avancé des bases de données clients sensibles']
  },
  {
    year: '2024',
    title: 'Premier CDI d\'Ingénierie',
    subtitle: 'ULIF - Concepteur d\'applications de pointe',
    description: 'Intégration d\'une équipe de R&D prestigieuse et d\'échelons nationaux pour créer des solutions d\'analyse temps réel et d\'administration distribuée à l\'échelle industrielle.',
    details: ['Développement de micro-frontends modulaires et scalables', 'Réduction du bundle JavaScript client initial de 45%', 'Standardisation de tests d\'intégration ultra-rapides']
  },
  {
    year: '2025',
    title: 'Création du Géoportail Régional',
    subtitle: 'Digital Solution - Cameroun (Distanciel)',
    description: 'Collaboration technique majeure de déploiement à grande échelle pour concevoir le Géoportail du Conseil Régional du Centre du Cameroun. Redéfinition du traitement géomatique en temps réel.',
    details: ['Intégration de pipelines de dalles vectorielles cartographiques', 'Modélisation et requêtage spatial ultra-performant via PostgreSQL/PostGIS', 'Mise au point d\'outils d\'analyse urbaine en 2D/3D']
  },
  {
    year: '2025',
    title: 'Collaboration Internationale Mobile',
    subtitle: 'Neatik - Solution Mobile Structurelle',
    description: 'Architecture et développement d\'une application mobile moderne et performante de coordination de services de ménage professionnels pour le marché français.',
    details: ['Gestion des flux de géolocalisation algorithmique des agents', 'Système de messagerie instantanée hors-ligne résilient', 'Interface utilisateur d\'une réactivité tactile absolue']
  },
  {
    year: '2025',
    title: 'Collaboration Internationale Premium',
    subtitle: 'BB Design - Yaoundé (Distanciel) • Décembre 2025',
    description: 'Une collaboration prestigieuse et immersive pour concevoir le standard du showroom d\'architecture d\'intérieur haut de gamme. Intégration de techniques visuelles de pointe et d\'animations d\'orfèvrerie pour un rendu mémorable.',
    details: ['Showroom 3D interactif et configurateur d\'ambiances', 'Optimisation fluide du rendu d\'images 4K au défilement', 'Animations millimétrées valorisant le luxe minimaliste']
  }
];

export const passionsData: PassionCard[] = [
  {
    id: 'math',
    title: 'Mathématiques',
    quote: '"Parce que les bugs aiment les équations."',
    details: 'Je conçois les algorithmes comme des poèmes mathématiques. De la géométrie vectorielle indispensable aux rendus graphiques interactifs jusqu\'aux courbes de Bézier régissant mes micro-animations, les mathématiques pures sont le filtre par lequel je résous tous les goulots d\'étranglement techniques.',
    symbol: '∫ ∑ φ (x)'
  },
  {
    id: 'physics',
    title: 'Physique',
    quote: '"Comprendre l\'univers est plus simple que comprendre certains cahiers des charges."',
    details: 'Mon amour de la physique classique se traduit directement dans mon travail sur les interfaces utilisateurs: calculs de forces de gravité, simulation de masse élastique pour les transitions d\'écran, et dynamique de collision de particules dans mes décors de navigation.',
    symbol: 'F = m·a'
  },
  {
    id: 'quantum',
    title: 'Physique Quantique',
    quote: '"Probablement en train d\'exister dans plusieurs branches Git simultanément."',
    details: 'Des principes de superposition aux équilibres de probabilités, la mécanique quantique me fascine. C\'est une source inépuisable d\'inspiration pour concevoir des algorithmes prédictifs intelligents et des modèles d\'états complexes en asynchronisme.',
    symbol: 'ψ(r, t)'
  },
  {
    id: 'gaming',
    title: 'Jeux vidéo',
    quote: '"Mon premier laboratoire de programmation."',
    details: 'Du reverse engineering de mes premiers jeux d\'enfance jusqu\'à l\'étude des optimisations d\'affichage de shaders de rendu récents, la scène gaming est pour moi la quintessence de l\'alliance entre virtuosité d\'ingénierie et design artistique immersif.',
    symbol: '🎮 🕹️ 👾'
  },
  {
    id: 'anime',
    title: 'Animés',
    quote: '"Certains personnages ont influencé ma façon de résoudre les problèmes."',
    details: 'La discipline rigoureuse des protagonistes d\'animés, leur esprit d\'analyse face au danger et leur focus inébranlable résonnent avec ma démarche de développeur. Résoudre un bug critique se fait souvent à coups de "shonen energy" et de concentration ultime.',
    symbol: '⚡ 🔮 🧬'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'saas',
    title: 'Applications SaaS',
    description: 'Des plateformes logicielles performantes, robustes et hautement scalables conçues pour automatiser vos opérations.',
    icon: 'Layers',
    features: ['Architecture multi-tenant sécurisée', 'Gestion fluide de flux monétiques (Stripe, Paypal)', 'Tableaux de bord d\'analytique visuelle complexe']
  },
  {
    id: 'erp',
    title: 'Logiciels Métiers & ERP',
    description: 'Des applications d\'administration commerciale, comptable, et de chantiers adaptées à la réalité de votre terrain.',
    icon: 'Briefcase',
    features: ['Automatisation réglementaire de comptabilité', 'Planification Gantt interactive', 'Centralisation multi-services']
  },
  {
    id: 'ia',
    title: 'Solutions IA sur-mesure',
    description: 'Intégration d\'agents conversationnels, de moteurs OCR, et d\'analyses de données prédictives.',
    icon: 'Cpu',
    features: ['Automatisation WhatsApp et SMS avec Gemini', 'Parsing de documents manuscrits par vision', 'Recommandations prédictives basées sur l\'historique']
  },
  {
    id: 'interact',
    title: 'Expériences Interactives Web',
    description: 'Des vitrines et configurateurs de luxe basés sur des animations de niveau Awwwards et du rendu graphique 2D/3D.',
    icon: 'Sparkles',
    features: ['Animations d\'orfèvrerie fluide à 60/120 FPS', 'Configurateur d\'ambiance réactif', 'Visualisation de données spatialisées (SIG)']
  }
];

export const processPhases: ProcessPhase[] = [
  {
    phase: '01',
    title: 'Analyse & Immersion',
    description: 'Plonger en profondeur dans la logique de votre domaine pour isoler les défis uniques et clarifier le cahier des charges.',
    duration: '1 - 2 semaines',
    details: ['Entretiens d\'immersion métier', 'Analyse comparative technologique', 'Rédaction des cas d\'utilisation ultra-précis']
  },
  {
    phase: '02',
    title: 'Architecture & Modélisation',
    description: 'Définir des modèles de données inébranlables et structurer des pipelines d\'asynchronisme de pointe.',
    duration: '1 semaine',
    details: ['Architecture de base de données relationnelle sécurisée', 'Conception des flux d\'API sécurisés', 'Sélection rigoureuse des technologies adaptées']
  },
  {
    phase: '03',
    title: 'Design d\'Interaction',
    description: 'Concevoir des maquettes interactives de haute performance où les temps de réponse de l\'UX sont analysés au millième.',
    duration: '1 - 2 semaines',
    details: ['Figma flows haut de gamme', 'Planification des micro-interactions', 'Vérification métrique de l\'accessibilité pour tous']
  },
  {
    phase: '04',
    title: 'Développement d\'Excellence',
    description: 'Casser le code en briques modulaires avec une propreté de classe senior. Des revues de code minutieuses mènent à une perfection millimétrée.',
    duration: 'En continu',
    details: ['Composants réutilisables typés de manière stricte', 'Intégration fluide de Framer Motion / animations complexes', 'Rendu optimisé et absence totale de re-renders infructueux']
  },
  {
    phase: '05',
    title: 'Livraison & Optimisations',
    description: 'Déploiement automatisé avec audits complets de performance, de sécurité et d\'intégration.',
    duration: '1 semaine',
    details: ['Audit de performance final 100% Green Lighthouse', 'Tests de pénétration des points d\'accès sensibles', 'Mise en production sans aucune interruption de service']
  },
  {
    phase: '06',
    title: 'Évolution continue',
    description: 'Une application vit. Je supervise son comportement en conditions réelles et l\'implémentation d\'équilibres incrémentaux d\'IA.',
    duration: 'À la demande',
    details: ['Analyse statistique du comportement utilisateur', 'Maintenance adaptative face aux nouvelles versions de navigateurs', 'Mise à jour et injection de briques intelligentes tierces']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'precision-render-canvas',
    title: 'Atteindre le 120 FPS : Simulation et rendu physique de particules sur Canvas HTML5',
    subtitle: 'Comment maîtriser la géométrie vectorielle et les forces de friction pour des interfaces dynamiques fluides.',
    date: '10 Juin 2026',
    category: 'Développement',
    readTime: '6 min',
    content: `Le rendu de milliers de particules interactives à l'écran ne nécessite pas toujours d'introduire des mastodontes comme WebGL ou Three.js, particulièrement avec les contraintes d'asynchronisme de frameworks modernes. En utilisant un \`canvas\` 2D classique optimisé, on peut exploiter la puissance native du processeur graphique du client.

### 16.6ms : Le Temps Universel de la Fluidité

Pour afficher un rendu lisse à 60 FPS, le navigateur dispose d'exactement 16.6 millisecondes entre deux frames pour calculer les positions physiques de chaque atome de notre scène et redessiner l'intégralité du plateau. À 120Hz, cette fenêtre rétrécit à 8.3ms. Autant dire que le moindre re-render en dehors de la boucle de rendu est immédiat de saccades.

Dans le portfolio de Wilson, la constellation de particules s'appuie sur une structure d'octree simplifiée et une distribution de forces vectorielles :
- **Gravité inversée** : La souris exerce un champ de répulsion inversement proportionnel au carré de la distance.
- **Formule :** F = G * (m1 * m2) / d²
- **Friction fluide** : Un ralentissement proportionnel à la vitesse évite toute oscillation chaotique, assurant un retour élégant au calme.

\`\`\`typescript
const dx = particle.x - mouse.x;
const dy = particle.y - mouse.y;
const distance = Math.hypot(dx, dy);

if (distance < mouse.radius) {
  const force = (mouse.radius - distance) / mouse.radius;
  particle.vx += (dx / distance) * force * 0.8;
  particle.vy += (dy / distance) * force * 0.8;
}

// Application de la traînée (friction)
particle.vx *= 0.95;
particle.vy *= 0.95;
particle.x += particle.vx;
particle.y += particle.vy;
\`\`\`

Cette discrète physique donne aux objets interactifs une sensation organique de poids et d'élasticité, changeant instantanément l'appréciation du visiteur sur le niveau de maîtrise de l'ingénieur derrière le site.`,
    author: 'Wilson Tapamo'
  },
  {
    id: 'ai-agents-medtech',
    title: 'Architecturer un agent IA autonome : OCR et diagnostics avec Gemini API',
    subtitle: 'Retour d\'expérience technique sur la construction du pipeline sécurisé et multi-modal de Vacci-Rappel.',
    date: '04 Mai 2026',
    category: 'IA',
    readTime: '8 min',
    content: `Lors du développement de **Vacci-Rappel**, le principal défi résidait dans l'acquisition de données structurées. Demander à un utilisateur de saisir manuellement des dizaines de dates de vaccins depuis un vieux carnet de santé cartonné est le moyen le plus direct d'induire un fort taux d'abandon.

La solution : permettre de prendre une simple photo du carnet de santé, et laisser l'IA faire la transcription.

### Le Pipeline OCR Multi-modal de Gemini

Avec l'avènement du SDK \`@google/genai\`, nous avons pu implémenter une interprétation d'image de grade médical en quelques lignes, sans passer par de coûteux modèles locaux.

Voici d'une manière simplifiée comment l'analyse et la structuration JSON robuste sont menées sur notre serveur intermédiaire :

\`\`\`typescript
// import { GoogleGenAI } from '@google/genai';

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function extraireVaccins(imageBuffer: Buffer) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
      {
        inlineData: {
          data: imageBuffer.toString('base64'),
          mimeType: 'image/jpeg'
        }
      },
      "Analyse ce carnet de vaccination. Extrais tous les vaccins reçus avec leur date exacte sous forme de tableau JSON structuré : [{ 'vaccin': string, 'date': 'YYYY-MM-DD' }]."
    ],
    config: {
      responseMimeType: "application/json"
    }
  });

  return JSON.parse(response.text);
}
\`\`\`

### Pourquoi le JSON strict change tout

L'une des plus belles avancées du SDK d'IA réside dans le paramètre \`responseMimeType: "application/json"\`. Elle contraint le réseau de neurones à rejeter tout bavardage non sollicité ("Voici les résultats...") pour ne retourner **que** le tableau structuré. Notre parseur peut consommer la donnée directement, calculer le calendrier vaccinal optimal et programmer des alertes automatiques via l'API Twilio de manière totalement transparente.`,
    author: 'Wilson Tapamo'
  },
  {
    id: 'reconciliation-juridique-saas',
    title: '6 ans de gestion d\'un ERP Juridique : Mythes et Réalités du Refactoring de Code Legacy',
    subtitle: 'Comment moderniser les systèmes de gestion d\'Optimum Juridis Finance sans aucune interruption de service.',
    date: '18 Mars 2026',
    category: 'Architecture Logicielle',
    readTime: '10 min',
    content: `Maintenir un système comptable et juridique pendant plus de 6 ans apprend l'humilité. Le "code jetable" s'avère souvent être celui sur lequel repose la pérennité financière de l'entreprise.

### La méthode du "Strangler Pattern" pour migrer sans douleur

La pire erreur d'un junior est de vouloir "tout réécrire depuis zéro". Dans un univers où des milliers d'écritures comptables s'effectuent par minute, la réécriture d'un seul coup est synonyme de catastrophe.

Pour moderniser Optimum Juridis Finance, nous avons employé le **Strangler Application Pattern** :

1.  **Intercepter les requêtes** : Placer une passerelle API ou un proxy d'asynchronisme devant l'installation héritée.
2.  **Implémenter la nouvelle fonctionnalité** : Construire les nouveaux micro-services (modélisés en React/Vite moderne) en parallèle.
3.  **Routage progressif** : Rediriger 5% du trafic des appels, puis 20%, puis 100% une fois que la tolérance aux pannes est éprouvée.

Cette minutie garantit que l'activité commerciale ne s'interrompt jamais et prouve que la rigueur de l'architecture d'ingénierie prévaut sur l'excitation esthétique du code frais.`,
    author: 'Wilson Tapamo'
  },
  {
    id: 'developpeur-cameroun-afrique',
    title: 'Développeur au Cameroun : Mon Parcours, Mes Réalisations et l\'Avenir du Numérique en Afrique',
    subtitle: 'Comment j\'ai bâti une carrière d\'ingénieur logiciel senior depuis Yaoundé, Cameroun — au service de clients locaux et internationaux.',
    date: '08 Juin 2026',
    category: 'Entrepreneuriat',
    readTime: '7 min',
    content: `Le Cameroun est souvent perçu comme un marché émergent pour la tech. Pourtant, j'ai construit depuis Yaoundé une carrière de 9 ans dans le développement de logiciels, collaborant avec des clients en Afrique, en France et bien au-delà. Cet article est un témoignage direct de ce que signifie être développeur au Cameroun aujourd'hui.

### Pourquoi je suis resté au Cameroun

Beaucoup de talents tech africains émigrent. Mon choix de rester à Yaoundé repose sur une conviction : le numérique africain a besoin de ses ingénieurs sur place pour construire les infrastructures de demain. Travailler en distanciel avec des entreprises internationales tout en étant basé au Cameroun est non seulement possible, mais c'est un avantage concurrentiel.

### Un développeur camerounais face au marché mondial

Les technologies ne connaissent pas de frontières. En 9 ans, j'ai livré :
- Des **plateformes SaaS** pour des conseils régionaux camerounais (CRCE Portal)
- Des **solutions fintech** avec Nkap (intégration WhatsApp + IA)
- Des **applications médicales** comme Vacci-Rappel pour le suivi vaccinal
- Des **showrooms interactifs** pour des clients internationaux

Tout cela depuis mon bureau à Yaoundé, avec une connexion stable et les mêmes outils que n'importe quel développeur dans la Silicon Valley.

### L'écosystème tech au Cameroun

L'écosystème des développeurs au Cameroun est en pleine effervescence. Des communautés comme **CamerounJS**, **GDG Yaoundé** ou **AI Cameroon** portent une nouvelle génération de talents. Mon conseil aux jeunes développeurs camerounais : maîtrisez l'anglais technique, spécialisez-vous dans un créneau (SaaS, IA, fintech), et construisez un portfolio solide. Le marché vous trouvera.`,
    author: 'Wilson Tapamo'
  },
  {
    id: 'developpeur-yaounde',
    title: 'Développeur à Yaoundé : Guide Complet pour Trouver un Freelance ou un Prestataire Tech au Cameroun',
    subtitle: 'Vous cherchez un développeur web basé à Yaoundé ? Découvrez pourquoi embaucher localement est un atout stratégique pour vos projets digitaux.',
    date: '02 Juin 2026',
    category: 'Entrepreneuriat',
    readTime: '6 min',
    content: `Yaoundé, la capitale politique du Cameroun, abrite une communauté croissante de développeurs talentueux. Si vous cherchez à recruter un développeur à Yaoundé pour votre projet web, mobile ou SaaS, voici ce que vous devez savoir.

### Pourquoi embaucher un développeur à Yaoundé ?

1. **Fuseau horaire avantageux** : UTC+1 — une synergie parfaite avec l'Europe et l'Afrique de l'Ouest.
2. **Coût compétitif** : Des tarifs bien plus accessibles qu'en Europe ou en Amérique du Nord, pour une qualité équivalente.
3. **Bilinguisme** : La plupart des développeurs à Yaoundé parlent français et anglais, un atout pour les marchés internationaux.
4. **Expertise technique** : React, TypeScript, Node.js, Python, IA — les compétences sont là.

### Les profils tech disponibles à Yaoundé

| Profil | Compétences clés | Secteur |
|--------|-----------------|---------|
| Développeur Full-Stack | React, Node.js, PostgreSQL | SaaS, ERP |
| Développeur Mobile | React Native, Flutter | Fintech, Santé |
| Ingénieur IA/ML | Python, TensorFlow, Gemini API | Medtech, Analyse |
| DevOps | Docker, CI/CD, Cloud | Infrastructure |

En tant que développeur basé à Yaoundé depuis 9 ans, j'ai vu cette scène évoluer rapidement. Le Cameroun devient un véritable hub tech africain, et Yaoundé en est un pilier central.`,
    author: 'Wilson Tapamo'
  },
  {
    id: 'afrique-dev-saas',
    title: 'Développement Web en Afrique : Pourquoi les Entreprises Misent sur les Talents Tech du Continent',
    subtitle: 'L\'Afrique est le nouveau vivier mondial du développement logiciel. Analyse des tendances, opportunités et conseils pour embaucher un développeur africain.',
    date: '25 Mai 2026',
    category: 'Architecture Logicielle',
    readTime: '8 min',
    content: `Le marché du développement web en Afrique connaît une croissance explosive. Avec une population jeune, connectée et de plus en plus formée aux technologies modernes, le continent africain s'impose comme un acteur incontournable du numérique mondial.

### Pourquoi l'Afrique devient un hub tech mondial

Plusieurs facteurs expliquent cette ascension :
- **Démographie** : 60% de la population a moins de 25 ans, avec un appétit féroce pour la tech.
- **Mobile-first** : L'Afrique a contourné l'ère du desktop pour passer directement au mobile, créant des compétences uniques en développement mobile et PWA.
- **Écosystème startup** : Des licornes comme Flutterwave, Paystack ou Wave ont pavé la voie.
- **Travail à distance** : Le COVID a accéléré l'adoption du travail en distanciel, ouvrant le marché africain au monde.

### Les compétences les plus demandées chez les développeurs africains

1. **React & TypeScript** — Le standard du front-end moderne
2. **Node.js & Python** — Back-end et API
3. **Cloud (AWS, GCP, Azure)** — Infrastructure scalable
4. **IA & Machine Learning** — La nouvelle frontière
5. **Blockchain & Web3** — Adoption croissante en Afrique

Les développeurs africains — du Cameroun au Kenya, du Nigéria à l'Afrique du Sud — ne sont plus un secret bien gardé. Ils sont la colonne vertébrale de la transformation numérique du continent. Si vous cherchez un **développeur en Afrique**, vous cherchez au bon endroit.`,
    author: 'Wilson Tapamo'
  }
];
