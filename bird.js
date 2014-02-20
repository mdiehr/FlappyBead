// Flappy Bead Game Logic

var BirdController = Sprite.extend({
	construct: function(point) {
		Sprite.construct.call(this, point);
	},

	name: "BirdController",
	type: "Controller",

	activateKey: 32,
	state: "",
	bird: null,
	birdStationary: null,
	scoreDisplay: null,
	spawnLocation: new Point(8,15),
	zlayer: 2,

	Spawn: function() {
		//GAME.Spawn(TestSprite, new Point(0,0));
		this.worldSpawner = GAME.Spawn(WorldSpawner, new Point(-1,-1));
		this.scoreDisplay = GAME.Spawn(ScoreDisplay, new Point(15, 1));
		this.hiscoreDisplay = GAME.Spawn(ScoreDisplay, new Point(15, 32-8));
		this._Start();
	},

	_Start: function() {
		this.state = "Start";
		this.birdStationary = GAME.Spawn(BirdStationary, this.spawnLocation);
		this.worldSpawner.Clear();
		this.worldSpawner.Floor();

		GAME.Spawn(Tap, new Point(13, 15));

		this.scoreDisplay.Reset();
		this.scoreDisplay.visible = false;
		this.hiscoreDisplay.visible = false;

		var birdDown = GAME.GetEntitiesOfName("BirdDown");
		for (var i = 0; i < birdDown.length; ++i) {
			birdDown[i].Destroy();
		}
	},

	_Play: function() {
		this.state = "Play";
		this.birdStationary.Destroy();
		this.birdStationary = null;
		this.bird = GAME.Spawn(Bird, this.spawnLocation);
		this.scoreDisplay.visible = true;
		this.worldSpawner.Start();
	},

	_Dead: function() {
		this.state = "Dead";
		this.bird = null;
		this.worldSpawner.Stop();
		GAME.Spawn(Best, new Point(15, 32-14));
		this.hiscoreDisplay.SetPoints(this.scoreDisplay.best);
		this.hiscoreDisplay.visible = true;
	},

	Update: function(time) {
		var activated = GAME.KeyPressed(this.activateKey) || GAME.Touched();
		switch (this.state) {
			case "Start":
				if (activated)
					this._Play();
				break;
			case "Play":
				if (!this.bird.IsAlive())
					this._Dead();
				break;
			case "Dead":
				if (activated)
					this._Start();
				break;
		}
	},
});

var BirdStationary = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(SoundOnSpawn);
		Sprite.construct.call(this, point);
	},

	name: "BirdStationary",
	type: "Pawn",

	center: new Point(1,1),
	pattern:
		["16 ",
		 "606",
		 "E6 "],

	Spawn: function() {
		PS.statusText(GAME.title);
	},
});

// A bird that flaps
var Bird = Sprite.extend({
	construct: function(point) {
		this.RegisterComponent(Flapper, {vel:new Point(0, -1.0)});
		this.RegisterComponent(GetsPoints);
		this.RegisterComponent(HatesPipes);
		this.RegisterComponent(Exploder);
		this.RegisterComponent(ContainsObject, {obj:BirdDown});
		Sprite.construct.call(this, point);
	},

	name: "Bird",
	type: "Pawn",
	collisionType: CollisionTypes.solid,

	center: new Point(1,1),
	acceleration: new Point(0, 0.07),

	pattern:
		["16 ",
		 "606",
		 "E6 "],

	Collide: function(other) {
		Sprite.Collide.call(this, other);
		if( other.type == "Obstacle" ) {
			this.Destroy();
		}
	},
});

// A bird that flaps
var BirdDown = Sprite.extend({
	construct: function(point) {
		Sprite.construct.call(this, point);
		this.velocity = new Point(0.5, 0);
	},

	name: "BirdDown",
	type: "Pawn",
	collisionType: CollisionTypes.solid,
	dead: false,

	center: new Point(1,1),
	acceleration: new Point(0, 0.09),
	pattern:
		["E61",
		 "606",
		 " 6 "],

	Collide: function(other) {
		Sprite.Collide.call(this, other);
		if( other.name == "Ground" && !this.dead) {
			this.acceleration = new Point(0, 0);
			this.velocity     = new Point(0, 0);
			GAME.sounds.play("Impact");
			this.dead = true;
		}
	},
});

// Press a key to flap
var Flapper = Component.extend({
	name: "Flapper",
	vel: new Point(0, -1),
	activateKey: 32,
	sound: "Flap",
	Update: function(time) {
		// Spacebar to flap
		if( GAME.KeyPressed(this.activateKey) || GAME.Touched() ) {
			GAME.sounds.play(this.sound)
			this.parent.velocity = new Point(this.vel.x, this.vel.y);
		}

		// Constrain to the play area
		var a = this.parent.Rect();
		var b = GAME.Rect();
		var v = this.parent.velocity;
		if( a.t + v.y <= b.t ) {
			this.parent.Translate(new Point(0, b.t-(a.t+v.y)) );
		}
		if( a.b + v.y >= b.b ) {
			this.parent.Translate(new Point(0, b.b-(a.b+v.y)) );
			this.parent.velocity = new Point(0, 0);
		}
	},
});

// Die when you hit a pipe
var HatesPipes = Component.extend({
	name: "HatesPipes",
	hateType: "Pipe",
	sound: "Impact",
	Collide: function(other) {
		if( other.type === this.hateType ) {
			GAME.sounds.play(this.sound);
			this.parent.Destroy();
		}
	},
});

var GetsPoints = Component.extend({
	name: "GetsPoints",
	pointType: "Points",
	sound: "Score",
	score: 0,
	scoreDisplay: null,

	DisplayScore: function() {
		this.scoreDisplay.SetPoints(this.score);
	},

	Spawn: function() {
		this.scoreDisplay = GAME.GetEntitiesOfName("ScoreDisplay")[0];
		this.DisplayScore();
	},

	Collide: function(other) {
		if( other.type === this.pointType ) {
			GAME.sounds.play(this.sound);
			other.Destroy();
			this.score++;
			this.DisplayScore();
		}
	},
});