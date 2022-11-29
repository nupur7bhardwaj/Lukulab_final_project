import { useState } from "react";

export default function Audio() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls>
          <source src="/Audio/1.mp3" type="audio/mp3"/>
        </audio>
      </button>
    </div>
  );
}

