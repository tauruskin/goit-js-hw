// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const refs = {
//   start: document.querySelector(`[data-action="start"]`),
//   stop: document.querySelector(`[data-action="stop"]`),
//   body: document.querySelector(`body`),
// };
// console.log(refs);

// let changeColorsInterval;
// refs.start.addEventListener("click", flashColors);
// refs.stop.addEventListener("click", stopFlashingColors);

// function flashColors() {
//   refs.start.removeEventListener("click", flashColors);
//   changeColorsInterval = setInterval(changeBodyColor, 1000);
// }

// function changeBodyColor() {
//   refs.body.style.backgroundColor =
//     colors[randomIntegerFromInterval(0, colors.length - 1)];
// }
// function stopFlashingColors() {
//   clearInterval(changeColorsInterval);
//   refs.start.addEventListener("click", flashColors);
// }

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
