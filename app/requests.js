var treeURL = "https://data.illinois.gov/resource/dzge-uybj.json"
var appToken = "Le00VXF0GK0d8D1tTn2v6Vkpl";

var incomingTrees = [];
var incomingCounts = [];

function getTrees(id, query, limit){
	query['$$app_token'] = appToken;
	query['$limit'] = limit;
	$.ajax({
		url: treeURL,
		method: "GET",
		dataType: "json",
		data: query,
		success: function(data, status, jqxhr){
			console.log("Received tree data.", data);
			handleTreeData(id, data);
		},
		error: function(jqxhr, status, error){
			console.log("Critical Error. RIP.");
		}
	});
}

function handleTreeData(id, data){
	console.log('Begin parsing tree data.', data);
	var newTrees = []
	for(var d = 0; d < data.length; d++){
		newTrees.push(new Tree(data[d]));
	}
	incomingTrees.push({
		'data-id': id,
		'trees': newTrees
	});
	console.log('Finished parsing tree data.');
	console.log(incomingTrees);
}

function getTreesCount(id, tag, value){
	var query = {
		'$$app_token': appToken,
		'$select': 'count(' + tag + ')',
	}
	query[tag] = value;
	$.ajax({
		url: treeURL,
		method: "GET",
		dataType: "json",
		data: query,
		success: function(data, status, jqxhr){
			console.log("Received tree data.", data[0]);
			console.log(data[0]['count_' + tag])
			//handleTreeData(data);
		},
		error: function(jqxhr, status, error){
			console.log("Critical Error. RIP.");
		}
	});
}

getTrees('a1', {
	"tree_species": "Acer rubrum"
}, 3);


//getTreesCount('tree_species', 'Acer rubrum');