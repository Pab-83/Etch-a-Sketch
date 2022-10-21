const grid = document.querySelector(".container");
const resize_grid = document.querySelector("button");
const input_field = document.querySelector('input');

let gridSize = 16;

function create_grid() {
    let cell_size = grid.clientWidth / gridSize;
    grid.style = "grid-template-columns: repeat(" + gridSize + "," + cell_size + "px)";
    
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
    cells.forEach(cell => cell.addEventListener( 'mouseover', function(e) {
        e.target.style.backgroundColor = "black";
    }));
};

create_grid();
resize_grid.addEventListener('click', recreate_grid);
grid.addEventListener('mouseover', brush);

