import axios from 'axios';
import { QUERY_CARDS } from './types';

export const queryCards = (query) => (dispatch) => {
	axios
		.post('/api/cards', query)
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
