import React, { Component } from 'react';

class Task extends Component {
    state = {  } 
    render() { 
        return (<li>{this.props.task.name}</li>);
    }
}
 
export default Task;