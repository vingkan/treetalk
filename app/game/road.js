Road.prototype.name = ""; //String
Road.prototype.vertical = false; //Boolean
Road.prototype.cars = []; //Array of Cars

function Road(name, vertical){
	this.name = name;
	this.vertical = vertical || this.vertical;
	this.cars = this.cars;
}

Road.prototype.toHTML = function(){
	html = '';
	var verticalModifier = '"';
	if(this.vertical){
		verticalModifier = ' vertical"';
	}
	html += '<div class="road' + verticalModifier + ">";
	html += '</div>';
	return html;
}