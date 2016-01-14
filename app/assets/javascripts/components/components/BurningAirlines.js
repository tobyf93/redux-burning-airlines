import React, { Component, PropTypes } from 'react';
import Header from './Header';

class BurningAirlines extends Component {
  componentDidMount() {
    this.props.updateFlights();
  }

  onClick(e) {
    this.props.showFlight(e.target.parentElement.id);
  }

  render() {
    var flights = [];

    this.props.flights.forEach(function(flight, i) {
      var plane = 'Unknown';
      if (flight.plane) {
        plane = flight.plane.name;
      }

      for (var key in this.props.filter) {
        var re = new RegExp(this.props.filter[key], 'i');

        if (key === 'plane' && this.props.filter[key]) {
          if (!plane.match(re)) {
            return;
          }
        } else if (this.props.filter[key] && !flight[key].match(re)) {
          return;
        }
      }

      flights.push(
        <tr
          id={flight.id}
          key={i}
          onClick={this.onClick.bind(this)}>
          <td>{plane}</td>
          <td>{flight.origin}</td>
          <td>{flight.destination}</td>
          <td>{moment(flight.departure).format('Do MMMM YYYY')}</td>
          <td>{moment(flight.arrival).format('Do MMMM YYYY')}</td>
        </tr>
      );
    }.bind(this));

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Burning Airlines</h1>
            <table className="table table-stripped">
              <Header
                updateFilter={this.props.updateFilter}/>
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
