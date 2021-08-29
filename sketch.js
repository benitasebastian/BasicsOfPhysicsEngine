// Universe--> Earth--> Body    Engine--> World --> Body
// This concept is known as name spacing. Here instead of adressing the long name we are going to give it some pet name 
// for example, instead of Matter.Enginge; we can just write Engine.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rock;

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); // While working with Matter.js library the first thing we need to do is create an engine.
  world = engine.world; //The Engine created in turn creates the world.
   // For mentioning the physics properties we follow this syntax; var Spritename_options = {key1:value1,key2:value2,....}
   // Where the key is the name of the physics property and the value is value of physics property.
   var ball_options = {
    restitution: 0.95, //Restitution determines the bounciness of an object, more restitution more the bounciness.
    frictionAir:0.01 // FrictionAir is the friction applied by air on any object. The more to FrictionAir the slower 
    // the movement.
  }

  var rock_options = {
    restitution: 0.85,

  }
   
   var ground_options ={
     isStatic: true // isStatic indicates the lacking of movement of the ground.
   };
  
   // In order to create a body we have to follow the syntax:  
   // var name = Bodies.rectangle/circle();
  ground = Bodies.rectangle(200,390,400,20,ground_options); // x,y,w,h,physics properties.
  World.add(world,ground); // After creating the body it is very important to add it to the world, for the 
  //body to follow physics properties.

  wall = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall);

  ball = Bodies.circle(100,10,20,ball_options); // x,y,radius, physics properties.
  World.add(world,ball);
  
  rock = Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);
 // By default the x,y value that we give when creating a body are treated as the top left corner of the body.
 // But if we want the x,y to be centre of the body we have to write rectMode(CENTER); and ellipseMode(RADIUS);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
 // Just like drawSprites(); in p5.js with Matter.js in order to render/display an object we have to use the functions
 // ellipse(); rect();  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(rock.position.x,rock.position.y,20);
  rect(wall.position.x,wall.position.y,200,20);
 
}

