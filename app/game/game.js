function updateBoardSize(size){
	less.modifyVars({
		'@boardSize': size
	});
}

function getWindowDimensionLimit(){
	return ((window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth);
}

function updateGameWindow(){
	var limitSize = getWindowDimensionLimit() * 0.8;
	board.size = limitSize;
	board.roadSize = limitSize / 12;
	updateBoardSize(limitSize.toString() + "px");
	board.print();
}

function instructionsAlert(message, time){
	document.getElementById('instructions').innerHTML = message;
	document.getElementById('instructionsAlert').style.height = '10vh';
	setTimeout(function(){
		document.getElementById('instructionsAlert').style.height = '0vh';
	}, time);
}

function instructionsSequence(){
	instructionsAlert("Welcome to Tree Talk: The Game!", 1000);
}