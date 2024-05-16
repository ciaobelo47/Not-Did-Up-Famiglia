window.onload = () => {
    loadingDiv = document.getElementById('loadingDiv')
    setTimeout(() => {
        loadingDiv.classList.add('hidden')
    }, 3000);
}