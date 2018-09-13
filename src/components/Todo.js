import React from 'react';
import TodoEntry from './TodoEntry';
import TodoList from './TodoList';
import '../scss/application.scss';

class Todo extends React.Component {
    render() {
        return (
            <div className='Todo'>
                <TodoEntry />
                {<TodoList />}
            </div>
        );
    }
}

export default Todo;