import React from 'react';
import { useState } from 'react';
import Done from './Done.jsx';
import Audio from './Audio.jsx';
import NextButton from "./Next.jsx";
import GroupButton from './GroupButton.jsx'
const Button = (props) => {
    const [active, setActive] = useState(false);
    const handleClickButton = (Word) => {
      if (!active && !props.showResults) {
        setActive(true);
  
        props.onClick();
      }
    };
    const isCorrect = props.correctImages.includes(props.image);
  let color = "";
  if (active && !props.showResults) {
    color = "";
  } else if (props.showResults) {
    if (active && isCorrect) {
      color = "";
    } else if (active && !isCorrect) {
      color = "";
    } else if (!active && isCorrect) {
      color = "";
    }
  }
  return (
    <button className={`button ${color}`} onClick={handleClickButton}>
      <img src={props.image} className= "Image" alt = "Task"/>
    </button>
  );
};
export default function Image() {
    const [selectedImage, setSelectedImage] = useState([]);
    const [donePressed, setDonePressed] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [slideNumber, setSlideNumber] = useState(0);
    const handleDoneClick = () => {
      setDonePressed(true);
    };
    const handleNextButton = () => {
        setSlideNumber(slideNumber + 1);
        setDonePressed(false);
        setDisabled(true);
      };
      const slides = [
        {
          image: ["/pictures/1.jpg"],
          correctImages: ["Pink", "correct1"],
          audio: ["1.mp3"],
        },
        {
          image: ["/pictures/2.jpg"],
          correctImages: ["mist","correct2"],
          audio: ["/Audio/2.mp3"],
        },
        {
          image: ["/pictures/3.jpg"],
          correctImages: ["pet","correct2"],
          audio: ["/Audio/3.mp3"]
        },
        {
          image: ["/pictures/4.jpg"],
          correctImages: ["man","correct1"],
          audio: ["4.mp3"]
        },
        {
            image: ["/pictures/5.jpg"],
            correctImages: ["mad","correct2"],
            audio: ["/Audio/5.mp3"]
          },
          {
            image: ["/pictures/6.jpg"],
            correctImages: ["sun","correct2"],
            audio: ["/Audio/6.mp3"]
          },
          {
            image: ["/pictures/7.jpg"],
            correctImages: ["help","correct2"],
            audio: ["/Audio/7.mp3"]
          },
          {
            image: ["/pictures/8.jpg"],
            correctImages: ["hand","correct1"],
            audio: ["/Audio/8.mp3"]
          },
          {
            image: ["/pictures/9.jpg"],
            correctImages: ["dad","correct1"],
            audio: ["/Audio/9.mp3"]
          },
          {
            image: ["/pictures/10.jpg"],
            correctImages: ["bit","correct2"],
            audio: ["/Audio/10.mp3"]
          },
          {
            image: ["/pictures/11.jpg"],
            correctImages: ["grin","correct2"],
            audio: ["/Audio/11.mp3"]
          },
          {
            image: ["/pictures/12.jpg"],
            correctImages: ["bed","correct1"],
            audio: ["/Audio/12.mp3"]
          },
          
      ];
      return (
      <>
          <div className="container">
            {slides[slideNumber].image.map((image) => {
              const handleClick = () => {
                selectedImage.length > 0 && setDisabled(false);
                setSelectedImage([...selectedImage, image]);
              };
              return (
                <Button
                  key={slides[slideNumber].image}
                  correctImages={slides[slideNumber].correctImages}
                  image={slides[slideNumber].image}
                  showResults={donePressed}
                  onClick={handleClick}
                />
              );
            })}
          </div>
          <br />
          <GroupButton/>
      <div>
        <Audio />
        <br />
      </div>

      <div>
        <Done disabled={disabled} onClick={handleDoneClick} />
      </div>
      <br />
      <br />
      <div>
        {donePressed ? <NextButton onClick={handleNextButton} /> : null}
      </div>
    </>
  );
}

