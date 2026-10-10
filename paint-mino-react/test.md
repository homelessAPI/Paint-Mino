test.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Paint Mino</title>
</head>
<body>

    <div id="canvasSetup">
        <form id="canvasSizeForm">
            <label for="canvasName">Canvas Name:</label>
            <input type="text" id="canvasName" name="canvasName" required>
            <label for="width">Width:</label>
            <input type="number" id="width" name="width" min="1" required>
            <label for="height">Height:</label>
            <input type="number" id="height" name="height" min="1" required>
            <button type="submit">Create Canvas</button>
        </form>
    </div>

    <div id="workspace">
        <button id="brushTool">Brush</button>
        <button id="eraserTool">Eraser</button>
        <canvas id="canvas"></canvas>
        <button id="saveImageButton">Save Image</button>
    </div>

    <div id="savedImages">
        <h2>Saved Images</h2>
        <div id="savedImagesContainer"></div>

    </div>

    <script src="script.js"></script>
    <script src="drawingTools.js"></script>
</body>
</html>

script.js
import [pen, eraser] from './drawingTools.js';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let currentTool = 'pen';

const canvasName = document.getElementById('canvasName');
const width = document.getElementById('width');
const height = document.getElementById('height');

const canvas = document.getElementById('canvas');
const saveImageButton = document.getElementById('saveImageButton');
const savedPaintings = localStorage.getItem('myPaintings') ? JSON.parse(localStorage.getItem('myPaintings')) : [];
const ctx = canvas.getContext('2d');

const brushTool = document.getElementById('brushTool');
const eraserTool = document.getElementById('eraserTool');

const workspace = document.getElementById('workspace');
const canvasSetup = document.getElementById('canvasSetup');
const savedImagesContainer = document.getElementById('savedImagesContainer');
const savedImages = document.getElementById('savedImages');

const ImgElement = document.createElement('img');


const form = document.getElementById('canvasSizeForm');

const paintings = savedPaintings;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    canvas.width = width.value;
    canvas.height = height.value;
    canvasSetup.style.display = 'none';
    workspace.style.display = 'block';
    savedImages.style.display = 'block';
});

canvas.addEventListener('pointerdown', (e) => {
    isDrawing = true;

    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('pointermove', (e) => {
    if (isDrawing) {
        const x = e.offsetX;
        const y = e.offsetY;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        pen();

        lastX = x;
        lastY = y;
    };

});

canvas.addEventListener('pointerup', (e) => {
    isDrawing = false;
});

saveImageButton.addEventListener('click', () => {
    const image = canvas.toDataURL();

    const painting = {
        name: canvasName.value,
        width: canvas.width,
        height: canvas.height,
        image: image
    };

    paintings.push(painting);

    const paintingData = JSON.stringify(paintings);

    localStorage.setItem('myPaintings', paintingData);

    console.log('painting saved:', paintings);
});

for (let i = 0; i < savedPaintings.length; i++) {
    const savedPainting = savedPaintings[i];
    const ImgElement = document.createElement('img');
    ImgElement.src = savedPainting.image;
    ImgElement.alt = savedPainting.name;
    ImgElement.width = savedPainting.width / 4;
    ImgElement.height = savedPainting.height / 4;
    savedImagesContainer.appendChild(ImgElement);
}

brushTool.addEventListener('click', () => {
    currentTool = pen();
});

eraserTool.addEventListener('click', () => {
    currentTool = eraser();
});
drawingTools.js
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

export function pen() {

    ctx.strokeStyle = 'black';

    ctx.lineWidth = 2;

    ctx.stroke();

}

export function eraser() {

    ctx.globalCompositeOperation = 'destination-out';

    ctx.lineWidth = 2;

    ctx.stroke();

}