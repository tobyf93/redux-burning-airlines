import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BurningAirlines from '../components/BurningAirlines';
import * as Actions from '../actions/actions';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BurningAirlines);
