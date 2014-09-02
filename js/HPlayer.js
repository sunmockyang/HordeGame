var HPlayer = HPlayer || (function(){
	var size = 10;

	function exports(context){
		return new HPlayer(context);
	}

	function HPlayer(context){
		this.context = context;
		this.pos = new Vector(this.context.canvas.width/2, this.context.canvas.height/2);
	}

	HPlayer.prototype.update = function() {
	};

	HPlayer.prototype.draw = function() {
		this.context.fillStyle = "#FFFFFF";
		this.context.fillRect(this.pos.x - size/2, this.pos.y - size/2, size, size);
	};

	HPlayer.prototype.onkeydown = function(e){
		switch(e.keyCode){
			// up
			case KeyMap.Up:
			case KeyMap.W:
				return true;

			// down
			case KeyMap.Down:
			case KeyMap.S:
				return true;
			
			// left
			case KeyMap.Left:
			case KeyMap.A:
				return true;

			// right
			case KeyMap.Right:
			case KeyMap.D:
				return true;
		}
		return false;
	};

	return exports;
}());