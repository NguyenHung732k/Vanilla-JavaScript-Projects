const container = document.querySelector('.container');

container.addEventListener('click', function(event) {
    const buttons = document.querySelectorAll(".tab-button")
    const contents = document.querySelectorAll(".content")

    const id = event.target.dataset.id
    const element = document.getElementById(id)
    
    buttons.forEach(function (button) {
        button.classList.remove("active")
    })

    event.target.classList.add("active")

    contents.forEach(function (content) {
        content.classList.remove("active")
    })

    element.classList.add("active")

})
