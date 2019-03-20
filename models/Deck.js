const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema({
	name  : {
		type    : String,
		default : 'New Deck'
	},
	cards : {
		type     : Array[String],
		validate : [ cardLimit, '{PATH} exceeds card limit of 30' ],
		required : true
	}
});

function cardLimit(val) {
	return val <= 30;
}

module.exports = Deck = mongoose.model('deck', DeckSchema);
