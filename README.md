# Gorilla Lab
Ouvrir index.html pour l'aperçu PC. Publier en HTTPS pour entrer en WebXR depuis le casque. Le site est statique. Placer index.html et game-lab-r22.js ensemble à la racine d'un dépôt GitHub Pages.
## Dans le casque
- S'appuyer sur le sol ou un mur et pousser en bougeant les manettes.
- Stick droit : tourner par crans de 45 degrés. B/Y ou clic du stick gauche : panneau. Gâchette : sélectionner dans le panneau.
- Grip : saisir un cube, une boule ou un tétraèdre. Relâcher pendant le geste pour lancer.
- La piste centrale est normale, celle de gauche est glacée et celle de droite réduit la gravité du joueur.
- Réglages par défaut réinitialise l'onglet ouvert. Les objets et la locomotion ont aussi leur propre bouton de retour.
- Auto monte ou baisse la qualité selon les FPS. La résolution de session se règle séparément et prend effet en rouvrant le mode VR.
## Sources
Le fichier game.js contient Three.js. Pour reconstruire : npm install --no-save three@0.180.0 esbuild@0.25.10 puis npx esbuild main.js --bundle --format=iife --target=es2022 --minify --outfile=game-lab-r22.js.


## Bornes et cocotier
- Vise une borne avec la manette droite, puis appuie sur la gâchette. Sur PC, vise au centre et appuie sur E.
- La borne Rendu permet de changer de qualité, résolution XR et taille des textures. La résolution XR s'applique à la session suivante.
- Du côté du parcours, une borne permet de revenir au départ, de remettre les objets en place, de changer de hitboxes ou de couper les appuis.
- Gâchette pour détacher une noix à distance, grip pour la cueillir à portée de main. La borne voisine remet les noix sur l'arbre.







## Effets VR
Dans Rendu, Post FX VR et Bloom activent le traitement stéréo. Ray tracing VR active le reflet analytique sur la sphère de démonstration : le sol, le ciel et jusqu'à sept objets sont représentés. En Auto à 10/10, les effets de démonstration sont tous activés. En manuel, ils peuvent être comparés séparément.



## Créer et jouer une map
- Ouvrir editor.html sur PC. Placer des blocs, rampes et murs puis régler dimensions, rotation et pente. Choisir un matériau, une teinte ou intégrer une image. Régler le grip, le rebond et la gravité par pièce.
- Jouer cette map ouvre le jeu avec le brouillon du navigateur. Exporter JSON crée un fichier transférable au casque. Le charger dans Maps et éditeur PC avant d'entrer en VR.
- Pour jouer depuis un lien, héberger le JSON en HTTPS (même dépôt Pages ou autre hébergeur autorisant CORS) et utiliser ?map=maps/ma-map.gorilla.json, ou coller son URL dans le jeu.
- Dans le casque : B/Y > Carte > Éditeur VR. Choisir Poser, Déplacer, Supprimer ou Peindre. Fermer le panneau, viser à droite et presser la gâchette. Déplacer saisit une pièce, Poser la repose.
- L'éditeur VR travaille sur une map personnalisée. Revenir à l'arène restaure le parcours intégré ; exporter le JSON avant de changer de map pour sauvegarder une copie.
- Auto : une décision toutes les cinq secondes au plus, par cran de qualité.





## Spectateur TurboWarp
Ouvrir Salon TurboWarp et utiliser le même code sur les deux appareils. Sur le casque, choisir Joueur VR puis Entrer en VR. Sur PC choisir Spectateur PC, puis utiliser les flèches pour voler, Espace pour monter, Maj pour descendre, Ctrl pour accélérer et C pour passer entre caméra libre, vue de face et troisième personne. Le casque voit une petite sphère en vol.
Positions, orientation et identifiant aléatoire de session sont envoyés au relais, plafonnés à dix paquets par seconde par client. Le code identifie le salon, sans contrôle d'accès. Pour une map personnalisée, les deux appareils doivent importer le même fichier. Les objets, actions et mains ne sont pas synchronisés.

