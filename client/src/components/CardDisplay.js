import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToDeck, removeFromDeck } from '../actions/deckActions';

class CardDisplay extends Component {
	static propTypes = {
		gallery        : PropTypes.object.isRequired,
		addToDeck      : PropTypes.func,
		removeFromDeck : PropTypes.func
	};

	onCardClick = (card) => {
		this.props.addToDeck(card);
	};

	onCardContextMenuClick = (card, e) => {
		e.preventDefault();
		this.props.removeFromDeck(card);
	};

	renderCardCols = (cards) => {
		const cardMedia = cards.map((card) => (
			<Col key={card.id}>
				<img
					src={'http://localhost:5000/api/images/' + card.id}
					alt={card.name}
					onClick={this.onCardClick.bind(this, card)}
					onContextMenu={this.onCardContextMenuClick.bind(this, card)}
				/>
			</Col>
		));
		return cardMedia;
	};

	render() {
		const { cards } = this.props.gallery;
		const cardCols = this.renderCardCols(cards);
		console.log(cards);

		return (
			<Container>
				<Row>
					{cardCols}

					{/* <div className="w-100" /> */}
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	gallery : state.deckBuilder.gallery
});

const mapDispatchToProps = {
	addToDeck,
	removeFromDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);
