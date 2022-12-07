import React, { useContext } from 'react';
import "../App.css";
import { NotificationContext } from './notification.context';

export default function handleSelectionClick(props) {
  console.log("Button was clicked!");
  const{setDoneDisabled}= useContext(NotificationContext)
  //props.onClick();
 const selectHandler = (event)=>{
  setDoneDisabled(false)
 
 }
  return (
    <div>
      <div className="check-circle" onClick={selectHandler} name = "check">
      &#10003;

      </div>&nbsp;
      <div className="x-circle" onClick={selectHandler} name = "uncheck">
      &#88;
      </div>
    </div>
  )
}



