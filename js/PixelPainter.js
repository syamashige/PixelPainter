
const palette = [
    '#001308', '#001308', '#1e272c', '#0b1b1a', '#17241e',
    '#450c41', '#61275d', '#86b5d5', '#2c7f84', '#224a72', 
    '#83b5bd', '#b9e8ec', '#fdfce6', '#f0ddbf', '#d88282', 
    '#ce9e55', '#ffdcb0', '#b5ccba', '#8ab25b', '#256a74',
    '#e8683c', '#f2c078', '#faedca', '#c1dbb3', '#89d8be', 
    '#e7d1e0', '#f9def0', '#fbe8f6', '#f43433', '#f4eef4',

]
//Add paintbrush cursor to the body 
// document.body.style.cursor = "url('/assets/paintbrush_icon.png'), auto"

let paletteCollector = null;

let paletteBackground = document.createElement('img');
paletteBackground.id = "paletteImage";
paletteBackground.src = "/assets/color_palette.png";
document.body.appendChild(paletteBackground);

// Container for the color swatches 
let colorPalette = document.createElement('div');
colorPalette.id = 'colors';
document.body.appendChild(colorPalette);


//Trying something else: 
for (let i = 0; i < palette.length ; i++) {
    let paletteSwatches = document.createElement('div');
    paletteSwatches.className = 'swatches';
    // paletteSwatches.innerHTML = palette[i];
    paletteSwatches.style.backgroundColor = palette[i];
    colorPalette.appendChild(paletteSwatches);
    paletteSwatches.addEventListener('click', grabColorSwatch);
}

//Grab the color and store it in the Palette Collector
let swatchPicker = document.getElementsByClassName('swatches');
for (let j = 0; j < swatchPicker.length; j++) {
    swatchPicker[j].addEventListener('click', grabColorSwatch);
}
function grabColorSwatch() {
    console.log('pick color');
    // console.log(palette[i]);
    // this.style.backgroundColor = "white"; //testing
    document.body.style.cursor = "url('/assets/paintbrush_icon.png'), auto";
    paletteCollector = this.style.backgroundColor;
    console.log(paletteCollector);
}


//Container for the canvas pixels
let paintCanvas = document.createElement('div');
paintCanvas.id = 'canvas';
document.body.appendChild(paintCanvas);

//Create the pixel boxes
const pixelBoxes = 475;
for (let j = 0; j < pixelBoxes; j++) {
    let thePixels = document.createElement('div');
    thePixels.className = 'pixels';
    paintCanvas.appendChild(thePixels);
}

//Add color to the pixel
let pixelListener = document.getElementsByClassName('pixels');
for (let j = 0; j < pixelListener.length; j++) {
    pixelListener[j].addEventListener ('click', addColor);
}

//Moved the pixel testing listener outside of the for loop 
function addColor () {
    console.log('add color');
    this.style.backgroundColor = paletteCollector;
    this.style.borderColor = paletteCollector;
}

//Eraser Button
let eraserButton = document.createElement('button');
eraserButton.id = 'eraser';
eraserButton.innerHTML = 'Eraser';
colorPalette.appendChild(eraserButton);
eraserButton.addEventListener('click', eraseColor);

function eraseColor() {
    console.log('eraser is go')
    paletteCollector = null;
}
document.getElementById('eraser').addEventListener('click', showEraserIcon); 

//Change the cursor to an eraser on click
function showEraserIcon() {
    console.log('eraser cursor test');
    document.body.style.cursor = "url('/assets/eraser_icon.png'), auto";  
}


//Clear Button
let clearButton = document.createElement('button');
clearButton.id = 'clear';
clearButton.innerHTML = 'Clear';
colorPalette.appendChild(clearButton);
clearButton.addEventListener('click', clearCanvas);

//Function to clear the canvas
function clearCanvas() {
    console.log('clear is a go');
    let clearingPixels = document.getElementsByClassName('pixels');
    for (let i = 0; i < clearingPixels.length; i++) {
        clearingPixels[i].style.backgroundColor = null;
        clearingPixels[i].style.borderColor = "grey";
        document.body.style.cursor = "default";
    }
}

//Use this to get the dimensions of a certain box/div
//console.log(box.getBoundingClientRect()); 
