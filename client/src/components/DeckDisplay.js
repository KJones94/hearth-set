import React, { Component } from 'react';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

class DeckDisplay extends Component {
	propTypes = {
		deck : PropTypes.object
	};

	render() {
		return (
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Flame Lance</td>
						<td>5</td>
					</tr>
				</tbody>
			</Table>
		);
	}
}

export default DeckDisplay;
