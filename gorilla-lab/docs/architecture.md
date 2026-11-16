# Architecture et systèmes

[Retour au guide](README.md) · [Atelier](atelier.md) · [Maintenance](verification.md)

## Lire une image du jeu

[main.js](../main.js) installe le moteur de rendu, le décor, la caméra et une boucle avec `renderer.setAnimationLoop`. À chaque image, cette boucle lit les commandes, avance la simulation, prépare certains effets puis dessine la scène. Un navigateur VR laisse le casque fournir les poses de la tête et des manettes. Sur écran plat, la souris, le clavier et les gestes tactiles construisent les commandes du personnage.

```mermaid
flowchart LR
    I["Entrées PC, mobile ou XR"] --> J["Joueur et interactions"]
    J --> P["Collisions et objets"]
    P --> R["Rendu Three.js"]
    P --> N["Relais du salon"]
```

`dt` représente le temps écoulé en **secondes**. Une vitesse de 2 m/s pendant 0,01 s donne un déplacement de 0,02 m. Le code limite la durée d'une image côté simulation pour éviter qu'une reprise après une longue pause produise un bond gigantesque. Dans la scène, **Y monte**, et une caméra non tournée regarde vers **−Z**.

| Terme dans le code | Ce qu'il désigne |
| --- | --- |
| `Vector3` | Trois nombres utilisés pour une position, une direction ou une vitesse |
| `Quaternion` | Une rotation que la simulation et le réseau peuvent composer et interpoler |
| `Mesh` | Une géométrie à dessiner avec un matériau, une position et une rotation |
| `Group` | Un parent qui déplace tous ses enfants, comme une borne ou un modèle composé |
| `Collider` | La forme utilisée pour tester des contacts |
| `Raycaster` | Un test de visée depuis une origine et une direction |

Un `Mesh` enfant peut être à 10 cm de son parent. En **coordonnées locales**, sa position est ce décalage. En **coordonnées monde**, on tient aussi compte du parent et de ses propres parents. Pour manier un outil, vise avec une origine et une direction exprimées dans le même espace.

## Locomotion et appuis

![La main cible traverse la surface, la paume simulée reste sur un ancrage et le corps recule](images/appuis.svg)

La pose réelle de la manette donne une **cible**. La paume simulée poursuit cette cible par un balayage entre sa position précédente et la nouvelle. Si elle rencontre un sol ou un mur, le solveur garde un point d'**ancrage**. Pousser la main vers un mur fait reculer le corps. Pousser la main vers le sol peut faire monter le corps.

On limite la portée du bras. On moyenne les contributions si les deux mains travaillent en même temps. La friction de la surface décide combien l'ancrage glisse. Après correction des collisions du joueur, [locomotion.js](../locomotion.js) mesure le déplacement réellement obtenu pour estimer l'élan. Sinon, pousser vers une direction que le corps ne peut pas emprunter donnerait quand même une vitesse de départ.

Lis dans cet ordre :

1. `trackHands` dans [main.js](../main.js) pour les contrôleurs, les prises et la cible.
2. `palmContact` dans [physics.js](../physics.js) pour le balayage de la forme de la paume.
3. `move` et `finish` dans [locomotion.js](../locomotion.js) pour le contact, le déplacement et l'élan.
4. `updateGroundHaptics` dans [ground-haptics.js](../ground-haptics.js) pour l'impulsion à l'arrivée sur un appui. Un état par main et un délai anti-rebond empêchent une vibration à chaque image.

Un appui au sol est ici un contact dont la normale pointe suffisamment vers le haut. La **normale** est une flèche perpendiculaire à la surface. Elle permet aussi de différencier une pente d'un mur.

### Pourquoi utiliser des formes simples

La géométrie visible d'un téléphone peut avoir des coins arrondis et un écran détaillé. Sa forme de collision peut être un petit volume convexe. Une roue sphérique ou cylindrique doit avoir une forme de collision adaptée à la façon dont on veut qu'elle roule. Le solveur réutilise les mêmes règles pour la plupart des objets.

Dans [physics.js](../physics.js), le test de proximité élimine les paires distantes avant les calculs détaillés. Les sous-étapes divisent la durée d'une image pour réduire le risque de traverser un mur mince. Le solveur corrige les chevauchements et applique les effets de rebond, rotation et friction. `moveKinematic` déplace un objet tenu vers une pose demandée en testant le trajet. La vitesse du geste reste disponible au lâcher.

## Rendu, textures et enveloppe de performance

Une **texture** est une image projetée sur le maillage par des coordonnées `UV`. [texture-geometry.js](../texture-geometry.js) règle leur répétition à l'échelle des dimensions du bloc. En étirant simplement les mêmes UV sur un mur deux fois plus long, on étirerait aussi les détails. [seamless-texture.js](../seamless-texture.js) génère des motifs qui se répètent sans bord apparent.

[arena.js](../arena.js) assemble éclairage, ombres, matériaux, ciel et niveaux de qualité. La carte de lumière est une estimation d'éclairage préparée à partir du décor. Une **ombre dynamique** est recalculée depuis la lumière sur un budget de fréquence et de résolution. Les sources lumineuses les plus proches utilisent un nombre borné de lumières ponctuelles.

[vr-effects.js](../vr-effects.js) compose les deux yeux dans le chemin Post FX. La version précédente sous-échantillonnait les images intermédiaires. Le chemin actuel conserve les dimensions de la vue de chaque œil et réserve le halo aux zones lumineuses. La **fovéation** réduit le détail sur les bords de la vision. Quand la couche XR expose la fovéation matérielle, le jeu l'utilise. Le repli logiciel peut changer l'apparence des textures sans garantir le même gain de FPS.

Les effets de [animated-props.js](../animated-props.js) illustrent deux techniques :

- La gelée modifie la position des sommets visibles à partir d'une horloge partagée.
- Le cube superpose des couches d'étoiles dont le décalage varie avec l'angle de vue. Ce décalage apparent est la **parallaxe**.

La R26 sépare ces effets visuels de la forme utilisée pour les collisions. Une boule qui ondule à l'écran reste donc prévisible au lancer.

## Cartes, terrain et modèles

`parseMap` dans [map-format.js](../map-format.js) vérifie le format et borne les valeurs avant de les appliquer. [editor.js](../editor.js) présente un plan au sol, une vue 3D, un inspecteur et un historique d'annulation. Le brouillon du navigateur est séparé du fichier JSON que tu exportes. Les imports asynchrones appliquent la demande la plus récente. Les surfaces qui partagent une même image réutilisent sa texture pendant qu’elles en ont besoin. [custom-maps.js](../custom-maps.js) charge la carte en jeu et génère les maillages et les colliders.

Un terrain est une **grille de hauteurs**. Les mêmes échantillons servent à dessiner les triangles et à trouver le sol sous le joueur. Le bruit, la graine et le sculpt sont séparés. La graine rend le relief et le placement du décor reproductibles. Pour l'herbe, l'**instanciation** affiche plusieurs copies d'une même géométrie avec leurs propres transformations. C'est utile pour éviter des centaines d'objets de scène uniques.

[model-pack.js](../model-pack.js) valide la collection de modèles. L'atelier permet d'assembler des primitives et de les publier pour le menu Spawn. Le remplacement d'avatar porte sur la tête du joueur local et son miroir. Les bras et les mains conservent leur animation de suivi.

## Salon et état partagé

```mermaid
sequenceDiagram
    participant P as Joueur PC
    participant R as TurboWarp
    participant V as Hôte VR
    P->>R: Demande de saisir un objet
    R->>V: Demande et identifiant
    V->>V: Valide puis simule
    V->>R: Pose et état de l'objet
    R->>P: État à afficher
```

**L'autorité** est la machine qui décide de l'état d'un objet. Dans ce jeu, c'est le joueur VR. Le PC transmet une demande de saisie, de création ou d'action sur l'objet. L'hôte décide et diffuse l'état. Les autres clients dessinent des répliques et lissent leurs déplacements entre deux paquets.

[cloud-link.js](../cloud-link.js) s'occupe du transport, du format des messages et des identifiants. [cloud-view.js](../cloud-view.js) s'occupe de la caméra, des répliques et de l'affichage de l'état du salon. Le transport utilise des mises à jour groupées et périodiques. Un code de salon sert à retrouver une session. Il ne fait pas office de compte ou de mot de passe. Pour partager une carte et des objets personnalisés, charge la même carte et la même collection sur les appareils du salon.

### Cadence et état partagé

L’hôte choisit **Héberger en VR**. Les invités choisissent **Rejoindre en joueur**, puis peuvent jouer au clavier, au tactile ou entrer en VR. Le spectateur envoie sa caméra à 5 Hz. Les joueurs visent 10 Hz pour la tête, les mains, les doigts et les armes. Les tirs et les demandes d’interaction utilisent le même paquet avec un numéro de séquence pour récupérer un paquet sauté et ignorer les doublons. Les petits objets rapides (rayon de collision jusqu’à 45 cm, translation ou bord en rotation à partir de 2,5 m/s) utilisent aussi le paquet intermédiaire, jusqu’à 10 Hz. Les autres changements d’objet passent à 5 Hz. La pose d’arrêt est répétée et les états complets périodiques resynchronisent le monde après une perte de paquet. L’hôte applique la physique des tirs et partage aussi l’ambiance, les noix de coco et le score de la cible.

[Turbowarp regroupe les mises à jour et peut en sauter](https://docs.turbowarp.org/cloud-variables#updates-are-buffered). Dépasser 10 envois par seconde ne réduit pas ce délai. L’extrapolation de la position est bornée à 120 ms, ou à 100 ms pour les objets reçus à cadence rapide. Au repos, les répliques convergent vers la position et la rotation publiées par l’hôte. Les effets de son propre tir restent immédiats. Le délai réseau réel varie avec le relais, le trajet réseau et les images du navigateur. Le rapport exporté contient le nombre de paquets et de caractères envoyés et reçus, ainsi que la taille de la file WebSocket au dernier relevé.

Les appareils du salon chargent la même carte. La R32 conserve le format réseau de la R31. Pour profiter des mises à jour d’objets rapides, charge la R32 sur le casque qui héberge. Les éditions de carte se partagent par export ou par URL. Les options de confort et de qualité restent locales.

## Où intervenir dans la R32

| Pour modifier… | Fichier |
| --- | --- |
| Les valeurs par défaut, les préréglages ou les noms de modes | [game-settings.js](../game-settings.js) |
| Les gestes tactiles et la distinction entre appui bref et touche maintenue | [flat-controls.js](../flat-controls.js) |
| La résolution du canvas sur mobile et PC | [screen-render.js](../screen-render.js) |
| Le masque de champ visible par œil, avec ou sans Post FX | [vr-fov.js](../vr-fov.js), [vr-effects.js](../vr-effects.js) |
| Les commandes de tir, la visée et les collisions avec le monde | [blaster-system.js](../blaster-system.js) |
| La cadence, le mouvement, les traînées et les particules | [arcade-blaster.js](../arcade-blaster.js) |
| L’ordre des systèmes et le lien avec la scène | [main.js](../main.js) |

Un appui bref, comme **X**, est mémorisé jusqu’à l’image qui le traite. Un mouvement ou un tir maintenu, comme **Z** ou **J**, dépend de l’état courant de la touche. Ce découpage évite de perdre les appuis courts à faible fréquence d’images.
