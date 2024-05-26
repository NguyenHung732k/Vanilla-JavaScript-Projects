const daysText = document.querySelector('.days')
const hoursText = document.querySelector('.hours')
const minutesText = document.querySelector('.minutes')
const secondsText = document.querySelector('.seconds')

const countDownDate = new Date("Jan 29, 2025").getTime()
const countDown = setInterval(getTimeRemaining, 1000)



function getTimeRemaining() {
    const current = new Date().getTime()

    const distance = countDownDate - current

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysText.innerHTML = days
    hoursText.innerHTML = hours
    minutesText.innerHTML = minutes
    secondsText.innerHTML = seconds


    if (distance < 0) {
        clearInterval(countDown);
        document.querySelector(".countdown-view h1").innerHTML = "Time Up";
        daysText.innerHTML = 0
        hoursText.innerHTML = 0
        minutesText.innerHTML = 0
        secondsText.innerHTML = 0
    }
}
