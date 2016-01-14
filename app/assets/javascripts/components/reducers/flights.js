import { UPDATE_FLIGHTS } from '../actions/actions';

export default function flights(state = [], action) {
  switch (action.type) {
    case UPDATE_FLIGHTS:
      return action.flights.slice(0);
    default:
      return state;
  }
}
