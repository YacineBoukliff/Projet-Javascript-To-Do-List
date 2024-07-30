const inputBox = document.getElementById("input-box");
const divListe = document.getElementById("div-list");
const bouton = document.querySelector('.bouton')

bouton.addEventListener('click', ajoutertache)

function ajoutertache(){
  if(inputBox.value.trim() === ""){
    alert("Rentrez une tache a faire !!!")
  }

  else {
    let li = document.createElement('liste')
    li.textContent = inputBox.value
    console.log(li)
    divListe.appendChild(li)
    
    let span = document.createElement('span')
    span.textContent = "\u00d7";
    li.appendChild(span)
    savedata()
  }
  inputBox.value = ""
  savedata()
}

divListe.addEventListener('click',(e)=> {
  if( e.target.tagName === 'LISTE'){
    e.target.classList.toggle('checked')
    savedata()
  }

  else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove()
    savedata()
  }
})

inputBox.addEventListener('keypress',(e) => {
  if(e.key === "Enter"){
    ajoutertache()
  }
})


function savedata(){
  localStorage.setItem('data',divListe.innerHTML)
}

function recupererdata(){
  divListe.innerHTML = localStorage.getItem('data')
}

recupererdata()