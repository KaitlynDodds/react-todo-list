import React from 'react';
import TodoEntry from './TodoEntry';
import TodoList from './TodoList';
import CompleteTodoList from './CompleteTodoList';
import '../scss/application.scss';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_items: [
                {
                    topic: "Work Out",
                    date: "Sept. 13",
                    category: "workout"
                },
                {
                    topic: "Feed Cat",
                    date: "Sept. 12",
                    category: "general"
                },
            ],
            complete_items: [
                {
                    topic: "Train Dog",
                    date: "Sept. 11",
                    category: "general"
                },
                {
                    topic: "Get Groceries",
                    date: "Sept. 10",
                    category: "shopping"
                },
            ],
            working_item: {
                item_topic: "",
                item_cat: "",
                item_date: ""
            }
        };

        this.handleCompleteItem = this.handleCompleteItem.bind(this);
        this.handleUndoCompleteItem = this.handleUndoCompleteItem.bind(this);
    }

    handleCompleteItem(item) {
        // Copy state lists
        const completeItems = this.state.complete_items.slice();
        const todoItems = this.state.todo_items.slice();

        // remove item from todo list cp
        const i = todoItems.indexOf(item);
        if (i > -1) {
            todoItems.splice(i, 1);

            // add item to complete list cp
            completeItems.unshift(item);
        
            // reset state 
            this.setState({
                complete_items: completeItems,
                todo_items: todoItems
            });
        }
    }

    handleUndoCompleteItem(item) {
        // Copy state lists
        const completeItems = this.state.complete_items.slice();
        const todoItems = this.state.todo_items.slice();

        // remove item from complete list cp 
        const i = completeItems.indexOf(item);
        if (i > -1) {
            completeItems.splice(i, 1);

            // add item to todo list cp
            todoItems.unshift(item);

            // reset state 
            this.setState({
                complete_items: completeItems,
                todo_items: todoItems
            });
        }
    }

    render() {
        return (
            <div className='Todo'>
                <TodoEntry 
                    working_item = { this.state.working_item } 
                />
                <TodoList 
                    todo_list = { this.state.todo_items } 
                    handleCompleteItem = { this.handleCompleteItem }
                />
                <CompleteTodoList 
                    complete_list = { this.state.complete_items } 
                    handleUndoCompleteItem = { this.handleUndoCompleteItem }
                />
            </div>
        );
    }
}

export default Todo;