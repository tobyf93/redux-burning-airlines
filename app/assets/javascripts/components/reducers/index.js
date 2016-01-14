import { combineReducers } from 'redux';
import flights from './flights';
import filter from './filter'

const rootReducer = combineReducers({
  flights,
  filter
});

export default rootReducer;
