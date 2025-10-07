# Guide Complet des Apple Human Interface Guidelines (HIG)

Les Apple Human Interface Guidelines constituent le système de design le plus complet et l'ensemble de règles de conception d'Apple pour créer des expériences utilisateur cohérentes, intuitives et délicieuses sur tous les appareils Apple. Ce document couvre tous les aspects de la conception d'interface utilisateur dans l'écosystème Apple.

## Principes Fondamentaux

### Hiérarchie
Établir une hiérarchie visuelle claire où les contrôles et éléments d'interface élèvent et distinguent le contenu en dessous. Cela implique l'utilisation de tailles, poids, couleurs et espacements différents pour guider l'attention de l'utilisateur vers les éléments les plus importants.[1]

### Harmonie
Aligner avec le design concentrique du matériel et du logiciel pour créer une harmonie entre les éléments d'interface, les expériences système et les appareils. Cette approche garantit que tous les éléments visuels travaillent ensemble de manière cohérente.[1]

### Cohérence
Adopter les conventions de plateforme pour maintenir un design cohérent qui s'adapte continuellement à travers les tailles de fenêtres et d'écrans. La cohérence permet aux utilisateurs de transférer leurs connaissances d'une application à l'autre.[2]

## Philosophie de Design d'Apple

### Clarté
L'interface doit être lisible et facile à comprendre. Cela implique un texte clair, des icônes nettes, une hiérarchie visuelle forte et un focus sur les éléments les plus importants. Rien ne doit être ambigu ou confus.[3][4]

### Déférence
L'interface utilisateur doit s'effacer et laisser le contenu utilisateur au centre de l'attention. Les animations fluides et les éléments d'interface translucides ou subtils aident le contenu à briller sans distraction.[4][3]

### Profondeur
L'interface doit aider les utilisateurs à comprendre où ils se trouvent et comment ils y sont arrivés. La superposition visuelle, les transitions fluides et la hiérarchie logique créent un sens de profondeur spatiale et de navigation intuitive.[3][4]

## Fondements du Design

### Couleur
- **Système de couleurs** : Apple définit des couleurs système qui s'adaptent automatiquement aux modes sombre et clair, aux réglages de vitalité et d'accessibilité.[5]
- **Utilisation de la couleur** : Utiliser une palette de couleurs restreinte, réserver les teintes vives aux éléments interactifs, aligner les couleurs avec la personnalité et le but de la marque.[6]
- **Accessibilité** : Assurer des ratios de contraste conformes aux standards WCAG, éviter d'utiliser la couleur comme seul moyen de communication.[6]
- **Couleurs primaires** : Le bleu pour les actions primaires comme "Sauvegarder" et "Continuer", le rouge pour les actions destructives comme "Supprimer".[4]

### Typographie
- **Police système** : San Francisco est la police par défaut d'Apple, optimisée pour la lisibilité sur tous les appareils.[7]
- **Taille minimale** : 11 points minimum pour iOS et iPadOS pour garantir la lisibilité.[8][4]
- **Dynamic Type** : Support du texte dynamique qui s'ajuste selon les préférences utilisateur.[9]
- **Hiérarchie typographique** : Utiliser le poids, la taille et la couleur des polices pour mettre en évidence les informations importantes.[7]
- **Une seule police** : Si possible, utiliser une seule famille de polices pour maintenir la cohérence.[7]

### Layout et Espacement
- **Système de grille** : Utiliser des incréments de 8 points pour l'espacement de base.[10]
- **Espaces blancs** : L'espace blanc crée une respiration visuelle entre les éléments et aide à établir la hiérarchie.[10]
- **Marges système** : iOS fournit des marges standard qui fonctionnent dans la plupart des cas.[10]
- **Zones sûres** : Respecter les zones sûres pour s'assurer que le contenu reste lisible sur tous les appareils.[10]
- **Cibles tactiles** : Maintenir au minimum 44x44 points pour les éléments tactiles.[10]

## Composants et Contrôles

### Barres de Navigation
- **Navigation hiérarchique** : Utiliser les barres de navigation pour traverser une hiérarchie de données.[11]
- **Bouton retour** : Le bouton retour doit refléter le titre de l'écran précédent.[12]
- **Titre** : Le titre de la barre de navigation montre la position actuelle dans la hiérarchie.[11]

### Barres d'Onglets
- **Navigation plate** : Utiliser les barres d'onglets pour présenter des catégories pairs de contenu ou de fonctionnalités.[11]
- **Adaptation dynamique** : Dans iOS 26, les barres d'onglets se rétrécissent lors du défilement pour se concentrer sur le contenu.[13]

### Contrôles Standards
- **Boutons** : Utiliser les styles de boutons système pour la cohérence.[14]
- **Champs de texte** : Implémenter les champs de recherche et de saisie selon les standards.[14]
- **Contrôles segmentés** : Pour permettre aux utilisateurs de choisir entre des options mutuellement exclusives.[14]
- **Sélecteurs** : Pour la sélection de valeurs dans une liste.[14]

## Accessibilité et Inclusion

### Support Multi-Sensoriel
- **VoiceOver** : Support complet pour la navigation par synthèse vocale.[9]
- **Contraste** : Maintenir un contraste suffisant pour les utilisateurs malvoyants.[9]
- **Taille du texte** : Support du Dynamic Type pour différentes tailles de texte.[9]

### Accessibilité Cognitive
- **Simplifier les interactions** : Présenter une action primaire à la fois pour maintenir la concentration.[9]
- **Cohérence** : Maintenir des modèles d'interface familiers.[9]
- **Feedback clair** : Aider les utilisateurs à suivre leurs actions et l'état actuel.[9]
- **Temps suffisant** : Permettre aux utilisateurs qui ont besoin de plus de temps.[9]

### Directives d'Inclusion
- **Design universel** : Concevoir pour la plus large gamme d'utilisateurs possible.[15]
- **Personnalisation** : Offrir des options de personnalisation pour s'adapter aux différents besoins.[15]
- **APIs d'accessibilité** : Adopter les APIs d'accessibilité d'Apple.[15]

## Plateformes Spécifiques

### iOS et iPadOS
- **Interface tactile** : Optimisé pour l'interaction tactile directe.[4]
- **Multitâche** : Support du multitâche et des différentes tailles d'écran.[4]
- **Orientation** : Adaptation aux orientations portrait et paysage.[4]

### macOS
- **Interface desktop** : Optimisé pour l'usage desktop avec gestion des fenêtres.[4]
- **Menus** : Utilisation appropriée des barres de menu et menus contextuels.[4]
- **Raccourcis clavier** : Support complet des raccourcis clavier.[4]

### watchOS
- **Écran petit** : Interfaces simples et rapides adaptées à l'usage sur montre.[16][4]
- **Ergonomie** : Conception pour l'interaction sur poignet.[16]
- **Interactions brèves** : Optimisé pour des interactions courtes et fréquentes.[16]

### tvOS
- **Navigation à distance** : Optimisé pour la navigation à la télécommande.[17][4]
- **Grand écran** : Design adapté aux écrans de télévision.[17]
- **Distance de visualisation** : Conception pour une visualisation à distance.[17]

## Nouveautés et Design System 2025

### Liquid Glass
- **Nouveau matériau** : Liquid Glass combine les qualités optiques du verre avec une fluidité unique à Apple.[13]
- **Adaptation dynamique** : Se transforme selon le contenu et le contexte.[13]
- **Reflets et réfractions** : Reflète et réfracte l'environnement pour plus de vitalité.[13]

### Design Universel
- **Cohérence inter-plateformes** : Premier design unifié à travers iOS 26, iPadOS 26, macOS Tahoe 26, watchOS 26, et tvOS 26.[13]
- **Contrôles redessinés** : Contrôles, barres d'outils et navigation repensés pour s'harmoniser avec les coins arrondis du matériel moderne.[13]

## Patterns de Navigation

### Navigation Hiérarchique
- **Drill-down** : Navigation en profondeur à travers les niveaux de contenu.[12]
- **Bouton retour** : Indique clairement le niveau supérieur dans la hiérarchie.[12]
- **Indicateurs de divulgation** : Chevrons pointant dans la direction de transition attendue.[12]

### Navigation Modale
- **Présentation depuis le bas** : Les modales doivent se présenter depuis le bas de l'écran.[12]
- **Types de tâches** : Simples, multi-étapes, ou plein écran.[12]
- **Actions préférées** : Utiliser les actions préférées et d'annulation dans la barre de navigation.[12]

## Ressources et Outils

### Pour les Développeurs
- **SwiftUI, UIKit, AppKit** : APIs mises à jour pour adopter le nouveau design.[13]
- **Composants système** : Utiliser les contrôles système pour bénéficier des optimisations intégrées.[3]

### Documentation et Communauté
- **Apple Design Resources** : Kits UI pour Sketch et Figma.[14]
- **Apple Developer Forums** : Support communautaire.[6]
- **Mises à jour continues** : Les HIG évoluent avec chaque version d'OS.[3]

## Bonnes Pratiques

### Ne Pas Faire
- **Surcharge de couleurs** : Éviter trop de teintes qui peuvent distraire.[6]
- **Contraste insuffisant** : Compromet la lisibilité et l'accessibilité.[6]
- **Trop de polices** : Mélanger trop de styles de police crée un désordre visuel.[6]
- **Négliger l'accessibilité** : Limite l'inclusivité des utilisateurs.[6]

### À Faire
- **Suivre les conventions** : Utiliser les composants standards quand possible.[3]
- **Tester l'accessibilité** : Vérifier avec différentes tailles de texte et modes d'accessibilité.[3]
- **Comprendre le "pourquoi"** : Comprendre le raisonnement derrière chaque recommandation.[3]
- **Rester à jour** : Les HIG évoluent constamment avec les nouvelles technologies.[3]

Ce guide complet des Apple Human Interface Guidelines fournit une base solide pour créer des applications qui s'intègrent parfaitement dans l'écosystème Apple tout en offrant des expériences utilisateur exceptionnelles. L'adhésion à ces principes garantit non seulement la cohérence mais aussi l'acceptation par les utilisateurs et le succès sur l'App Store.

[1](https://developer.apple.com/design/human-interface-guidelines)
[2](https://inrhythm.com/blog-post/a-comprehensive-introduction-to-apples-human-interface-guidelines/)
[3](https://dev.to/matheussricardoo/navigating-apples-human-interface-guidelines-hig-a-practical-guide-26ka)
[4](https://www.netguru.com/blog/ios-human-interface-guidelines)
[5](https://developer.apple.com/design/human-interface-guidelines/color)
[6](https://www.davydovconsulting.com/ios-app-development/effective-use-of-color-and-typography-in-ios-apps)
[7](https://codershigh.github.io/guidelines/ios/human-interface-guidelines/visual-design/typography/index.html)
[8](https://median.co/blog/apples-ui-dos-and-donts-typography)
[9](https://app.uxcel.com/courses/apple-hig/accessibility-inclusion-standards-812)
[10](https://app.uxcel.com/courses/apple-hig/layout-fundamentals-spacing-482)
[11](https://codershigh.github.io/guidelines/ios/human-interface-guidelines/interaction/navigation/index.html)
[12](https://developer.apple.com/videos/play/wwdc2022/10001/)
[13](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/)
[14](https://www.reddit.com/r/SwiftUI/comments/1jkbaux/is_there_a_document_that_lists_all_the_official/)
[15](https://developer.apple.com/videos/play/wwdc2025/316/)
[16](https://developer.apple.com/design/human-interface-guidelines/designing-for-watchos)
[17](https://developer.apple.com/design/human-interface-guidelines/designing-for-tvos)
[18](https://developer.apple.com/videos/play/wwdc2021/10275/)
[19](https://developer.apple.com/videos/play/wwdc2017/802/)
[20](https://developer.apple.com/design/human-interface-guidelines/components)
[21](https://developer.apple.com/design/human-interface-guidelines/inclusion)
[22](https://developer.apple.com/design/human-interface-guidelines/layout)
[23](https://developer.apple.com/videos/play/wwdc2025/356/)
[24](https://developer.apple.com/design/human-interface-guidelines/accessibility)
[25](https://developer.apple.com/design/human-interface-guidelines/foundations)
[26](https://developer.apple.com/design/tips/)
[27](https://www.apple.com/accessibility/)
[28](https://developer.apple.com/design/human-interface-guidelines/layout-and-organization)
[29](https://uxdesign.cc/did-apple-abandoned-its-own-design-heuristics-accessibility-principles-2d616ed7ace5)
[30](https://developer.apple.com/design/human-interface-guidelines/typography)
[31](https://www.youtube.com/watch?v=Kd02qR_LyA0)
[32](https://designsystems.surf/design-systems/apple)
[33](https://developer.apple.com/design/human-interface-guidelines/navigation-and-search)
[34](https://developer.apple.com/design/human-interface-guidelines/patterns)
[35](https://www.seidor.com/fr-lu/blog/apple-directives-dinterface-humaine-hig)