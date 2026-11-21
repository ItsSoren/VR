# Scary Gorilla — Station Écho

Démo solo WebXR. Depuis le refuge, traverse la passerelle, actionne la vanne dans la salle des pompes, entre dans les archives et reviens au refuge. L’allée droite permet de traverser la salle au sec. La rampe de gauche descend dans le bassin.

La démo reprend le moteur Gorilla Lab R46.1 du commit `634f7ef7b6cabbdbddda601c7054a8d5675e50df`. Les sources de l’expédition sont dans `src/`. Les ancres de compilation ne modifient que le bundle de la démo. La locomotion s’inspire de [GorillaLocomotion d’Another Axiom, sous licence MIT](https://github.com/Another-Axiom/GorillaLocomotion/blob/main/LICENSE). Three.js est sous licence MIT.

Pour reconstruire la démo depuis la racine du dépôt, avec Node.js 20 ou plus et les dépendances du dépôt installées :

```sh
git worktree add --detach ../gorilla-lab-r46.1 634f7ef7b6cabbdbddda601c7054a8d5675e50df
npm ci
node scary-gorilla-demo/src/build.mjs ../gorilla-lab-r46.1 scary-gorilla-demo
```

Ouvre `scary-gorilla-demo/` via un serveur web. WebXR immersif est accessible en HTTPS dans le navigateur du casque.
