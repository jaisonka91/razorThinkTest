import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchData } from '../../redux/actions.js';
import { bindActionCreators } from 'redux';
import Search from '../search';

const mapStateToProps = (state) =>{
  return {
    gitData: state.search.gitData,
    loading: state.search.loading,
    networkStatus: state.search.networkStatus
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
