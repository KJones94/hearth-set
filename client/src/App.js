import React, { Component } from 'react';
import CardDisplay from './components/CardDisplay';
import Filters from './components/Filters';
import DeckDisplay from './components/DeckDisplay';
import { Container, Row, Col } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Container>
						<h1>HearthSet</h1>
						<Filters />
						<Row noGutters={true}>
							<Col xs="9">
								<CardDisplay />
							</Col>
							<Col xs="1">
								<DeckDisplay />
							</Col>
						</Row>
					</Container>
				</div>
			</Provider>
		);
	}
}

export default App;
