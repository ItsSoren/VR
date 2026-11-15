# Gorilla Lab
Ouvrir index.html pour l'aperçu PC. Publier en HTTPS pour entrer en WebXR depuis le casque. Le site est statique. Placer index.html et game-lab-r25.js ensemble à la racine d'un dépôt GitHub Pages.
## Dans le casque
- S'appuyer sur le sol ou un mur et pousser en bougeant les manettes.
- Stick droit : tourner par crans de 45 degrés. B/Y ou clic du stick gauche : panneau. Gâchette : sélectionner dans le panneau.
- Grip : saisir un cube, une boule ou un tétraèdre. Relâcher pendant le geste pour lancer.
- Le plan de l’arène est accessible depuis le jeu. Suivre les allées pour rejoindre la glace, la gravité basse, les murs, le parcours ou le terrain vallonné.
- Réglages par défaut réinitialise l'onglet ouvert. Les objets et la locomotion ont aussi leur propre bouton de retour.
- Auto monte ou baisse la qualité selon les FPS. La résolution de session se règle séparément et prend effet en rouvrant le mode VR.
## Sources
Le fichier game.js contient Three.js. Pour reconstruire : npm install --no-save three@0.180.0 esbuild@0.25.10 puis npx esbuild main.js --bundle --format=iife --target=es2022 --minify --outfile=game-lab-r25.js.


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
