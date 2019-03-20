import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CardDisplay extends Component {
	static propTypes = {
		card : PropTypes.object
	};

	renderCardCols = (cards) => {
		const cardMedia = cards.map((card) => (
			<Col key={card.id}>
				<Media object src={'http://localhost:5000/api/images/' + card.id} alt={card.name} />
			</Col>
		));
		return cardMedia;
	};

	render() {
		const { cards } = this.props.card;
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
	card : state.card
});

export default connect(mapStateToProps, {})(CardDisplay);
