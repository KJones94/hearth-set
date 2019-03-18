import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import cardImage from './AT_001.png';
// import PropTypes from 'prop-types';

class CardDisplay extends Component {
	// static propTypes = {
	// 	prop : PropTypes
	// };

	render() {
		return (
			<div>
				<Media>
					<Media left href="#">
						<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
					</Media>
					<Media body>
						<Media heading>Media heading</Media>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
						commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
						nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
					</Media>
				</Media>
				<div>
					<image src={cardImage} alt="card" style={{ width: '256px', height: '256px' }} />
				</div>
				<Container>
					<h3>Cards will be here</h3>

					<image src={process.env.PUBLIC_URL + 'cards/AT_001.png'} />
					<Row>
						<Col>
							<Media object data-src="../../public/cards/AT_001" />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default CardDisplay;
