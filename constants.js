// Constants



var sPalette = [];
var skyColor = 0x99DDFF;
var sBackground = {color:skyColor, glyph:0, alpha:255, radius:0, borderColor:skyColor, border:0};
var sBackgroundFast = {color:skyColor, glyph:0};
var sTransparent = {alpha:0};

(function(){
	var ColorSpec = function(color) {
		this.color = color;
	}
	sPalette.push( new ColorSpec( PS.makeRGB( 20,  12,  28 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB( 68,  36,  52 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB( 48,  52, 109 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB( 78,  74,  78 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(133,  76,  48 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB( 52, 101,  36 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(208,  70,  72 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(117, 113,  97 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB( 89, 125, 206 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(210, 125,  44 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(133, 149, 161 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(109, 170,  44 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(210, 170, 153 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(109, 194, 202 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(218, 212,  94 ) ) );
	sPalette.push( new ColorSpec( PS.makeRGB(222, 238, 214 ) ) );
	
})();

