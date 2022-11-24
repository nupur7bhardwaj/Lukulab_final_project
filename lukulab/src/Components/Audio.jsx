import { useState } from "react";
import Audio from "../Audio/1.mp3";

export default function MyAudio() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(event) {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Play">
      <button className="Btn" onClick={handleClick}>
        <audio controls>
          <source src={Audio} type="1.mp3" />
        </audio>
      </button>
    </div>
  );
}


