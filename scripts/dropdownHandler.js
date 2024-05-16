window.onload = () => {
    downBTN = document.getElementById('dropdownBTN')
    downMenuAlunno = document.getElementById('dropdown-content')

    downBTN.addEventListener('click', function() {
        if (downBTN.textContent === 'Lollo') {
            if (downMenuAlunno.classList.contains('show')) {
                downMenuAlunno.classList.add('hidden')
                downMenuAlunno.classList.remove('show')

            } else if (downMenuAlunno.classList.contains('hidden')) {
                downMenuAlunno.classList.add('show')
                downMenuAlunno.classList.remove('hidden')
                
            }
        }
    })
}