import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import deckReducer from './deckReducer';

// const initialState = {
// 	gallery : {
// 		cards : []
// 	},
// 	deck    : {
// 		cards : []
// 	}
// };

const deckBuilderReducer = combineReducers({
	gallery : cardReducer,
	deck    : deckReducer
});

export default deckBuilderReducer;
