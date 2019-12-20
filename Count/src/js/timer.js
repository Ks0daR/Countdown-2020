
const refs = {
  day: document.querySelector('#day'),
  hour: document.querySelector('#hour'),
  minute: document.querySelector('#minute'),
  secs: document.querySelector('#second'),
};

const targetTime = new Date('Jan 1, 2020 00:00:00').getTime();


function newTime() {
const dateNow = new Date().getTime();
const gap = targetTime - dateNow;

const day = Math.floor(gap / (1000 * 60 * 60 * 24));
const hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
const second = Math.floor((gap % (1000 * 60)) / 1000);

  refs.day.textContent = day.length < 1 ? `0${day}` : day;
  refs.hour.textContent = hour.length < 1 ? `0${hour}` : hour;
  refs.minute.textContent = minute.length < 1 ? `0${minute}` : minute;
  refs.secs.textContent = second.length < 1 ? `0${second}` : second;
}

setInterval(newTime, 1000);