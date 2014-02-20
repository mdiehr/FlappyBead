//======================================================================
// Entities for testing

var TestComponent = Component.extend({
	name: "TestComponent",
	
	// Called once per frame
	Update: function(time) { },

	// When the component is initialized
	Spawn: function(parent) {
		//PS.debug(parent.name + " spawned with a test component.\n");
	},

	// After the component (or parent object) is destroyed
	Deconstruct: function() { },

	// When the parent object touches another object
	Collide: function(other) { },

	// When the component is triggered (say, by a player)
	Trigger: function(other) { },

	// Draw glyphs over this sprite to show which colors were used
	PostRender: function() {
		var point = this.parent.point.round();
		var center = this.parent.center;
		var w = this.parent.w;
		var h = this.parent.h;
		var pattern = this.parent.pattern;

		for(var y = 0; y < h; y++) {
			for(var x = 0; x < w; x++) {
				var dx = point.x+x-center.x;
				var dy = point.y+y-center.y;
				// Boundary check
				if( dx >= 0 && dx < GAME.w && dy >= 0 && dy < GAME.h) {
					var letter = pattern[y][x];
					PS.glyph(dx, dy, letter)
				}
			}
		}
	},
});

//======================================================================
// TestSprite
var TestSprite = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(TestComponent);
		Sprite.construct.call(this, point);
	},

	name: "TestSprite",
	collisionType: CollisionTypes.solid,
	pattern:
		["0123",
		 "4567",
		 "89AB",
		 "CDEF"],
});
