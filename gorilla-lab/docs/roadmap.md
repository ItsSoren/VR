# Feuille de route Gorilla Lab V2

## Ordre de validation

Terminer les points PC et éditeurs et valider leurs parcours de test. Signaler explicitement la clôture de ce périmètre à Sören. La VR a été validée par Sören avant la dernière partie PC. Les améliorations de confort et de performance restent des objectifs à part entière.

## Lot 7 — Collisions, propriétés et matériaux des modèles

| Point | Préparation et contrôle PC |
|---|---|
| GL031 · Formes de collision | Comparer boîte, sphère, capsule et enveloppe convexe sur un même modèle allongé et sur un modèle creux. Afficher les dimensions de la hitbox et distinguer les limites de chaque mode. |
| GL032 · Zones solides, traversables et déclencheuses | Définir le comportement par zone, vérifier une partie solide et une partie traversable sur la même pièce, puis tester un déclencheur sans blocage. Prévoir une limite de volumes et un affichage distinct en diagnostic. |
| GL033 · Propriétés du modèle | Séparer les réglages du modèle, de sa présence au menu et de l’instance posée. Tester un décor, un objet saisissable et un objet absent du menu après export et réimport. |
| GL034 · Projection de texture | Comparer les UV sur cube, rampe, anneau et forme libre. Tester répétition, rotation et échelle en mètres après redimensionnement dans l’atelier et dans le jeu. |
| GL035 · Finitions | Comparer rugosité et métallicité sous un éclairage fixe. Contrôler que la finition choisie reste lisible après export et import. |

## Lot 18 — Qualité visuelle VR

À traiter après le lot 17. Utiliser les mêmes scènes et le même trajet en casque pour comparer l’éclairage, les ombres, les textures à distance, l’aliasing, les reflets et la lisibilité du HUD. Mesurer la cadence et le temps par image en jeu, notamment en présence de props. Comparer au réglage actuel du miroir « Fin », validé visuellement sur PC, puis fixer les profils VR à partir des mesures sur casque.

## Trois parties PC restantes

| Partie | Lots | Résultat |
|---|---|---|
| 1 | 8–9 | Relief, maillages et grottes, départ, textures et environnement |
| 2 | 11–12 | Salons, partage de cartes, état initial des invités et synchronisation |
| 3 | 13–17 | Comportements, animation visuelle et outils de création, entités, audio et validation |

La porte de FOUNDRY en R39.2 est validée. La demande d’animation vise les effets visuels déjà illustrés par la Gelée rouge (déformation) et le Cube du Néant (matière animée). Leur réutilisation dans les créations de FOUNDRY relève de la partie 3. La validation sur casque est acquise.

La partie 1 (R39.3) a été validée sur PC. La partie 2 (R39.4) ajoute le chargement depuis le code du salon, la réception de l’état initial et la réplication des portes sous l’autorité de l’hôte. Les très grandes cartes locales demandent toujours une URL HTTPS ou un import sur les deux appareils. Voir [les scénarios de validation](r39.md#r394--pc-partie-2-lots-1112).

## Retours Quest 3 sur R39.4

- La locomotion et la manipulation d’objets en mode éditeur ont été appréciées. Les retours ont donné lieu aux réglages de locomotion et de pose de la R39.5.
- À approfondir en VR : un panneau dédié à la construction et à la sculpture, avec des outils adaptés aux manettes et la compatibilité des cartes avec l’atelier PC. Affiner la zone de prise côté paume après les tests de locomotion.
- Qualité 7/10 utilisée sur Quest 3. Environ 70 FPS relevés par le joueur à 10/10. L’objectif reste 90 FPS à 10/10, à mesurer sur casque sur le même parcours, avec le miroir coupé, puis en mode Fin.
- Sur R39.5, une carte locale trop volumineuse pour le relais peut être importée directement dans le salon. Le transfert automatique des gros JSON locaux reste à traiter.

## R39.6 — Effets visuels dans FOUNDRY

Dans **Animation**, sélectionner une pièce et choisir **Partir de zéro**. Combiner déformation, couleur et émission lumineuse. Chaque canal possède sa propre intensité, sa vitesse, sa variation spatiale et sa forme. La couleur et l’émission peuvent utiliser un motif d’étoiles. L’émission éclaircit la surface du modèle. Les effets sont visuels et la collision suit la forme de base.

Vérifier l’aperçu, l’export JSON, le chargement du modèle sur une carte et son rendu en jeu. Les comportements d’entités et l’audio de la partie 3 restent ouverts.

## R39.8 — Déclencheurs et actions de décor sur PC

Dans FOUNDRY, sélectionner une pièce d’un décor, puis ouvrir **Animation → Déclencheur et actions**. Une pièce de décor réagit avec **E**. Dans **Collision**, activer les volumes par pièce et choisir **Déclencheur** pour configurer l’entrée ou la sortie d’une zone. Depuis une même règle, choisir une porte articulée, une pièce à faire briller et un son parmi carillon, alerte et déclic. Les actions s’appliquent aux pièces de la même instance du décor. Le son s’atténue avec la distance et change selon sa direction. Le voyant utilise l’émission du matériau.

Les sons et voyants réagissent localement. En salon, une règle ne commande la porte partagée que lorsqu’elle se déclenche chez l’hôte. Les entités mobiles restent ouvertes.
