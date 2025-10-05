const canvas = document.getElementById("paintCanvas");
const ctx = canvas.getContext("2d");
const slider = document.getElementById("paintSlider");

const paint = document.getElementById("paintBtn");
const eraser = document.getElementById("eraseBtn");
const clear = document.getElementById("clearBtn");

const redBtn = document.getElementById('redBtn');
const pinkBtn = document.getElementById('pinkBtn');
const yellowBtn = document.getElementById('yellowBtn');
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');
const brownBtn = document.getElementById('brownBtn');
const blackBtn = document.getElementById('blackBtn');

let painting = false;
let coord = {x:0, y:0};

window.onload = () => {
    resize();
    ctx.lineWidth = parseInt(slider.value);

    canvas.addEventListener('mousedown', startPaint);
    canvas.addEventListener('mouseup', stopPaint);
    canvas.addEventListener('mousemove', draw);

};

paint.addEventListener('click', () => changeColor('black'));
eraser.addEventListener('click', () => changeColor('white'));
redBtn.addEventListener('click', () => changeColor('red'));
pinkBtn.addEventListener('click', () => changeColor('hotpink'));
yellowBtn.addEventListener('click', () => changeColor('yellow'));
greenBtn.addEventListener('click', () => changeColor('forestgreen'));
blueBtn.addEventListener('click', () => changeColor('dodgerblue'));
brownBtn.addEventListener('click', () => changeColor('saddlebrown'));
blackBtn.addEventListener('click', () => changeColor('black'));
function changeColor(color) {
    ctx.strokeStyle = color;
}

clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, 980, 500);
});


function resize() {
    ctx.canvas.width = 980;
    ctx.canvas.height = 500;
}


function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    coord.x = e.clientX - rect.left;
    coord.y = e.clientY - rect.top;
}


function startPaint(e) {
    painting = true;
    getPos(e);
    ctx.beginPath();
    ctx.moveTo(coord.x, coord.y);
}
function stopPaint() {
    painting = false;
}


function draw(e) {
    if (!painting) return;

    ctx.lineCap = 'round';

    getPos(e);

    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}


slider.oninput = function() {
    ctx.lineWidth = parseInt(this.value);
};
