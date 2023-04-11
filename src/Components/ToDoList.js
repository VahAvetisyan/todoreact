import React, { useEffect, useMemo, useState } from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { selectFilterData } from "../redux/filter";
import {db} from "../Firebase/firebase";
import { collection, getDocs} from "firebase/firestore";


const ToDoList = (props) => {
  const [toDoList, setToDoList] = useState([]);

  async function getTodoItems (){
    const newItems = [];
    const querySnapshot = await getDocs(collection(db, "todoitems"));
    querySnapshot.forEach((doc) => {
      newItems.push({
        name: doc.data().name,
        id: doc.id,
        ...doc.data()
      });
      setToDoList(newItems)
    });
  }

  useEffect(()=>{
    getTodoItems()
  },[])

 


  const selectedFilterData = useSelector(selectFilterData);

  const filteredItems = useMemo(() => {
    return toDoList.filter((i) => {
      if (selectedFilterData === "all") {
        return true;
      }
      if (selectedFilterData === "checked") {
        return i.checked;
      }
      if (selectedFilterData === "unchecked") {
        return !i.checked;
      }
      return false;
    });
  }, [toDoList, selectedFilterData]);

  return (
    <>
      {filteredItems.map((toDo) => {
        return <ToDoItem key={toDo.id} toDo={toDo} onSave={props.onSave} />;
      })}
    </>
  );
};

export default ToDoList;
