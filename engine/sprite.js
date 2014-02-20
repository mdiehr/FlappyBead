//======================================================================
// Basic sprite type

var Sprite = GameObject.extend({
	// Base type constructor
	construct: function(point) {
		// Construct base class
		GameObject.construct.call(this);
		this.w = 1;
		this.h = 1;
		this.palette = GAME.palette;
		this.point = new Point(point.x, point.y);
		this.translation = new Point(0, 0);
		this.velocity = new Point(0, 0);
		this._setupPicture();
		this._calcRect();
		this.visible = true;
	},

	///////////////////////////
	// Public properties

	name: "SpriteBaseType",
	type: "Sprite",

	// Palette to use for the image
	palette: undefined,
	// This is the image that displays on the screen
	pattern: null,
	picture: null,
	zlayer: 0,

	point: undefined,
	translation: undefined,
	velocity: undefined,
	acceleration: new Point(0, 0),
	center: new Point(0, 0),
	rect: undefined,

	// Is this object allowed to collide with things?
	collisionType: CollisionTypes.none,

	// Move this sprite
	Translate: function(vector) {
		this.translation.x += vector.x;
		this.translation.y += vector.y;
	},

	// Reset the translation and then update the game object
	Update: function(time) {
		// Accumulate the fractional portion
		this.translation.x = FractionPart(this.translation.x);
		this.translation.y = FractionPart(this.translation.y);
		GameObject.Update.call(this, time);
	},

	// Apply the translation to the sprite's point location
	PhysicsUpdate: function(time) {
		this.velocity.x += this.acceleration.x;
		this.velocity.y += this.acceleration.y;
		this.translation.x += this.velocity.x;
		this.translation.y += this.velocity.y;
		// Apply only the whole number portion of the translation
		this.point.x += WholePart(this.translation.x);
		this.point.y += WholePart(this.translation.y);
		this._calcRect();
	},

	/////////////////////////////
	// Events that you can override

	// Calculate a rectangle that encloses this sprite
	_calcRect: function() {
		if( this.rect === undefined )
			this.rect = new Rect(0,0,0,0);
		var roundedPoint = this.point.round();
		this.rect.l = roundedPoint.x - this.center.x;
		this.rect.t = roundedPoint.y - this.center.y;
		this.rect.r = this.rect.l + this.w-1;
		this.rect.b = this.rect.t + this.h-1;
	},

	Rect: function() {
		return this.rect;
	},
	
	///////////////////////////
	// Private functions

	_setupPicture: function() {
		if(this.pattern !== null) {
			this.picture = [];
			this.h = this.pattern.length;
			this.w = this.pattern[0].length;
			// Convert to array
			for(var y = 0; y < this.h; y++) {
				for(var x = 0; x < this.w; x++) {
					var letter = this.pattern[y][x];
					var styleIndex = undefined;
					if( letter !== ' ')
						styleIndex = LetterToNumber(letter);
					this.picture.push(styleIndex)
				}
			}
		}
	},
	
	_render: function() {
		if(this.visible) {
			this._draw(this.point);
			if(this.PostRender)
				this.PostRender();
		}
	},
	
	_draw: function(point) {
		if(this.picture === null)
			return;

		var point = point.round();
		for(var y = 0; y < this.h; y++) {
			for(var x = 0; x < this.w; x++) {
				var px = point.x+x-this.center.x;
				var py = point.y+y-this.center.y;
				// Boundary check
				if( px >= 0 && px < GAME.w && py >= 0 && py < GAME.h) {
					var style = this.picture[x + y * this.w];
					if( style !== undefined)
						PS.style(px, py, this.palette[style]);
				}
			}
		}
	},
});

