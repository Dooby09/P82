canvas= document.getElementById("canvas1");
ctx=canvas.getContext("2d");

mouseevent=""
var lastx,lasty

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
    console.log("mousedown");
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){
        console.log("currentx,currenty=")
        console.log("x=" + currentx+ "y="+ currenty);
        ctx.beginPath();
        ctx.strokeStyle="blue";
        ctx.lineWidth=5;
        ctx.arc(currentx,currenty,40,0,360);
        ctx.stroke();

        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
    lastx=currentx; 
    lasty=currenty;
}

canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup";
}