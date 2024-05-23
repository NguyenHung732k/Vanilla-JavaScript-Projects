const backgroundColor = document.querySelector('.color-view')
const button = document.querySelector('.color-button')
const colorName = document.querySelector('.color-name')

const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


const checkBox = document.getElementById('toggle-on')


button.addEventListener("click", function () {

    if (checkBox.checked) {
        newColor = randomHexColor()
    } else {
        newColor = randomRGBColor()
    }
    backgroundColor.style.backgroundColor = newColor
    colorName.innerHTML = newColor
    colorName.style.color = newColor
})



function randomRGBColor() {
    const r = randomNumber(256)
    const g = randomNumber(256)
    const b = randomNumber(256)
    let rgbColor = `rgb(${r},${g},${b})`

    return rgbColor

}


function randomHexColor() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hexCharacters[randomNumber(hexCharacters.length)]
    }
    return hexColor
}

function randomNumber(length) {
    return Math.floor(Math.random() * length)
}
