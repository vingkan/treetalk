console.log("Hello World");

//https://data.illinois.gov/Municipality/Trees-Owned-by-the-City-of-Champaign/dzge-uybj

var appToken = "Le00VXF0GK0d8D1tTn2v6Vkpl";

function sampleAjax(){
	$.ajax({
		url: "https://data.chattlibrary.org/resource/5na4-ggsr.json",
		method: "GET",
		dataType: "json",
		data: {
			"codedescription": "EMBEZZLEMENT",
			"$$app_token": appToken
		},
		success: function(data, status, jqxhr){
			console.log("Received: ", data);
		},
		error: function(jqxhr, status, error){
			console.log("Critical Error. RIP.");
		}
	});
}

var treesAPIUrl = "https://data.illinois.gov/api/views/dzge-uybj/rows.json";

function getTrees(){
	$.ajax({
		url: treesAPIUrl,
		method: "GET",
		dataType: "json",
		data: {
			"$limit": 5,
			"tree_species": "Acer rubrum",
			"$$app_token": appToken
		},
		success: function(data, status, jqxhr){
			console.log("Received: ", data);
			handleTreeData(data.data);
		},
		error: function(jqxhr, status, error){
			console.log("Critical Error. RIP.");
		}
	});
}

function handleTreeData(data){
	//8 references "tree_species"
	console.log(data[25][8]);
}

/*
* Use $.param(data) to convert simple tag queries to URLs: http://stackoverflow.com/questions/3308846/serialize-object-to-query-string-in-javascript-jquery
* Loop Over JSON Tags: http://stackoverflow.com/questions/10352840/loop-through-json-object
*/
function convertQuery(){
	var query = {
		"$limit": 5,
		'$offset': 0
	}
	var queries = [];
	for(var tag in query){
		if(query.hasOwnProperty(tag)){
			console.log(tag + '=' + query[tag]);
			queries.push(tag + '=' + query[tag]);
		}
	}
}

function getTreesWithLimit(){

}