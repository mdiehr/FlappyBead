// Perlenspiel Bead Style Module

// + Provides a PS.style function

/*jslint nomen: true, white: true, vars: true */
/*global document, window, screen, console, Image, AQ, PIXI, PERLENSPIEL, PS */

var PerlenspielBeadStyle = function (my) {
    "use strict";

	////////////////////////////////////////
	// Public properties

	my.PSInterface.prototype.style = function(x, y, style) {
		if( typeof style !== "object" )
			throw new Error( "Style was invalid: " + style );
		my._applyStyle(x, y, style);
	};

    ////////////////////////////////////////
	// Private properties

	// Bead Style
	my._applyStyle = function(x, y, style) {
		if( typeof style.color !== "undefined" )
			my.instance.color(x, y, style.color);
		if( typeof style.alpha !== "undefined" )
			my.instance.alpha(x, y, style.alpha);
		if( typeof style.fade !== "undefined" )
			my.instance.fade(x, y, style.fade);
		if( typeof style.scale !== "undefined" )
			my.instance.scale(x, y, style.scale);
		if( typeof style.radius !== "undefined" )
			my.instance.radius(x, y, style.radius);
		if( typeof style.data !== "undefined" )
			my.instance.data(x, y, style.data);
		if( typeof typeof style.exec === "function" )
			my.instance.exec(x, y, style.exec);
		if( typeof style.visible !== "undefined" )
			my.instance.visible(x, y, style.visible);
		if( typeof style.active !== "undefined" )
			my.instance.active(x, y, style.active);
		
		if( typeof style.border !== "undefined" )
			my.instance.border(x, y, style.border);
		if( typeof style.borderColor !== "undefined" )
			my.instance.borderColor(x, y, style.borderColor);
		if( typeof style.borderAlpha !== "undefined" )
			my.instance.borderAlpha(x, y, style.borderAlpha);
		if( typeof style.borderFade !== "undefined" )
			my.instance.borderFade(x, y, style.borderFade);
		
		if( typeof style.glyph !== "undefined" )
			my.instance.glyph(x, y, style.glyph);
		if( typeof style.glyphColor !== "undefined" )
			my.instance.glyphColor(x, y, style.glyphColor);
		if( typeof style.glyphAlpha !== "undefined" )
			my.instance.glyphAlpha(x, y, style.glyphAlpha);
		if( typeof style.glyphScale !== "undefined" )
			my.instance.glyphScale(x, y, style.glyphScale);
		if( typeof style.glyphFade !== "undefined" )
			my.instance.glyphFade(x, y, style.glyphFade);
	}

	return my;
};

// Register with global PERLENSPIEL manager
PERLENSPIEL.RegisterModule(PerlenspielBeadStyle);



