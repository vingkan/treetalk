Car.prototype.name = "" //String
Car.prototype.color = "" //Color as String

function Car(name, color){
	this.name = name || "Car";
	this.color = color || "red";
}

Car.prototype.toHTML = function(){
	var html = '';
	html += '<div class="car">' + this.name + '</div>';
	return html;
}