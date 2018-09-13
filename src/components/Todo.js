import React from 'react';
import TodoEntry from './TodoEntry';
import TodoList from './TodoList';
import CompleteTodoList from './CompleteTodoList';
import '../scss/application.scss';

class Todo extends React.Component {
    render() {
        return (
            <div className='Todo'>
                <TodoEntry />
                {<TodoList />}
                {<CompleteTodoList />}
            </div>
        );
    }
}

export default Todo;