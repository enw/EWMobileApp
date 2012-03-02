var i=0;

function animate() {

    reqAnimFrame = window.mozRequestAnimationFrame    ||
                   window.webkitRequestAnimationFrame ||
                   window.msRequestAnimationFrame     ||
                   window.oRequestAnimationFrame
        ;

    reqAnimFrame(animate);

    draw();
    console.log("animate");
}

function draw() {
 $("#canvas").clearCanvas()

 $("#canvas").rotateCanvas({
  angle: 4*i++,
  x: 100, y: 100
})
.drawRect({
  fillStyle: "#000",
  x: 100, y: 100,
  width: 2, height: 50
})
.restoreCanvas();

 i=i%360;


}

animate();