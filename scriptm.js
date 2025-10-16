var batman = document.getElementById('batman');
var c = batman.getContext('2d');

c.ellipse(1000, 500, 900, 500, 0, 0, 2 * Math.PI);
c.fillStyle = "#FFEB3B";
c.fill();
c.closePath();

c.beginPath();
c.moveTo(1000, 800);
c.quadraticCurveTo(1000, 460, 1390, 650);
c.quadraticCurveTo(1400, 490, 1650, 650);
c.quadraticCurveTo(1400, 250, 1300, 250);
c.lineTo(1275, 350);
c.lineTo(1075, 400);
c.lineTo(1060, 300);
c.lineTo(1030, 360);
c.lineTo(1000, 365);
c.lineTo(970, 360);
c.lineTo(940, 300);
c.lineTo(925, 400);
c.lineTo(725, 350);
c.lineTo(700, 250);
c.quadraticCurveTo(600, 250, 350, 650);
c.quadraticCurveTo(600, 490, 590, 650);
c.quadraticCurveTo(1000, 460, 1000, 800);
c.lineWidth = 2;
c.fillStyle = "#212121";
c.fill();

// Guide Lines

// function guideX(x) {
//   c.beginPath();
//   c.moveTo(x, 0);
//   c.lineTo(x, 1000);
//   c.lineWidth = 2;
//   c.strokeStyle = "#ef5350";
//   c.stroke();
// }

// function guideY(y) {
//   c.beginPath();
//   c.moveTo(2000, y);
//   c.lineTo(0, y);
//   c.lineWidth = 2;
//   c.strokeStyle = "#2196F3";
//   c.stroke();
// }

// Guide Lines

// var xValues = [350, 400, 300, 360, 365, 250, 650, 800];
// var yValues = [350, 590, 700, 725, 925, 940, 970, 1000, 1030, 1060, 1075, 1275, 1300, 1390, 1650];

// yValues.map((l) => {guideX(l)});
// xValues.map((w) => {guideY(w)});