# VALLON VR — Les terres tranquilles

Ouvrir index.html sur PC ou utiliser le bouton Entrer en VR depuis une adresse HTTPS dans le casque. Le moteur Three.js est inclus.

- VR : joystick gauche pour marcher, regarde dans la direction souhaitée. Gâchette droite pour agir ou choisir dans l'atelier. Grip droit pour remblayer. A ou clic du stick droit pour changer d'objet. B ouvre l'atelier sur les manettes compatibles.
- PC : Démarrer sur PC, ZQSD ou flèches, glisser pour regarder. Touches 1 à 7 pour choisir, E pour agir et F pour remblayer. L'atelier et les réglages sont dans le panneau.
- La pelle récolte ou consomme de la terre. La pioche fait de même avec la pierre. La hache récolte les bûches. Les blocs, torches et changements de terrain sont sauvegardés dans le navigateur.
- Le réglage de pixels réduit la résolution de rendu. En VR ce changement s'applique à l'ouverture de la prochaine session.

## GitHub Pages
Décompresser tous les fichiers à la racine du dépôt. Dans Settings > Pages, choisir Deploy from a branch, puis main et / (root).

## Modifier et reconstruire
npm install --no-save three@0.180.0 esbuild@0.25.10
npx esbuild main.js --bundle --outfile=game.js --format=iife --target=es2022 --minify --legal-comments=inline
