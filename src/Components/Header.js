import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodoName } from "../redux/todo";

const Header = () => {
  const toDoName = useSelector((state) => state.todo.toDoName);
  const dispatch = useDispatch();

  const onToDoChange = (e) => dispatch(setTodoName(e.target.value));

  const onAddBtnClick = () =>
    dispatch(
      addTodo({
        name: toDoName,
        id: Math.random(),
        checked: false,
      })
    );

  return (
    <>
      <div className="input-wrapper">
        <div className="input-data">
          <input
            value={toDoName}
            onChange={onToDoChange}
            placeholder="Enter a task"
          />
          <div className="underline"></div>
        </div>
      </div>
      <button className="btn btn-add" onClick={onAddBtnClick}>
        add
      </button>
    </>
  );
};

export default Header;
