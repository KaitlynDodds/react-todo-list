import React from 'react';
import '../scss/application.scss';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item
        };

        this.passItemUp = this.passItemUp.bind(this);
    }

    passItemUp() {
        // passes item data up to parent callback 
        this.props.onClick(this.state.item);
    }

    render() {
        return (
            <div className={`TodoItem ${ this.props.styleName }`}>

                <span className={`accent ${this.props.item.category}`}>
                    { this.props.item.category }
                </span>

                <div className='info'>
                    <p>
                        { this.props.item.topic }
                    </p>
                    <span>
                        { this.props.item.date }
                    </span>
                </div>

                <div className='btn'>
                    <button 
                        onClick={this.passItemUp}>
                        <i className="fas fa-check"></i>
                    </button>
                </div>
                
            </div>
        );
    }
}

export default TodoItem;