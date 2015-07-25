	var canvas = document.getElementById('KCanvas');
	var context = canvas.getContext('2d');
	//setting up canvas 
	
	var centerX = canvas.height/2 + 500;
	var centerY = canvas.width/2 - 50;
	var squareX = canvas.height/4;
	var squareY = canvas.width/4;
	var velocity = 4;
	document.onkeydown = moveObject;
	
	var circle1 = new Circle(centerX, centerY, 70, 'green');
	var square1 = new Square(squareX, squareY, 70, 70, 'blue');
	//using circle 
	
	var circlecolor = 'green';
	var faster = setInterval(goFaster, 2500);
	var eraseInterval = setInterval(erase, 100);
	var circleInterval = setInterval(drawCircle, 100);
	var squareInterval = setInterval(moveSquare, 100);
	var checkIfDead = setInterval(die, 100);
	
	function moveObject(e) {
    e = e || window.event;
		if (e.keyCode == '38') {
			if(centerY - 70 > 0){
			centerY = centerY - 10;
			}
			circlecolor = 'blue';
		}
		else if (e.keyCode == '40') {
			if(centerY + 70 < 600){
			centerY = centerY + 10;
			}
			circlecolor = 'green';
		}
		else if (e.keyCode == '37') {
			if(centerX - 70 > 0){
			centerX = centerX - 10;
			}
			circlecolor = 'yellow';
		}
		else if (e.keyCode == '39') {
			if(centerX + 70 < 1000){
			centerX = centerX + 10;
			}
			circlecolor = 'red';
		}
	}
	
	function goFaster(){
		velocity = velocity + 4;
	};
		
    function Square(squareX, squareY, width, height, color){
      context.beginPath();
      context.rect(squareX, squareY, width, height, false);
      context.fillStyle = color;
      context.fill();
	}
	//square function
	
	function Circle(centerX, centerY, radius, color){
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = circlecolor;
      context.fill();
	}
	//circle function
	
	function drawCircle(){
		circle1 = Circle(centerX, centerY, 70, 'green');
	};
	
	function erase(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	};
	
	function moveSquare(){
		var vecX = centerX - squareX;
		var vecY = centerY - squareY;
		var uvecX = vecX/(Math.sqrt(Math.pow(vecX, 2)+Math.pow(vecY, 2)));
		var uvecY = vecY/(Math.sqrt(Math.pow(vecX, 2)+ Math.pow(vecY, 2)));
		var mvecX = uvecX * velocity;
		var mvecY = uvecY * velocity;
		squareX = squareX + mvecX;
		squareY = squareY + mvecY;
		square1 = new Square(squareX, squareY, 45, 45, 'blue');
	};
		
	function die(){
		if(squareX <= centerX + 80 && squareX >= centerX - 70 && squareY <= centerY + 80 && squareY >= centerY - 70){
			var answer = confirm("You died! Press OK to restart.");
			clearInterval(eraseInterval);
			clearInterval(circleInterval);
			clearInterval(squareInterval);
			clearInterval(checkIfDead);
			clearInterval(faster);
			if (answer) {
				location.reload();
			}
		}
	};
	