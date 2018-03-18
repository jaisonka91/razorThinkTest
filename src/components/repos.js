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
      this.setState({showInfo: status})
      if(status){
        this.props.searchReposLang(fullName);
      }
    }
  }

  render(){
    const { details, languageData } = this.props;
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
            {keys.map((key, index)=>{
              return <li style={{fontSize: 13}} key={index}>{`${key} : ${((languageData[key]/total)*100).toFixed(1)}%`}</li>
            })}
        </ul>
        </div>}
      </div>
    )
  }
}
