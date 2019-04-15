import { ADD_TO_DECK, REMOVE_FROM_DECK } from '../actions/types';

const initialState = {
	deckCards    : [],
	numDeckCards : 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_TO_DECK:
			// Check if adding second copy
			if (state.deckCards.some((entity) => entity.card.id === action.payload.card.id)) {
				return {
					...state,
					deckCards    : sortDeck([
						...state.deckCards.filter((entity) => entity.card.id !== action.payload.card.id),
						action.payload
					]),
					numDeckCards : state.numDeckCards + 1
				};
			}
			// Add first copy
			return {
				...state,
				deckCards    : sortDeck([ ...state.deckCards, action.payload ]),
				numDeckCards : state.numDeckCards + 1
			};

		case REMOVE_FROM_DECK:
			if (state.deckCards.some((entity) => entity.card.id === action.payload.card.id)) {
				if (action.payload.quantity === 0) {
					return {
						...state,
						deckCards    : sortDeck([
							...state.deckCards.filter((entity) => entity.card.id !== action.payload.card.id)
						]),
						numDeckCards : state.numDeckCards - 1
					};
				}
				return {
					...state,
					deckCards    : sortDeck([
						...state.deckCards.filter((entity) => entity.card.id !== action.payload.card.id),
						action.payload
					]),
					numDeckCards : state.numDeckCards - 1
				};
			}
			return state;

		default:
			return state;
	}
}

function sortDeck(deckCards) {
	return deckCards.sort((a, b) => {
		const costDiff = parseInt(a.card.cost) - parseInt(b.card.cost);
		if (costDiff === 0) {
			return a.card.name.localeCompare(b.card.name);
		}
		return costDiff;
	});
}
