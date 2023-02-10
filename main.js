function setup(){
canvas=createcanvas(400, 400)
canvas.center()
canvas.position(550,150)
video= createcapture(VIDEO)
video.hide()
video.size(400, 400)

postNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function preload(){

}
function draw(){
image(video, 0, 0, 400, 400);
}

function take_snapshot(){
save('tyranitar.jpg')

}

function modelLoaded(){
console.log('PoseNet is Great')

}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
console.log("nose x=" + results[0].pose.nose.x)

console.log("nose y=" + results[0].pose.nose.y)
}

}