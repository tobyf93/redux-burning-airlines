import React, { Component, PropTypes } from 'react';

class BurningAirlines extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h1 className="text-center">Burning Airlines</h1>
        </div>
      </div>
    );
  }
}

/*
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};
*/

export default BurningAirlines;
