//setting the canvas size to equal to window size
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

// c.fillRect(x, y, width, height);
// c.fillStyle = 'red';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'blue';
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = 'green';
// c.fillRect(300, 300, 100, 100);

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = "red";
// c.stroke();

// Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle ='blue';
// c.stroke();

// for (let i=0; i < 300; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle ='blue';
//     c.stroke();
// }
function circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
    };
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}
var circle = new circle(200, 200, 3, 3, 30);
circle.draw();

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circle.draw();
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
    this.draw
}

animate();