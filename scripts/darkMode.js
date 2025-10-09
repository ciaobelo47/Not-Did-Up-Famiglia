var darkModeBTN = document.getElementById('darkModeToggle');

darkModeBTN.addEventListener('click', () => {
    switch (darkModeBTN.children[0].innerHTML) {
        case "OFF":
            document.getElementsByTagName('html')[0].classList.remove('light');
            document.getElementById('realIFrame').contentWindow.document.getElementsByTagName('html')[0].classList.remove('light');
            document.getElementById('fullLogo').src = "imgs/fullLogo.png";
            darkModeBTN.children[0].innerHTML = "ON";
            break;

        case "ON":
            document.getElementsByTagName('html')[0].classList.add('light');
            document.getElementById('realIFrame').contentWindow.document.getElementsByTagName('html')[0].classList.add('light');
            document.getElementById('fullLogo').src = "imgs/fullLogoDark.png";
            darkModeBTN.children[0].innerHTML = "OFF";
            break;

        default:
            break;
    }
})