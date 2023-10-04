const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const second = new Date().getSeconds();
    console.log(second);
    const secondDegrees = (second * 6) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;


    const min = new Date().getMinutes();
    const minDegrees = (min * 6) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = new Date().getHours();
    const hourDegrees = (hour * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
};

setInterval(setDate, 1000);