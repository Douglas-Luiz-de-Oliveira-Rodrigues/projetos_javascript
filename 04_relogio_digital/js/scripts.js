const clockElement = document.querySelector(".clock");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

function updateClock() {
    const now = new Date();

    hoursElement.textContent = String(now.getHours()).padStart(2, "0");
    minutesElement.textContent = String(now.getMinutes()).padStart(2, "0");
    secondsElement.textContent = String(now.getSeconds()).padStart(2, "0");
}

updateClock();
setInterval(updateClock, 1000);