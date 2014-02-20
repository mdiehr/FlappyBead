// Big explosion
var Explosion = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(TimedDestructor, {fuse:9});
		this.RegisterComponent(Blinker, {rate:2});
		Sprite.construct.call(this, point);
	},

	name: "Explosion",
	type: "Effect",
	collisionType: CollisionTypes.none,

	zlayer: 10,

	center: new Point(2,2),
	pattern:
		["E 9 E",
		 " 9E9 ",
		 "9EEE9",
		 " 9E9 ",
		 "E 9 E"],
});
