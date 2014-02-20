// Soundbank for games
GAME.sounds = new Dictionary();
GAME.sounds.preload = function () {
	this.each(function(property, effectName){
		PS.audioLoad(effectName);
	});
};
GAME.sounds.play = function(effectName) {
	PS.audioPlay(this.lookup(effectName));
}

GAME.sounds.store("Explode",	"fx_shoot3"		);
GAME.sounds.store("Flap",		"fx_rip"		);
GAME.sounds.store("Impact",		"fx_shoot7"		);
GAME.sounds.store("Score",		"fx_coin7"		);
GAME.sounds.store("Spawning",	"fx_powerup1"	);
