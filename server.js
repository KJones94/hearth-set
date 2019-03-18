const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Body parser middleware
app.use(express.json());

// Database string
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
	.connect(db, {
		useNewUrlParser : true,
		useCreateIndex  : true
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

// Routes
app.use('/api/cards', require('./routes/api/cards'));
app.use('/api/images', require('./routes/api/images'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
