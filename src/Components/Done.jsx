import React from 'react';
import { useContext } from 'react';
import "../App.css";
import { NotificationContext } from './notification.context';

export default function Done(props) {
  const{doneDisabled}= useContext(NotificationContext)
  function handleClick(event) {
    console.log("Button was clicked!");
    props.onClick();
  }
  return (
    <button className="Done" onClick={handleClick} disabled={doneDisabled}>
      Done
    </button>
  );
}

