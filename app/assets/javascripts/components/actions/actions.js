export const UPDATE_FLIGHTS = 'UPDATE_FLIGHTS';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const SHOW_FLIGHT = 'SHOW_FLIGHT';

function _updateFlights(flights) {
  return {
    type: UPDATE_FLIGHTS,
    flights: flights
  };
}

export function updateFlights() {
  return dispatch => {
    $.get('/flights', data => {
      dispatch(_updateFlights(data));
    });
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

function _showFlight(seats) {
  return {
    type: SHOW_FLIGHT,
    seats
  };
}

export function showFlight(id) {
  console.log(id);
  return dispatch => {
    $.get(`/flights/${id}.json`, data => {
      dispatch(_showFlight(data));
    });
  };
}
