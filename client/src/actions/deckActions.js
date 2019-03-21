import { ADD_TO_DECK, REMOVE_FROM_DECK } from './types';

// TODO: should deck be passed in instad of getting from global state?
export const addToDeck = (cardToAdd) => (dispatch, getState) => {
	// Check if card exists in deck
	// if (getState().deckBuilder.deck.deckCards.some((entry) => entry.card.id === cardToAdd.id)) {
	// 	if (entry.quanity >= 2 || (entry.card.rarity == 'LEGENDARY' && entry.quantity >= 1)) {
	// 		console.log('quantity max reached');
	// 		return;
	// 	}
	// }

	const matchedCards = getState().deckBuilder.deck.deckCards.filter((entry) => entry.card.id === cardToAdd.id);
	if (matchedCards.length > 1) {
		console.log('ERROR: Found more than one of a card in the deck. ');
		return;
	}

	if (matchedCards.length == 1) {
		const deckCard = matchedCards[0];
		if (deckCard !== null) {
			if (deckCard.quanity >= 2 || (deckCard.card.rarity == 'LEGENDARY' && deckCard.quantity >= 1)) {
				console.log('quantity max reached');
				return;
			}
		}
	}

	dispatch({
		type    : ADD_TO_DECK,
		payload : cardToAdd
	});
};

export const removeFromDeck = () => (dispatch) => {};
