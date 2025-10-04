var liAlunno = document.getElementById('Servizi Alunno');
var liClasse = document.getElementById('Servizi Classe');
var liDocumenti = document.getElementById('Documenti');
var liAccount = document.getElementById('account');
var downAlunno = liAlunno.children[1];
var downClasse = liClasse.children[1];
var downDocumenti = liDocumenti.children[1];
var downAccount = liAccount.children[1];


liAlunno.children[0].addEventListener('click', () => {
    if (downClasse.classList.contains('show') || downDocumenti.classList.contains('show')) {
        downClasse.classList.replace('show', 'hiddenBTN');
        downDocumenti.classList.replace('show', 'hiddenBTN');

    }

    if (downAlunno.classList.contains('hiddenBTN')) {
        downAlunno.classList.replace('hiddenBTN', 'show');

    } else {
        downAlunno.classList.replace('show', 'hiddenBTN');

    }
});

liClasse.children[0].addEventListener('click', () => {
    if (downAlunno.classList.contains('show') || downDocumenti.classList.contains('show')) {
        downAlunno.classList.replace('show', 'hiddenBTN');
        downDocumenti.classList.replace('show', 'hiddenBTN');

    }

    if (downClasse.classList.contains('hiddenBTN')) {
        downClasse.classList.replace('hiddenBTN', 'show');

    } else {
        downClasse.classList.replace('show', 'hiddenBTN');

    }
});

liDocumenti.children[0].addEventListener('click', () => {
    if (downAlunno.classList.contains('show') || downClasse.classList.contains('show')) {
        downAlunno.classList.replace('show', 'hiddenBTN');
        downClasse.classList.replace('show', 'hiddenBTN');

    }

    if (downDocumenti.classList.contains('show')) {
        downDocumenti.classList.replace('show', 'hiddenBTN');

    } else {
        downDocumenti.classList.replace('hiddenBTN', 'show');

    }
})

liAccount.children[0].addEventListener('click', () => {
    if (downAccount.classList.contains('show')) {
        downAccount.classList.replace('show', 'hiddenBTN');
    } else {
        downAccount.classList.replace('hiddenBTN', 'show');
    }
})
