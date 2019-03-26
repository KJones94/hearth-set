import axios from 'axios';
import { QUERY_CARDS } from './types';

export const queryCards = (query) => (dispatch) => {
	const finalQuery = { ...query };

	// Query manipulation
	if (query.cost === '7+') {
		finalQuery.cost = { $gt: 6 };
	}

	if (query.search !== '') {
		finalQuery.$text = { $search: query.search };
		delete finalQuery.search;
	}

	axios
		.post('/api/cards', finalQuery)
		.then((res) => {
			dispatch({
				type    : QUERY_CARDS,
				payload : res.data
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
