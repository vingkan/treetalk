Board.prototype.gameSpace = "" //String: parent div for board
Board.prototype.size = 400; //Pixels as Double
Board.prototype.roadSize = 40; //Pixels as Double
Board.prototype.roads = [] //Array of Roads
Board.prototype.trees = [] //Array of Trees

function Board(gameSpaceID){
	this.gameSpace = gameSpaceID || "gameSpace";
	this.size = 400;
	this.roadSize = 40;
	this.roads = [];
	this.trees = [];
}

Board.prototype.update = function(){
	var gameSpaceDiv = document.getElementById(this.gameSpace);
	gameSpaceDiv.innerHTML = this.toHTML();
}

Board.prototype.toHTML = function(){
	html = '';
	html += '<div class="board">';
	var offSet = 0;
	for(var r = 0; r < this.roads.length; r++){
		offSet += 10;
		html += this.roads[r].toHTML(offSet.toString() + 'px');
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