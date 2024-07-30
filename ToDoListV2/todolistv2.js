const inputBox = document.getElementById("input-box");
const divListe = document.getElementById("div-list");
const bouton = document.querySelector('.bouton')

bouton.addEventListener('click', ajoutertache)

function ajoutertache(){
  if(inputBox.value.trim() === ""){
    alert("Rentrez une tache a faire !!!")
  }

  else {
    let li = document.createElement('li')
    li.textContent = inputBox.value
    divListe.appendChild(li)
    
    let span = document.createElement('span')
    span.textContent = "\u00d7";
    li.appendChild(span)
    savedata()
  }
  inputBox.value = ""
  savedata()
}

function GererLesTaches(){
  divListe.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      savedata()
    }
    else if (e.target.tagName === 'SPAN') {
      // Créer et afficher la boîte de dialogue de confirmation
      if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
        e.target.parentElement.remove()
        savedata()
      }
    }
  })
  
  inputBox.addEventListener('keypress',(e) => {
    if(e.key === "Enter"){
      ajoutertache()
    }
  })
}




function savedata(){
  localStorage.setItem('data',divListe.innerHTML)
}

function recupererdata(){
  divListe.innerHTML = localStorage.getItem('data')
}

recupererdata()

GererLesTaches()



