import { combineReducers } from 'redux';
import flights from './flights';
import filter from './filter';
import reservations from './reservations';

const rootReducer = combineReducers({
  flights,
  filter,
  reservations
});

export default rootReducer;
