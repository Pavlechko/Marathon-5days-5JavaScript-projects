"use strict";

const startBtn = document.querySelector("#start"),
      screens = document.querySelectorAll(".screen"),
      timeList = document.querySelector("#time-list"),
      colors = ["red", "green", "pink", "aqua", "azure", "blue", "orange", "aquamarine", "blueviolet"],
      timeEl = document.querySelector("#time"),
      board = document.querySelector(".board");

let time = 0,
    score = 0;

startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("time-btn")) {
        time = parseInt(event.target.getAttribute("data-time"));
        screens[1].classList.add("up");
        startGame();
    }
});

board.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        score++;
        console.log(event.target);        
        event.target.remove();
        createRandomCircle();
    }    
})

function startGame() {
    setInterval(descreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function descreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;

        if (current < 10) {
            current = `0${current}`
        }
        setTime(current);
    }        
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.classList.add("hide");
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`; 
}

function createRandomCircle() {
    const circle = document.createElement("div"),
          size = getRandomNumber(10, 60),
          {width, height} = board.getBoundingClientRect(),
          x = getRandomNumber(0, width - size),
          y = getRandomNumber(0, height - size);

    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    setColor(circle);

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function setColor(element) {
    const indexColor = Math.floor(Math.random() * colors.length)
    element.style.backgroundColor = colors[indexColor];
    element.style.boxShadow = `0 0 2px ${colors[indexColor]}, 0 0 20px ${colors[indexColor]}`
}