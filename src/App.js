import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './js/store';
import { addUser } from './js/actions';



class App extends Component {
  
  oc(){
    var rd = ["ade","kuproy","sakit", "jiwa"]
    var has = Math.floor(Math.random() * 4)
    store.dispatch(addUser({
      username: rd[has],
      email: "fadliselaz@gmail.com"
    }))

    console.log(this.props.user)
  }
  render() {
    return (
      <div className="App">
        <h1>{this.props.user}</h1>
        <header className="App-header">
          <button onClick={() => this.oc()}>CLIK DAH</button>
        </header>
      </div>
    );
  }
}

export default App;
