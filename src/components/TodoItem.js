import React from 'react';
import '../scss/application.scss';

class TodoItem extends React.Component {
    render() {
        return (
            <div className='TodoItem'>
                <span className='accent'>Shopping</span>
                <div className='info'>
                    <p>Project Styles</p>
                    <span>OCT 18</span>
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