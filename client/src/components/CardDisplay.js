import React, { Component } from 'react';
import { Container, Row, Col, Media, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CardDisplay extends Component {
	static propTypes = {
		cards : PropTypes.object
	};

	onClick = () => {
		console.log(this.props.cards);
		console.log(this.props);
		// console.log(mapStateToProps.cards);
	};

	render() {
		const { cards } = this.props;
		return (
			<Container>
				<Button onClick={this.onClick}>Let's see cards</Button>
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

const mapStateToProps = (state) => ({
	cards : state.cards
});

export default connect(mapStateToProps, {})(CardDisplay);
