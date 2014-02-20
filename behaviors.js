// Behavioral components

var TapAnywhereToDestroy = Component.extend({
	name: "TapAnywhereToDestroy",
	activateKey: 32,
	age: 0,
	Update: function(time) {
		if (this.age > 0 && (GAME.KeyPressed(this.activateKey) || GAME.Touched()))
			this.parent.Destroy();
		this.age++;
	},
});

var TimedDestructor = Component.extend({
	name: "TimedDestructor",
	fuse: 10,
	Update: function(time) {
		if( this.fuse-- <= 0 )
			this.parent.Destroy();
	},
});

var Exploder = Component.extend({
	name: "Exploder",
	Deconstruct: function() {
		GAME.sounds.play("Explode");
		GAME.Spawn(Explosion, this.parent.point);
	}
})

var ContainsObject = Component.extend({
	name: "ContainsObject",
	chance: 1,	// 1 in X chance
	obj: undefined,
	Deconstruct: function() {
		if( this.obj && randBetween(1, this.chance) == 1 ) {
			GAME.Spawn(this.obj, this.parent.point);
		}
	}
})

var SoundOnSpawn = Component.extend({
	name: "SoundOnSpawn",
	sound: "Spawning",
	Spawn: function(owner) {
		GAME.sounds.play(this.sound);
	},
});

var Blinker = Component.extend({
	name: "Blinker",
	rate : 3,
	on : false,
	color : 0xFFFFFF,

	// Called once per frame
	Update: function(time) {
		if( time % this.rate == 0 ) {
			this.on = !this.on;
		}
	},

	// Draw glyphs over this sprite to show which colors were used
	PostRender: function() {
		if( this.on ) {
			var point = this.parent.point.round();
			var center = this.parent.center;
			var w = this.parent.w;
			var h = this.parent.h;
			var picture = this.parent.picture;

			for(var y = 0; y < h; y++) {
				for(var x = 0; x < w; x++) {
					var dx = point.x+x-center.x;
					var dy = point.y+y-center.y;
					// Boundary check
					if( dx >= 0 && dx < GAME.w && dy >= 0 && dy < GAME.h) {
						var style = picture[x + y * w];
						if( style !== undefined)
							PS.style(dx, dy, {color: this.color});
					}
				}
			}
		}
	},
});

var RemoveOffLeftEdge = Component.extend({
	name: "RemoveOffBottomEdge",
	Update: function(time) {
		var rect = this.parent.Rect();
		if( rect.r < 0 ) {
			this.parent.Remove();
		}
	},
});
