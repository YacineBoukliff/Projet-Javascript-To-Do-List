const inputBox = document.getElementById("input-box");
const divListe = document.getElementById("div-list");
const bouton = document.querySelector('.bouton');
const poubelle = document.querySelector(".supprimetout");

bouton.addEventListener('click', ajoutertache);

function ajoutertache(){
  if(inputBox.value.trim() === ""){
    alert("Rentrez une tache a faire !!!");
  } else {
    let li = document.createElement('li');
    li.textContent = inputBox.value;
    divListe.appendChild(li);
    
    let span = document.createElement('span');
    span.textContent = "\u00d7";
    li.appendChild(span);
    
    savedata();
    PoubelleaJour(); // Appel ici
  }
  inputBox.value = "";
}

function GererLesTaches(){
  divListe.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      savedata();
    } else if (e.target.tagName === 'SPAN') {
      if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
        e.target.parentElement.remove();
        savedata();
        PoubelleaJour(); // Appel ici
      }
    }
  });

  inputBox.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
      ajoutertache();
    }
  });
}

function SupprimerTouteTache() {
  poubelle.addEventListener('click', (e) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer TOUTES les tâches ?")) {
      divListe.innerHTML = '';
      savedata();
      PoubelleaJour(); // Appel ici
    }
  });
}

function PoubelleaJour() {
  poubelle.hidden = divListe.children.length === 0;
}

function savedata(){
  localStorage.setItem('data', divListe.innerHTML);
}

function recupererdata(){
  divListe.innerHTML = localStorage.getItem('data');
  PoubelleaJour(); // Appel ici
}

recupererdata();
GererLesTaches();
SupprimerTouteTache();