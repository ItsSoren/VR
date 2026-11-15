# Installer, vérifier et publier

[Retour au guide](README.md) · [Architecture](architecture.md) · [Atelier](atelier.md)

## 1. Charger les sources sans abonnement

Tu peux utiliser Git, Node.js et un éditeur de texte avec le dépôt GitHub. Pars d'une nouvelle branche afin de garder la version publiée à portée de main.

```sh
git clone https://github.com/ItsSoren/VR.git
cd VR
git switch -c mon-premier-test
npm install
npm run build
npm test
```

Lance ces commandes depuis la racine du dépôt. Le script de compilation lit les noms de scripts indiqués dans `gorilla-lab/index.html`, `gorilla-lab/editor.html` et `gorilla-lab/model-editor.html`. Il assemble JavaScript et Three.js dans les bundles correspondants, puis copie les pages HTML et le plan vers la racine. Si tu choisis un nouveau nom versionné pour l'un des fichiers produits, mets d'abord le nom à jour dans son HTML source.

Pour jouer sur PC, démarre un serveur local depuis la même racine. Par exemple, avec Python 3 :

```sh
python -m http.server 8080
```

Ouvre `http://localhost:8080/` sur ce PC. Pour le casque, utilise un site HTTPS et un navigateur prenant en charge WebXR. L'adresse IP du PC en HTTP peut être utile pour voir la page, mais l'accès à la session immersive dépend du contexte sécurisé et du navigateur.

## 2. Vérification rapide après chaque changement

| Zone | Geste à reproduire | Ce que tu dois observer |
| --- | --- | --- |
| Démarrage | Recharge avec la console ouverte | Le menu s'affiche et la boucle avance sans erreur |
| Contrôles | Ferme le menu, marche, saute et tourne | Le clavier ou le tactile déplace le joueur comme prévu |
| Mains et sol | Pose, garde puis décolle chaque main | Une vibration légère à l'arrivée si l'option est active, aucun bourdonnement continu |
| Appui | Pousse le sol, la glace puis un rebord | Le sol accroche, la glace glisse et l'appui reste cohérent sur le rebord |
| Collision | Lance un petit objet vers un mur mince | Le mur arrête l'objet selon sa forme et la vitesse du lancer |
| Manipulation | Saisis, fige, recolore et supprime un objet | Le laser montre la cible et l'action affecte le bon objet |
| Pistolet | Maintiens le tir puis relâche face à un mur | Les traits partent droit, le mur arrête le tir et l'émission s'arrête au relâchement |
| Carte | Crée un terrain, sculpte, texture, sauvegarde et recharge | Relief, texture et collisions sont cohérents après import |
| Salon | Rejoins l'hôte depuis un second appareil sur la même carte | Les objets et leurs positions suivent l'état publié par l'hôte |
| Rendu | Compare nuance, ombres, focus et Post FX à deux configurations | Les interrupteurs restent sous ton contrôle, et le rapport affiche les paramètres retenus |

Sur casque, compare deux situations identiques. Passe trente secondes debout au même endroit, puis trente secondes avec plusieurs objets mobiles. Mesure les deux avec les mêmes paramètres. Fréquence cible, fréquence mesurée et temps de rendu désignent des choses différentes. À 90 Hz, le temps disponible entre deux images est d'environ **11,1 ms**.

Le bouton de rapport donne une trace du contexte courant. Garde aussi la version, le navigateur, le casque, le niveau de qualité, la carte et les commandes utilisées. Une simulation aide à trouver un bug de logique. La sensation du mouvement, du relief et des vibrations se valide en portant le casque.

## 3. Dépanner dans le bon ordre

**Artéfact visuel ou collision étrange.** Reproduis-le avec un seul objet, puis regarde si son maillage et son collider ont les mêmes dimensions. Si l'objet tenu traverse un mur que l'objet lancé respecte, cherche le chemin de mise à jour de la prise et son balayage dans `moveKinematic`.

**Appui qui colle ou se dérobe.** Teste le même geste sur une surface normale, puis sur la glace. Vérifie la normale, l'ancrage et le déplacement réel. Augmenter directement la puissance du saut peut masquer une collision qui bloque le corps en amont.

**Pointeur décalé.** Dessine temporairement une petite sphère sur le point visé. Vérifie l'origine du rayon, sa direction et la rotation de la manette. Vérifie aussi que l'objet touché ne reçoit pas sa transformation une deuxième fois.

**Sauvegarde qui disparaît.** Vérifie le site ouvert. Le brouillon est local au navigateur et à son origine. Exporte le JSON avant de changer de navigateur ou d'effacer les données du site.

**Salon vide ou divergent.** Essaie une carte intégrée dans un salon neuf. Vérifie ensuite code, build, rôle et carte. Réintroduis la collection d'atelier après un premier test simple. Les mises à jour ne remplacent pas un compte utilisateur ou un service de stockage de parties.

**FPS qui baissent.** Coupe un effet à la fois. Compare le nombre d'objets, les ombres, le nombre de lumières et le coût du rendu stéréo dans les mêmes conditions. Les problèmes de connexion et les problèmes de rendu se diagnostiquent séparément.

## 4. Questions pour te tester

1. Une roue a la bonne apparence, mais roule comme une boîte. Quel fichier regardes-tu en premier ?
2. Pourquoi vaut-il mieux écouter le début du contact plutôt que faire vibrer tant que la main touche le sol ?
3. Pourquoi un projectile très rapide peut-il traverser un mur si tu ne testes que sa position finale ?
4. Quand un joueur PC prend un objet dans un salon, qui tranche sur sa position ?
5. Comment rendre un cube visuellement animé tout en gardant une collision stable ?
6. Pourquoi le laser n'est-il pas obligé d'être géométriquement épais pour détecter un bouton ?
7. Quand est-il raisonnable de créer une particule à chaque image ?

<details>
<summary>Réponses</summary>

1. Regarde [lab-props.js](../lab-props.js) pour trouver la forme de collision de la roue, puis [physics.js](../physics.js) pour voir comment elle est interprétée.
2. Le début du contact correspond au petit choc. Garder la main posée prolonge l'appui sans créer de nouveau choc.
3. Entre deux images, la balle peut passer de l'avant à l'arrière du mur. Un rayon sur le segment parcouru trouve l'intersection.
4. L'hôte VR valide la demande puis publie l'état. Le PC affiche une réplique.
5. Anime les sommets ou les couleurs dans le matériau. Fais lire une géométrie stable au solveur.
6. Le rayon sert au test mathématique. L'épaisseur du trait est un choix visuel.
7. Quand l'émission a une durée limitée, un coût mesuré et un nombre maximal d'instances. L'émission à la seconde et les pools sont généralement plus faciles à contrôler.

</details>

## 5. Publier ton premier changement

1. Consulte `git status --short`. Vérifie que les sources, le HTML et le bundle attendu figurent dans le changement. Garde les dépendances installées et les fichiers temporaires hors du commit.
2. Fais un commit au nom simple, par exemple `Ajoute une balise manipulable`.
3. Pousse ta branche et ouvre une pull request depuis GitHub. Relis la différence et lance les vérifications ci-dessus sur la branche.
4. Après intégration à `main`, vérifie le déploiement Pages puis ouvre le jeu dans une nouvelle fenêtre. Teste aussi une fois sur casque pour éviter de comparer un changement VR uniquement depuis le PC.

### Vérifier un ralentissement sur téléphone

Compare deux essais dans la même zone, après quelques secondes de stabilisation et dans la même orientation. Reste à la même distance du miroir. Sur un écran mobile à forte densité, le niveau 2 rend désormais environ 27 % des pixels de l’ancien budget au même niveau. Cette mesure porte sur les dimensions du buffer. Elle ne prédit pas le nombre de FPS. Les ombres et les lumières suivent le niveau mobile, même en qualité manuelle.

### Essai sur un profil PC lent

Scène intégrée, caméra immobile, fenêtre 960 × 540, qualité manuelle. Chromium utilisait SwiftShader (rendu logiciel) et un ralentissement CPU ×4. Les nombres décrivent cette simulation, avec ses limites. Sur un PC équipé d’une carte graphique, la répartition CPU/GPU peut différer.

| Qualité | Buffer interne | Images mesurées | Médiane | 95e percentile |
| --- | ---: | ---: | ---: | ---: |
| 2/10 | 599 × 336 | 87 | 50 ms | 50 ms |
| 7/10 | 824 × 463 | 39 | 117 ms | 217 ms |

Pour reproduire la vérification des commandes sur PC, charge l’arène, ferme le panneau avec **Tab**, avance avec **Z**, saute avec **Espace**, puis glisse la souris pour tourner. Appuie brièvement sur **X** et maintiens **J** pour tirer. Relâche **J** et vérifie que le tir cesse. Dans **Rendu → Image**, fais passer le champ de vision de 70° à 75°. Le test Chromium a aussi vérifié l’appui et le relâchement de **X** entre deux images.
