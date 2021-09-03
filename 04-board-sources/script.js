const board = document.querySelector("#board"),      
      colors = ["red", "green", "pink", "aqua", "azure", "blue", "orange", "aquamarine", "blueviolet"],
      input = document.querySelector("input"),
      form = document.querySelector("form.add");

let squareNumber = 500;

drawSquares(squareNumber);

form.addEventListener("submit", (e) => {
    e.preventDefault();    
    board.innerHTML = "";
    squareNumber = input.value;
    drawSquares(squareNumber);
})

function drawSquares(squares) {
    for (let i = 0; i < squares; i++) {
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
}

function setColor(element) {
    const indexColor = Math.floor(Math.random() * colors.length)
    element.style.backgroundColor = colors[indexColor];
    element.style.boxShadow = `0 0 2px ${colors[indexColor]}, 0 0 30px ${colors[indexColor]}`
}

function removeColor(element) {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
}