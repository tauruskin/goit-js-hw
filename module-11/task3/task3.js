class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.id = document.querySelector(selector);
    this.refs = {
      days: this.id.querySelector(`[data-value="days"]`),
      hours: this.id.querySelector(`[data-value="hours"]`),
      mins: this.id.querySelector(`[data-value="mins"]`),
      secs: this.id.querySelector(`[data-value="secs"]`),
    };
    this.time = targetDate.getTime();
    setInterval(this.counter.bind(this), 1000);
  }

  //  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
  //  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)

  counter() {
    if (this.time - Date.now() > 0) {
      this.refs.days.textContent = Math.floor(
        (this.time - Date.now()) / (1000 * 60 * 60 * 24)
      )

        //  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
        //  * остатка % и делим его на количество миллисекунд в одном часе
        //  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)

        .toString()
        .padStart(2, "0");
      this.refs.hours.textContent = Math.floor(
        ((this.time - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )

        //  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
        //  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)

        .toString()
        .padStart(2, "0");
      this.refs.mins.textContent = Math.floor(
        ((this.time - Date.now()) % (1000 * 60 * 60)) / (1000 * 60)
      )

        //  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
        //  * миллисекунд в одной секунде (1000)

        .toString()
        .padStart(2, "0");
      this.refs.secs.textContent = Math.floor(
        ((this.time - Date.now()) % (1000 * 60)) / 1000
      )

        .toString()
        .padStart(2, "0");
    } else {
      this.refs.days.textContent = "00";
      this.refs.hours.textContent = "00";
      this.refs.mins.textContent = "00";
      this.refs.secs.textContent = "00";
    }
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Aug 17, 2020"),
});
