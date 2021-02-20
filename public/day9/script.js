function Movie(id, btntext, name) {
    this.id = id;
    this.btntext = btntext;
    this.movieName = name;
}

const movies = [
    new Movie('movie1','Movie 1','Office Space'),
    new Movie('movie2','Movie 2','Ghostbusters'),
    new Movie('movie3','Movie 3','American Pie'),
    new Movie('movie4','Movie 4','Dead Poets Society'),
    new Movie('movie5','Movie 5','Back to the Future'),
    new Movie('movie6','Movie 6',"Ferris Bueller's Day off")
];

movies.forEach(movie => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    
    btn.innerText = movie.btntext;

    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(movie.id).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    movies.forEach(movie => {
        const sound = document.getElementById(movie.id);
        sound.pause();
        sound.currentTime = 0;
    });
}