import React,{useState} from 'react';
import styles from "./Search.module.css";

export default function Search({handleOnClick}) {

  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  const handleOnChange = (event) =>{
      setName(event.target.value);
  }
  const handleOnChan = (event) =>{
    setDate(event.target.value);
  }

  const handleOnClicked = () =>{
      handleOnClick(name,date);
      setName("");
      setDate("");
  }

  return (
      <div className='col'>
        <input className={`${styles.adder} col-4`} type='text' onChange={handleOnChange} value={name} placeholder='Enter Todo Here'/>
        <input className={`${styles.adder} col-5`} type='date' value={date} onChange={handleOnChan}/>
        <button type='submit' className=' col-2 btn btn-success ' onClick={handleOnClicked}>Add</button>
      </div>
  )
}
