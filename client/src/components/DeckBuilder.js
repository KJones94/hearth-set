import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardDisplay from './CardDisplay';
import DeckDisplay from './DeckDisplay';
import { Col, Row } from 'reactstrap';
import { addToDeck } from '../actions/deckActions';

export class DeckBuilder extends Component {
	static propTypes = {
		addToDeck : PropTypes.func
	};

	render() {
		return (
			<Row noGutters={true}>
				<Col xs="9">
					<CardDisplay />
				</Col>
				<Col xs="1">
					<DeckDisplay />
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
	addToDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);
