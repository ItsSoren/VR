# VALLON VR
Ouvrir index.html sur ordinateur. Dans le casque, ouvrir la page HTTPS et sélectionner Entrer en VR. Joystick gauche pour marcher, tête pour orienter le déplacement. Approche les trois balises pour les faire passer du doré au vert.

GitHub Pages : placer les fichiers de cette archive à la racine du dépôt. Activer Settings > Pages > Deploy from a branch > main > / (root).

Aucune installation nécessaire pour jouer. Pour reconstruire après une modification des sources :
npm install --no-save three@0.180.0 esbuild@0.25.10
npx esbuild main.js --bundle --outfile=game.js --format=iife --target=es2022 --minify --legal-comments=inline
