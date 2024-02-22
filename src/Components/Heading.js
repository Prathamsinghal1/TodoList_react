import React from 'react';
import style from './Heading.module.css';

export default function Heading() {
  return (
    <div>
      <h1 className={`container ${style.colorWhite}`}>React Based Todo List</h1>
    </div>
  )
}
