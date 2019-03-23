import React, { Component } from 'react';
import './App.css';

import List from "./list"
import Form from './Form';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                <h2>Show Console</h2>
                <List />
                <Form />
                </div>
            </div>
        );
    }
}


export default App;
