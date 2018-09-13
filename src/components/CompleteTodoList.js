import React from 'react';
import CompleteTodoItem from './CompleteTodoItem';
import '../scss/application.scss';

class CompleteTodoList extends React.Component {
    render() {
        return (
            <div className='CompleteTodoList'>
                <CompleteTodoItem />
                <CompleteTodoItem />
            </div>
        );
    }
}

export default CompleteTodoList;