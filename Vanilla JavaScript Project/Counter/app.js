let counter = 0

const value = document.querySelector('.counter-value')
const countUp = document.querySelector('.count-up')
const countDown = document.querySelector('.count-down')
const reset = document.querySelector('.count-reset')


countUp.addEventListener('click', function () {
    counter++
    value.textContent = counter
})

countDown.addEventListener('click', function () {
    counter--
    value.textContent = counter
})

reset.addEventListener('click', function () {
    counter = 0
    value.textContent = counter
})
