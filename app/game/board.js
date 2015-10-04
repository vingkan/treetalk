Board.prototype.gameSpace = "" //String: parent div for board
Board.prototype.roads = [] //Array of Roads
Board.prototype.trees = [] //Array of Trees

function Board(gameSpaceID){
	this.gameSpace = gameSpaceID || "gameSpace";
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
	for(var r = 0; r < this.roads.length; r++){
		html += this.roads[r].toHTML();
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