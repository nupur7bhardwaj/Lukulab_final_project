import { useState } from "react";
import React from 'react';

export default function Audio(props) {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls key={props.src}>
          
          <source src={props.src} type="audio/mp3"/>
        </audio>
      </button>
    </div>
  );
}

