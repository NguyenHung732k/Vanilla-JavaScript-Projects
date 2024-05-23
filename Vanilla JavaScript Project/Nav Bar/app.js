const navToggle = document.querySelector("#nav-toggle")
const navList = document.querySelector("nav ul")

navToggle.addEventListener("click", function () {
    navList.style.display == "block" ? navList.style.display = 'none' : navList.style.display = 'block'
    navToggle.classList.toggle('active')
})
