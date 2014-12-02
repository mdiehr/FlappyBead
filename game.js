// game.js for Perlenspiel 3.1.0

PS.debug = function() {
	console.log(arguments);
}

// PS.init( system, options )
// Initializes the game
PS.init = function( system, options ) {
	"use strict";

	InitPalette();

	GAME.initialize();
	GAME.Spawn(BirdController, new Point(-1,-1));

	var footer = document.getElementById("game-footer");
	var sourceLink = document.createElement('a');
	sourceLink.setAttribute('href', "./FlappyBead.zip");
	sourceLink.innerText = "Download Source";
	footer.appendChild(document.createElement('br'));
	footer.appendChild(sourceLink);
};

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";
	GAME.KeyHandler(key, true);
};

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";
	GAME.KeyHandler(key, false);
};

PS.touch = function( x, y, data, options ) {
	"use strict";
	GAME.TouchHandler(x, y);
};

PS.release = function( x, y, data, options ) {
	"use strict";
};

PS.enter = function( x, y, data, options ) {
	"use strict";
};

PS.exit = function( x, y, data, options ) {
	"use strict";
};

PS.exitGrid = function( options ) {
	"use strict";
};

PS.input = function( sensors, options ) {
	"use strict";
};