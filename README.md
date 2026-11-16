# Gorilla Lab

[Guide de reprise et exercices](./gorilla-lab/docs/README.md) · [Jouer en ligne](https://itssoren.github.io/VR/)

`npm install`, puis `npm run build` et `npm test` à la racine du dépôt.

Ouvrir index.html pour l'aperçu PC. Publier en HTTPS pour entrer en WebXR depuis le casque. Le site est statique. Placer index.html et game-lab-r34.js ensemble à la racine d'un dépôt GitHub Pages.
## Champ de vision et éditeurs

Dans **Rendu → Image**, règle **FOV PC / mobile** de 50° à 105° ou **FOV VR** de 55 % à la vue native. Le réglage VR masque progressivement la périphérie de chaque œil et conserve la projection du casque.

Ouvre l’[éditeur de carte](./editor.html) ou l’[éditeur de modèles](./model-editor.html) sur PC ou mobile. Dans le casque, le panneau **Carte** donne accès au placement, à la peinture et au relief.

## Dans le casque
- S'appuyer sur le sol ou un mur et pousser en bougeant les manettes.
- Stick droit : tourner par crans de 45 degrés. B/Y ou clic du stick gauche : panneau. Gâchette : sélectionner dans le panneau.
- Grip : saisir un cube, une boule ou un tétraèdre. Relâcher pendant le geste pour lancer.
- Le plan de l’arène est accessible depuis le jeu. Suivre les allées pour rejoindre la glace, la gravité basse, les murs, le parcours ou le terrain vallonné.
- Réglages par défaut réinitialise l'onglet ouvert. Les objets et la locomotion ont aussi leur propre bouton de retour.
- Auto monte ou baisse la qualité selon les FPS. La résolution de session se règle séparément et prend effet en rouvrant le mode VR.
## Sources
Les modules du jeu et des éditeurs sont dans `gorilla-lab/`. Depuis la racine, `npm run build` génère les trois pages publiques et leurs scripts versionnés.


## Bornes et cocotier
- Vise une borne avec la manette droite, puis appuie sur la gâchette. Sur PC, vise au centre et appuie sur E.
- La borne Rendu permet de changer de qualité, résolution XR et taille des textures. La résolution XR s'applique à la session suivante.
- Du côté du parcours, une borne permet de revenir au départ, de remettre les objets en place, de changer de hitboxes ou de couper les appuis.
- Gâchette pour détacher une noix à distance, grip pour la cueillir à portée de main. La borne voisine remet les noix sur l'arbre.







## Effets VR
Dans Rendu, Post FX VR et Bloom activent le traitement stéréo. Ray tracing VR active le reflet analytique sur la sphère de démonstration : le sol, le ciel et jusqu'à sept objets sont représentés. En Auto, seuls les niveaux de qualité évoluent. Les interrupteurs des effets restent au choix du joueur.



## Créer et jouer une map
- Ouvrir editor.html sur PC. Placer des blocs, rampes et murs puis régler dimensions, rotation et pente. Choisir un matériau, une teinte ou intégrer une image. Régler le grip, le rebond et la gravité par pièce.
- Jouer cette map ouvre le jeu avec le brouillon du navigateur. Exporter JSON crée un fichier transférable au casque. Le charger dans Maps et éditeur PC avant d'entrer en VR.
- Pour jouer depuis un lien, héberger le JSON en HTTPS (même dépôt Pages ou autre hébergeur autorisant CORS) et utiliser ?map=maps/ma-map.gorilla.json, ou coller son URL dans le jeu.
- Dans le casque : B/Y > Carte > Éditeur VR. Choisir Poser, Déplacer, Supprimer ou Peindre. Fermer le panneau, viser à droite et presser la gâchette. Déplacer saisit une pièce, Poser la repose.
- L'éditeur VR travaille sur une map personnalisée. Revenir à l'arène restaure le parcours intégré ; exporter le JSON avant de changer de map pour sauvegarder une copie.
- Auto : une décision toutes les cinq secondes au plus, par cran de qualité.





## Spectateur TurboWarp
Ouvrir Salon TurboWarp et utiliser le même code sur les deux appareils. Sur le casque, choisir Joueur VR puis Entrer en VR. Sur PC ou mobile choisir Spectateur, puis utiliser ZQSD pour voler, Espace pour monter, Maj pour descendre, Ctrl pour accélérer et C pour passer entre caméra libre, vue de face et troisième personne. Le casque reçoit la caméra physique du spectateur. Saisis-la avec le grip, tourne-la ou lance-la. Le spectateur peut sélectionner son point de vue dans les modes caméra.
Positions, orientation et identifiant aléatoire de session sont envoyés au relais, plafonnés à dix paquets par seconde par client. Le code identifie le salon, sans contrôle d'accès. Pour une map personnalisée, les deux appareils doivent importer le même fichier. Le casque envoie la tête et les deux mains. Le PC reconstruit le torse et les bras. Les objets sont simulés sur le casque et leur état est envoyé au plus cinq fois par seconde. Le PC lisse leur mouvement et converge vers la position finale au centimètre près. Les saisies, lancers, suppressions et changements de matière des objets sont visibles côté spectateur.

Dans **Rendu > Image**, choisissez Naturel, Cellulo, Affiche ou Rétro, puis Jour, Coucher de soleil ou Nuit. **Rendu > Lumière** regroupe l’activation des ombres, deux niveaux de qualité de 1 à 10, la carte de lumière, les reflets et le bloom. Le mode Auto borne la qualité active selon les FPS. Les objets lumineux proches éclairent les surfaces voisines.

Les objets du panneau **Spawn** comprennent un téléphone, une baguette de pain, une roue et une tasse. Leurs textures sont intégrées au jeu. Chaque nouvel objet utilise un maillage de collision de 20 triangles. La couleur de l’avatar est tirée au sort au chargement et transmise au spectateur. Le torse, les bras et les mains partagent un seul maillage. Les trois doigts se courbent selon les gâchettes et les boutons du contrôleur.


## Jouer sur PC ou mobile

Sur PC, ferme les réglages avec Tab ou le bouton Fermer. ZQSD/WASD pour se déplacer, Maj pour courir, Espace pour sauter. Glisse pour tourner la vue. E saisit ou relâche un objet. F crée un cube. G active le Tool Gun et T change son mode. Le laser affiche la cible et la couleur de l’action.

Sur mobile, glisse sur la moitié gauche pour déplacer ton personnage et à droite pour tourner la vue. Les boutons tactiles donnent accès à la saisie, au saut, à l’outil et au spawn.

Dans TurboWarp, le joueur VR ouvre le salon. Les amis peuvent choisir **Jouer sur PC ou mobile** ou **Spectateur**, avec le même code et la même carte. Le joueur VR valide les changements d’objets et simule leur physique. Les autres clients répliquent les poses des objets et des outils. Actualise les clients vers cette version avant de rejoindre un salon.

Les objets supplémentaires sont la lampe torche, la canette de soda, le cône de chantier et le talkie-walkie. Ils se trouvent dans **Spawn > Détaillés**. Chaque collision utilise un volume convexe de 20 triangles.

La locomotion utilise un balayage de la paume, des ancrages, une limite de portée et une moyenne de la vitesse réelle de déplacement pour lancer. Référence de l’algorithme : [GorillaLocomotion d’Another Axiom (MIT)](https://github.com/Another-Axiom/GorillaLocomotion).


## Atelier R26

Sur PC ou mobile, ouvre **Maps et éditeur → Ouvrir l’atelier**. Place un terrain, sélectionne-le puis règle son détail, son bruit et sa végétation. Avec **Sculpter**, monte, creuse, lisse ou aplanis. L’onglet Aspect permet d’importer une image ou de générer une texture répétable en 512 × 512.

En VR, **Carte → Construction** contient les formes et textures. **Carte → Terrain** règle le pinceau et le relief. Choisis l’action de sculpture, ferme le panneau et vise le terrain avec la gâchette. **Carte → Modèle** enregistre la composition en cours comme objet ou tête. Recharge le jeu pour charger le modèle.

L’atelier Modèles permet d’assembler des primitives, de définir leur matière, leur pose et leurs propriétés et d’exporter la collection. Charge la même collection sur les clients d’un salon pour partager les objets de l’atelier. Le remplacement de la tête s’applique à l’avatar local et au miroir.

**Spawn → Animés** contient la gelée rouge et le cube du Néant. Dans **Rendu → Effets**, le focus démarre à 5/5 et utilise la fovéation matérielle sur les casques compatibles. La baguette et la lampe torche peuvent servir de prolongement de la paume lorsqu’elles sont tenues.

La vibration légère des appuis de la main se règle dans **Locomotion → Vibration des appuis**.

## Pistolet de tir

Dans **Objets → Pistolet de tir**, active le pistolet. En VR, maintiens la gâchette droite. Sur PC, **X** équipe le pistolet et le clic gauche ou **J** maintient le feu. Sur mobile, garde **Tirer** enfoncé. Un tir part toutes les 100 ms. Les traceurs jaune, rouge et gris et les étincelles sont visibles localement. Sur la machine qui simule les objets, le tir peut les pousser.

## Affichage sur écran

Dans **Rendu → Image → Champ de vision écran**, le champ vertical de la caméra se règle de 50 à 105°. En VR, le casque fournit sa propre projection. Sur mobile, la qualité de rendu plafonne aussi le coût des ombres et des lumières, et réduit la résolution interne sans changer la taille du canvas.
