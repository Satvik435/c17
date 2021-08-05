var box
function setup() 
{
  createCanvas(400, 400);
  box=new Box(30,23,30,40,3,4)
  
}

function draw() 
{
  background(220);
  box.show()
  box.moveup()

}

