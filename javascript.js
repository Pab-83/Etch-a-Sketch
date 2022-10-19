const grid = document.querySelector(".container");
const resize_grid = document.querySelector("button");

let gridSize = 16;

function create_grid() {
    let cell_size = grid.clientWidth / gridSize;
    
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
        cell.style.width = cell_size + "px";
        cell.style.height = cell_size + "px";
    };

    console.log(grid.clientWidth);
};

function recreate_grid() {
    const cells = document.querySelectorAll('.cell');
    const input_field = document.querySelector('input');

    if (input_field.value <= 0 || input_field.value > 64) {
        window.alert("grid size has to be between 1 and 64!");
    }
    else {
        cells.forEach(cell => cell.remove());
        gridSize = input_field.value;    
        create_grid()
    };
}

create_grid();
resize_grid.addEventListener('click', recreate_grid)


