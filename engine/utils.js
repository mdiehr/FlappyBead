/*
Terrarium program from http://eloquentjavascript.net/chapter8.html
Ported to Perlenspiel by Mark Diehr
*/

function clone(object) {
	function OneShotConstructor() {}
	OneShotConstructor.prototype = object;
	return new OneShotConstructor();
}

function randBetween(lo, hi) {
	range = hi - lo + 1;
	var value = Math.floor(Math.random() * range);
	return value + lo;
}

// Runs a function for each item inside of an array
function forEach(array, action) {
	for (var i = 0; i < array.length; i++)
		action(array[i]);
}

// Runs a function for each item inside of an object
function forEachIn(object, action) {
	for (var property in object) {
		if (Object.prototype.hasOwnProperty.call(object, property))
			action(property, object[property]);
	}
}

function randomElement(array) {
	if (array.length == 0)
		throw new Error("The array is empty.");
	return array[Math.floor(Math.random() * array.length)];
}

// Dictionary type
function Dictionary(startValues) {
	this.values = startValues || {};
}
Dictionary.prototype.store = function (name, value) {
	this.values[name] = value;
};
Dictionary.prototype.lookup = function (name) {
	return this.values[name];
};
Dictionary.prototype.contains = function (name) {
	return Object.prototype.hasOwnProperty.call(this.values, name) &&
		Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function (action) {
	forEachIn(this.values, action);
};
Dictionary.prototype.names = function () {
	var names = [];
	this.each(function (name, value) {
		names.push(name);
	});
	return names;
};

// Object inheritance from http://eloquentjavascript.net/chapter8.html#p7e0e1720d924931f
Object.prototype.create = function() {
  var object = clone(this);
  if (typeof object.construct == "function")
    object.construct.apply(object, arguments);
  return object;
};

Object.prototype.extend = function(properties) {
  var result = clone(this);
  forEachIn(properties, function(name, value) {
    result[name] = value;
  });
  return result;
};

// Bind a function to an object
function bind(func, object) {
	return function () {
		return func.apply(object, arguments);
	};
}

// Another way to bind that uses a string
function method(object, name) {
	return function () {
		return object[name].apply(object, arguments);
	};
}

// Converts a letter to the corresponding number (use hex)
var LetterToNumber = function (letter) {
    return parseInt('0x' + letter);
}

var WholePart = function (number) {
	if( number > 0 )
		return Math.floor(number);
	else
		return Math.ceil(number);
}

var FractionPart = function (number) {
	return number - WholePart(number);
}