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

Cloud.prototype.update = function(magnitude, boardSize){
	var exists = true;
	/*var xRand = Math.random() * magnitude - (magnitude / 2);
	var yRand = Math.random() * magnitude - (magnitude / 2);
	var xLo = this.xCoord > (boardSize * 0.5);
	var xHi = this.xCoord < (boardSize * 0.5);
	var yLo = this.yCoord > (boardSize * 0.5);
	var yHi = this.yCoord < (boardSize * 0.5);
	if(xHi && yHi){
		this.xCoord += xRand;
		this.yCoord += yRand;
	}
	else if(xLo && yLo){
		this.xCoord -= xRand;
		this.yCoord -= yRand;
	}*/
	if(printed){
		if(document.getElementById(this.id)){
			if(this.yCoord < (boardSize * 0.9)){
				this.yCoord += 10;	
			}
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