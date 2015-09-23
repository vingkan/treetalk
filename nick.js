var nick = document.getElementById("nick"); // refers to the div tag with nick
var selectorNick = document.getElementById("selector-nick");

//nick.innerHTML = "I like trees";// refers to spaces between div tag
//nick.innerHTML += '<br><img src="style/tree.gif">'; // injects html tags onto 

function nickTree(){
	var tree = selectorNick.value;
	alert(tree); // create a popup with string parameters
}

var treeList = document.getElementsByTagName("li");

for (var i = 0; i < treeList.length; i++) {
	console.log(treeList[i]);
}
