Road.prototype.name = ""; //String
Road.prototype.vertical = false; //Boolean
Road.prototype.cars = []; //Array of Cars

function Road(name, vertical, cars){
	this.name = name;
	this.vertical = vertical || false;
	this.cars = cars || [];
}

Road.prototype.toHTML = function(){
	html = '';
	var verticalModifier = '"';
	if(this.vertical){
		verticalModifier = ' vertical"';
	}
	html += '<div class="road' + verticalModifier + ">";
	for(var c = 0; c < this.cars.length; c++){
		html += this.cars[c].toHTML();
	}
	html += '</div>';
	return html;
}