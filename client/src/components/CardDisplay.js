import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
// import PropTypes from 'prop-types';

class CardDisplay extends Component {
	// static propTypes = {
	// 	prop : PropTypes
	// };

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Media object src="http://localhost:5000/api/images/AT_001" alt="Generic placeholder image" />
					</Col>
					<Col>
						<Media object src="http://localhost:5000/api/images/AT_001" alt="Generic placeholder image" />
					</Col>
					<Col>
						<Media object src="http://localhost:5000/api/images/AT_001" alt="Generic placeholder image" />
					</Col>

					{/* <div className="w-100" /> */}
					<Col>
						<Media object src="http://localhost:5000/api/images/AT_001" alt="Generic placeholder image" />
					</Col>
					<Col>
						<Media object src="http://localhost:5000/api/images/AT_001" alt="Generic placeholder image" />
					</Col>
					<Col>
						<Media object src="http://localhost:5000/api/images/AT_001" alt="Generic placeholder image" />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default CardDisplay;
