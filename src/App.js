import React, { useState } from 'react'
import Search from './Components/Search'
import TodoItems from './Components/TodoItems'
import style from "./Components/App.module.css"
import Heading from './Components/Heading'

export default function App() {
    
    const [todoItem, setTodoItem] = useState([{
      name: "Complete Work",
      dueDate: "22/02/2024"
    }]);

    
  const handleOnClick = (name, date) =>{
    if(date!=="" && name!==""){
      const [year, month, day] = date.split("-");
      const newDate = `${day}-${month}-${year}`;
      let newItem = {
        name: name,
        dueDate: newDate
      };
      let newtodo = [...todoItem , newItem];
      setTodoItem(newtodo);
    }
  }

  const handleOnClicked = (item) =>{
    let newtodo = todoItem.filter((ourItem) => ourItem !== item);
    setTodoItem(newtodo);
  }


  return (
    <>
      <Heading/>
      <div className={`container ${style.first}`}>
        <Search handleOnClick = {handleOnClick} />
        <TodoItems todoItem={todoItem} handleOnClicked={handleOnClicked}/>
      </div>
    </>
  )
}
