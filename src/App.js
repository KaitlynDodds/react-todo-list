import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Welcome to Todo List</h1>
                <p>This is the beginning</p>
            </div>
        );
    }
}

export default hot(module)(App);
