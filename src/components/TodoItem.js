import React from 'react';
import '../scss/application.scss';

class TodoItem extends React.Component {
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
                    <button>
                        <i className="fas  fa-check"></i>
                    </button>
                </div>
                
            </div>
        );
    }
}

export default TodoItem;