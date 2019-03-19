import { QUERY_CARDS } from '../actions/types';

// State of cards from the query
const initialState = {
	cards : []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case QUERY_CARDS:
			console.log('QUERY_CARDS action hit');
			console.log(action.payload);
			return {
				...state,
				cards : action.payload
			};
		default:
			return state;
	}
}
