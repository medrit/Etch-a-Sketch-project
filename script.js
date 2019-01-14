const container = document.querySelector("#container");
const randomColor = document.querySelector("#randomColor");
const blackColor = document.querySelector("#blackColor");
const eraseColor = document.querySelector("#eraseColor");
const clearColor = document.querySelector("#clearColor");
const changeDimensions = document.querySelector("#dimensions");

let random = false;
let color = "black";
let dimensions = 10;
createGrid(dimensions);

randomColor.addEventListener('click', randomClick);
blackColor.addEventListener('click', blackClick);
eraseColor.addEventListener('click', eraseClick);
clearColor.addEventListener('click', clearClick);
changeDimensions.addEventListener('click', changeDimensionClick);

function randomClick() {
    random = true;
}
function blackClick() {
    color = "black";
    random = false;
}
function eraseClick() {
    color = "white";
    random = false;
}
function changeDimensionClick() {
    clearGrid();
    dimensions = prompt("Enter dimensions: ");
    createGrid(dimensions);
    color = "black";
}
function createGrid(boxes) {
    for (i = 0; i < boxes * boxes; i++) {
        const div = document.createElement("div");
        div.setAttribute = ('id', 'box');
        div.addEventListener('mouseover', changeColor);
        div.style.width = 500/boxes + 'px';
        div.style.height = 500/boxes + 'px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.margin = '0px';
        div.style.padding = '0px';
        div.style.display = 'inline-block';
        div.style.float = 'left';
        container.appendChild(div);
    }
}

function changeColor() {
    if(random) {
        color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    }
    this.style.backgroundColor = color;
}
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
function clearClick() {
    clearGrid()
    createGrid(changeDimensionClick());
}