// Pipes that the player can run into
var PipeCap = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(RemoveOffLeftEdge);
		Sprite.construct.call(this, point);
		this.velocity = new Point(-0.5, 0);
	},

	name: "PipeCap",
	type: "Obstacle",
	collisionType: CollisionTypes.trigger,
	
	zlayer: 2,

	center: new Point(2,0),
	pattern:
		["BBBBB",
		 "B5555",],
});

var PipeLength = Sprite.extend({
		construct: function(point) {
		this.RegisterComponent(RemoveOffLeftEdge);
		Sprite.construct.call(this, point);
		this.velocity = new Point(-0.5, 0);
	},

	name: "PipeLength",
	type: "Obstacle",
	collisionType: CollisionTypes.trigger,

	zlayer: 1,

	center: new Point(1,0),

	// It is 20 beads tall
	pattern: ["B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55","B55"],
})
