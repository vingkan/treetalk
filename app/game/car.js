var carIDList = [];

function newCarID(){
	var newID = "car" + carIDList.length;
	carIDList.push(newID);
	return newID;
}

Car.prototype.id = "" //String: ID of DOM representation
Car.prototype.name = "" //String
Car.prototype.boardSize = 100; //Double
Car.prototype.position = 0 //Double as percentage of boardSize
Car.prototype.appearanceOptions = 36; //Body Type as Integer
Car.prototype.appearance = 1; //Body Type as Integer

function Car(name){
	this.id = newCarID();
	this.name = name || "Car";
	this.boardSize = 100;
	this.position = Math.random() * this.boardSize * 2;
	this.appearance = Math.round((Math.random() * (this.appearanceOptions - 1)) + 1);
}

Car.prototype.isPolluting = function(){
	var polluting = true;
	if(Math.random() > 0.5 && this.position < this.boardSize){
		polluting = true;
	}
	return polluting;
}

Car.prototype.pollute = function(data){
	var xCar = 0;
	var yCar = 0;
	var text = this.id;
	if(data.verticalRoad){
		xCar = (data.roadOffset * 0.825) + (this.boardSize * 1.575);
		yCar = this.boardSize + this.position;
	}
	else{
		xCar = this.position;
		yCar = data.roadOffset * 0.825;
		text += '-x';
	}
	new Cloud(xCar, yCar, data.cloudID, text)
	//board.clouds.push();
}

Car.prototype.update = function(boardSize, roadSize, increment){
	//console.log("updated car: " + this.name);
	this.boardSize = boardSize;
	this.position += increment;
	if(this.position > (boardSize + roadSize)){
		this.position = -2.5 * roadSize;
		if(printed){
			document.getElementById(this.id).style.display = "none";	
		}
	}
	else{
		if(printed){
			document.getElementById(this.id).style.display = "block";	
		}	
	}
	if(printed){
		document.getElementById(this.id).style.marginLeft = this.position + "px";	
	}
}

Car.prototype.toHTML = function(){
	var html = '';
	html += '<div id="' + this.id + '" class="car" style="margin-left:';
	html += this.position + 'px;background-image:';
	html += 'url(style/cars/path' + (2192 + this.appearance) * 2 + '.png);">';
	html += this.id + '</div>';
	return html;
}