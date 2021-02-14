const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);
// 30 milliseconds

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Scale function:
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// Opacty won't be load, beause it goes from 0 to 1 - start fully opaque 1 to 0. Map range of numbers 0 to 100 to go from 1 to 0 in same amount of time.  map range of numbers to another range of numbers - mapping 0 to 100 to "0 to 1"
