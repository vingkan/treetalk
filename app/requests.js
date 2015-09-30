var treeURL = "https://data.illinois.gov/resource/dzge-uybj.json"
var appToken = "Le00VXF0GK0d8D1tTn2v6Vkpl";

/*
* Creates 
*/
function createRequestURL(baseUrl, query){
	var url = baseUrl;
	var queries = [];
		queries.push('$$app_token' + '=' + appToken);
	for(var tag in query){
		if(query.hasOwnProperty(tag)){
			queries.push(tag + '=' + query[tag]);
		}
	}
	url += '?' + queries.join('&');
	return url;
}

function getTrees(query){
	query['$$app_token'] = appToken;
	$.ajax({
		url: treeURL,
		method: "GET",
		dataType: "json",
		data: query,
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
	console.log(data);
}

getTrees({
	"$limit": 5,
	"tree_species": "Acer rubrum"
});
