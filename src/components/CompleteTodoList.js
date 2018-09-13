import React from 'react';
import TodoItem from './TodoItem';
import '../scss/application.scss';

class CompleteTodoList extends React.Component {
    render() {
        const complete_todos = this.props.complete_list.map((item) => { 
            return (
                <TodoItem 
                    key={item.topic} 
                    item = { item } 
                    styleName = {'CompleteTodoItem'} 
                    onClick = { this.props.handleUndoCompleteItem }
                />
            );
        });

        return (
            <div className='CompleteTodoList'>
                { complete_todos }
            </div>
        );
    }
}

export default CompleteTodoList;