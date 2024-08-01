const inputBox = document.getElementById("input-box");
const divListe = document.getElementById("div-list");
const bouton = document.querySelector('.bouton');



// Ajoute un écouteur d'événement 'click' sur le bouton pour appeler la fonction ajoutertache
bouton.addEventListener('click', ajoutertache);


function ajoutertache(){
  // Vérifie si l'input est vide (après avoir supprimé les espaces)
  if(inputBox.value.trim() === ""){
    // Affiche une alerte si l'input est vide
    alert("Rentrez une tache a faire !!!");
  }
  else {
  
    let li = document.createElement('li');
    // Définit le texte du li comme la valeur de l'input
    li.textContent = inputBox.value;
    // Ajoute le li à la liste des tâches
    divListe.appendChild(li);
    
   
    let span = document.createElement('span');
    // Définit le contenu du span comme le caractère "×"
    span.textContent = "\u00d7";
    // Ajoute le span au li
    li.appendChild(span);
    // Sauvegarde les données
    savedata();
  }
  // Vide l'input après l'ajout de la tâche
  inputBox.value = "";
  // Sauvegarde à nouveau les données (cette ligne est redondante)
  savedata();
}

// Fonction pour gérer les interactions avec les tâches
function GererLesTaches(){
  // Ajoute un écouteur d'événement 'click' sur la liste des tâches
  divListe.addEventListener('click', (e) => {
    // Si l'élément cliqué est un LI
    if (e.target.tagName === 'LI') {
      // Bascule la classe 'checked' (pour marquer comme fait/non fait)
      e.target.classList.toggle('checked');
      // Sauvegarde les données
      savedata();
    }
    // Si l'élément cliqué est un SPAN (bouton de suppression)
    else if (e.target.tagName === 'SPAN') {
      // Demande confirmation avant de supprimer
      if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
        // Supprime l'élément parent (le LI)
        e.target.parentElement.remove();
        // Sauvegarde les données
        savedata();
      }
    }
  });


  function SupprimerTouteTache() {
    const poubelle = document.querySelector(".supprimetout");

    poubelle.addEventListener('click', (e) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer TOUTES les tâches ?")) {

            divListe.innerHTML = '';
            poubelle.hidden = true;
            savedata();
        }
    });

    // Fonction pour afficher/cacher la poubelle selon le contenu de la liste
    function PoubelleaJour() {
        poubelle.hidden = divListe.children.length === 0;
    }
    PoubelleaJour();
}

SupprimerTouteTache();

  
  inputBox.addEventListener('keypress',(e) => {
    // Si la touche pressée est "Enter"
    if(e.key === "Enter"){
      // Appelle la fonction pour ajouter une tâche
      ajoutertache();
    }
  });
}

function savedata(){
  localStorage.setItem('data', divListe.innerHTML);
}

function recupererdata(){
  divListe.innerHTML = localStorage.getItem('data');
}

recupererdata();
GererLesTaches();