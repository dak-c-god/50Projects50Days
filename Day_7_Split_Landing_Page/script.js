const boxLeft = document.querySelector('.left');
const boxRight = document.querySelector('.right');
const container = document.querySelector('.container');

boxLeft.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
boxLeft.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);

boxRight.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
boxRight.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);

boxRight.addEventListener('focusin', () =>
  container.classList.add('hover-right')
);
boxRight.addEventListener('focusout', () =>
  container.classList.remove('hover-right')
);

boxLeft.addEventListener('focusin', () =>
  container.classList.add('hover-left')
);
boxLeft.addEventListener('focusout', () =>
  container.classList.remove('hover-left')
);
