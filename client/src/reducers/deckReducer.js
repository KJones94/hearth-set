import { ADD_TO_DECK, REMOVE_FROM_DECK } from '../actions/types';

const initialState = {
	deckCards : []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_DECK:
			// increment card quantity blindly
			// TODO: handle increasing the quantity of cards that exist
			return {
				...state,
				deckCards : [ ...state.deckCards, { card: action.payload, quantity: 1 } ]
			};
		case REMOVE_FROM_DECK:
		default:
			return state;
	}
}
