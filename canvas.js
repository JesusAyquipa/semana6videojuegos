var canvas= document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

console.log("ctx",ctx);

/**
 Dibujando cuadrados 
 */
ctx.fillStyle="cyan";

ctx.fillRect(10,10,100,100);

ctx.lineWidth= 5;
ctx.strokeStyle="rgba(255,0,255,1)";
ctx.rect(10,10,100,100);
ctx.stroke();

/**
 Dibujando circulo 
 */

 ctx.beginPath();
 ctx.arc(300,300,80,0,2*Math.PI);
 ctx.fillStyle="green";
 ctx.fill();

 ctx.fillStyle="green";
 ctx.fill();

 ctx.lineWidth=5;
 ctx.strokeStyle="purple";
 ctx.stroke();

 /**
 Dibujando lineas
 */

 ctx.beginPath();

 ctx.moveTo(0,0);
 ctx.lineTo(200,200);
  ctx.lineTo(400,200);
   ctx.lineTo(600,400);
    ctx.lineTo(800,200);
     ctx.lineTo(1000,200);
      ctx.lineTo(1000,0);

 ctx.lineWidth=5;
 ctx.stroke();

 ctx.fillStyle='rgba(0,0,255,0.6)';
 ctx.fill();


  /**
 Dibujando curvas
 */

 ctx.beginPath();
 ctx.moveTo(0,500);
 ctx.bezierCurveTo(200,300,400,400,500,500);
 ctx.lineWidth=5;
 ctx.stroke();

 ctx.fillStyle='rgba(0,0,255,0.6)';
 ctx.fill();

   /**
 Degradado
 */

 var grd= ctx.createLinearGradient(0,300,100,400);
 grd.addColorStop(0,"red");
 grd.addColorStop(1,"yellow");

 ctx.fillStyle=grd;
 ctx.fillRect(0,300,100,100);


 var grd2=ctx.createRadialGradient(890,350,5,900,350,120);
 grd2.addColorStop(0,"yellow");
 grd2.addColorStop(1,"red");

 ctx.beginPath();
 ctx.arc(900,400,100,0,7);
 ctx.fillStyle=grd2;
 ctx.fill();






