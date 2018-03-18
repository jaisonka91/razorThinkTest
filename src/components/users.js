import React, { Component } from 'react';
import WrapRepos from './wrapRepos';

export default class Users extends Component {

  render(){
    const { user } = this.props;
    return(
      <div className="alert alert-primary">
        <div>
          <div style={{float: 'left', height: 50, width: 50, borderRadius: '50%', backgroundImage: `url(${user.avatar_url})`, backgroundSize: 'contain'}} />
          <div style={{float: 'left', margin: '2px 0 0 15px', textTransform: 'capitalize'}}>
            <div style={{fontSize: 18}}>
              {user.login}
            </div>
            <div style={{fontSize: 13}}>
              <a href={user.html_url} target='_blank'>Profile</a>
            </div>
          </div>
          <div style={{clear: 'both'}}/>
        </div>
        <div className="alert alert-light" style={{marginTop: '1.5em'}}>
          <h5 style={{textAlign: 'center'}}> Repositories </h5>
          <div style={{margin: '10px 0'}}>
            <WrapRepos repos={user.repositories}/>
            {!user.repositories.length && <span>No repository available !!!</span>}
          </div>
        </div>
      </div>
    )
  }
}
