import React from 'react';
import '../scss/application.scss';

class TodoEntry extends React.Component {
    render() {
        return (
            <div className='TodoEntry card'>
                <input type='text' placeholder='Things to do' />
                <button>
                    <i className="fas fa-2x fa-plus"></i>
                </button>
            </div>
        );
    }
}

export default TodoEntry;