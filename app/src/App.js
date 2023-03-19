
import './App.css';
import img from './images/img.jpg'
import React from 'react';

function App() {
  const [text, setText] = React.useState("")

  function handleText(event) {
    const newText = event.target.value
    setText(newText)
  }

  return (
    <div className="container">
      <input type="text" placeholder="Type text here" className="input" onChange={handleText} value={text} />
      <div className="image-wrapper">
        <img src={img} alt="" className="image" />
        <h1 className="image-text">{text}</h1>
      </div>
    </div>
  );
}

export default App;
