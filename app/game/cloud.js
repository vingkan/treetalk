var cloudIDList = [];

function newCloudID(){
	var newID = "cloud" + cloudIDList.length;
	cloudIDList.push(newID);
	return newID;
}

Cloud.prototype.id = ""; //String
Cloud.prototype.xCoord = 0; //Double
Cloud.prototype.yCoord = 0; //Double

function Cloud(x, y, boardID){
	this.id = newCloudID();
	this.xCoord = x || 0;
	this.yCoord = y || 0;
	if(printed){
		document.getElementById(boardID + '-clouds').innerHTML += this.toHTML();
		console.log('printed cloud ' + this.id)
	}
}

Cloud.prototype.update = function(roadSize, boardSize){
	if(printed){
		var magnitude = roadSize * 2;
		var exists = true;
		var xRand = Math.random() * magnitude - (magnitude / 2);
		var yRand = Math.random() * magnitude - (magnitude / 2);
		var xLo = true//this.xCoord > (boardSize * 0.5);
		var xHi = true//this.xCoord < (boardSize * 0.5);
		var yLo = true//this.yCoord > (boardSize * 0.5);
		var yHi = true//this.yCoord < (boardSize * 0.5);
		if(xHi && yHi){
			this.xCoord += xRand;
			this.yCoord += yRand;
		}
		else if(xLo && yLo){
			this.xCoord -= xRand;
			this.yCoord -= yRand;
		}
		if(document.getElementById(this.id)){
			document.getElementById(this.id).style.marginLeft = this.xCoord + 'px';
			document.getElementById(this.id).style.marginTop = this.yCoord + 'px';
		}
		else{
			exists = false;
			console.log('cloud.update() ' + this.id + " DNE")
		}
	}
	return exists;
}

Cloud.prototype.toHTML = function(){
	var html = '';
	html += '<div id="' + this.id + '" class="cloud" style="';
	html += 'margin-left:' + this.xCoord + 'px;margin-top:' + this.yCoord + 'px;">';
	html += '</div>';
	return html;
}

Cloud.prototype.toString = function(){
	return this.id + " at {" + this.xCoord + ", " + this.yCoord + "}";
}