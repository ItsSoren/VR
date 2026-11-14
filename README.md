# Gorilla Lab
Ouvrir index.html pour l'aperçu PC. Publier en HTTPS pour entrer en WebXR depuis le casque. Le site est statique. Placer index.html et game.js ensemble à la racine d'un dépôt GitHub Pages.
## Dans le casque
- S'appuyer sur le sol ou un mur et pousser en bougeant les manettes.
- Stick droit : tourner par crans de 45 degrés. B/Y ou clic du stick gauche : panneau. Gâchette : sélectionner dans le panneau.
- Grip : saisir un cube, une boule ou un tétraèdre. Relâcher pendant le geste pour lancer.
- La piste centrale est normale, celle de gauche est glacée et celle de droite réduit la gravité du joueur.
- Réglages par défaut réinitialise l'onglet ouvert. Les objets et la locomotion ont aussi leur propre bouton de retour.
- Auto monte ou baisse la qualité selon les FPS. La résolution de session se règle séparément et prend effet en rouvrant le mode VR.
## Sources
Le fichier game.js contient Three.js. Pour reconstruire : npm install --no-save three@0.180.0 esbuild@0.25.10 puis npx esbuild main.js --bundle --format=iife --target=es2022 --minify --outfile=game.js.
