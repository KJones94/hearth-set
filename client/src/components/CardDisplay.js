import React, { Fragment, Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToDeck, removeFromDeck } from '../actions/deckActions';

const displayPageSize = 30;

const itemStyle = {
	position : 'relative',
	// marginTop : '20px',
	display  : 'inline-block'
};
const notifyBadgeStyle = {
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

class CardDisplay extends Component {
	static propTypes = {
		gallery        : PropTypes.object.isRequired,
		deck           : PropTypes.object,
		addToDeck      : PropTypes.func,
		removeFromDeck : PropTypes.func
	};

	state = {
		displayPage : 0
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
			return <span style={notifyBadgeStyle}>{quantity}</span>;
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

	isNextDisabled = () => {
		const cardsLength = this.props.gallery.cards.length;
		return !(this.state.displayPage * displayPageSize < cardsLength);
	};

	nextPage = () => {
		const cardsLength = this.props.gallery.cards.length;
		if (this.state.displayPage * displayPageSize < cardsLength) {
			this.setState({
				displayPage : this.state.displayPage + 1
			});
		}
	};

	isPrevDisabled = () => {
		return !(this.state.displayPage > 1);
	};

	prevPage = () => {
		if (this.state.displayPage > 1) {
			this.setState({
				displayPage : this.state.displayPage - 1
			});
		}
	};

	getDisplayCards = (cards) => {
		const start = (this.state.displayPage - 1) * 30;
		const end = this.state.displayPage * 30;
		return cards.slice(start, end);
	};

	setDefaultDisplayPage = (cards) => {
		if (cards.length === 0 && this.state.displayPage !== 0) {
			this.setState({
				displayPage : 0
			});
		}
		else if (cards.length > 0 && this.state.displayPage === 0) {
			this.setState({
				displayPage : 1
			});
		}
	};

	render() {
		const { cards } = this.props.gallery; // Can this be done outside of render?
		this.setDefaultDisplayPage(cards);
		console.log(`Found ${cards.length} cards`);

		let displayCards = this.getDisplayCards(cards);
		const cardCols = this.renderCardCols(displayCards);

		return (
			// <div style={{ overflow: 'scroll', height: '730px' }}>
			<Fragment>
				{/* <span className="border"> */}
				<Row>
					{cardCols}

					{/* <div className="w-100" /> */}
				</Row>
				{/* </span> */}
				<Button onClick={this.prevPage} disabled={this.isPrevDisabled()}>
					Prev
				</Button>
				<Button onClick={this.nextPage} disabled={this.isNextDisabled()}>
					Next
				</Button>
				<label>
					Page: {this.state.displayPage} of {Math.ceil(this.props.gallery.cards.length / 30)}
				</label>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	gallery : state.deckBuilder.gallery,
	deck    : state.deckBuilder.deck
});

const mapDispatchToProps = {
	addToDeck,
	removeFromDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);
