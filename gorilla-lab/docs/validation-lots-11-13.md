# Validation des lots 11 à 13

| Essai | Manipulation | Résultat attendu | Vérification effectuée |
| --- | --- | --- | --- |
| Salon vide | Cliquer sur Rejoindre dans une arène sans hôte, puis faire apparaître un objet | La partie locale continue pendant l'attente et les objets restent visibles | Chrome avec relais simulé |
| Invitation à une petite carte perso | Héberger une carte modifiée, copier le lien, l'ouvrir dans un second profil Chrome et cliquer sur Rejoindre | Le jeu charge la carte de l'hôte depuis l'invitation et vérifie son empreinte | Deux navigateurs avec relais simulé |
| Retour à une carte locale | Partir d'une autre carte locale avant d'ouvrir l'invitation, puis cliquer sur Déconnecter | Le brouillon local réapparaît et la sauvegarde locale reste intacte | Tests automatisés et Chrome |
| Cadence du réseau | À deux, ouvrir le panneau En ligne et attendre quelques mises à jour | L'intervalle moyen, le 95e percentile et la variation apparaissent. Ces mesures portent sur le flux de mises à jour | Relais simulé avec délais et pertes |
| Message de zone | Dans FOUNDRY, activer les zones par pièce, choisir Déclencheur, renseigner un texte et choisir À l'entrée ou À la sortie | Le texte est sauvegardé et la zone affiche le message au moment choisi | Chrome pour la sauvegarde et test du passage dans la zone |
| Portail en solo | Donner à une zone Déclencheur une URL HTTPS de carte ou la destination arena, puis entrer dans la zone en solo | La destination se charge. Une zone de portail au point d'arrivée ne relance pas immédiatement la transition | Chrome avec carte de destination simulée |

## Suite du plan

1. Vérifier à deux sur le relais réel. Les essais automatisés sur TurboWarp dans cet environnement se terminent avec le code 1006.
2. Rejoindre une carte perso uniquement par code, y compris lorsqu'elle contient des assets trop lourds pour l'invitation. Définir un transport de carte séparé du flux de positions.
3. Mesurer le ping aller-retour et les actions perçues à 6 joueurs et 50 objets. Comparer les scénarios du cahier des charges. La cadence des paquets déjà affichée fournit un indicateur distinct du ping.
4. Définir l'autorité nécessaire aux permissions admin et aux actions qui modifient le monde partagé. Les messages de zone et les portails solo constituent le premier parcours testable.

## Décision de test

Maintenir les vérifications automatiques par changement. Regrouper à la fin les vérifications Quest portant sur les appuis rapides, la prise, la posture et la netteté. Conserver séparément la mesure casque et la vérification réelle des salons.

## Retours du décor lunaire et du salon privé

| Essai PC | Manipulation | Résultat attendu |
| --- | --- | --- |
| Invitation | Sur deux profils de navigateur à la même version, héberger une petite carte modifiée avec **En ligne → Héberger ma carte**, puis utiliser **Copier l’invitation**. Ouvrir le lien dans l’autre profil et cliquer sur **Rejoindre la partie invitée**. | L’invité voit la carte de l’hôte. **Quitter** restaure sa carte locale. Pour une carte lourde, charger son JSON depuis une URL HTTPS partageable avant d’héberger. |
| Panorama | Dans **Atelier des cartes → Scène → Importer un ciel 360°**, choisir un JPEG, PNG ou WebP de format 2:1 jusqu’à 5 Mo. Recharger l’atelier puis utiliser **Jouer cette map**. | Le brouillon et le jeu conservent le panorama complet. Un fichier de plus de 5 Mo est refusé. |
| Terrain en surplomb | Placer un terrain surélevé au-dessus du sol et marcher dessous en entrant par le côté. Répéter la manipulation en chutant sous le bord de la carte. | La collision ne projette plus le joueur à la surface. Un saut peut heurter le plafond et une vraie chute hors de la carte déclenche toujours la réapparition. |
| Motifs dessinés | Dans **Texturer → Créer une texture**, dessiner deux formes et cliquer sur **+ Ajouter le dessin comme forme** après chaque tracé. Régler densité, taille, rotation, miroir et graine, puis générer et appliquer. | Les deux dessins apparaissent dans la texture répétée. L’export conserve la texture calculée. |
| Densité | Dans **Props**, choisir un terrain de 100 × 100 m, ajouter une seule règle à 2 instances/m² et couper ses collisions. | La règle demande 20 000 instances. La densité est calculée sur la surface horizontale admissible. Le compteur distingue les instances visibles, les instances demandées et les collisions. |

Le transfert d’une carte volumineuse à partir du seul code du salon reste à développer. Les essais sur le relais public, l’intégration dans un navigateur et les mesures de performance restent à réaliser pour ces retouches.
