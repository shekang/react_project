import React, { Component } from 'react';
import Logo from './test/logo'
import Clock from './test/clock'
import NameForm from './test/nameForm'
import './App.css';

class App extends Component {
 constructor(props){
   super(props)
   this.centerbox = {
    centerClass:'centerbox'
   }
  //  this.btnClick = this.btnClick.bind(this);
 }
 btnClick(e){
    console.log('this is'+this)
 }
 // <Logo  title="logo"/>
 // <Clock/>
 // <button type="button" onClick={(e) => this.btnClick(e)}>清楚时钟</button>
 render() {
   return (
     <div className={this.centerbox.centerClass}>
       <NameForm/>
     </div>

   );
 }
}

export default App;
