# Application To-Do List

Une application simple de liste de tâches réalisée avec HTML, CSS et JavaScript.

## Structure du projet

Le projet se compose de trois fichiers principaux :

1. `todolistv2.html` - Structure HTML
2. `todolistv2.css` - Styles CSS
3. `todolistv2.js` - Fonctionnalités JavaScript

## Fonctionnalités

- Ajouter des tâches à la liste
- Marquer les tâches comme terminées
- Supprimer des tâches
- Sauvegarde automatique des tâches dans le localStorage
- Interface utilisateur responsive et attrayante

## Détails techniques

### 1. Structure HTML (todolistv2.html)

- Conteneur principal avec classe `container`
- Div interne avec classe `todo-app`
- Titre "To Do List" avec icône
- Zone de saisie dans un div avec classe `row`

### 2. Style CSS (todolistv2.css)

- Réinitialisation des styles par défaut
- Arrière-plan dégradé pour le conteneur principal
- Stylisation de la zone d'application
- Mise en forme du titre, de l'icône, de la zone de saisie et du bouton
- Formatage des éléments de la liste avec icônes pour les tâches cochées/non cochées
- Style du bouton de suppression

### 3. Fonctionnalités JavaScript (todolistv2.js)

- Fonction `ajoutertache()` pour ajouter de nouvelles tâches
- Gestion des événements :
  - Clic sur le bouton d'ajout
  - Clic sur les éléments de la liste pour les marquer comme terminés
  - Clic sur le bouton de suppression
  - Appui sur "Entrée" pour ajouter une tâche
- Fonctions `savedata()` et `recupererdata()` pour la persistance des données

## Utilisation

1. Ouvrez le fichier `todolistv2.html` dans un navigateur web.
2. Saisissez une tâche dans le champ de texte.
3. Cliquez sur le bouton "Ajouter" ou appuyez sur Entrée pour ajouter la tâche.
4. Cliquez sur une tâche pour la marquer comme terminée.
5. Cliquez sur le "×" à côté d'une tâche pour la supprimer.

Les tâches sont automatiquement sauvegardées et seront rechargées lors de la prochaine ouverture de l'application.

## Améliorations possibles

- Ajout de catégories pour les tâches
- Fonction de tri des tâches
- Ajout de dates d'échéance pour les tâches
- Synchronisation avec un backend pour sauvegarder les données en ligne