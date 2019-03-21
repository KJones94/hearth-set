import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToDeck } from '../actions/deckActions';

class CardDisplay extends Component {
	static propTypes = {
		gallery   : PropTypes.object.isRequired,
		addToDeck : PropTypes.func
	};

	onCardClick = (card) => {
		console.log('clicked card');
		// console.log(card);
		this.props.addToDeck(card);
	};

	renderCardCols = (cards) => {
		const cardMedia = cards.map((card) => (
			<Col key={card.id}>
				<img
					src={'http://localhost:5000/api/images/' + card.id}
					alt={card.name}
					onClick={this.onCardClick.bind(this, card)}
				/>
			</Col>
		));
		return cardMedia;
	};

	render() {
		const { cards } = this.props.gallery;
		const cardCols = this.renderCardCols(cards);
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
	addToDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);
