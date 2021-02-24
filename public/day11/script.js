const insertEl = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    // console.log(event);
    insertEl.innerHTML = `
        <div class="key">
                ${event.key === ' '? 'Space' : event.key}
                <small>event.key</small>
            </div>

            <div class="key">
                ${event.keyCode}
                <small>event.keyCode</small>
            </div>

            <div class="key">
                ${event.code}
                <small>event.code</small>
            </div>
    `;
});

// https://css-tricks.com/snippets/javascript/javascript-keycodes/