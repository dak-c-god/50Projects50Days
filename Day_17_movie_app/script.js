let API_URL =
  'https://api.themoviedb.org/3/discover/movie/?&sort_by=popularity.desc&api_key=7fe018b3a0daaed88ce8264eb9e0429f';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=7fe018b3a0daaed88ce8264eb9e0429f&query="';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('site-main');
const home = document.getElementById('home');

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
            <img tabindex='0' src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3 class = "truncate">${title}</h3>
                <span class="${getClassByRating(
                  vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                    <p class="truncate">${overview}</p>
                </div>`;

    main.appendChild(movieEl);
  });
}

function getClassByRating(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}
async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  showMovies(data.results);
}
//Get inital movies
getMovies(API_URL);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm);

    search.value = '';
  } else {
    window.location.reload;
  }
});

home.addEventListener('click', (e) => {
  getMovies(API_URL);
});
