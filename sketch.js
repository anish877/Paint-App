var point1 = []
var c = "yellow"
var a = 10
var b = 10
var z = 0
var select
var r = "white"
var n = "yellow"
var gameState = 0
function setup() {
  createCanvas(800,600);
  database = firebase.database()
  console.log(database)
  pointRef = database.ref('point/position')
  pointRef.on("value",readPosition,writePosition)
  strokeWeightRef = database.ref('point/strokeWeight')
  strokeWeightRef.on("value",readWeight,writeWeight)
  strokeColorRef = database.ref('point/strokeColor')
  strokeColorRef.on("value",readColor,writeColor)
  fill(0,0,0)
  box1 = createSprite(30,200,300,600)
  box2 = createSprite(350,70,400,150)
  red =  new redButton()
  blue =  new blueButton()
  yellow =  new yellowButton()
  green =  new greenButton()
  button1 = new brushButton1()
  button2 = new brushButton2()
  button3 = new brushButton3()
  button4 = new brushButton4()
  button5 = new brushButton5()

  
}

function draw() {
  drawSprites();
  red.display();
  red.checkMouse()
  blue.display();
  blue.checkMouse()
  yellow.display();
  yellow.checkMouse()
  green.display();
  green.checkMouse()
  button1.display()
  button1.checkMouse()
  button2.display()
  button2.checkMouse()
  button3.display()
  button3.checkMouse()
  button4.display()
  button4.checkMouse()
  button5.display()
  button5.checkMouse()
  textSize(32)
  //textFill("black")
  text("Brush Thickness :",225,50)

}
function mouseDragged(){
stroke(c)
strokeWeight(a)
pointx = mouseX
pointy = mouseY
point1.push(point(mouseX,mouseY))
writePosition(pointx,pointy)
}

class redButton{
constructor(){
  this.x = 100;
  this.y = 100;
  this.daimeter = 80;
}
display(){
  fill("red")
  noStroke()
  ellipse(this.x,this.y,this.daimeter)
}
checkMouse(){
  if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
    {
      c = "red"
      writeColor(c)
    }
}
}
class yellowButton{
  constructor(){
    this.x = 100;
    this.y = 400;
    this.daimeter = 80;
  }
  display(){
    fill("yellow")
    noStroke()
    ellipse(this.x,this.y,this.daimeter)
  }
  checkMouse(){
    if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
      {
        c = "yellow"
        writeColor(c)
      }
  }
  }
  class blueButton{
    constructor(){
      this.x = 100;
      this.y = 200;
      this.daimeter = 80;
    }
    display(){
      fill("blue")
      noStroke()
      ellipse(this.x,this.y,this.daimeter)
    }
    checkMouse(){
      if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
        {
          c = "blue"
          writeColor(c)
        }
    }
    }
    class greenButton{
      constructor(){
        this.x = 100;
        this.y = 300;
        this.daimeter = 80;
      }
      display(){
        fill("green")
        noStroke()
        ellipse(this.x,this.y,this.daimeter)
      }
      checkMouse(){
        if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
          {
            c = "green"
            writeColor(c)
          }
      }
      }
      class brushButton1{
        constructor(){
          this.x = 200
          this.y = 100
          this.daimeter = 40
        }
        display(){
          fill(0,0,0)
          ellipse(this.x,this.y,this.daimeter)   
      }
      checkMouse(){
        if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
        {
          a = 40
          writeWeight(a)
        }
      }
    }
    class brushButton2{
      constructor(){
        this.x = 250
        this.y = 100
        this.daimeter = 30
      }
      display(){
        fill(0,0,0)
        ellipse(this.x,this.y,this.daimeter)   
    }
    checkMouse(){
      if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
      {
        a = 30
        writeWeight(a)
      }
    }
  }
  class brushButton3{
    constructor(){
      this.x = 300
      this.y = 100
      this.daimeter = 20
    }
    display(){
      fill(0,0,0)
      ellipse(this.x,this.y,this.daimeter)   
  }
  checkMouse(){
    if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
    {
      a = 20
      writeWeight(a)
    }
  }
}
class brushButton4{
  constructor(){
    this.x = 350
    this.y = 100
    this.daimeter = 10
  }
  display(){
    fill(0,0,0)
    ellipse(this.x,this.y,this.daimeter)   
}
checkMouse(){
  if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
  {
    a = 10
    writeWeight(a)
  }
}
}
class brushButton5{
  constructor(){
    this.x = 400
    this.y = 100
    this.daimeter = 5
  }
  display(){
    fill(0,0,0)
    ellipse(this.x,this.y,this.daimeter)   
}
checkMouse(){
  if(dist(this.x,this.y,mouseX,mouseY)<this.daimeter/2 && mouseIsPressed)
  {
    a = 5
    writeWeight(a)
  }
}
}


function writeWeight(weight){
  database.ref('point/strokeWeight').set({
    'weight': weight
  })
}

function readWeight(data){
weight = data.val()
b = weight.weight
}

function writeColor(color){
  database.ref('point/strokeColor').set({
    'color': color
  })
}

function readColor(data){
color = data.val()
r = color.color
}
function writePosition(x,y){
  database.ref('point/position').set({
    'x' : x,
    'y' : y
  })
}

function readPosition(data){
position = data.val()
strokeWeight(b)
stroke(r)
point1.push(point(position.x,position.y))

}

