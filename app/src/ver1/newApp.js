
import './newApp.css';
// import { Fragment } from "react"
import img from '../images/IT.jpg'
import React from 'react';
import { toPng } from 'html-to-image'
import download from 'downloadjs'
import html2canvas from 'html2canvas'
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
	function downloadImage2() {
		html2canvas(node).then(canvas => {
			download(canvas, "congratsCanvas.png")
		}).catch(() => console.log("Erorr here #19"))
	}
	function downloadImage3(){
		var canvas = document.getElementById("image-download");
		var url = canvas.toDataURL("image/png");
		var link = document.createElement('a');
		link.download = 'canvas3.png';
		link.href = url;
		link.click();
	  }
	  function downloadImage4() {
		const input = document.getElementById('image-download');
		html2canvas(input)
		  .then((canvas) => {
			download(canvas, "Canvas.png")
		//	let imgWidth = 208;
		//	let imgHeight = canvas.height * imgWidth / canvas.width;
			// const imgData = canvas.toDataURL('img/png');
			// const pdf = new jsPDF('p', 'mm', 'a4');
			// pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
			// // pdf.output('dataurlnewwindow');
			// pdf.save("download.pdf");
		  }).catch(() => console.log("Erorr here #19"))
	  }
	  function downloadImage5() {
		html2canvas(node).then((canvas)=> {
			const base64image = canvas.toDataURL(" image/png");
			var anchor = document.createElement('a');
			anchor.setAttribute("href", base64image);
			anchor.setAttribute('download', 'my-image.png');
			anchor.click();
			anchor.remove();
		}).catch(() => console.log("Erorr here #58"))

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
					<button className="action-button" onClick={downloadImage5}>تحميل</button>
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
