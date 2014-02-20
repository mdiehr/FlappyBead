// The text "TAP"
var Tap = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(Blinker, {rate:20, color:0xFFFFFF});
		this.RegisterComponent(TapAnywhereToDestroy);
		Sprite.construct.call(this, point);
	},

	name: "Tap",
	type: "Text",

	zlayer: 10,
	
	center: new Point(2,2),
	pattern:
		["ddd ddd ddd",
		 " 8  8 8 8 8",
		 " 2  222 222",
		 " 1  1 1 1  ",
		 " 0  0 0 0  "],
});