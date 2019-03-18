import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

class Filters extends Component {
	render() {
		return (
			<Form>
				<FormGroup>
					<Label>Search</Label>
					<Input type="textarea" name="search" id="search" />
				</FormGroup>
			</Form>
		);
	}
}

export default Filters;
