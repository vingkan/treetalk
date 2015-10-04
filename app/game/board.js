Board.prototype.gameSpace = "" //String: parent div for board
Board.prototype.roads = [] //Array of Roads
Board.prototype.trees = [] //Array of Trees

function Board(){
	this.gameSpace = "gameSpace";
	this.roads = [];
	this.trees = [];
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