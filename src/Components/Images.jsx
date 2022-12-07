import React from 'react';
import { useState} from 'react';
import Done from './Done.jsx';
import Audio from './Audio.jsx';
import NextButton from './Next.jsx';
import GroupButton from './GroupButton.jsx';
import '../App.css';

//import { fetchLukulab_Exercise } from "../fetch_data";



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
      <img src={props.image} className="Image" alt="Task" />
    </button>
  );
};
export default function Image() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [donePressed, setDonePressed] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [slideNumber, setSlideNumber] = useState(0);
  //const [pullDatas, setPullDatas] = useState();
  const handleDoneClick = () => {
    setDonePressed(true);
  };
  /*const fetchData = async function () {
    const data = await fetchLukulab_Exercise();
    setPullDatas(data);
  };
  useEffect(() => {
    fetchData();
  }, []);*/
  const handleNextButton = () => {
    setSlideNumber(slideNumber + 1);
    setDonePressed(false);
    setDisabled(true);
  };
  /*const exerciseSet =
    pullDatas &&
    pullDatas.data.Lukulab_Exercise.filter((exercise) => {
      if (exercise.Exercise_Set === "4") {
        return true;
      } else {
        return false;
      }
    });
  console.log(exerciseSet);
  console.log(pullDatas);
  const exercise = pullDatas && exerciseSet[slideNumber];
  return (
    <>
      <div className="container">
        {pullDatas &&
          exercise.Picture(" ").map((image) => {
            const handleClick = () => {
              selectedImage > 0 && setDisabled(false);
              setSelectedImage([...selectedImage, image]);
            };
            return (
              <Button
                key={image}
                correctPicture={exercise.Correctanswer("")}
                image={image}
                showResults={donePressed}
                onClick={handleClick}
              />

            );
          })}
          
      </div>
      <br />

  <div>
    {pullDatas && <Audio fileName={exercise.Audio} />}
    <br />
  </div>
  <div>
    <GroupButton/>
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
}*/



  const slides = [
    {
      image: ["/pictures/1/1.jpg"],
      correctImages: ["Pink", "correct1"],
      audio: ["/Audio/1.mp3"],
    },
    {
      image: ["/pictures/2/1.jpg"],
      correctImages: ["mist", "correct2"],
      audio: ["/Audio/2.mp3"],
    },
    {
      image: ["/pictures/3/1.jpg"],
      correctImages: ["pet", "correct2"],
      audio: ["/Audio/3.mp3"]
    },
    {
      image: ["/pictures/4/1.jpg"],
      correctImages: ["man", "correct1"],
      audio: ["4.mp3"]
    },
    {
      image: ["/pictures/5/1.jpg"],
      correctImages: ["mad", "correct2"],
      audio: ["/Audio/5.mp3"]
    },
    {
      image: ["/pictures/6/1.jpg"],
      correctImages: ["sun", "correct2"],
      audio: ["/Audio/6.mp3"]
    },
    {
      image: ["/pictures/7/1.jpg"],
      correctImages: ["help", "correct2"],
      audio: ["/Audio/7.mp3"]
    },
    {
      image: ["/pictures/8/1.jpg"],
      correctImages: ["hand", "correct1"],
      audio: ["/Audio/8.mp3"]
    },
    {
      image: ["/pictures/9/1.jpg"],
      correctImages: ["dad", "correct1"],
      audio: ["/Audio/9.mp3"]
    },
    {
      image: ["/pictures/10/1.jpg"],
      correctImages: ["bit", "correct2"],
      audio: ["/Audio/10.mp3"]
    },
    {
      image: ["/pictures/11/1.jpg"],
      correctImages: ["grin", "correct2"],
      audio: ["/Audio/11.mp3"]
    },
    {
      image: ["/pictures/12/1.jpg"],
      correctImages: ["bed", "correct1"],
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

          )
        })}
      </div>
      <br />
      <GroupButton />
      <br />
      <Audio src={slides[slideNumber].audio} />
      <br />
      <div>
        <Done setDonePressed={disabled} onClick={handleDoneClick} />
      </div>
      <br />
      <br />
      <div className='boolean'>
        {donePressed ? <NextButton onClick={handleNextButton} /> : null}
      </div>
    </>)
}