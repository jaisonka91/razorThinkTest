import { combineReducers } from 'redux';
import { search } from './reducer/search';

const allReducers = combineReducers({
  search
});

export default allReducers;
