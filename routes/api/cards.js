const express = require('express');
const router = express.Router();

// Card model
const Card = require('../../models/Card');

const valuesIncluded = {
	// Only a few keys aren't included, so might not be needed
	attack         : 1,
	cardClass      : 1,
	cost           : 1,
	durability     : 1,
	elite          : 1,
	health         : 1,
	id             : 1,
	mechanics      : 1,
	name           : 1,
	race           : 1,
	rarity         : 1,
	referencedTags : 1,
	set            : 1,
	text           : 1,
	type           : 1
};

// @route GET api/cards
// @desc Get All Cards
// @access Public
router.get('/', (req, res) => {
	Card.find({}, valuesIncluded).sort({ id: 1 }).then((cards) => res.json(cards));
});

// @route POST api/cards
// @desc Customizable query for cards
// @access Public
router.post('/', (req, res) => {
	Card.find(req.body).then((cards) => {
		res.json(cards);
	}, valuesIncluded);
});

module.exports = router;
