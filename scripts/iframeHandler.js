var buttonLis = document.getElementsByTagName('button');
var iframe = document.getElementById('realIFrame')
var goodButtonLis = new Array();

// pulizia pulsanti inutili
for (let i = 0; i < buttonLis.length; i++) {
    const btn = buttonLis.item(i);

    if (btn.classList.length < 1) {
        if (!(btn.id == "darkModeToggle" || btn.innerHTML.toLocaleLowerCase() == "logout")) {
            goodButtonLis.push(btn);
        }
    }
}

// event listener per ogni pulsante
goodButtonLis.forEach(btn => {
    btn.addEventListener('click', () => {
        iframe.src = 'iframes/' + btn.innerHTML.toLocaleLowerCase() + '.html';
        downAlunno.classList.replace('show', 'hiddenBTN');
        downClasse.classList.replace('show', 'hiddenBTN');
        downDocumenti.classList.replace('show', 'hiddenBTN');
    })
})