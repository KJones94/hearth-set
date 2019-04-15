const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/:id', (req, res) => {
	const image = path.join(__dirname, '..', '..', 'images', `${req.params.id}.png`);
	res.sendFile(image);
});

module.exports = router;
