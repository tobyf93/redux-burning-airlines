import React, { Component, PropTypes } from 'react';
import Header from './Header';

export default class Table extends Component {
  componentDidMount() {
    this.flightPoll = setInterval(function() {
      this.props.updateFlights();
    }.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.flightPoll);
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

      // Calculate remaining seats for flights
      var seatsAvailable = 0;
      flight.reservations.forEach(function(reservation) {
        if (!reservation.user_id) {
          seatsAvailable++;
        }
      });

      for (var key in this.props.filter) {
        var re = new RegExp(this.props.filter[key], 'i');

        if (key === 'plane' && this.props.filter[key]) {
          if (!plane.match(re)) {
            return;
          }
        } else if (key === 'availabilities') {
          if (this.props.filter[key] && parseInt(this.props.filter[key]) !== seatsAvailable) {
            return;
          }
        } else if (this.props.filter[key] && !flight[key].match(re)) {
          return;
        }
      }

      var label = '';
      var className = 'label';

      if (seatsAvailable) {
        label = 'FINAL CALL';
        className += ' label-primary';
      } else {
        label = 'DEPARTED';
        className += ' label-danger';
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
          <td>{seatsAvailable} <span className={className}>{label}</span></td>
        </tr>
      );
    }.bind(this));

    return (
      <table className="table table-stripped">
        <Header
          updateFilter={this.props.updateFilter}/>
        <tbody>
          {flights}
        </tbody>
      </table>
    );
  }
}
