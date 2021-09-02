const board = document.querySelector("#board"),
      SQUARES_NUMBER = 500,
      colors = ["red", "green", "pink", "aqua", "azure", "blue"]

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        setColor(square);
    });

    square.addEventListener("mouseleave", () => {
        removeColor(square);
    });

    board.append(square);
}

function setColor(element) {
    const indexColor = Math.floor(Math.random() * colors.length)
    element.style.backgroundColor = colors[indexColor];
    element.style.boxShadow = `0 0 2px ${colors[indexColor]}, 0 0 20px ${colors[indexColor]}`
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
}