var canvas= document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

var grd=ctx.createLinearGradient(0,0,0,500);
grd.addColorStop(0,"rgba(0,0,255,0.5)");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(0,0,1000,600);

//oceano
var grd2=ctx.createLinearGradient(0,400,0,500);
grd2.addColorStop(0,"rgba(0,180,255,0.5)")
grd2.addColorStop(1,"white")
ctx.fillStyle=grd2;
ctx.fillRect(0,400,1000,100);

//montañas

ctx.beginPath();
ctx.fillStyle='rgba(93, 0, 155, 0.8)';
ctx.moveTo(0,400);
ctx.lineTo(200,100);
ctx.lineTo(400,400);
ctx.fill();

//montaña 2

ctx.beginPath();
ctx.fillStyle='blue';
ctx.moveTo(200,400);
ctx.lineTo(400,100);
ctx.lineTo(600,400);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(93, 0, 155, 0.8)';
ctx.moveTo(400,400);
ctx.lineTo(600,100);
ctx.lineTo(800,400);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='blue';
ctx.moveTo(600,400);
ctx.lineTo(800,100);
ctx.lineTo(1000,400);
ctx.fill();

//nieve montaña 1

ctx.beginPath();
ctx.fillStyle='rgba(255, 255, 255, 0.9)';
ctx.moveTo(200,300);
ctx.lineTo(200,100);
ctx.lineTo(267,200);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='white';
ctx.moveTo(133,200);
ctx.lineTo(200,100);
ctx.lineTo(200,300);
ctx.fill();

//nieve montaña 2

ctx.beginPath();
ctx.fillStyle='white';
ctx.moveTo(333,200);
ctx.lineTo(400,100);
ctx.lineTo(400,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(255, 255, 255, 0.9)';
ctx.moveTo(400,300);
ctx.lineTo(400,100);
ctx.lineTo(467,200);
ctx.fill();

//nieve montaña 3

ctx.beginPath();
ctx.fillStyle='white';
ctx.moveTo(533,200);
ctx.lineTo(600,100);
ctx.lineTo(600,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(255, 255, 255, 0.9)';
ctx.moveTo(600,300);
ctx.lineTo(600,100);
ctx.lineTo(667,200);
ctx.fill();

//nieve montaña 4

ctx.beginPath();
ctx.fillStyle='white';
ctx.moveTo(733,200);
ctx.lineTo(800,100);
ctx.lineTo(800,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(255, 255, 255, 0.9)';
ctx.moveTo(800,300);
ctx.lineTo(800,100);
ctx.lineTo(867,200);
ctx.fill();

//diseño

ctx.beginPath();
ctx.fillStyle='rgba(1, 0, 61, 1)';
ctx.moveTo(200,300);
ctx.lineTo(400,400);
ctx.lineTo(200,450);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(12, 11, 78, 1)';
ctx.moveTo(200,300);
ctx.lineTo(0,400);
ctx.lineTo(200,450);
ctx.fill();


ctx.beginPath();
ctx.fillStyle='rgba(1, 0, 61, 1)';
ctx.moveTo(800,300);
ctx.lineTo(600,400);
ctx.lineTo(800,450);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(12, 11, 78, 1)';
ctx.moveTo(800,300);
ctx.lineTo(1000,400);
ctx.lineTo(800,450);
ctx.fill();

 //arbol1

ctx.fillStyle="rgba(97, 39, 5, 1)";

ctx.fillRect(890,250,20,100);

ctx.beginPath();
ctx.fillStyle='rgba(12, 56, 3, 1)';
ctx.moveTo(840,250);
ctx.lineTo(900,170);
ctx.lineTo(960,250);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(19, 92, 5, 1)';
ctx.moveTo(840,220);
ctx.lineTo(900,140);
ctx.lineTo(960,220);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='rgba(27, 124, 7, 1)';
ctx.moveTo(840,190);
ctx.lineTo(900,100);
ctx.lineTo(960,190);
ctx.fill();



 //arbol2

 ctx.fillStyle="rgba(97, 39, 5, 1)";

ctx.fillRect(100,230,20,100);


 ctx.beginPath();
 ctx.arc(140,185,32,0,2*Math.PI);
 ctx.fillStyle="rgba(3, 165, 3, 1)";
 ctx.fill();

 ctx.fillStyle="rgba(3, 165, 3, 1)";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="rgba(3, 165, 3, 1)";
 ctx.stroke();


  ctx.beginPath();
 ctx.arc(80,190,20,0,2*Math.PI);
 ctx.fillStyle="rgba(3, 165, 3, 1)";
 ctx.fill();

 ctx.fillStyle="rgba(3, 165, 3, 1)";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="rgba(3, 165, 3, 1)";
 ctx.stroke();


 ctx.beginPath();
 ctx.arc(110,200,40,0,2*Math.PI);
 ctx.fillStyle="rgba(2, 78, 2, 1)";
 ctx.fill();

 ctx.fillStyle="rgba(2, 78, 2, 1)";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="rgba(2, 78, 2, 1)";
 ctx.stroke();


  ctx.beginPath();
 ctx.arc(120,225,27,0,2*Math.PI);
 ctx.fillStyle="rgba(1, 48, 1, 1)";
 ctx.fill();

 ctx.fillStyle="rgba(1, 48, 1, 1)";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="rgba(1, 48, 1, 1)";
 ctx.stroke();


//circulos
 ctx.beginPath();
 ctx.arc(0,480,230,0,2*Math.PI);
 ctx.fillStyle="rgba(2, 172, 2, 1)";
 ctx.fill();

 ctx.fillStyle="rgba(2, 172, 2, 1)";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="rgba(2, 172, 2, 1)";
 ctx.stroke();

ctx.beginPath();
 ctx.arc(900,600,250,0,2*Math.PI);
 ctx.fillStyle="green";
 ctx.fill();

 ctx.fillStyle="green";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="green";
 ctx.stroke();

//circulos pequeños
ctx.beginPath();
 ctx.arc(25,500,20,0,2*Math.PI);
 ctx.fillStyle="green";
 ctx.fill();

 ctx.fillStyle="green";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="green";
 ctx.stroke();
 
 ctx.beginPath();
 ctx.arc(70,500,20,0,2*Math.PI);
 ctx.fillStyle="green";
 ctx.fill();

 ctx.fillStyle="green";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="green";
 ctx.stroke();

  ctx.beginPath();
 ctx.arc(115,500,20,0,2*Math.PI);
 ctx.fillStyle="green";
 ctx.fill();

 ctx.fillStyle="green";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="green";
 ctx.stroke();

   ctx.beginPath();
 ctx.arc(160,500,20,0,2*Math.PI);
 ctx.fillStyle="green";
 ctx.fill();

 ctx.fillStyle="green";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="green";
 ctx.stroke();

    ctx.beginPath();
 ctx.arc(205,500,20,0,2*Math.PI);
 ctx.fillStyle="green";
 ctx.fill();

 ctx.fillStyle="green";
 ctx.fill();

ctx.lineWidth=5;
 ctx.strokeStyle="green";
 ctx.stroke();






 

 









