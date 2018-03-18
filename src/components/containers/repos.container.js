import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchReposLang } from '../../redux/actions.js';
import { bindActionCreators } from 'redux';

import Repos from '../repos';

const mapStateToProps = (state, ownProps) =>{
  return {
    languageData: state.search.repoData[ownProps.details.full_name] || {},
    loading: state.search.loading[ownProps.details.full_name]
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchReposLang }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Repos)
