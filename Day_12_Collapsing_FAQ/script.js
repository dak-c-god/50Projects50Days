const toggleButtons = document.querySelectorAll('.faq-toggle');
const question = document.querySelectorAll('.question');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentNode.classList.toggle('active');
  });
});
