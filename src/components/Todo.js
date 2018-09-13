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
    }

    render() {
        return (
            <div className='Todo'>
                <TodoEntry 
                    working_item = { this.state.working_item } 
                />
                <TodoList 
                    todo_list = { this.state.todo_items } 
                />
                <CompleteTodoList 
                    complete_list = { this.state.complete_items } 
                />
            </div>
        );
    }
}

export default Todo;