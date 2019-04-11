import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class FrontPage extends Component {
	static propTypes = {
		prop : PropTypes
  };
  
  onDeckClick = () => {
    return
  }

	render() {
		return (
			<div>
				<Button>Build a Deck</Button>

				<Button>Build a Set</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FrontPage);
