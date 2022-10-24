const grid = document.querySelector(".container");

const resize_grid = document.querySelector("#accept");
const clear = document.querySelector("#clear");

const input_field = document.querySelector('#size');
const rainbow_check = document.querySelector('#rainbow');

let gridSize = 16;


function random_number_gen(min, max) {
    return Math.floor(Math.random() * (max - min));
}

function create_grid() {
    let cell_size = grid.clientWidth / gridSize;
    let columns = "grid-template-columns: repeat(" + gridSize + "," + cell_size + "px)";
    let rows = "grid-template-rows: repeat(" + gridSize + "," + cell_size + "px)";
    grid.style = columns + ";" + rows;

    for (let i = 1; i <= gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
        cell.style.width = cell_size + "px";
        cell.style.height = cell_size + "px";
    };
};

function recreate_grid() {
    const cells = document.querySelectorAll('.cell');

    if (input_field.value <= 0 || input_field.value > 64) {
        window.alert("grid size has to be between 1 and 64!");
    }
    else {
        cells.forEach(cell => cell.remove());
        gridSize = input_field.value;    
        create_grid()
    };
};

function brush() {
    const cells = document.querySelectorAll('.cell');
    let red = random_number_gen(0, 255);
    let blue = random_number_gen(0, 255);
    let green = random_number_gen(0, 255);
    if (!rainbow_check.checked) {
           cells.forEach(cell => cell.addEventListener( 'mouseover', function(e) {
            e.target.style.backgroundColor = "black";
        }));
    }
    else {
        cells.forEach(cell => cell.addEventListener( 'mouseover', function(e) {
        e.target.style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";
    }));
    };
};

function clear_grid() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => cell.style.backgroundColor = "white");
};

create_grid();
resize_grid.addEventListener('click', recreate_grid);
clear.addEventListener('click', clear_grid);
grid.addEventListener('mouseover', brush);

