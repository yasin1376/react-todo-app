import React, { Component } from 'react';
import Task from './Task';

class TasksPage extends Component {

    state = { 
        tasks : [
            { id: 1 , name: "Go to the store"},
            { id: 2 , name: "Go to the School"},
            { id: 3 , name: "Go to the Bazar"}
        ],
     } 

    render() { 
        const listItem = this.state.tasks.map(e => <Task task={e} />);
        return (
            <React.Fragment>
                <ul>{listItem}</ul>
            </React.Fragment>
        );
    }
}
 
export default TasksPage;