// Spawns game obstacles and points
var WorldSpawner = Sprite.extend({
	construct: function(point) {
		Sprite.construct.call(this, point);
	},

	name: "WorldSpawner",
	type: "Spawner",
	collisionType: CollisionTypes.none,
	pattern: ["F"],

	rate: 40,
	ySeparation: 14,
	yBuffer: 10,
	yOffset: -2,
	state: "Stop",

	Update: function(time) {
		switch (this.state) {
			case "Stop":
				break;
			case "Floor":
				if (time % 10 === 0) {
					GAME.Spawn(Ground,     new Point(GAME.w, GAME.h-2));
				}
				break;
			case "Go":
				var dy = this.ySeparation;
				if (time % this.rate === 0) {
					var y = randBetween(0+this.yBuffer, GAME.h-this.yBuffer) + this.yOffset;
					var x = GAME.w+2;
					GAME.Spawn(PipeCap,      new Point(x, y - dy/2));
					GAME.Spawn(ScoreTrigger, new Point(x, y - dy/2 + 2));
					GAME.Spawn(PipeCap,      new Point(x, y + dy/2));
					GAME.Spawn(PipeLength,   new Point(x, y - dy/2 - 20));
					GAME.Spawn(PipeLength,   new Point(x, y + dy/2 + 2));
				}
				if (time % 10 === 0) {
					GAME.Spawn(Ground,     new Point(GAME.w, GAME.h-2));
				}
				break;
		}
	},

	Start: function() {
		this.state = "Go";
	},

	Stop: function() {
		this.state = "Stop";
		var obstacles = GAME.GetEntitiesOfType("Obstacle");
		for (var i = 0; i < obstacles.length; ++i)
			obstacles[i].velocity.x = 0;
	},

	Clear: function() {
		var obstacles = GAME.GetEntitiesOfType("Obstacle");
		for (var i = 0; i < obstacles.length; ++i)
			obstacles[i].Destroy();
		var points = GAME.GetEntitiesOfType("Points");
		for (var i = 0; i < points.length; ++i)
			points[i].Destroy();
	},

	Floor: function() {
		this.state = "Floor";
		for(var x = 0; x < GAME.w+5; x += 5) {
			GAME.Spawn(Ground, new Point(x, GAME.h-2));
		}
	},

});
