import React, { Component, PropTypes } from 'react';

class BurningAirlines extends Component {
  componentDidMount() {
    this.props.updateFlights();
  }

  render() {
    var flights = [];

    this.props.flights.forEach(function(flight) {
      flights.push(
        <tr>
          <td>Plane</td>
          <td>{flight.origin}</td>
          <td>{flight.destination}</td>
          <td>{moment(flight.departure).format('Do MMMM YYYY')}</td>
          <td>{moment(flight.arrival).format('Do MMMM YYYY')}</td>
        </tr>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Burning Airlines</h1>
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th><input placeholder="Plane"></input></th>
                  <th><input placeholder="Origin"></input></th>
                  <th><input placeholder="Destination"></input></th>
                  <th><input placeholder="Departure"></input></th>
                  <th><input placeholder="Arrival"></input></th>
                  <th>Availabilities</th>
                </tr>
              </thead>
              <tbody>
                {flights}
              </tbody>
            </table>
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
