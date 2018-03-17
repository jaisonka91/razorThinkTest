import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Search from './components/search';

export default class App extends Component {
  render(){
    return(
      <Provider store={this.props.store}>
        <Search />
      </Provider>
    )
  }
}
