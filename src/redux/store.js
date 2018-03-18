import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
// import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


// const enhancer = compose(
//   applyMiddleware(thunk),
//   persistState(),
// )

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
