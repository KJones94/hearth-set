const express = require('express');
const router = express.Router();

// Card model
const Card = require('../../models/Card');

// @route GET api/cards
// @desc Get All Cards
// @access Public
router.get('/', (req, res) => {
	Card.find().sort({ id: 1 }).then((cards) => res.json(cards));
});

// @route POST api/cards
// @desc Customizable query for cards
// @access Public
router.post('/', (req, res) => {
	console.log('Cards post hit');
	Card.find(req.body).then((cards) => res.json(cards));
});

module.exports = router;
