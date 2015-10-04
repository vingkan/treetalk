var roadIDList = [];

function newRoadID(){
	var newID = "road" + roadIDList.length;
	roadIDList.push(newID);
	return newID;
}

Road.prototype.id = "" //String: ID of DOM representation
Road.prototype.name = ""; //String
Road.prototype.roadSize = 10; //Double
Road.prototype.vertical = false; //Boolean
Road.prototype.cars = []; //Array of Cars

function Road(name, vertical, cars){
	this.id = newRoadID();
	this.name = name;
	this.roadSize = 10;
	this.vertical = vertical || false;
	this.cars = cars || [];
}

Road.prototype.update = function(roadSize){
	//console.log("updated road: " + this.name);
	this.roadSize = roadSize;
	var increment = roadSize;
	for(var c = 0; c < this.cars.length; c++){
		this.cars[c].update(increment);
	}
}

Road.prototype.toHTML = function(offset){
	html = '';
	var verticalModifier = '" ';
	var marginTag = "margin-top";
	var marginSize = offset;
	if(this.vertical){
		verticalModifier = ' vertical" ';
		marginTag = "margin-left";
	}
	html += '<div id="' + this.id + '" class="road' + verticalModifier;
	html += 'style="' + marginTag + ':' + marginSize + ';"';
	html += '>';
	html += '<p class="roadName">' + this.name + '</p>';
	for(var c = 0; c < this.cars.length; c++){
		html += this.cars[c].toHTML();
	}
	html += '</div>';
	return html;
}