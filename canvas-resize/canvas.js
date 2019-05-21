var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'red';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'blue';
c.fillRect(200, 200, 100, 100);
c.fillStyle = 'green';
c.fillRect(300, 300, 100, 100);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400,300);
c.strokeStyle = "red";
c.stroke();

// Arc / Circle
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle ='blue';
c.stroke();