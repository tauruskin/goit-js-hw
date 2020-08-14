// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Aug 17, 2020"),
// });

const timer = function () {
  setInterval(() => {
    const targetDate = new Date("Aug 17, 2020");
    const currentDate = Date.now();
    const time = targetDate.getTime() - currentDate;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
  }, 1000);
};

timer();

const daysRef = document.querySelector(`[data-value="days"]`);
const hoursRef = document.querySelector(`[data-value="hours"]`);
const minsRef = document.querySelector(`[data-value="mins"]`);
const secsRef = document.querySelector(`[data-value="secs"]`);
