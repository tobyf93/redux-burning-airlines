import { SHOW_FLIGHT } from '../actions/actions';

export default function reservations(state = [], action) {
  switch (action.type) {
    case SHOW_FLIGHT:
      return action.seats.slice(0);
    default:
      return state;
  }
}
