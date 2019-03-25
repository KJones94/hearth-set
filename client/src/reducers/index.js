import { combineReducers } from 'redux';
// import reducers
import deckBuilderReducer from './deckBuilderReducer';

// add reducers here
export default combineReducers({
	deckBuilder : deckBuilderReducer
});
