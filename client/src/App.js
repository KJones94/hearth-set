import React, { Component, Fragment } from 'react';
import Filters from './components/Filters';
import DeckBuilder from './components/DeckBuilder';
import FrontPage from './components/FrontPage';
import { Container } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const home = () => {
	// return <h2>HearthSet</h2>;
	return <FrontPage />;
};

const setBuilder = () => {
	return <h2>Set Builder</h2>;
};

const deckBuilder = () => {
	return (
		<Fragment>
			<h2 className="text-center">Deck Builder</h2>
			<Filters />
			<DeckBuilder />
		</Fragment>
	);
};

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/setBuilder">Set Builder</Link>
						</li>
						<li>
							<Link to="/deckBuilder">Deck Builder</Link>
						</li>
					</ul>
					<Container>
						<Route path="/" exact component={home} />
						<Route path="/setBuilder" component={setBuilder} />
						<Route path="/deckBuilder" component={deckBuilder} />
					</Container>
				</div>
			</Provider>
		);
	}
}

export default App;
