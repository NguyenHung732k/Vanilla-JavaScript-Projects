const testimonials = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];



// Select Items
const testimonialsContainer = document.querySelector(".testimonials-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector("#person-img")
const username = document.querySelector("#username")
const role = document.querySelector("#role")
const btnPrev = document.getElementById("btn-prev")
const btnNext = document.getElementById("btn-next")
const btnRandom = document.getElementById("btn-random")
const progressDots = document.getElementById("progress-dots")





// Set Starting Item
let currentItem = 0


// 
testimonials.forEach((testimonial) => {
  const dot = document.createElement("div")
  dot.classList.add("progress-dot")
  progressDots.appendChild(dot)
})

// Display Function
function displayTestimonial() {
  const { name, job, img, text } = testimonials[currentItem]

  testimonial.innerHTML = text
  username.innerHTML = name
  role.innerHTML = job
  userImage.src = img

  updateProgressDots();
}

// Update Progress Dot
function updateProgressDots() {
  const dots = progressDots.children;
  [...dots].forEach((dot) => {
    dot.classList.remove("active");
  })
  dots[currentItem].classList.add("active");

}

// Display Item
displayTestimonial()


// Show next Person
btnNext.addEventListener("click", () => {
  currentItem === testimonials.length - 1 ? (currentItem = 0) : currentItem++
  displayTestimonial()
})

// Show prev Person
btnPrev.addEventListener("click", () => {
  currentItem === 0 ? (currentItem = testimonials.length - 1) : currentItem--
  displayTestimonial()
})

// Show randon Person
btnRandom.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * testimonials.length)
  displayTestimonial()
})
