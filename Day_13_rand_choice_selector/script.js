const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

const createTags = (input) => {
  const tags = input
    .split(', ' && ',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  console.log(tags);

  tagsEl.innerHTML = '';
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};
const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function removeHighlight(tag) {
  tag.classList.remove('highlight');
}
const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);
    setTimeout(() => {
      removeHighlight(randomTag);
    }, 90);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randTag = pickRandomTag();
      highlightTag(randTag);
    }, 100);
  }, times * 100);
};
textarea.addEventListener('keyup', (event) => {
  createTags(event.target.value);

  if (event.key === 'Enter') {
    setTimeout(() => {
      event.target.value = '';
    }, 10);

    randomSelect();
  }
});
