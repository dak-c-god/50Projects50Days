const numbers = document.querySelectorAll('.numbers span');
const counter = document.querySelector('.counter');
const finalMsg = document.querySelector('.final');
const replay = document.querySelector('#replay');
function resetDOM() {
  counter.classList.remove('hide');
  finalMsg.classList.remove('show');
  numbers.forEach((num) => {
    num.classList.value = '';
  });

  numbers[0].classList.add('in');
}

function runAnimation() {
  numbers.forEach((num, idx) => {
    console.log(num, idx);
    const nextToLast = numbers.length - 1;

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'go-in' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'go-out' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMsg.classList.add('show');
      }
    });
  });
}
runAnimation();

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});
