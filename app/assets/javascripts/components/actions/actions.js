export const UPDATE_FLIGHTS = 'UPDATE_FLIGHTS';

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

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';

export function setCounter(counter) {
  return {
    type: SET_COUNTER,
    counter: counter
  };
}

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
