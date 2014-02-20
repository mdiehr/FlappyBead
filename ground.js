var Ground = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(RemoveOffLeftEdge);
		Sprite.construct.call(this, point);
		this.velocity = new Point(-0.5, 0);
	},

	name: "Ground",
	type: "Obstacle",
	collisionType: CollisionTypes.solid,
	
	zlayer: 5,

	center: new Point(0,0),
	pattern:
		["44411",
		 "11100",],
});
