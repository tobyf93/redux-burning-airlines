export const UPDATE_FLIGHTS = 'UPDATE_FLIGHTS';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export function updateFlights() {
  return dispatch => {
    $.get('/flights', data => {
      dispatch(_updateFlights(data));
    });
  };
}

function _updateFlights(flights) {
  return {
    type: UPDATE_FLIGHTS,
    flights: flights
  };
}

export function updateFilter(field, value) {
  return dispatch => {
    dispatch({
      type: UPDATE_FILTER,
      field,
      value
    });
  };
}
