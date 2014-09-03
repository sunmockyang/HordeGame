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

	HPlayer.prototype.onkeydown = function(keyboard){
		var handled = false;

		// up
		if(keyboard.isKeyDown(KeyMap.Up, KeyMap.W)){
			this.pos.y -= 1;
			handled = true;
		}

		// down
		if(keyboard.isKeyDown(KeyMap.Down, KeyMap.S)){
			this.pos.y += 1;
			handled = true;
		}
		
		// left
		if(keyboard.isKeyDown(KeyMap.Left, KeyMap.A)){
			this.pos.x -= 1;
			handled = true;
		}

		// right
		if(keyboard.isKeyDown(KeyMap.Right, KeyMap.D)){
			this.pos.x += 1;
			handled = true;
		}

		return handled;
	};

	return exports;
}());