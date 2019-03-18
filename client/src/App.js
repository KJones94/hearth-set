import React, { Component } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay';

class App extends Component {
	render() {
		return (
			<div>
				<header>
					<h1>HearthSet</h1>
				</header>
				<body>
					<CardDisplay />
				</body>
			</div>
		);
	}
}

export default App;
