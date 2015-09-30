Tree.prototype.species = ""; //String
Tree.prototype.name = ""; //String
Tree.prototype.diameter = 0; //Integer
Tree.prototype.trunks = 0; //Integer
Tree.prototype.location = ""; //String
Tree.prototype.coordinates = {
	'latitude': 0.0,
	'longitude': 0.0
}; //Object of Doubles/Floats

function Tree(data){
	this.species = data['tree_species'] || this.species;
	this.name = data['common_name'] || this.name;
	this.diameter = parseInt(data['diameter_at_breast_height'], 10) || this.diameter;
	this.trunks = parseInt(data['number_of_trunks'], 10) || this.trunks;
	this.location = data['location_type'] || this.location;
	this.coordinates = {
		'latitude': parseFloat(data['location']['latitude']),
		'longitude': parseFloat(data['location']['longitude'])
	} || this.coordinates;
}

Tree.prototype.toString = function(){
	var plural = "";
	if(this.trunks > 1){
		plural = "s";
	}
	return this.diameter + "' "
		+ this.name + " (" + this.species + ") "
		+ "with " + this.trunks + " trunk" + plural + " "
		+ "at {" + this.coordinates.latitude.toFixed(3) + ", "
		+ this.coordinates.longitude.toFixed(3) + "}";
}