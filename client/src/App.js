import React, { Component } from 'react';
import CardDisplay from './components/CardDisplay';
import Filters from './components/Filters';
import { Container } from 'reactstrap';

// import { Provider } from 'react-redux';
// import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Container>
					<h1>HearthSet</h1>
					<Filters />
					<CardDisplay />
				</Container>
			</div>
		);
	}
}

export default App;
