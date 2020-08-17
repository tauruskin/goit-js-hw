//

const timer = {
  start() {
    const targetDate = new Date("Sep 17, 2020");
    setInterval(() => {
      const currentDate = Date.now();
      const getTime = targetDate - currentDate;
      updateTimer(getTime);
    }, 1000);
  },
};
timer.start();

function updateTimer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.daysRef.textContent = `${days}`;
  refs.hoursRef.textContent = `${hours}`;
  refs.minsRef.textContent = `${mins}`;
  refs.secsRef.textContent = `${secs}`;
}
function pad(value) {
  return String(value).padStart(2, "0");
}

const refs = {
  daysRef: document.querySelector('span[data-value="days"]'),
  hoursRef: document.querySelector('span[data-value="hours"]'),
  minsRef: document.querySelector('span[data-value="mins"]'),
  secsRef: document.querySelector('span[data-value="secs"]'),
};
