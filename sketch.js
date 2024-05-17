let sprite1, sprite2, shrek, fiona, mySound
function setup() {
    
    
    createCanvas();
    player1 = new Sprite(200, 100, 150, 10, "kinetic"); 
    player1.rotationSpeed = 1
    
    player2 = new Sprite(400, 100, 150, 10, "kinetic"); 
    player2.rotationSpeed = 1
    
    world.gravity.y = 4

    instructions = new Sprite(width/2,height/2,width,height,"static")
    instructions.color = "pink"
    instructions.textColor = "purple"
    instructions.textSize = 40
    instructions.text = "🌈 Instructions go here 😎\n💖 use backslash n for \n new lines 👀✨"
    instructions.life = 200 //disappears after 200 milliseconds
    instructions.layer = 100 // on top of everything!
    
}//end setup function

function preload(){
     shrek = loadImage('shrek.png');
     fiona = loadImage('fiona.jpg');
     mySound = loadSound('beep.wav');
}
function draw() {
    background(255); 
    imageMode(CENTER)
    image(shrek, width/2, height/2,width,height)
    image(fiona, width/2, 100,200,200)
    sprite = new Sprite(300,10,20,"triangle")
    sprite.life = 150
    //sprite.layer = 1
    if(kb.presses(" ")){
        mySound.play()
    }
    if (instructions.mouse.pressing()) {
        instructions.remove()
    }
}//end draw function
