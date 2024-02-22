import React from 'react'
import style from './Item.module.css'

export default function Item({todoDate, todoName, handleOnClick}) {
  return (
    <div className={`row container ${style.borderWhite}`}>
      <h5 className={`col ${style.colorWhite}`} >{todoDate}</h5>
      <h5 className={`col ${style.colorWhite}`} >{todoName}</h5>
      <button className='col-2 btn btn-danger btn-sm' onClick={handleOnClick}>Delete</button>
    </div>
  )
}
