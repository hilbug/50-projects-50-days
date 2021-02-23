
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
        
}

// USING .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke;
//         });
// }



// Joke API: https://icanhazdadjoke.com/
// Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API