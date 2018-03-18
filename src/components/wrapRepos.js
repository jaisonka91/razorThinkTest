import React, { Component } from 'react';
import Repos from './containers/repos.container';

export default class WrapGitUsers extends Component {
  render(){
    const { repos } = this.props;
    return(
      <div>
        {
          repos.map((item, index)=>{
            return <Repos details={item} key={index}/>
          })
        }
      </div>
    )
  }
}
