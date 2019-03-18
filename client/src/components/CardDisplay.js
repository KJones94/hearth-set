import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

class CardDisplay extends Component {
	static propTypes = {
		prop : PropTypes
	};

	render() {
		return (
			<Container>
				<h3>Cards will be here</h3>
			</Container>
		);
	}
}

export default CardDisplay;
