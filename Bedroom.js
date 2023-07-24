img = "";
status1 = "";
objects = [];

function preload(){
    img = loadImage('Bedroom.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detected Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status1 = true;
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}