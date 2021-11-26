
noseX = 0
noseY = 0
FilterY= 0
FilterX= 0
function setup(){
canvas = createCanvas(600,500)
canvas.center()
webcam = createCapture(VIDEO)
webcam.hide()
model = ml5.poseNet(webcam,modelloaded);
model.on("pose",gotResult);
}
function draw(){
image(webcam,0,0,600,500);
image(clown,noseX-90,noseY-45,200,100);
image(Filter,FilterX-200,FilterY-300,300,600);
}
function preload(){
    clown = loadImage("https://i.postimg.cc/Prx9C0Cq/glasses-removebg-preview.png");
    Filter = loadImage("https://i.postimg.cc/nLgSQLQV/filter2-removebg-preview.png")
}
function takesnap(){
save("Image.png");

}
function modelloaded(){
    console.log("Model is Loaded");
}
function gotResult(results){
if (results.length > 0){
    console.log(results);
    noseX=results[0].pose.rightEye.x;
    noseY=results[0].pose.rightEye.y;
    FilterX=results[0].pose.nose.x;
    FilterY=results[0].pose.nose.y;
}
}