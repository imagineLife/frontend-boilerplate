import React from "react"
import ReactDOM from "react-dom"
import pngImage from './static/say-what.png'
import "./index.css";

const App = () => {
	return(<div>
		<img src={pngImage} width='50px' height='50px'/>
		<p>App Here!</p>
	</div>)
}

ReactDOM.render(<App />, document.getElementById("app"));