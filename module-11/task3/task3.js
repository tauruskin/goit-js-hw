//

class CountdownTimer {
  constructor({ selector, targetDate, days, hours, mins, secs }) {
    this.mainDiv = document.querySelector(selector);
    this.refs = {
      daysRef: this.mainDiv.querySelector(`[${days}]`),
      hoursRef: this.mainDiv.querySelector(`[${hours}]`),
      minsRef: this.mainDiv.querySelector(`[${mins}]`),
      secsRef: this.mainDiv.querySelector(`[${secs}]`),
    };
    this.futureTime = targetDate;
  }

  startInt() {
    const intId = setInterval(() => {
      const currentDate = Date.now();
      const getTime = this.futureTime - currentDate;
      if (currentDate > this.futureTime) {
        clearInterval(intId);
        this.runTimer(0);
        return;
      }
      this.runTimer(getTime);
    }, 1000);
  }

  runTimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.showTime(days, hours, mins, secs);
  }

  showTime(days, hours, mins, secs) {
    this.refs.daysRef.textContent = `${days}`;
    this.refs.hoursRef.textContent = `${hours}`;
    this.refs.minsRef.textContent = `${mins}`;
    this.refs.secsRef.textContent = `${secs}`;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Sep 17, 2020,"),
  days: 'data-value="days"',
  hours: 'data-value= "hours"',
  mins: 'data-value="mins"',
  secs: 'data-value="secs"',
});

console.log(timer.refs.minsRef);
timer.startInt();
