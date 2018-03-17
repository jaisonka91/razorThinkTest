import React, { Component } from 'react';
import Users from './users';

export default class WrapGitUsers extends Component {
  render(){
    const { gitUsers } = this.props;
    return(
      <div>
        {
          gitUsers.map((item, index)=>{
            return <Users user={item} key={index}/>
          })
        }
      </div>
    )
  }
}
