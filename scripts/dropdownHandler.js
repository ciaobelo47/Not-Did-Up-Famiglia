var liAlunno = document.getElementById('Servizi Alunno');
var liClasse = document.getElementById('Servizi Classe');
var liDocumenti = document.getElementById('Documenti');
var downAlunno = liAlunno.children[1];
var downClasse = liClasse.children[1];
var downDocumenti = liDocumenti.children[1];


liAlunno.children[0].addEventListener('click', () => {
    if (downClasse.classList.contains('show') || downDocumenti.classList.contains('show')) {
        downClasse.classList.replace('show', 'hidden');
        downDocumenti.classList.replace('show', 'hidden');

    }

    if (downAlunno.classList.contains('hidden')) {
        downAlunno.classList.replace('hidden', 'show');

    } else {
        downAlunno.classList.replace('show', 'hidden');

    }
});

liClasse.children[0].addEventListener('click', () => {
    if (downAlunno.classList.contains('show') || downDocumenti.classList.contains('show')) {
        downAlunno.classList.replace('show', 'hidden');
        downDocumenti.classList.replace('show', 'hidden');

    }

    if (downClasse.classList.contains('hidden')) {
        downClasse.classList.replace('hidden', 'show');

    } else {
        downClasse.classList.replace('show', 'hidden');

    }
});

liDocumenti.children[0].addEventListener('click', () => {
    if (downAlunno.classList.contains('show') || downClasse.classList.contains('show')) {
        downAlunno.classList.replace('show', 'hidden');
        downClasse.classList.replace('show', 'hidden');

    }

    if (downDocumenti.classList.contains('show')) {
        downDocumenti.classList.replace('show', 'hidden');

    } else {
        downDocumenti.classList.replace('hidden', 'show');

    }
})
