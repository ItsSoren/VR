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
