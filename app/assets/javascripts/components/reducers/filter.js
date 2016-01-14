import { UPDATE_FILTER } from '../actions/actions';

const initialState = {
  plane: '',
  origin: '',
  destination: '',
  departure: '',
  arrival: ''
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      var obj = {};
      obj[action.field] = action.value;

      return Object.assign({}, state, obj);
    default:
      return state;
  }
}
