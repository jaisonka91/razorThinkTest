import React, { Component } from 'react';

export default class Users extends Component {

  constructor(){
    super();
    this.state = {
      showInfo: false
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps,'>>nextProps')
  }

  handleClick = (status) =>{
    return()=>{
      this.setState({showInfo: status})
    }
  }

  render(){
    const { user } = this.props;
    console.log(user, Object.keys(user),'>>>')
    return(
      <div className="alert alert-primary" onClick={this.handleClick(!this.state.showInfo)}>
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
          <h4 style={{textAlign: 'center'}}> Repositories </h4>
          <div style={{margin: '10px 0'}}>
            <ul>
                {user.repositories && user.repositories.map((item, index)=>{
                  return <li key={index} style={{textTransform: 'capitalize', fontSize: 15}}>{item.name}</li>
                })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
