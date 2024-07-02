var TESTLI = document.getElementById('Documenti');

TESTLI.children[0].addEventListener('click', ()=> {
    window.navigator.vibrate(1000);
    console.warn("BZZZZZZZZZZZZZZZ");
});
