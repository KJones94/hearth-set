import { combineReducers } from 'redux';
// import reducers
import cardReducer from './cardReducer';
import deckReducer from './deckReducer';
import deckBuilderReducer from './deckBuilderReducer';

// add reducers here
export default combineReducers({
	deckBuilder : deckBuilderReducer
});
