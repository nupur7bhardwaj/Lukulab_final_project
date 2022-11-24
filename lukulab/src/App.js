
import './App.css';
import Image1 from './Components/Image1.jsx';
import Audio from './Components/Audio.jsx';
import Group_Button from './Components/Group_Button.jsx'

function App() {
  return (
    <>
    <div className = "container">
      <Image1/>
      <Audio/>
      <button type="button" className="btn btn-outline-light">Next</button>
      <footer>
        <p>
        <button type="button" className="btn btn-link">How to do the exercise?</button>
        </p>
        <button type="button" className="btn btn-primary" disabled data-bs-toggle="button">Done</button>
        <Group_Button/>
      </footer>
    </div>
    </>
  );
}

export default App;
