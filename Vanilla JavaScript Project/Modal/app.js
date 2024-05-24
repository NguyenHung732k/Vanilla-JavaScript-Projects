const button = document.querySelector('#modal-button')
const card = document.querySelector('#card')
const close = document.querySelector('#close')

button.addEventListener('click', function() {
    card.style.display = 'block'
    button.style.display = 'none'
})

close.addEventListener('click', function() {
    card.style.display = 'none'
    button.style.display = 'block'
})