// Invisible object that gives you points
var ScoreTrigger = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(RemoveOffLeftEdge);
		Sprite.construct.call(this, point);
		this.velocity = new Point(-0.5, 0);
		this.w = 1;
		this.h = 12;
		this.visible = false;
	},

	name: "ScoreTrigger",
	type: "Points",
	collisionType: CollisionTypes.trigger,
	center: new Point(0,0),
});