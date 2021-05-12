canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
raceCar1_width= 100
raceCar1_height= 100
raceCar1_x= 10
raceCar1_y=10
raceCar2_width= 100
raceCar2_height= 100
raceCar2_x= 10
raceCar2_y=60
background_image="racing.jpeg"
raceCar1_image="raceCar1.png"
raceCar2_image="raceCar2.png"

function add()

{
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

raceCar1_imgTag = new Image();
raceCar1_imgTag.onload = uploadraceCar1;
raceCar1_imgTag.src = raceCar1_image;

raceCar2_imgTag = new Image();
raceCar2_imgTag.onload = uploadraceCar2;
raceCar2_imgTag.src = raceCar2_image;

}

function uploadBackground ()
{
   ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadraceCar1 ()
{
   ctx.drawImage(raceCar1_imgTag, raceCar1_x, raceCar1_y, raceCar1_width, raceCar1_height);

}

function uploadraceCar2 ()
{
   ctx.drawImage(raceCar2_imgTag, raceCar2_x, raceCar2_y, raceCar2_width, raceCar2_height);

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)

{
   keyPressed = e.keyCode;
   console.log(keypressed);
   if(keyPressed == '38')
    {
     up();
     console.log("up");; 
     
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");

    }
    if(keyPressed == '37')
    {
        left()
        console.log("left");

    }
    if(keyPressed == '39')
    {
        right()
        console.log("right");

    }
}