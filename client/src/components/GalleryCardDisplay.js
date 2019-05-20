import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { addToDeck, removeFromDeck } from '../actions/deckActions';

const itemStyle = {
	position : 'relative',
	// marginTop : '20px',
	display  : 'inline-block'
};

const cardAddedBadgeStyle = {
	position     : 'absolute',
	right        : '20px',
	top          : '40px',
	background   : 'blue',
	textAlign    : 'center',
	borderRadius : '30px 30px 30px 30px',
	color        : 'white',
	padding      : '5px 10px',
	fontSize     : '20px'
};

export class GalleryCardDisplay extends Component {
	static propTypes = {
		gallery       : PropTypes.object.isRequired,
		cardsToRender : PropTypes.array,
		deck          : PropTypes.object
	};

	onCardClick = (card) => {
		this.props.addToDeck(card);
	};

	onCardContextMenuClick = (card, e) => {
		e.preventDefault();
		this.props.removeFromDeck(card);
	};

	applyBadge = (card) => {
		if (this.props.deck.deckCards.some((entity) => entity.card.id === card.id)) {
			const quantity = this.props.deck.deckCards.filter((entity) => entity.card.id === card.id)[0].quantity;
			return <span style={cardAddedBadgeStyle}>{quantity}</span>;
		}
		return null;
	};

	renderCardCols = (cards) => {
		const cardImage = cards.map((card) => (
			<Col key={card.id}>
				<div style={itemStyle}>
					{this.applyBadge(card)}
					<img
						src={'http://localhost:5000/api/images/' + card.id}
						alt={card.name}
						onClick={this.onCardClick.bind(this, card)}
						onContextMenu={this.onCardContextMenuClick.bind(this, card)}
					/>
				</div>
			</Col>
		));
		return cardImage;
	};

	render() {
		const cardCols = this.renderCardCols(this.props.cardsToRender);

		return <Row>{cardCols}</Row>;
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

export default connect(mapStateToProps, mapDispatchToProps)(GalleryCardDisplay);
