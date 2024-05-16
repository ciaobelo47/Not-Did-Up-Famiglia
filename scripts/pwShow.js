window.onload = () => {
    const pwButton = document.getElementById('showPW')
    pwImg = document.getElementById('showImg')
    pwInput = document.getElementById('pwInput')

    pwButton.addEventListener('click', function() {
        if (pwInput.type === 'password'){
            pwInput.type = 'text'
            pwImg.src = './imgs/not_show.png'
        } else {
            pwInput.type = 'password'
            pwImg.src = './imgs/show.png'
        }
    })
    
}
