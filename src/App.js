import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import Filter from "./Components/Filter";

export default class App extends React.Component {
  onSave = (id, newValue) =>
    this.setState({
      todoList: this.state.todoList.map((item) =>
        id === item.id
          ? {
              ...item,
              name: newValue,
            }
          : item
      ),
    });

  render() {
    return (
      <div id="main-container">
        <div id="header">
          <Header />
        </div>
        <div id="toDo-list">
          <ToDoList onSave={this.onSave} />
          <Filter />
        </div>
      </div>
    );
  }
}
