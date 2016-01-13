import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BurningAirlinesApp from './BurningAirlinesApp';
import configureStore from '../store/configureStore';
import { setCounter } from '../actions/counter';

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setCounter(this.props.counter));
  }
  render() {
    return (
      <Provider store={store}>
        <BurningAirlinesApp />
      </Provider>
    );
  }
}
