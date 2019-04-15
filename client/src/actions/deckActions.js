import { ADD_TO_DECK, REMOVE_FROM_DECK } from './types';

const maxDeckCards = 30;

// TODO: should deck be passed in instad of getting from global state?
export const addToDeck = (cardToAdd) => (dispatch, getState) => {
	if (getState().deckBuilder.deck.numDeckCards === maxDeckCards) {
		console.log('Deck already contains max number of cards');
		return;
	}

	// Check if card exists in deck
	let quantity = 1;
	const matchedCards = getState().deckBuilder.deck.deckCards.filter((entry) => entry.card.id === cardToAdd.id);

	// Should only be 0 or 1, although might not be necessary
	if (matchedCards.length > 1) {
		console.log('ERROR: Found more than one of a card in the deck. ');
		return;
	}

	if (matchedCards.length === 1) {
		// Check if already 2 cards, or 1 for legendary
		const deckCard = matchedCards[0];
		if (deckCard.quantity >= 2 || (deckCard.card.rarity === 'LEGENDARY' && deckCard.quantity >= 1)) {
			console.log('Card quantity max reached');
			return;
		}

		// Set quantity to 2 if card already exists in deck
		quantity = 2;
	}

	dispatch({
		type    : ADD_TO_DECK,
		payload : {
			card     : cardToAdd,
			quantity
		}
	});
};

export const removeFromDeck = (cardToRemove) => (dispatch, getState) => {
	// Check if card exists in deck
	let newQuantity = 0;
	const matchedCards = getState().deckBuilder.deck.deckCards.filter((entry) => entry.card.id === cardToRemove.id);

	// Should only be 0 or 1, although might not be necessary
	if (matchedCards.length > 1) {
		console.log('ERROR: Found more than one of a card in the deck. ');
		return;
	}

	// Check if card exists
	if (matchedCards.length === 0) {
		console.log('Card does not exist in deck.');
	}

	if (matchedCards.length === 1) {
		// Check if already 2 cards, or 1 for legendary
		const deckCard = matchedCards[0];

		// Decrement quantity of card in deck
		newQuantity = deckCard.quantity - 1;
	}

	dispatch({
		type    : REMOVE_FROM_DECK,
		payload : {
			card     : cardToRemove,
			quantity : newQuantity
		}
	});
};
