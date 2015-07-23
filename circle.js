atom.input.bind(atom.key.LEFT_ARROW, 'left');
atom.input.bind(atom.key.RIGHT_ARROW, 'right');
atom.input.bind(atom.key.UP_ARROW, 'up');
atom.input.bind(atom.key.DOWN_ARROW, 'down');
game = Object.create(Game.prototype);
game.draw = function(){
	this.drawCircles(atom.height/2-50, atom.height/2-30, 90, "#000000");
	this.drawCircles(atom.width/3-100, atom.height/2+20, 45, "#DB7093");
	this.drawCircles(atom.width/2+100, atom.height/3-50, 20, "#66CDAA");
}
game.drawCircles = function(xPosition, yPosition, radius, color){
	atom.context.beginPath();
	atom.context.fillStyle = color;
	atom.context.arc(xPosition, yPosition, radius, Math.PI*2, 0);
	atom.context.fill();
};
game.run();