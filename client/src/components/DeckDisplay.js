import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeFromDeck } from '../actions/deckActions';

class DeckDisplay extends Component {
	static propTypes = {
		deck           : PropTypes.object,
		removeFromDeck : PropTypes.func
	};

	onDeckCardClick = (deckCard, e) => {
		console.log('Clicked deck card.');
		e.preventDefault();
		this.props.removeFromDeck(deckCard);
	};

	renderCards = (deckCards) => {
		return deckCards.map((entry, index) => (
			<tr
				key={index}
				onClick={this.onDeckCardClick.bind(this, entry)}
				onContextMenu={this.onDeckCardClick.bind(this, entry)}
			>
				<td>{entry.quantity}</td>
				<td>{entry.card.name}</td>
				<td>{entry.card.cost}</td>
			</tr>
		));
	};

	render() {
		return (
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>{this.renderCards(this.props.deck.deckCards)}</tbody>
			</Table>
		);
	}
}

const mapStateToProps = (state) => ({
	deck : state.deckBuilder.deck
});

const mapDispatchToProps = {
	removeFromDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDisplay);
