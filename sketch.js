  var myList1 = [
    '#D71B1B',
    '#E83232',
    '#EB4D26',
    '#F67B41',
    '#FB971F',
    '#FCCE4B',
    '#FDE537',
    ]

    var x1 = 30;
    var y2 = 30;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(3);

}

function draw() {
  // put drawing code here

  for (var x = 0; x < width; x += 100){
for (var y = 0; y < height; y += 100){

var x1 = random (30,150);
var y1 = random (30,150);

noFill();
strokeWeight(5);
stroke(color(random(myList1)));

  ellipse(x,y,x1,y1);

  if (frameCount == 30) {
    noLoop();
  }
}
}


}
