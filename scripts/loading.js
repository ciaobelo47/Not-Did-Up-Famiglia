var i = 0;

window.onload = () => {
    if (i == 0) {
        i = 1;
        var loadingDiv = document.getElementById('loadingDiv');
        var loadingBar = document.getElementById('loadingBar');
        var width = 10;
        var id = setInterval(frame, 25);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                loadingDiv.classList.add('hidden');
                i = 0;
            } else {
                width++;
                loadingBar.style.width = width + "%";
                loadingBar.innerHTML = width + "%";
            }
        }
    }
}