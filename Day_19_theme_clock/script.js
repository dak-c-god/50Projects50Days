const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const millisecEl = document.querySelector('.millisecond');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
const days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'Janurary',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'October',
  'September',
  'November',
  'December',
];

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  let day = time.getDay();
  const date = time.getDate();
  const year = time.getFullYear();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const milliseconds = time.getMilliseconds();
  const amPm = hours >= 12 ? 'p.m.' : 'a.m.';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;
  millisecEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    milliseconds,
    0,
    1000,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${amPm}`;
  if ((day = days.length)) {
    day = days.length - 1;
  } else {
    day = time.getDay;
  }
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span>${date}</span>, ${year}`;
}

setTime();
setInterval(setTime, 1);

function checkTime() {
  const time = new Date();
  const hours = time.getHours();
  let evening = 'yes';

  console.log(hours);

  if (hours <= 7) {
    evening = 'yes';
  } else if (hours >= 18) {
    evening = 'yes';
  } else {
    evening = 'no';
  }

  if (evening === 'yes') {
    html.classList.add('dark');
    toggle.innerHTML = `<i class="fas light fa-lightbulb"></i>Light Mode`;
  } else {
    html.classList.remove('dark');
    toggle.innerHTML = `<i class="fas fa-moon"></i>Dark Mode`;
  }
}

toggle.addEventListener('click', (e) => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = `<i class="fas fa-moon"></i>Dark Mode`;
  } else {
    html.classList.add('dark');
    e.target.innerHTML = `<i class="fas  light fa-lightbulb"></i>Light Mode`;
  }
});

checkTime();
