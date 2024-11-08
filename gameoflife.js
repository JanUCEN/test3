window.addEventListener('DOMContentLoaded', start);

function start() {
    const canvas = document.getElementById('canvas');
    //do we want squares or rectangles?
    //rectangles.  So, decide the overall width and height. everything fits in the box. 
    const size = {
        rows: 20,
        cols: 10,
        width: 500,
        height: 500
    }

    const grid = generateGrid(size);
    console.table(grid)
}

function generateGrid(size) {
    const { rows, cols, width, height } = size;
    const cellW = width / cols;
    const cellH = height / rows;
    return new Array(cols).fill(new Array(rows).fill(0))
        .map((col, y) => col.map((row, x) => ({ x, y, cellW, cellH })));


}