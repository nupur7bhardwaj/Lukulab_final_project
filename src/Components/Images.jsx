import React from 'react';
import { useState, useEffect } from 'react';
import Done from './Done.jsx';
import Audio from './Audio.jsx';
import NextButton from './Next.jsx';
import GroupButton from './GroupButton.jsx';
import '../App.css';

import { fetchLukulab_Exercise } from "../fetch_data";



const Button = (props) => {
  const [active, setActive] = useState(false);
  const handleClickButton = (image) => {
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
      <img src={"pictures/" + props.image} className="Image" alt="Task" />
    </button>
  );
};
export default function Image() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [donePressed, setDonePressed] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);
  const [pullDatas, setPullDatas] = useState();
  const handleDoneClick = () => {
    setDonePressed(true);
  };
  const fetchData = async function () {
    const data = await fetchLukulab_Exercise();
    setPullDatas(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleNextButton = () => {
    setSlideNumber(slideNumber + 1);
    setDonePressed(false);
    setDisabled(true);
  };

  console.log(pullDatas);
  const exerciseSet =
    pullDatas &&
    pullDatas.data.Lukulab_Exercise.filter((exercise) => {
      if (exercise.Exercise_Set === "4") {
        return true;
      } else {
        return false;
      }
    });
  console.log(exerciseSet);

  const exercise = pullDatas && exerciseSet[slideNumber];
  return (
    <>
      <div className="container">
        {pullDatas &&
          exercise.Picture.split(",").map((image) => {
            const handleClick = () => {
              selectedImage > 0 && setDisabled(false);
              setSelectedImage([...selectedImage, image]);
            };
            return (
              <Button
                key={image}
                correctImages={exercise.Correctanswer.split(",")}
                image={image}
                showResults={donePressed}
                onClick={handleClick}
              />

            );
          })}

      </div>
      <br />

      <div>
        {pullDatas && <Audio src={"Audio/" + exercise.Audio} />}
        <br />
      </div>
      <div>
        <GroupButton />
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