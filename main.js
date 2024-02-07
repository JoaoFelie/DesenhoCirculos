let canvas = document.getElementById("mycanvas")
let ctx = canvas.getContext("2d");
let color = "blue";

let MouseX;
let MouseY;

ctx.beginPath();
ctx.strokeStyle=color
ctx.lineWidth=largura;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color="black";
ctx.lineWidth=largura;
ctx.arc(310,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color="red";
ctx.lineWidth=largura;
ctx.arc(420,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color="yellow";
ctx.lineWidth=largura;
ctx.arc(250,260,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color="green";
ctx.lineWidth=largura;
ctx.arc(370,260,40,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", cliquei);

function cliquei(e){
    color=document.getElementById("cor").value;
    largura=document.getElementById("largura").value;
    MouseX=e.clientX - canvas.offsetLeft;
    MouseY=e.clientY - canvas.offsetTop;
    desenharCirculo(MouseX,MouseY)
}

function desenharCirculo(MouseX,MouseY){
    ctx.beginPath();
    ctx.strokeStyle=color
    ctx.lineWidth=largura;
    ctx.arc(MouseX,MouseY,40,0,2*Math.PI);
    ctx.stroke();   
}

function limpar(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
}