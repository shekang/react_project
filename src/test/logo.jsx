import React, { Component } from 'react';
import logo from '../logo.svg';
class Logo extends Component{
  render(){
    let hidden = this.props.hidden
    return (
     <div>
     {hidden?'':(<img src={logo} className="App-logo" alt="logo" title={this.title} />)}

     </div>

    )
  }
}

export default Logo
