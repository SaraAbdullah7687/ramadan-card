
import './newApp.css';
// import { Fragment } from "react"
import img from '../images/img.jpg'
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
	function downloadImage() {
		toPng(node).then(dataURL => {
			download(dataURL, "congrats.png")
		})
			.catch(() => console.log("Erorr here #19"))
	}
	// const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>

	return (
		<div className="container">

			<div className="card">
				<p className="heading">اصنع بطاقة تهنئة ريتشي الخاصة بك وشاركها مع فريق عملك ومع من تحب </p>

				<div className="card-image" id="image-download">
					<img src={img} alt="" className="image" />
					<h1 className="image-text">{text} </h1>

					{/* <h2 class="card-heading">
				Get started
				<small>Let us create your account</small>
			</h2> */}


				</div>
				{/* <form className="card-form"> */}
				<div className="input">
					<input type="text" className="input-field" placeholder="اكتب اسمك هنا" onChange={handleText} value={text} required />

				</div>

				<div className="action">
					<button className="action-button" onClick={downloadImage}>تحميل</button>
				</div>
				{/* </form> */}
				{/* <div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
		</div> */}
			</div>
		</div>

	);
}

export default App;
