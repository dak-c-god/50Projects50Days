const btnSection = document.getElementById('button-container');
const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  function removeClassActive() {
    button.classList.remove('active');
  }
  const circle = document.createElement('span');

  button.addEventListener('click', function (e) {
    const xClick = e.clientX;
    const yClick = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = xClick - buttonLeft;
    const yInside = yClick - buttonTop;
    button.classList.toggle('active');
    setInterval(removeClassActive, 500);
    circle.classList.add('circle');
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 1000);
  });
  button.addEventListener('keyup', function (e) {
    circle.style.top = '50%';
    circle.style.left = '50%';
    if (e.code === 'Enter') {
      this.appendChild(circle);
    }
  });
});
