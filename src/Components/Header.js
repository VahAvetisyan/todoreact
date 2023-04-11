import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoName } from "../redux/todo";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../Firebase/firebase";

const Header = () => {
  const toDoName = useSelector((state) => state.todo.toDoName);
  const dispatch = useDispatch();

  const onToDoChange = (e) => dispatch(setTodoName(e.target.value));

  // const onAddBtnClick = () =>
  //   dispatch(
  //     addTodo({
  //       name: toDoName,
  //       id: Math.random(),
  //       checked: false,
  //     })
  //   );

  const onAddBtnClick = async () =>{
    await addDoc(collection(db, "todoitems"), {
      name: toDoName,
      checked: false,
    });
  }

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
