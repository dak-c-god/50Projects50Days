const toggleNavActive = document.getElementById('toggle');
const nav = document.getElementById('nav');
const navUl = document.getElementById('nav-content');
const navLink = document.querySelectorAll('.nav-link');

nav.classList.remove('active');
toggleNavActive.addEventListener('click', () => {
  nav.classList.toggle('active');
  if (nav.classList.contains('active')) {
    navUl.style.zIndex = '1';
  } else {
    navUl.style.zIndex = '-1';
  }
});
