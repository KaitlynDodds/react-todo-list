import React from 'react';
import '../scss/application.scss';

class TodoEntry extends React.Component {

    constructor(props) {
        super(props);

        this.createNewItem = this.createNewItem.bind(this);
        this.passItemUpOnChange = this.passItemUpOnChange.bind(this);
    }

    createNewItem(e) {
        return {
            topic: e.target.value,
            category: "shopping",
            date: "Sept. 19"
        }
    }

    passItemUpOnChange(e) {
        const working_item = this.createNewItem(e)

        this.props.onChange(working_item);
    }

    render() {
        return (
            <div className='TodoEntry'>

                <div>
                    <input type='text' 
                        value = { this.props.working_item.topic } 
                        onChange = {(e) => this.passItemUpOnChange(e)} placeholder='Things to do' 
                    />

                    <button onClick = {this.props.onClick}>
                        <i className="fas fa-2x fa-plus"></i>
                    </button>
                </div>

                <div>
                    <a className="type" href="#">General</a>
                    <a className="type" href="#">Workout</a>
                    <a className="type" href="#">Shopping</a>
                </div>

            </div>
        );
    }
}

export default TodoEntry;