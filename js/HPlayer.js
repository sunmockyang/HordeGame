var HPlayer = HPlayer || (function(){
	var size = 10;

	function HPlayerExport(context, mouse, map){
		return new HPlayer(context, mouse, map);
	}

	function HPlayer(context, mouse, map){
		this.context = context;
		this.mouse = mouse;
		this.map = map;
		this.pos = new Vector();
		this.facing = new Vector();
	}

	HPlayer.prototype.update = function() {

		this.map.rotation = getMouseInput.call(this);
		this.map.playerPos = this.pos;
	};

	function getMouseInput(){
		var y = this.context.canvas.height/2 - this.mouse.y,
		x = this.mouse.x - this.context.canvas.width/2,
		rotation = Math.atan(x / y);
		if(y < 0)
			rotation += Math.PI;

		this.facing = (new Vector(x, y)).normalize();

		return rotation;
	}

	HPlayer.prototype.draw = function() {
		this.context.fillStyle = "#FFFFFF";
		// this.context.fillRect(this.pos.x - size/2, this.pos.y - size/2, size, size);
		this.context.fillRect(this.context.canvas.width/2 - size/2, this.context.canvas.height/2 - size/2, size, size);
	};

	HPlayer.prototype.onkeydown = function(keyboard){
		var handled = false;

		// up
		if(keyboard.isKeyDown(KeyMap.Up, KeyMap.W)){
			this.pos = this.pos.add(this.facing);
			handled = true;
		}

		// down
		if(keyboard.isKeyDown(KeyMap.Down, KeyMap.S)){
			this.pos.y -= 1;
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

	return HPlayerExport;
}());