// Draw numbers on the screen

var ScoreDisplay = Sprite.extend({
	construct: function(point) {
		Sprite.construct.call(this, point);
		this.numerals = [];
		for (var i = 0; i < BIG_NUM.length; ++i)
			this.numerals.push(BIG_NUM[i].create(point));
	},

	name: "ScoreDisplay",
	type: "UI",

	zlayer: 10,

	value: 0,
	best:  0,

	numerals: [],
	centered: true,

	Reset: function() {
		this.value = 0;
	},

	AddPoints: function(points) {
		this.SetPoints(points + this.value);
	},

	SetPoints: function(points) {
		this.value = points;
		this.best = Math.max(this.best, this.value);
	},

	PostRender: function() {
		var numString = this.value.toString();
		var x = this.point.x;
		var y = this.point.y;
		if(this.centered)
			x -= (numString.length*2) - 2;
		for (var i = 0; i < numString.length; ++i) {
			var digit = parseInt(numString[i]);
			this.numerals[digit]._draw(new Point(x+i*4, y))
		}
	}
})

var Numeral = Sprite.extend({
	name: "Numeral",
	type: "Text",
	center: new Point(0,0),
	pattern: ["0"],
	layer: 10,
});

var BIG_NUM = [];
BIG_NUM[0] = Numeral.extend({	pattern: ["000",
										  "0 0",
										  "0 0",
										  "0 0",
										  "000"]});

BIG_NUM[1] = Numeral.extend({	pattern: [" 0 ",
										  "00 ",
										  " 0 ",
										  " 0 ",
										  "000"]});

BIG_NUM[2] = Numeral.extend({	pattern: ["000",
										  "  0",
										  "000",
										  "0  ",
										  "000"]});

BIG_NUM[3] = Numeral.extend({	pattern: ["000",
										  "  0",
										  "000",
										  "  0",
										  "000"]});

BIG_NUM[4] = Numeral.extend({	pattern: ["0 0",
										  "0 0",
										  "000",
										  "  0",
										  "  0"]});

BIG_NUM[5] = Numeral.extend({	pattern: ["000",
										  "0  ",
										  "000",
										  "  0",
										  "000"]});

BIG_NUM[6] = Numeral.extend({	pattern: ["000",
										  "0  ",
										  "000",
										  "0 0",
										  "000"]});

BIG_NUM[7] = Numeral.extend({	pattern: ["000",
										  "  0",
										  "  0",
										  "  0",
										  "  0"]});

BIG_NUM[8] = Numeral.extend({	pattern: ["000",
										  "0 0",
										  "000",
										  "0 0",
										  "000"]});

BIG_NUM[9] = Numeral.extend({	pattern: ["000",
										  "0 0",
										  "000",
										  "  0",
										  "  0"]});
