const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/:id', (req, res) => {
	res.sendFile(path.join(__dirname, '..', '..', 'images', `${req.params.id}.png`));
});

module.exports = router;
