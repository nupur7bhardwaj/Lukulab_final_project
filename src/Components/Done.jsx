import React from 'react';
import "../App.css";

export default function Done(props) {
  function handleClick(event) {
    console.log("Button was clicked!");
    props.onClick();
  }
  return (
    <button className="Done" onClick={handleClick} disabled={props.disabled}>
      Done
    </button>
  );
}

