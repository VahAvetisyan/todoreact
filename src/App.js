import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import { INITIAL_TODO_LIST } from "./constants/common";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoName: "",
      todoList: INITIAL_TODO_LIST,
      counter: 0,
    };
  }

  filteredToDo = (status) => {
    if (status === "all") {
      this.setState({
        todoList: [...this.state.todoList],
      });
    } else {
      this.setState({
        todoList: this.state.todoList.filter(
          (item) => item.isChecking === status
        ),
      });
    }
  };

  changeIsChecking = (id, checked) => {
    this.setState({
      todoList: this.state.todoList.map((item) => {
        if (id === item.id) {
          return { ...item, checked };
        }
        return item;
      }),
    });
  };

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

  onToDoChange = (e) => {
    this.setState({
      toDoName: e.target.value,
    });
  };

  btnAddClicked = () => {
    if (this.state.toDoName !== "") {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            name: this.state.toDoName,
            id: Math.random(),
            isChecking: false,
          },
        ],
        toDoName: "",
      });
    }
  };

  onDelete = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((toDo) => id !== toDo.id),
    });
  };

  render() {
    return (
      <div id="main-container">
        <div id="header">
          <Header
            toDoName={this.state.toDoName}
            onToDoChange={this.onToDoChange}
            onAddBtnClick={this.btnAddClicked}
          />
        </div>
        <div id="toDo-list">
          <ToDoList
            toDoList={this.state.todoList}
            onDelete={this.onDelete}
            onSave={this.onSave}
            onToDoChangeToDoList={this.onToDoChange}
            filteredToDo={this.filteredToDo}
            changeIsChecking={this.changeIsChecking}
          />
        </div>
      </div>
    );
  }
}
