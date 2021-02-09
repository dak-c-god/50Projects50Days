const loveMe = document.querySelector('.love-me');
const times = document.querySelector('#times');
const heart = document.createElement('i');
heart.classList.add('fas');
heart.classList.add('fa-heart');

let clickTime = 0;
let timesClicked = 0;

const createHeart = (e) => {
  const xClick = e.clientX;
  const yClick = e.clientY;

  const xOffset = loveMe.offsetLeft;
  const yOffset = loveMe.offsetTop;

  const xInside = xClick - xOffset;
  const yInside = yClick - yOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  console.log(xClick, yClick, xOffset, yOffset, e.target);

  times.innerHTML = ++timesClicked;
  setTimeout(() => heart.remove(), 1000);
};

loveMe.addEventListener('click', (e) => createHeart(e));
loveMe.addEventListener('dblclick', (e) => createHeart(e));

loveMe.addEventListener('keyup', function (e) {
  heart.style.top = '50%';
  heart.style.left = '50%';
  if (e.code === 'Enter') {
    this.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
  times.innerHTML = ++timesClicked;
});
