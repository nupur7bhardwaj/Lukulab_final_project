import React, { useContext } from 'react';
import "../App.css";
import { NotificationContext } from './notification.context';


export default function NextButton(props) {
  const{setDoneDisabled}= useContext(NotificationContext)
 const handleClick = (event)=>{
  setDoneDisabled(true)
 
 }
  return (
    <button className="Next" onClick={handleClick} disabled={props.disabled}>
      Next
    </button>
  );
}

