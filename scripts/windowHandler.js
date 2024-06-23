var liAlunno = document.getElementById('Servizi Alunno');
var liClasse = document.getElementById('Servizi Classe');
var downAlunno = liAlunno.children[1];
var downClasse = liClasse.children[1];
var overlay = document.getElementById('overlay');
var windowU = document.getElementById('windowAlunno');
var windowC = document.getElementById('windowClasse');

overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    windowU.classList.add('hidden');
    windowC.classList.add('hidden');
})

for (let i = 0; i < downAlunno.children.length; i++) {
    let b = downAlunno.children[i];
    switch (b.innerText) {
        case "Assenze/Ritardi/Uscite":
            b.addEventListener('click', () => {
                overlay.classList.remove('hidden');
                windowU.classList.remove('hidden');
            });
            break;
        default:
            break;
    }
}

for (let i = 0; i < downClasse.children.length; i++) {
    let b = downClasse.children[i];
    switch (b.innerText) {
        case "Compiti Assegnati":
            b.addEventListener('click',() => {
                overlay.classList.remove('hidden');
                windowC.classList.remove('hidden');
            })
            break;
        default:
            break;
    }
    
}

