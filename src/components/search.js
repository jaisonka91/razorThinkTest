import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchData } from '../redux/actions.js';
import { bindActionCreators } from 'redux';
import WrapGitUsers from './wrapGitUsers';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      gitData: [],
      noData: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({gitData: nextProps.gitData},()=>{
      if(this.state.gitData.length == 0){
        this.setState({noData: true});
      }else{
        this.setState({noData: false});
      }
    });
  }

  handlePlanet = e => {
    this.setState({ search: e.target.value }, () => {
      this.props.searchData(this.state.search);
    });
  };

  render() {
    const { gitData } = this.state;
    return (
      <div className="container">
        <div style={{width: '50%', margin: '20px auto'}}>
          <input
            placeholder="Search Git"
            className="form-control"
            value={this.state.search}
            onChange={this.handlePlanet}
          />
        </div>
        <WrapGitUsers gitUsers={gitData} />
        {this.state.noData && <div style={{textAlign: 'center'}}><span>No data available!!!</span></div>}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    gitData: state.search.gitData,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
