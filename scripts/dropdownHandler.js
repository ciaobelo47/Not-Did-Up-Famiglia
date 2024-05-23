var liAlunno = document.getElementById('Servizi Alunno');
var liClasse = document.getElementById('Servizi Classe');
var downAlunno = liAlunno.children[1];
var downClasse = liClasse.children[1];


liAlunno.children[0].addEventListener('click', () => {
    if (downAlunno.classList.contains('show')) {
        downAlunno.classList.add('hidden');
        downAlunno.classList.remove('show');

    } else if (downAlunno.classList.contains('hidden')) {
        if (downClasse.classList.contains('show')) {
            downClasse.classList.add('hidden');
            downClasse.classList.remove('show');
            downAlunno.classList.remove('hidden');
            downAlunno.classList.add('show');

        } else {
            downAlunno.classList.remove('hidden');
            downAlunno.classList.add('show');

        }
    }
});

liClasse.children[0].addEventListener('click', () => {
    if (downClasse.classList.contains('show')) {
        downClasse.classList.add('hidden');
        downClasse.classList.remove('show');

    } else if (downClasse.classList.contains('hidden')) {
        if (downAlunno.classList.contains('show')) {
            downAlunno.classList.add('hidden');
            downAlunno.classList.remove('show');
            downClasse.classList.remove('hidden');
            downClasse.classList.add('show');

        } else {
            downClasse.classList.remove('hidden');
            downClasse.classList.add('show');

        }
    }
});
