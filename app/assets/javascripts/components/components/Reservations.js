import React, { Component, PropTypes } from 'react';

export default class Reservations extends Component {
  componentDidMount() {
    setInterval(function() {
      this.props.showFlight(this.props.reservations[0].flight_id);
    }.bind(this), 1000);
  }

  onClick(e) {
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
          onClick={this.onClick.bind(this)}
          >
            {content}
          </div>
      );
    }.bind(this));

    return (
      <div className="reservations">
        {reservations}
      </div>
    );
  }
}
