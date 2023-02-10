function setup(){
Canvas=createCanvas(400, 400)
Canvas.center()
Canvas.position(550,150)
video= createCapture(VIDEO)
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