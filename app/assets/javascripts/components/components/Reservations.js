import React, { Component, PropTypes } from 'react';

export default class Reservations extends Component {
  componentDidMount() {
    this.reservationPoll = setInterval(function() {
      this.props.showFlight(this.props.reservations[0].flight_id);
    }.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.reservationPoll);
  }

  handleReservationClick(e) {
    $.ajax({
      type: "POST",
      url: `/reservations/${$(e.target).attr('data')}`,
      data: {
        '_method': 'PATCH',
        user_id: app.userID
      },
      dataType: 'json'
    });
  }

  handleButtonClick() {
    this.props.clearReservations();
  }

  render() {
    var reservations = [];

    this.props.reservations.forEach(function(reservation, i) {
      var className = 'reservation';
      var content = 'FREE';

      if (reservation.user_id) {
        className += ' booked';
        content = app.userName;
      }

      reservations.push(
        <div
          key={i}
          data={reservation.id}
          className={className}
          onClick={this.handleReservationClick.bind(this)}
          >
            {content}
          </div>
      );
    }.bind(this));

    return (
      <div>
        <div className="reservations">
          {reservations}
        </div>
        <button
          onClick={this.handleButtonClick.bind(this)}
          className="btn btn-warning center-block" type="submit">Back To Flight List</button>
      </div>
    );
  }
}
