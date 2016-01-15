import React, { Component, PropTypes } from 'react';
import Table from './Table';
import Reservations from './Reservations';

class BurningAirlines extends Component {
  render() {
    var body = (
      <Table
        flights={this.props.flights}
        showFlight={this.props.showFlight}
        updateFlights={this.props.updateFlights}/>
    );

    if (this.props.reservations.length) {
      body = (
        <Reservations
          reservations={this.props.reservations}
          showFlight={this.props.showFlight}
          />
      );
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Burning Airlines</h1>
            {body}
          </div>
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
