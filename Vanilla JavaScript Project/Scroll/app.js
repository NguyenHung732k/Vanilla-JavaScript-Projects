const navToggle = document.querySelector("#nav-toggle")
const navList = document.querySelector("nav ul")

const linksContainer = document.querySelector(".list-container");
const links = document.querySelector(".nav-list");


const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()

navToggle.addEventListener("click", function () {
    navToggle.classList.toggle('active')
    navList.classList.toggle('show-list')
    // navList.style.display == "block" ? navList.style.display = 'none' : navList.style.display = 'block'
})

const navbar = document.querySelector(".nav-container")
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function () {
    const scrollHeight = window.scrollY
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav")
    } else {
        navbar.classList.remove("fixed-nav")
    }

    if (scrollHeight > 500) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
})


const scrollLinks = document.querySelectorAll(".scroll-link")


scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {

        e.preventDefault()

        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 72) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        })

        linksContainer.style.height = 0;
    });
});

