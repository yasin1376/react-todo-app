import React, { Component } from 'react';

class Task extends Component {
    state = {  } 
    render() { 
        return (
        <li>
            {this.props.task.name}
            <button className='rounded bg-red-700 text-sm p-1 ml-3' >Delete</button>
        </li>
        );
    }
}
 
export default Task;