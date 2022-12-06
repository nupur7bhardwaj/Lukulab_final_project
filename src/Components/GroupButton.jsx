import React from 'react';
import "../App.css";
import { BsCheckCircle } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

export default function handleSelectionClick(props) {
  console.log("Button was clicked!");
  //props.onClick();

  return (
    <div>
      <button className="check.circle" onClick={handleSelectionClick}>
        <BsCheckCircle />

      </button>
      <button className="x.circle" onClick={handleSelectionClick}>
        <BsXCircle />
      </button>
    </div>
  )
}



