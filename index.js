const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand = document.querySelector(".hand");
const transitionClock = `all 0.10s cubic-bezier(0.28, 2.08, 0.58, 1)`;

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  console.log(hours, minutes, seconds);

  if (seconds === 0){
    secondHand.style.transition = `none`;
  }
  if (minutes === 0){
    minHand.style.transition = `none`;
  }
  if (hours === 0){
    hourHand.style.transition = `none`;
  }

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
