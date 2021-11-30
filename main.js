canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

greeencar_x = 5;
greeencar_y= 225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	greencar_imgTag = new Image(); //defining a variable with a new image
	greencar_image.onload = uploadgreencar; // setting a function, onloading this variable
	greencar_imgTag.src = greencar_image;   // load image
}


function uploadBackground() {
	ctx.drawImage(parkingLot.jpg, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag, greeencar_x,greeencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greeencar_y >= 0)
	{
		greeencar_y =greencar_y - 10;
		console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
   }
}

function down()
{
	if(greeencar_y <= 350)
	{
		greeencar_y =greencar_y + 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
   }
}

function left()
{
	if(greeencar_x >= 0)
	{
		greeencar_x =greencar_x - 10;
		console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
   }
}

function right()
{
	if(greeencar_x <= 750)
	{
		greeencar_x =greencar_x + 10;
		console.log("When right arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
   }
}
