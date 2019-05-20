const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// There are a lot of other JSON fields, but just choosing certain ones to use for now

// Create Schema
const CardSchema = new Schema({
	attack         : {
		type : Number
	},
	artist         : {
		type : String
	},
	cardClass      : {
		type : String
	},
	collectible    : {
		type : Boolean
	},
	cost           : {
		type : Number
	},
	dbfId          : {
		type : Number
	},
	durability     : {
		type : Number
	},
	elite          : {
		type : Boolean
	},
	flavor         : {
		type : String
	},
	health         : {
		type : Number
	},
	id             : {
		type : String
	},
	mechanics      : {
		type : [ String ]
	},
	name           : {
		type : String
	},
	race           : {
		type : String
	},
	rarity         : {
		type : String
	},
	referencedTags : {
		type : [ String ]
	},
	set            : {
		type : String
	},
	text           : {
		type : String
	},
	type           : {
		type : String
	}
	// playRequirements - not really necessary
});

module.exports = Card = mongoose.model('card', CardSchema);
