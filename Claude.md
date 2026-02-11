J'ai reçu cette proposition de mission pour un site vitrine avec cms headless. J'avais imaginé au départ partir sur Next.js - Sanity sur Vercel mais au vu du souhait du client de réduire la facture, j'ai proposé comme solution Astro - Sanity sur Cloudflare Pages. Le travail est presque aussi dur mais passer à Astro permet de fournir une solution alternative sans se renier en vendant moins cher. Tu trouveras ci-dessous le brief initial puis mon devis estimé. Une version POC est déjà en ligne sur Cloudflare Pages avec mode preview activé sur le studio Sanity. Voici donc le brief d'abord puis le devis envoyé, sachant que le tout doit être adapté à Astro. Pour le multilingue, je crois qu'Astro a déjà une fonctionnalité native, à voir si cela peut être utilisé plutôt qu'un middleware custom.   

D'abord le brief initial : 1. Architecture générale du projet
Site vitrine d’environ 50 pages de contenu
15 templates de pages distincts à intégrer côté front
Architecture :
Frontend : Next.js
Backend : CMS headless (à préciser : Payload, Directus, Sanity, etc.)
Objectif :
→ Site hautement performant,
→ Ultra optimisé SEO,
→ Back-office 100% administrable par le client (texte, images, structure)

2. Intégration frontend (Next.js)
Chiffrage attendu pour :
Mise en place projet Next.js propre (architecture, routing, env, config)
Intégration HTML/CSS des 15 templates à partir de la maquette fournie
Responsive desktop / tablette / mobile sur tous les templates
Composants réutilisables :
Header / Footer
Blocs éditoriaux
Hero
Grilles

Projet site vitrine 1 1

Sliders éventuels
CTA
Formulaires
Etc.
Gestion des états (hover, focus, animations légères si prévues dans la
maquette)
Gestion du routing dynamique pour les pages CMS

3. Mise en place du CMS headless
Back-office sur mesure, orienté client final non technique :
Modélisation des contenus
Création des collections :
Pages
Modèles de pages (templates)
Sections dynamiques
Médias (images)
SEO
Langues
Champs à prévoir :
Textes simples
Rich text
Images
Galerie
Liens internes / externes
CTA
Répétiteurs (blocs duplicables)
Champs conditionnels selon le template

Projet site vitrine 1 2

Objectif :
Le client doit pouvoir :
Modifier tous les textes
Remplacer toutes les images
Ajouter/supprimer des blocs de contenu
Créer de nouvelles pages sans intervention technique
Gérer la version EN facilement

4. Connexion CMS ↔ Next.js
Connexion API entre CMS et front
Gestion du fetching des données
Pages dynamiques (SSG / ISR selon stratégie)
Gestion des erreurs (page vide, contenu manquant)
Prévisualisation des contenus si possible (preview mode)
Gestion des slugs dynamiques
Gestion propre des routes multilingues

5. Multilingue (FR / EN)
Structure multilingue :
URLs propres (ex : /fr/... et /en/... ou domaine/en)
Champs traduisibles dans le CMS
Gestion des traductions dans le back-office
SEO multilingue :
Balises hreflang
Canonical par langue
Sélecteur de langue fonctionnel côté front
Le développeur doit chiffrer :

Projet site vitrine 1 3

Mise en place technique
Gestion CMS
Routing spécifique

6. SEO technique avancé
Le site doit être parfaitement optimisé SEO.
À chiffrer :
Rendu :
SSG ou ISR optimisé
Excellents scores Lighthouse
Performances :
Optimisation images (next/image)
Lazy loading
Code splitting
Optimisation bundle
SEO technique :
Balises meta dynamiques (title, description, OG)
Données structurées (Schema.org si nécessaire)
Sitemap.xml dynamique
Robots.txt propre
URLs propres
Gestion canonical
Pagination SEO si nécessaire
Accessibilité :
Balises ARIA
Structure Hn cohérente
Core Web Vitals :
LCP / CLS / INP optimisés

Projet site vitrine 1 4

7. Formulaires
S’il y a des formulaires :
Formulaire(s) de contact
Validation des champs
Protection anti-spam (honeypot ou reCAPTCHA)
Envoi email ou webhook (Make, Zapier, API...)

8. Environnement & livraison
À inclure dans le chiffrage :
Mise en place environnements :
Dev
Préprod
Prod
Configuration hébergement :
Front (Vercel, autre ?)
CMS (serveur, cloud, etc.)
Variables d’environnement
Build & déploiement
Documentation minimale pour reprise
Livraison propre du repo

9. Maintenance & évolutivité
Tu peux aussi lui demander une estimation pour :
Temps de maintenance technique mensuelle
Facilité d’évolution :
Ajout de nouveaux templates
Ajout de nouvelles langues

Projet site vitrine 1 5

Scalabilité

Voici maintenant mon devis, à adapter pour une version Astro sur Cloudflare Pages: 

1. Architecture générale
● Choix techniques : Next.js 15 (App Router) pour la performance. Architecture "Modular
Page Builder" sur Sanity (le client assemble ses pages avec des blocs pré-définis).
● Stratégie de rendu : SSG avec revalidation on-demand (ISR). Le site est statique (ultra
rapide) et se met à jour automatiquement sous 2-3 secondes dès qu'un contenu est
modifié dans Sanity, sans redéploiement.
● Temps estimé : Inclus dans le setup (Point 8).
2. Intégration Frontend (Next.js)
● Méthodologie : Utilisation de Tailwind CSS.
● Livrables : 15 templates basés sur des composants réutilisables. Responsive total.
● Temps estimé : 6 à 8 jours
3. Mise en place du CMS Headless (Sanity)
● Approche : Configuration du Sanity Studio. Modélisation de "Types" (Pages, Blog...) et
de "Slices" (sections de contenu).
● Champs : Rich text (Portable Text), images avec hotspot (recadrage intelligent).
● Temps estimé : 2 jours
4. Connexion CMS - Next.js
● Technique : Utilisation de next-sanity pour les requêtes (GROQ). Mise en place du
Preview Mode (pour que le client voie ses modifications en brouillon avant de publier).
● Performance : Optimisation du fetching pour éviter les cascades de requêtes.
● Temps estimé : 2 jours
5. Multilingue (FR / EN)
● Stratégie CMS : "Field-level translation" (les champs FR et EN sont côte à côte dans
Sanity pour faciliter la saisie).
● Stratégie Front : Middleware Next.js custom pour routing automatique avec URLs
propres (/fr/page et /en/page). Détection automatique de la langue du navigateur.
● Temps estimé : 1,5 jour

6. SEO Technique Avancé
● Mise en œuvre : Utilisation de la fonction generateMetadata de Next.js.
● Détails : Balises meta dynamiques (titre, desc, OG) gérées dans Sanity. Sitemap.xml et
robots.txt générés automatiquement. Optimisation des images pour des scores
Lighthouse > 90
● Temps estimé : 1 jour
7. Formulaires (via Tally)
● Choix technique : Tally.so. Pas de développement de backend complexe.
● Intégration : Embed propre dans une page ou une modale. Gestion du design via
l'interface Tally.
● Temps estimé : 0,5 jour
8. Environnement & Livraison
● Hébergement : Vercel (Gratuit ou 20 euros/mois pour licence pro) pour le front, Sanity
Cloud (Tier gratuit généralement suffisant, prévoir 15 euros par mois) pour le CMS.
● Workflow : Setup de 3 environnements (Local, Preview, Production). Documentation
succincte de la structure du code pour tes équipes internes.
● Temps estimé : 1 jour
9. Maintenance & Évolutivité
● Évolutivité : Grâce au système de "blocs" (Page Builder), le client peut créer ses pages
seul si les blocs existent déjà.
● Maintenance préconisée : 0,5 jour / mois pour les mises à jour de sécurité des
dépendances (Node modules).

NON INCLUS DANS LE FORFAIT :
Contenu :
□ Remplissage des 50 pages de contenu
→ À la charge de l'agence/client
□ Rédaction et optimisation SEO des textes
□ Fourniture et optimisation des images/vidéos
□ Traduction FR/EN des contenus