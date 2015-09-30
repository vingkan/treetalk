var treeURL = "https://data.illinois.gov/resource/dzge-uybj.json"
var appToken = "Le00VXF0GK0d8D1tTn2v6Vkpl";

var incomingTrees = [];

function getTrees(query, limit){
	query['$$app_token'] = appToken;
	query['$limit'] = limit;
	$.ajax({
		url: treeURL,
		method: "GET",
		dataType: "json",
		data: query,
		success: function(data, status, jqxhr){
			console.log("Received: ", data);
			handleTreeData(data);
		},
		error: function(jqxhr, status, error){
			console.log("Critical Error. RIP.");
		}
	});
}

function handleTreeData(data){
	console.log('Parse: ', data);
	incomingTrees = [];
	for(var d = 0; d < data.length; d++){
		incomingTrees.push(new Tree(data[d]));
	}
	console.log('Finished parsing tree data.');
}

getTrees({
	"tree_species": "Acer rubrum"
}, 3);
