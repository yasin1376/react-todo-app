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
        return (
            <div>
                Tasks Page
            </div>
        );
    }
}
 
export default TasksPage;