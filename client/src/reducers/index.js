import { combineReducers } from 'redux';
// import reducers
import cardReducer from './cardReducer';

// add reducers here
export default combineReducers({
	card : cardReducer
});
