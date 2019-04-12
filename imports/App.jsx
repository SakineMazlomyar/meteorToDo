import * as React from "react";
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from './api/data.js';
import {Task} from './Task';
import { Form } from './Form'
// App component - represents the whole app
class App extends React.Component{
    constructor(props){
      super(props)

    }

    addItem = (userText) =>{
      console.log(userText)
      Tasks.insert({
        text:userText,
        createdAt: new Date()
      });
      
    }

    removeItem = (date) => {
      Tasks.remove(date);
    }


 

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task task={task.text} id={task._id} removeItems={this.removeItem}/>
    ));
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
        <Form addItems={this.addItem}/>
       
      </div>
    );
  }
}
 
export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 }}).fetch(),
  };
})(App);
 


