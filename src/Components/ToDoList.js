import React from "react";
import { ToDoItem } from "./ToDoItem";

const ToDoList = (props) => (
  <>
    {props.toDoList.map((toDo) => {
      return (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          onSave={props.onSave}
          onDelete={props.onDelete}
          changeIsChecking={props.changeIsChecking}
        />
      );
    })}

    <div className="dropdown">
      <button className="dropbtn">Filter</button>
      <div id="myDropdown" className="dropdown-content">
        <button
          onClick={() => {
            props.filteredToDo("all");
          }}
        >
          All to-do lists
        </button>
        <button
          onClick={() => {
            props.filteredToDo(true);
          }}
        >
          Completed to-do lists
        </button>
        <button
          onClick={() => {
            props.filteredToDo(false);
          }}
        >
          Unfulfilled to-do lists
        </button>
      </div>
    </div>
  </>
);

export default ToDoList;
