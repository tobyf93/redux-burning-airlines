import { SHOW_FLIGHT, CLEAR_RESERVATIONS } from '../actions/actions';

export default function reservations(state = [], action) {
  switch (action.type) {
    case SHOW_FLIGHT:
      return action.seats.slice(0);
    case CLEAR_RESERVATIONS:
      return [];
    default:
      return state;
  }
}
