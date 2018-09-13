import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import Todo from './components/Todo';
import './scss/application.scss';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Todo />
            </div>
        );
    }
}

export default hot(module)(App);
