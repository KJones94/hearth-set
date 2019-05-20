import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToDeck, removeFromDeck } from '../actions/deckActions';

export class TableCardDisplay extends Component {
	static propTypes = {
		gallery       : PropTypes.object.isRequired,
		cardsToRender : PropTypes.array,
		deck          : PropTypes.object
	};

	onRowClick = (card) => {
		this.props.addToDeck(card);
	};

	onRowContextMenuClick = (card, e) => {
		e.preventDefault();
		this.props.removeFromDeck(card);
	};

	getNonRequiredProperty(cardProp) {
		return cardProp !== undefined ? cardProp : '-';
	}

	getDeckQuantity = (card) => {
		if (this.props.deck.deckCards.some((entity) => entity.card.id === card.id)) {
			const quantity = this.props.deck.deckCards.filter((entity) => entity.card.id === card.id)[0].quantity;
			return quantity;
		}
		return 0;
	};

	buildCardRows = (cards) => {
		let cardRows = cards.map((card) => {
			console.log(card.attack);
			return (
				<tr
					key={card.id}
					onClick={this.onRowClick.bind(this, card)}
					onContextMenu={this.onRowContextMenuClick.bind(this, card)}
				>
					<td>{this.getDeckQuantity(card)}</td>
					<td>{card.name}</td>
					<td>{card.type}</td>
					<td>{card.cost}</td>
					<td>{this.getNonRequiredProperty(card.attack)}</td>
					<td>{this.getNonRequiredProperty(card.health)}</td>
					<td>{this.getNonRequiredProperty(card.durabilty)}</td>
					<td>{card.rarity}</td>
					<td>{this.getNonRequiredProperty(card.race)}</td>
					<td>Derp</td>
					<td>{card.set}</td>
				</tr>
			);
		});
		return cardRows;
	};

	render() {
		const cards = this.buildCardRows(this.props.cardsToRender);
		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Type</th>
							<th>C</th>
							<th>A</th>
							<th>H</th>
							<th>D</th>
							<th>Rarity</th>
							<th>Race</th>
							<th>Mechanics</th>
							<th>Set</th>
						</tr>
					</thead>
					<tbody>{cards}</tbody>
				</Table>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	gallery       : state.deckBuilder.gallery,
	deck          : state.deckBuilder.deck,
	cardsToRender : ownProps.cardsToRender
});

const mapDispatchToProps = {
	addToDeck,
	removeFromDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(TableCardDisplay);
