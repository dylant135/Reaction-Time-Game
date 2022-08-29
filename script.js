const startbtn = document.getElementById('startbtn');
const display = document.getElementById('display');
const btnContainer = document.getElementById('container');
const theButton = document.querySelector('.theButton');
let start;
let time;

startbtn.addEventListener('click', startGame);
function startGame() {
    startbtn.style.display = 'none';
    theButton.style.display = 'block';
    display.innerHTML = '';
    time = 0;
    start = 0;
    theButton.classList.add('theButton');
    theButton.innerHTML = 'Dont click';
    start = new Date();
    setTimeout(timer, 3000);
}

let min = 1;
let max = 5;
function timer() {
    min = Math.ceil(min);
    max = Math.floor(max);
    time = Math.random() * (max - min) + min;
    time *= 1000;
    setTimeout(goTime, time);
    return time;
}


theButton.addEventListener('click', theClick);
function theClick() {
    if(theButton.classList[0] == 'theButton') {
        alert('You clicked to early');
    } else {
        let elapsed = new Date() - start - time - 3000;
        display.innerHTML = 'Your reaction time was ' + Math.round(elapsed) + 'ms';
        theButton.style.display = 'none';
        theButton.classList.remove('go');
        startbtn.style.display = 'block';
    }
}

function goTime() {
    theButton.textContent = 'Click';
    theButton.classList.add('go');
    theButton.classList.remove('theButton');
}
