
//Array of colors
const palette = [
    '#641516', '#7b241C', '#922B21', '#A93226', '#C0392B', '#CD6155', '#D98880', '#E6B0AA', 
    // '#78281F', '#943126', '#B03A2E', '#CB4335', '#E74C3C', '#EC7063', '#F1948A', '#F5B7B1',
    '#784212', '#935116', '#AF601A', '#CA6F1E', '#E67E22', '#EB984E', '#F0B27A', '#F5CBA7', 
    // '#7E5109', '#9C6406', '#B9770E', '#D68910', '#F39C12', '#F5B041', '#F8C471', '#FAD7A0', 
    '#7D6608', '#9A7D0A', '#B7950B', '#D4AC0D', '#F1C40F', '#F4D03F', '#F7DC6F', '#F9E79F', 
    '#145A32', '#196F3D', '#1E8449', '#229954', '#27AE60', '#52BE80', '#7DCEA0', '#A9DFBF', 
    // '#0E6251', '#117864', '#148F77', '#17A589', '#1ABC9C', '#48C9B0', '#76D7C4', '#A3E4D7', 
    '#1B4F72', '#21618C', '#2874A6', '#2E86C1', '#3498DB', '#5DADE2', '#85C1E9', '#AED6F1', 
    '#4A235A', '#5B2C6F', '#6C3483', '#7D3C98', '#8E44AD', '#A569BD', '#BB8FCE', '#D2B4DE', 
    // '#512E5F', '#633974', '#76448A', '#884EA0', '#9B59B6', '#AF7AC5', '#C39BD3', '#D7BDE2', 
    '#17202A', '#1C2833', '#212F3D', '#273746', '#2C3E50', '#566573', '#808B96', '#ABB2B9', 
    '#626567', '#797D7F', '#909497', '#A6ACAF', '#BDC3C7', '#CACFD2' ,'#D7DBDD', '#E5E7E9',
    '#7B7D7D', '#979A9A', '#B3B6B7', '#D0D3D4', '#ECF0F1', '#F0F3F4', '#F4F6F7', '#F7F9F9'
];

//Array of stamps
const stamps = [
    "/assets/kawaii-banana.png", 
    "/assets/kawaii-burger.png", 
    "/assets/kawaii-donut.png", 
    "/assets/kawaii-fries.png", 
    "/assets/kawaii-icecream.png", 
    "/assets/kawaii-pizza.png", 
    "/assets/kawaii-strawberry.png", 
    "/assets/dog1.png",
    "/assets/cat1.png", 
    "/assets/cat2.png", 
];


//Add paintbrush cursor to the body 
// document.body.style.cursor = "url('/assets/paintbrush_icon.png'), auto"

let paletteCollector = null;
let imageCollector = null;

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
    imageCollector = null;
}

let stampContainer = document.createElement('div');
stampContainer.id = 'stampContainer';
colorPalette.appendChild(stampContainer);

for (let i = 0; i < stamps.length; i++) {
    let stampImages = document.createElement('img');
    stampImages.className = 'stamps';
    stampImages.src = stamps[i];
    stampContainer.appendChild(stampImages);
    stampImages.addEventListener('click', addStamp);
}

function addStamp() {
    console.log('pick a stamp');
    imageCollector = this.getAttribute('src');
    console.log(imageCollector);
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
    this.style.backgroundImage = 'url(' + imageCollector + ')';
}

//Div for the Eraser and Clear buttons

//Eraser Button
let eraserButton = document.createElement('button');
eraserButton.id = 'eraser';
eraserButton.innerHTML = 'Eraser';
colorPalette.appendChild(eraserButton);
eraserButton.addEventListener('click', eraseColor);

function eraseColor() {
    console.log('eraser is go')
    paletteCollector = null;
    imageCollector = null;
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
        clearingPixels[i].style.backgroundImage = null;
    }
}

//Use this to get the dimensions of a certain box/div
//console.log(box.getBoundingClientRect()); 
