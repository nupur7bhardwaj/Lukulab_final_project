import "../App.css";

export default function NextButton(props) {
  function handleClick(event) {
    console.log("Button was clicked!");
    props.onClick();
  }
  return (
    <button className="Next" onClick={handleClick} disabled={props.disabled}>
      Next
    </button>
  );
}

