import React, { Component } from 'react';

export default class Repos extends Component {

  constructor(){
    super();
    this.state = {
      showInfo: false
    }
  }

  handleClick = (status, fullName) =>{
    return()=>{
      if(status){
        this.props.searchReposLang(fullName);
      }
      this.setState({showInfo: status})
    }
  }

  render(){
    const { details, languageData, loading } = this.props;
    const keys = Object.keys(languageData);
    let total = 0;
    for(let val in languageData){
      total += languageData[val];
    };
    return(
      <div>
        <span style={{cursor: 'pointer', textTransform: 'capitalize'}} className='nameClick' onClick={this.handleClick(!this.state.showInfo, details.full_name)}>{details.name}</span>
        {this.state.showInfo && <div>
          <ul style={{margin: '.5rem 0'}}>
            {loading && <div style={{fontSize: 13}}><span>loading please wait...</span></div>}
            {!loading && !keys.length && <div style={{fontSize: 13}}><span>no data available.</span></div>}
            {keys.map((key, index)=>{
              return <li style={{fontSize: 13}} key={index}>{`${key} : ${((languageData[key]/total)*100).toFixed(1)}%`}</li>
            })}
          </ul>
        </div>}
      </div>
    )
  }
}
