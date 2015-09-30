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
			"tree_species": "Acer rubrum",
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