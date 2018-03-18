import React, { Component } from 'react';
import WrapGitUsers from './wrapGitUsers';

export default class Search extends Component {
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
            placeholder="Search Git Users"
            className="form-control"
            value={this.state.search}
            onChange={this.handlePlanet}
          />
        </div>
        <WrapGitUsers gitUsers={gitData} />
        {this.state.noData && <div style={{textAlign: 'center'}}><span>No users available!!!</span></div>}
      </div>
    );
  }
}
