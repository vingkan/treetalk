var carIDList = [];

function newCarID(){
	var newID = "car" + carIDList.length;
	carIDList.push(newID);
	return newID;
}

Car.prototype.id = "" //String: ID of DOM representation
Car.prototype.name = "" //String
Car.prototype.color = "" //Color as String
Car.prototype.position = 0 //Double
Car.prototype.appearanceOptions = 36; //Body Type as Integer
Car.prototype.appearance = 1; //Body Type as Integer

function Car(name, color, position){
	this.id = newCarID();
	this.name = name || "Car";
	this.color = color || "red";
	this.position = position || 100;
	this.appearance = Math.round((Math.random() * (this.appearanceOptions - 1)) + 1);
}

Car.prototype.update = function(increment){
	console.log("updated car: " + this.name);
	this.position += increment;
}

Car.prototype.toHTML = function(){
	var html = '';
	html += '<div id="' + this.id + '" class="car" style="margin-left:';
	html += this.position + 'px;background-image:';
	html += 'url(style/cars/path' + (2192 + this.appearance) * 2 + '.png);">';
	html += '</div>';
	return html;
}