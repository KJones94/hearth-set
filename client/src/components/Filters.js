import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { queryCards } from '../actions/cardActions';

class Filters extends Component {
	state = {
		search    : '',
		cost      : '',
		cardClass : '',
		type      : '',
		set       : '',
		race      : '',
		mechanics : ''
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const cardQuery = {};

		for (var property in this.state) {
			if (this.state.hasOwnProperty(property) && this.state[property] !== '') {
				cardQuery[property] = this.state[property];
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
						<option value="">Any</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7+">7+</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Class</Label>
					<Input type="select" name="cardClass" id="cardClass" onChange={this.onChange}>
						<option value="">Any</option>
						<option value="NEUTRAL">Neutral</option>
						<option value="DRUID">Druid</option>
						<option value="HUNTER">Hunter</option>
						<option value="MAGE">Mage</option>
						<option value="PALADIN">Paladin</option>
						<option value="PRIEST">Priest</option>
						<option value="ROGUE">Rogue</option>
						<option value="SHAMAN">Shaman</option>
						<option value="WARLOCK">Warlock</option>
						<option value="WARRIOR">Warrrior</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Type</Label>
					<Input type="select" name="type" id="type" onChange={this.onChange}>
						<option value="">Any</option>
						<option value="ENCHANTMENT">Enchantment</option>
						<option value="HERO">Hero</option>
						<option value="MINION">Minion</option>
						<option value="SPELL">Spell</option>
						<option value="WEAPON">Weapon</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Set</Label>
					<Input type="select" name="set" id="set" onChange={this.onChange}>
						<option value="">Any</option>
						<option value="CORE">Basic</option>
						<option value="EXPERT1">Classic</option>
						<option value="NAXX">Curse of Naxxramas</option>
						<option value="GVG">Goblins vs. Gnomes</option>
						<option value="BRM">Blackrock Mountain</option>
						<option value="TGT">The Grand Tournament</option>
						<option value="LOE">The League of Explorers</option>
						<option value="OG">Whispers of the Old Gods</option>
						<option value="KARA">One Knight in Karazhan</option>
						<option value="GANGS">Mean Streets of Gadgetzan</option>
						<option value="UNGORO">Journey to Un'Goro</option>
						<option value="ICECROWN">Knights of the Frozen Throne</option>
						<option value="LOOTAPALOOZA">Kobolds and Catacombs</option>
						<option value="GILNEAS">The Witchwood</option>
						<option value="BOOMSDAY">The Boomsday Project</option>
						<option value="TROLL">Rastakhan's Rumble</option>
						<option value="HOF">Hall of Fame</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Race</Label>
					<Input type="select" name="race" id="race" onChange={this.onChange}>
						<option value="">Any</option>
						<option value="BEAST">Beast</option>
						<option value="DEMON">Demon</option>
						<option value="DRAGON">Dragon</option>
						<option value="ELEMENTAL">Elemental</option>
						<option value="MECH">Mech</option>
						<option value="MURLOC">Murloc</option>
						<option value="PIRATE">Pirate</option>
						<option value="TOTEM">Totem</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label>Mechanic</Label>
					<Input type="select" name="mechanics" id="mechanics" onChange={this.onChange}>
						<option value="">Any</option>
						<option value="BATTLECRY">Battlecry</option>
						<option value="DEATHRATTLE">Deathrattle</option>
						<option value="HEROPOWER_DAMAGE">Hero Power Damage</option>
						<option value="SILENCE">Silence</option>
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
