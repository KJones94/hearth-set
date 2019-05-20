import React, { Fragment, Component } from 'react';
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GalleryCardDisplay from './GalleryCardDisplay';
import TableCardDisplay from './TableCardDisplay';

const displayPageSize = 30;

const nameAscending = 'Name Ascending';
const nameDescending = 'Name Descending';
const costAscending = 'Cost Ascending';
const costDescending = 'Cost Descending';

class CardDisplay extends Component {
	static propTypes = {
		gallery       : PropTypes.object.isRequired,
		deck          : PropTypes.object,
		cardsToRender : PropTypes.array
	};

	state = {
		displayPage   : 0,
		dropdownOpen  : false,
		sortSelection : costAscending,
		activeTab     : '1'
	};

	sortCards = (cards, sortType) => {
		switch (sortType) {
			case costAscending:
				return cards.sort((cardA, cardB) => cardA.cost > cardB.cost);
			case costDescending:
				return cards.sort((cardA, cardB) => cardA.cost < cardB.cost);
			case nameAscending:
				return cards.sort((cardA, cardB) => cardA.name > cardB.name);
			case nameDescending:
				return cards.sort((cardA, cardB) => cardA.name < cardB.name);
			default:
				return cards;
		}
	};

	getDisplayCards = (cards) => {
		const start = (this.state.displayPage - 1) * 30;
		const end = this.state.displayPage * 30;
		return cards.slice(start, end);
	};

	isNextDisabled = () => {
		const cardsLength = this.props.gallery.cards.length;
		return !(this.state.displayPage * displayPageSize < cardsLength);
	};

	nextPage = () => {
		const cardsLength = this.props.gallery.cards.length;
		if (this.state.displayPage * displayPageSize < cardsLength) {
			this.setState({
				displayPage : this.state.displayPage + 1
			});
		}
	};

	isPrevDisabled = () => {
		return !(this.state.displayPage > 1);
	};

	prevPage = () => {
		if (this.state.displayPage > 1) {
			this.setState({
				displayPage : this.state.displayPage - 1
			});
		}
	};

	setDefaultDisplayPage = (cards) => {
		if (cards.length === 0 && this.state.displayPage !== 0) {
			this.setState({
				displayPage : 0
			});
		}
		else if (cards.length > 0 && this.state.displayPage === 0) {
			this.setState({
				displayPage : 1
			});
		}
	};

	dropdownToggle = () => {
		this.setState({
			dropdownOpen : !this.state.dropdownOpen
		});
	};

	dropdownSelect = (e) => {
		this.setState({
			dropdownOpen  : !this.state.dropdownOpen,
			sortSelection : e.target.innerText
		});
	};

	tabToggle = (tab) => {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab : tab
			});
		}
	};

	render() {
		const { cards } = this.props.gallery; // Can this be done outside of render?
		this.setDefaultDisplayPage(cards);

		const sortedCards = this.sortCards(cards, this.state.sortSelection);
		const displayCards = this.getDisplayCards(sortedCards);

		return (
			// <div style={{ overflow: 'scroll', height: '730px' }}>
			<Fragment>
				<Dropdown toggle={this.dropdownToggle} isOpen={this.state.dropdownOpen}>
					<DropdownToggle caret>{this.state.sortSelection}</DropdownToggle>
					<DropdownMenu>
						<DropdownItem onClick={this.dropdownSelect}>{costAscending}</DropdownItem>
						<DropdownItem onClick={this.dropdownSelect}>{costDescending}</DropdownItem>
						<DropdownItem onClick={this.dropdownSelect}>{nameAscending}</DropdownItem>
						<DropdownItem onClick={this.dropdownSelect}>{nameDescending}</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.active === '1' })}
							onClick={() => {
								this.tabToggle('1');
							}}
						>
							Gallery
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({ active: this.state.active === '2' })}
							onClick={() => {
								this.tabToggle('2');
							}}
						>
							Table
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<GalleryCardDisplay cardsToRender={displayCards} />
					</TabPane>
					<TabPane tabId="2">
						<TableCardDisplay cardsToRender={displayCards} />
					</TabPane>
				</TabContent>

				<Button onClick={this.prevPage} disabled={this.isPrevDisabled()}>
					Prev
				</Button>
				<Button onClick={this.nextPage} disabled={this.isNextDisabled()}>
					Next
				</Button>
				<label>
					Page: {this.state.displayPage} of {Math.ceil(this.props.gallery.cards.length / 30)}
				</label>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	gallery : state.deckBuilder.gallery,
	deck    : state.deckBuilder.deck
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);
