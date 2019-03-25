import { ADD_TO_DECK, REMOVE_FROM_DECK } from '../actions/types';

const initialState = {
	deckCards : []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_DECK:
			if (state.deckCards.some((entity) => entity.card.id === action.payload.card.id)) {
				return {
					...state,
					deckCards : [
						...state.deckCards.filter((entity) => entity.card.id !== action.payload.card.id),
						action.payload
					]
				};
			}
			return {
				...state,
				deckCards : [ ...state.deckCards, action.payload ]
			};
		case REMOVE_FROM_DECK:
		default:
			return state;
	}
}
