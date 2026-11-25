# Scary Gorilla — Station Écho

Démo solo WebXR. Prends la lampe au refuge, traverse la passerelle et actionne la vanne dans la salle des pompes. Récupère l’enregistreur au fond des archives, puis dépose-le sur le récepteur au refuge pour terminer la sortie. La galerie de service contourne les pompes et débouche en amont de la salle. Sur le chemin des pompes, l’allée droite reste sèche et la rampe de gauche descend dans le bassin.

Dans le casque, utilise le bouton latéral de la manette près de l’objet à saisir ou actionner. Sur PC, vise l’objet et appuie sur E. La gâchette ou F commande la lampe. L’enregistreur se range automatiquement. Si la créature t’attrape, tu repars du palier des pompes avec la purge déjà ouverte et une lampe de secours sur la caisse.

La purge vide le bassin en quelques secondes. Les voyants des pompes sont orange pendant la vidange puis verts. Le poignet gauche affiche l’objectif en VR. Sur PC, Échap met la partie en pause, R recommence l’expédition et P télécharge une capture PNG. En VR, ouvre le menu avec B ou Y pour mettre la mission en pause ou recommencer.

La démo reprend le moteur Gorilla Lab R46.1 du commit `634f7ef7b6cabbdbddda601c7054a8d5675e50df`. Les sources de l’expédition sont dans `src/`. Les ancres de compilation ne modifient que le bundle de la démo. La locomotion s’inspire de [GorillaLocomotion d’Another Axiom, sous licence MIT](https://github.com/Another-Axiom/GorillaLocomotion/blob/main/LICENSE). Three.js est sous licence MIT.

Pour reconstruire la démo depuis la racine du dépôt, avec Node.js 20 ou plus et les dépendances du dépôt installées :

```sh
git worktree add --detach ../gorilla-lab-r46.1 634f7ef7b6cabbdbddda601c7054a8d5675e50df
npm ci
node scary-gorilla-demo/src/build.mjs ../gorilla-lab-r46.1 scary-gorilla-demo
```

Ouvre `scary-gorilla-demo/` via un serveur web. WebXR immersif est accessible en HTTPS dans le navigateur du casque.
