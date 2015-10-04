Board.prototype.gameSpace = "" //String: parent div for board
Board.prototype.size = 400; //Pixels as Double
Board.prototype.roadSize = 40; //Pixels as Double
Board.prototype.roads = [] //Array of Roads
Board.prototype.trees = [] //Array of Trees
Board.prototype.clouds = [] //Array of Clouds

function Board(gameSpaceID){
	this.gameSpace = gameSpaceID || "gameSpace";
	this.size = 400;
	this.roadSize = 40;
	this.roads = [];
	this.trees = [];
	this.clouds = [];
}

Board.prototype.update = function(){
	var gameSpaceDiv = document.getElementById(this.gameSpace);
	gameSpaceDiv.innerHTML = this.toHTML();
}

Board.prototype.toHTML = function(){
	html = '';
	html += '<div class="board">';
	var xOffSet = this.roadSize;
	var yOffSet = this.roadSize + (-1 * ((this.size - this.roadSize) / 2));
	var offsetInterval = this.roadSize * 3;
	for(var c = 0; c < 10000; c++){
		var xRandom = Math.random() * ((this.size) + (yOffSet / 4));
		var yRandom = Math.random() * ((this.size - this.roadSize));
		html += '<div class="cloud" ';
		html += 'style="margin-left:' + xRandom + 'px;';
		html += 'margin-top:' + yRandom + 'px;"></div>';
	}
	for(var r = 0; r < this.roads.length; r++){
		if(this.roads[r].vertical){
			html += this.roads[r].toHTML(yOffSet.toString() + 'px');
			yOffSet += offsetInterval;
		}
		else{
			html += this.roads[r].toHTML(xOffSet.toString() + 'px');
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