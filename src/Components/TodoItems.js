import React from 'react';
import Item from './Item';

export default function TodoItems({ todoItem, handleOnClicked}) {
  return (
    <div>
      {todoItem.map((item)=> (
        <Item key={todoItem.indexOf(item)} todoDate = {item.dueDate} todoName = {item.name} handleOnClick={(event) => handleOnClicked(item, event)}></Item>
      ))}
    </div>
  )
}
