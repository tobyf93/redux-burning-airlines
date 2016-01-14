import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  onChange(e) {
    var field = $(e.target).attr('placeholder').toLowerCase();
    var value = e.target.value;
    this.props.updateFilter(field, value);
  }

  render() {
    return (
      <thead>
        <tr>
          <th><input
                placeholder="Plane"
                onChange={this.onChange.bind(this)}
                ></input></th>
          <th><input
                placeholder="Origin"
                onChange={this.onChange.bind(this)}
                ></input></th>
          <th><input
                placeholder="Destination"
                onChange={this.onChange.bind(this)}
                ></input></th>
          <th><input
                placeholder="Departure"
                onChange={this.onChange.bind(this)}
                ></input></th>
          <th><input
                placeholder="Arrival"
                onChange={this.onChange.bind(this)}
                ></input></th>
          <th>Availabilities</th>
        </tr>
      </thead>
    );
  }
}
