import React, { Component } from 'react';
import './App.css';
import CardDisplay from './components/CardDisplay';
import Filters from './components/Filters';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>HearthSet</h1>
				<Filters />
				<CardDisplay />
			</div>
		);
	}
}

export default App;
