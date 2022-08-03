import React, { Component } from 'react';

class TasksPage extends Component {

    state = { 
        tasks : [
            { id: 1 , task: "Go to the store"},
            { id: 2 , task: "Go to the School"},
            { id: 3 , task: "Go to the Bazar"}
        ],
     } 

    render() { 
        const listItem = this.state.tasks.map(e => <li>{e.task}</li>);
        return (
            <React.Fragment>
                <ul>{listItem}</ul>
            </React.Fragment>
        );
    }
}
 
export default TasksPage;