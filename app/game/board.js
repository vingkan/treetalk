Board.prototype.id = "" //String: parent div for board
Board.prototype.size = 400; //Pixels as Double
Board.prototype.roadSize = 40; //Pixels as Double
Board.prototype.roads = [] //Array of Roads
Board.prototype.trees = [] //Array of Trees
Board.prototype.clouds = [] //Array of Clouds

function Board(id){
	this.id = id || "gameSpace";
	this.size = 400;
	this.roadSize = 40;
	this.roads = [];
	this.trees = [];
	this.clouds = [];
}

Board.prototype.pollute = function(){
	if(this.clouds.length > 1000){
		this.clouds = [];
	}
	for(var r = 0; r < this.roads.length; r++){
		for(var c = 0; c < this.roads[r].cars.length; c++){
			if(this.roads[r].vertical){
				this.clouds.push(new Cloud(this.roads[r].offset, this.roads[r].cars[c].position));
			}
			else{
				this.clouds.push(new Cloud(this.roads[r].cars[c].position, this.roads[r].offset));
			}
		}
	}
}

Board.prototype.printPollution = function(){
	var html = "";
	var xOffSet = this.roadSize;
	var yOffSet = this.roadSize + (-1 * ((this.size - this.roadSize) / 2));
	for(var c = 0; c < this.clouds.length; c++){
		var xRandom = Math.random() * ((this.size) + (yOffSet / 4));
		var yRandom = Math.random() * ((this.size - this.roadSize));
		html += '<div class="cloud" ';
		html += 'style="margin-left:' + xRandom + 'px;';
		html += 'margin-top:' + yRandom + 'px;"></div>';
		//html += this.clouds[c].toHTML();
	}
	if(printed){
		document.getElementById(this.id + '-clouds').innerHTML = html;
	}
}

Board.prototype.update = function(){
	this.pollute();
	this.printPollution();
	for(var r = 0; r < this.roads.length; r++){
		this.roads[r].update(this.size, this.roadSize);
	}
}

Board.prototype.print = function(){
	this.update();
	var gameSpaceDiv = document.getElementById(this.id);
	gameSpaceDiv.innerHTML = this.toHTML();
	printed = true;
}

Board.prototype.toHTML = function(){
	html = '';
	html += '<div class="board">';
	var xOffSet = this.roadSize;
	var yOffSet = this.roadSize + (-1 * ((this.size - this.roadSize) / 2));
	var offsetInterval = this.roadSize * 3;
	html += '<div id="' + this.id + '-clouds" class="cloudSpace">';
	html += '</div>';
	for(var r = 0; r < this.roads.length; r++){
		if(this.roads[r].vertical){
			html += this.roads[r].toHTML(yOffSet);
			yOffSet += offsetInterval;
		}
		else{
			html += this.roads[r].toHTML(xOffSet);
			xOffSet += offsetInterval;
		}
	}
	html += '</div>';
	return html;
}

Board.prototype.addRoads = function(roadsArray){
	console.log("a")
	for(var r = 0; r < roadsArray.length; r++){
		this.roads.push(roadsArray[r]);
	}
}

Board.prototype.getAllCars = function(){
	var allCars = [];
	for(var r = 0; r < this.roads.length; r++){
		for(var c = 0; c < this.roads[r].cars.length; c++){
			allCars.push(this.roads[r].cars[c]);
		}
	}
	return allCars;
}