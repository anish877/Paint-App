var point = []
var c = "yellow"
var a = 40
var select
function setup() {
  database = firebase.database()
  console.log(point)
   createCanvas(800,600);
  box1 = createSprite(30,200,300,600)
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

}
function mouseDragged(){
stroke(c)
strokeWeight(a)
point.push(point(mouseX,mouseY))
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
  }
}
}
