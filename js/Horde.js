var Horde = (function(){

	function exports(canvasElement){
		return new Horde(canvasElement);
	}

	var Horde = function(canvas){
		this.running = true;

		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.mouse = new LibraryMouse(canvas);

		this.initMouse();
		this.initKeyboard();
	};


	Horde.prototype.update = function() {
		// console.log("update");
	};

	Horde.prototype.draw = function() {
		// console.log("draw");
		this.context.fillRect(0,0,this.context.canvas.width, this.context.canvas.height);
	};

	Horde.prototype.initMouse = function() {
		this.mouse = new LibraryMouse(this.canvas);
		this.mouse.addEventListener("mousemove", this.onMouseMove.bind(this));
		this.mouse.addEventListener("mousedown", this.onMouseDown.bind(this));
	};

	Horde.prototype.onMouseDown = function(e) {
		console.log(this.mouse.x, this.mouse.y);
	};

	Horde.prototype.onMouseMove = function(e) {
		// console.log(this.mouse.x, this.mouse.y);
	};

	Horde.prototype.initKeyboard = function() {
		document.onkeydown = function(e){
			// console.log(e.keyCode);

			switch(e.keyCode){
				// up
				case 87:
				case 38:
					break;
				
				// left
				case 65:
				case 37:
					break;

				// down
				case 83:
				case 40:
					break;

				// right
				case 68:
				case 39:
					break;
			}
		}
	};

	Horde.prototype.start = function() {
		this.running = true;
		run.call(this);
	};

	Horde.prototype.stop = function() { this.running = false; };
	
	function run(){if(this.running){this.update();this.draw();window.requestAnimationFrame(run.bind(this));}};

	return exports;

}());