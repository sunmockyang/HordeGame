var HMap = (function(){
	function HMapExport(displayContext, mouse){
		return new HMap(displayContext, mouse);
	};

	function HMap(displayContext, mouse){
		this.displayContext = displayContext;
		this.mouse = mouse;

		this.image = new Image();
		this.image.src = "http://wallpapers.wallbase.cc/manga-anime/wallpaper-211050.jpg";
		this.image.onload = onImageLoad.bind(this);

		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.rotation = 0;
		this.playerPos = new Vector();
	};

	function onImageLoad(){
		this.canvas.width = this.image.width;
		this.canvas.height = this.image.height;
		this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height);
		// this.displayContext.drawImage(this.canvas, 0, 0);
	};

	HMap.prototype.update = function(){
	};

	HMap.prototype.draw = function() {
		this.displayContext.save();
		this.displayContext.translate(this.displayContext.canvas.width/2, this.displayContext.canvas.height/2);
		this.displayContext.rotate(this.rotation);
		this.displayContext.drawImage(this.canvas, -this.playerPos.x, -this.playerPos.y);

		debugMode(this.displayContext);

		this.displayContext.restore();
	};

	function debugMode(ctx){
		ctx.fillStyle = "#00FF00";
		ctx.fillRect(-12.5,-12.5, 5, 5);

		ctx.strokeStyle = "#FF0000";
		ctx.beginPath();
		ctx.moveTo(-10,-10);
		ctx.lineTo(HordeGame.player.facing.x*10-10, HordeGame.player.facing.y*10-10);
		ctx.stroke();
		ctx.closePath();

		ctx.strokeStyle = "#0055FF";
		ctx.beginPath();
		ctx.moveTo(-10,-10);
		ctx.lineTo(-(HordeGame.player.facing.y*10)-10, HordeGame.player.facing.x*10-10);
		ctx.stroke();
		ctx.closePath();

		ctx.strokeStyle = "#00FF00";
		ctx.beginPath();
		ctx.moveTo(-10,-10);
		ctx.lineTo(HordeGame.player.facing.y*10-10, -(HordeGame.player.facing.x*10)-10);
		ctx.stroke();
		ctx.closePath();
	}

	return HMapExport;
}());