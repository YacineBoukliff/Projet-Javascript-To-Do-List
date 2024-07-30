# Projet Javascript To-Do-List

Bien sûr, je vais vous fournir une documentation simple et claire des étapes de votre code pour votre application de liste de tâches. Cette documentation vous aidera à comprendre et à vous rappeler ce que vous avez fait, même après un certain temps.
Documentation de l'application To-Do List
1. Structure HTML (todolistv2.html)
La structure HTML est simple et utilise des classes pour le style et la structure :

Un conteneur principal avec la classe container
À l'intérieur, un div avec la classe todo-app
Un titre "To Do List" avec une icône
Une zone de saisie dans un div avec la classe row

2. Style CSS (todolistv2.css)
Le fichier CSS définit l'apparence de l'application :

Réinitialisation des marges et du box-sizing pour tous les éléments
Création d'un arrière-plan dégradé pour le conteneur principal
Stylisation de la zone de l'application (.todo-app)
Mise en forme du titre et de l'icône
Stylisation de la zone de saisie et du bouton
Formatage des éléments de la liste (li)
Ajout d'icônes pour les tâches cochées et non cochées
Stylisation du bouton de suppression (span)

3. Fonctionnalités JavaScript (todolistv2.js)
Le JavaScript gère l'interactivité de l'application :

Sélection des éléments du DOM nécessaires
Fonction ajoutertache() :

Vérifie si l'entrée n'est pas vide
Crée un nouvel élément de liste (li) avec le texte saisi
Ajoute un bouton de suppression (span) à chaque élément
Sauvegarde les données


Gestion des événements :

Clic sur le bouton pour ajouter une tâche
Clic sur un élément de la liste pour le marquer comme terminé
Clic sur le bouton de suppression pour retirer une tâche
Appui sur "Entrée" pour ajouter une tâche


Fonctions de sauvegarde et de récupération des données :

savedata() : sauvegarde la liste dans le localStorage
recupererdata() : récupère et affiche les données sauvegardées au chargement de la page



Fonctionnement général

L'utilisateur peut ajouter une tâche en la saisissant et en cliquant sur le bouton ou en appuyant sur Entrée.
Les tâches s'affichent dans une liste.
L'utilisateur peut marquer une tâche comme terminée en cliquant dessus.
Les tâches peuvent être supprimées en cliquant sur le bouton "×".
La liste est sauvegardée automatiquement et rechargée au rafraîchissement de la page.
 
