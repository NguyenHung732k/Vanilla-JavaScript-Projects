const items = document.querySelectorAll('.accordion-menu')

items.forEach(function (item) {
    const arrow = item.querySelector('.arrow')
    const content = item.querySelector('.content')

    item.addEventListener('click', function () {
        arrow.classList.toggle('active')
        content.classList.toggle("show-text")
    })

})
