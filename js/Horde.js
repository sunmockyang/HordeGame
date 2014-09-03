var Horde = (function(){

	function exports(canvasElement){
		return new Horde(canvasElement);
	}

	var Horde = function(canvas){
		this.running = true;

		this.canvas = canvas;
		this.context = canvas.getContext("2d");
		this.mouse = new LibraryMouse(canvas);
		this.keyboard = new KeyPressHandler();

		this.player = new HPlayer(this.context);

		this.initMouse();
		this.initKeyboard();
	};


	Horde.prototype.update = function() {
		// console.log("update");
		this.player.update();
	};

	Horde.prototype.draw = function() {
		// console.log("draw");
		this.context.fillStyle = "#000000";
		this.context.fillRect(0,0,this.context.canvas.width, this.context.canvas.height);
		
		this.player.draw();
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
		// document.onkeydown = (function(e){
		// 	// console.log(e.keyCode);

		// 	this.player.onkeydown(e);
		// }).bind(this);
		document.onkeydown = this.keyboard.onkeydown.bind(this.keyboard);
		document.onkeyup = this.keyboard.onkeyup.bind(this.keyboard);
	};

	Horde.prototype.onKeyboard = function() {
		if(this.player.onkeydown(this.keyboard)){
			return true;
		}
	};

	Horde.prototype.start = function() {
		this.running = true;
		run.call(this);
	};

	Horde.prototype.stop = function() { this.running = false; };
	
	function run(){
		if(this.running){
			if(this.keyboard.isAnyKeyDown()){
				this.onKeyboard();
			}
			this.update();
			this.draw();
			window.requestAnimationFrame(run.bind(this));
		}
	};

	return exports;

}());