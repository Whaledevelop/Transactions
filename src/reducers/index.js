import { combineReducers } from 'redux';
import transactions from './transactions';
import filters from './filters';

export default combineReducers({
  transactions,
  filters
});