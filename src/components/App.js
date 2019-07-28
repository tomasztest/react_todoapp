import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 2;
  state = {
    tasks: [
      {
        id: 0,
        text: "nauczyć się noda",
        date: "2019-12-31",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "posprzątać",
        date: "2019-09-11",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    // // console.log("delete id " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);

    // this.setState({
    //   tasks
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    console.log("change id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    // console.log("obiekt dodany");
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    };
    this.counter++;
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO app </h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
