import React from 'react';
import TodoItem from './TodoItem';
import '../scss/application.scss';

class TodoList extends React.Component {
    render() {
        return (
            <div className='TodoList'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        );
    }
}

export default TodoList;