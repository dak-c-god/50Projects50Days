const header = document.getElementById('top-nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  let isScroll = window.scrollY;
  console.log(isScroll);
  if (isScroll > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}
