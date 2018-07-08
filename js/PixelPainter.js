var palette = [
    '#001308', '#001308', '#1e272c', '#0b1b1a', '#17241e', '#450c41', '#61275d', '#86b5d5', '#2c7f84', '#224a72', '#83b5bd', '#b9e8ec', '#fdfce6', '#f0ddbf', '#d88282', '#ce9e55', '#ffdcb0', '#b5ccba', '#8ab25b', '#256a74',
    '#e8683c', '#f2c078', '#faedca', '#c1dbb3', '#89d8be', 
    '#e7d1e0', '#f9def0', '#fbe8f6', '#f43433', 'f4eef4'
]

// Container for the color swatches 
var colorPalette = document.createElement('div');
colorPalette.id = 'palette';
document.body.appendChild(colorPalette);

// Creating boxes for the swatches 
// Need to find a way to add in as many as it needs
// for (var i = 0; i < 55; i++) {
//     var paletteSwatches = document.createElement('div');
//     paletteSwatches.className = 'swatches';
//     colorPalette.appendChild(paletteSwatches);
// }

//Trying something else: 
for (var i = 0; i < palette.length; i++) {
    var paletteSwatches = document.createElement('div');
    paletteSwatches.className = 'swatches';
    paletteSwatches.style.backgroundColor = palette[i];
    colorPalette.appendChild(paletteSwatches);
    // console.log(palette[i]);

    // var swatchPicker = document.getElementsByClassName('swatches');
    // for (var j = 0; j < swatchPicker.length; j++) {
    //     swatchPicker[j].addEventListener('click', grabColorSwatch);
    // }
    // function grabColorSwatch (event) {
    //     var grabColor = this.querySelectorAll('.palette')[0];
    //     console.log(grabColor);
    // }
}

//Eraser Button
var eraserButton = document.createElement('button');
eraserButton.id = 'eraser';
eraserButton.innerHTML = 'Eraser';
colorPalette.appendChild(eraserButton);

//Clear Button
var clearButton = document.createElement('button');
clearButton.id = 'clear';
clearButton.innerHTML = 'Clear';
colorPalette.appendChild(clearButton);


// Container for the canvas pixels
var paintCanvas = document.createElement('div');
paintCanvas.id = 'canvas';
document.body.appendChild(paintCanvas);

for (row = 0; row <= 10; row++) {
    var rowPixels = document.createElement('div');
    rowPixels.className = 'row';
    paintCanvas.appendChild(rowPixels);

    for (columns = 0; columns <= 10; columns++){
        var columnPixels = document.createElement('div');
        columnPixels.className = 'column';
        paintCanvas.appendChild(columnPixels);
    }
}



//Use this to get the dimensions of a certain box/div
//console.log(box.getBoundingClientRect()); 
