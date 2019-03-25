import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class DeckDisplay extends Component {
	static propTypes = {
		deck : PropTypes.object
	};

	renderCards = (deckCards) => {
		console.log(deckCards);
		return deckCards.map((entry, index) => (
			<tr key={index}>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDisplay);
