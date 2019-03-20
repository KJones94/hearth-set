import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { queryCards } from '../actions/cardActions';

class Filters extends Component {
	state = {
		search   : '',
		cost     : 'Any',
		class    : 'Any',
		type     : 'Any',
		set      : 'Any',
		race     : 'Any',
		mechanic : 'Any'
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value }, () => {
			console.log(this.state);
		});
	};

	onSubmit = (e) => {
		e.preventDefault();

		// Create json that will query database
		const cardQuery = {};

		for (var property in this.state) {
			if (this.state.hasOwnProperty(property)) {
				if (!(this.state[property] === '' || this.state[property] === 'Any')) {
					cardQuery[property] =
						property !== 'search' ? this.state[property].toUpperCase() : this.state[property];
				}
			}
		}

		this.props.queryCards(cardQuery);
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Label>Search</Label>
					<Input type="textarea" name="search" id="search" onChange={this.onChange} />
				</FormGroup>
				<FormGroup>
					<Label>Cost</Label>
					<Input type="select" name="cost" id="cost" onChange={this.onChange}>
						<option>Any</option>
						<option>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7+</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Class</Label>
					<Input type="select" name="class" id="class" onChange={this.onChange}>
						<option>Any</option>
						<option>Druid</option>
						<option>Hunter</option>
						<option>Mage</option>
						<option>Paladin</option>
						<option>Priest</option>
						<option>Rogue</option>
						<option>Shaman</option>
						<option>Warlock</option>
						<option>Warrrior</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Type</Label>
					<Input type="select" name="type" id="type" onChange={this.onChange}>
						<option>Any</option>
						<option>Enchantment</option>
						<option>Hero</option>
						<option>Minion</option>
						<option>Spell</option>
						<option>Weapon</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Set</Label>
					<Input type="select" name="set" id="set" onChange={this.onChange}>
						<option>Any</option>
						<option>Basic</option>
						<option>Expert</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Race</Label>
					<Input type="select" name="race" id="race" onChange={this.onChange}>
						<option>Any</option>
						<option>Beast</option>
						<option>Demon</option>
						<option>Dragon</option>
						<option>Elemental</option>
						<option>Mech</option>
						<option>Murloc</option>
						<option>Pirate</option>
						<option>Totem</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Mechanic</Label>
					<Input type="select" name="mechanic" id="mechanic" onChange={this.onChange}>
						<option>Any</option>
						<option>Battlecry</option>
						<option>Deathrattle</option>
						<option>Hero Power Damage</option>
						<option>Silence</option>
					</Input>
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		);
	}
}

const mapStateToProps = (state) => ({
	cards : state.cards
});

export default connect(mapStateToProps, { queryCards })(Filters);
