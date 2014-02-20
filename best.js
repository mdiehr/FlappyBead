// The text "BEST"
var Best = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(TapAnywhereToDestroy);
		Sprite.construct.call(this, point);
	},

	name: "Best",
	type: "Text",

	zlayer: 10,
	
	center: new Point(6, 0),
	pattern:
		["ddd ddd ddd ddd",
		 "8 8 8   8    8 ",
		 "22  222 222  2 ",
		 "1 1 1     1  1 ",
		 "000 000 000  0 "],
});