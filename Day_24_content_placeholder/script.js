const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const authorName = document.getElementById('name');
const bylineDate = document.getElementById('date');
const readMore = document.querySelector('.btn');
const time = new Date();
const date = time.getDate();
const month = time.getMonth();
const year = time.getFullYear();
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

const animateBgs = document.querySelectorAll('.animated-bg');
const bgText = document.querySelectorAll('.animated-bg-text');

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">';
  title.innerHTML = 'Lorem ipsum, dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda autem dignissimos ratione ducimus soluta.';
  profile_img.innerHTML =
    ' <img src="https://randomuser.me/api/portraits/women/25.jpg" alt="">';
  authorName.innerHTML = 'Jane Doe';
  bylineDate.innerHTML = `${months[month]} ${date}, ${year}`;
  readMore.innerHTML = 'read more';
  animateBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  bgText.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

setTimeout(getData, 1500);
