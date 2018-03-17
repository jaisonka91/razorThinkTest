import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(),
)

const store = createStore(reducer, enhancer);

export default store;
