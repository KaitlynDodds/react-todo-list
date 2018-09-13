import React from 'react';
import TodoItem from './TodoItem';
import '../scss/application.scss';

class TodoList extends React.Component {

    render() {
        const todo_items = this.props.todo_list.map((item) => {
            return (
                <TodoItem 
                    key={item.topic} 
                    item = { item } 
                    styleName = {''} 
                />
            );
        });

        return (
            <div className={`TodoList`}>
                { todo_items }
            </div>
        );
    }
}

export default TodoList;