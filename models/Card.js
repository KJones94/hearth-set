const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// There are a lot of other JSON fields, but just choosing certain ones to use for now

// Create Schema
const CardSchema = new Schema({
	id: {
		type: String
	},
	name: {
		type: String
	},
	cardClass: {
		type: String
	},
	attack: {
		type: Number
	},
	health: {
		type: Number
	},
	cost: {
		type: Number
	},
	type: {
		type: String
	},
	set: {
		type: String
	},
	rarity: {
		type: String
	},
	text: {
		type: String
	},
	race: {
		type: String
	},
	durability: {
		type: Number
	},
	mechanics: {
		type: [ String ]
	},
	referencedTags: {
		type: [ String ]
	}
});

module.exports = Card = mongoose.model('card', CardSchema);
