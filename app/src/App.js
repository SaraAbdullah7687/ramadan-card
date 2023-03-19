
import './App.css';
import img from './images/img.jpg'
import React from 'react';
import { toPng } from 'html-to-image'
import download from 'downloadjs'
function App() {
  const [text, setText] = React.useState("")

  function handleText(event) {
    const newText = event.target.value
    setText(newText)
  }
const node = document.getElementById('image-download')
function downloadImage () {
toPng(node).then (dataURL => {
  download(dataURL, "congrats.png")
})
.catch(() => console.log("Erorr here #19"))
}

  return (
    <div className="container">
      <input type="text" placeholder="Type text here" className="input" onChange={handleText} value={text} />
      <div className="image-wrapper" id="image-download">
        <img src={img} alt="" className="image" />
        <h1 className="image-text">{text}</h1>
      </div>
      <button className="download-btn" onClick={downloadImage}>download</button>
    </div>
  );
}

export default App;
