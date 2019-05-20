import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class FrontPage extends Component {
	// static propTypes = {
	// 	prop : PropTypes
	// };

	render() {
		return (
			<div>
				<Button color="light">
					<Link to="/deckBuilder" style={{ textDecoration: 'none' }}>
						Build a Deck
					</Link>
				</Button>

				<Button color="light">
					<Link to="/setBuilder" style={{ textDecoration: 'none' }}>
						Build a Set
					</Link>
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
