const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `<div class="key">
            <small>event.key</small>
            ${event.key === ' ' ? 'Space' : event.key}
        </div>
        <div class="key">
            <header>
                <small>event.keyCode <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features" target="_blank">[deprecated]</a></small>
                
            </header>
            ${event.keyCode === '32' ? 'Space' : event.keyCode}
        </div>
        <div class="key">
            <small>event.code</small>
            ${event.code === 'Space' ? 'Space' : event.code}
        </div>`;
});
