import React, { Component } from 'react';
import './App.css';
import ToDoList from "./component/toDoList"
class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="nav"></header>
       <ToDoList></ToDoList>
      </div>
    );
  }
}

export default App;
