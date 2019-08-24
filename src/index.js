import React from "react"
import ReactDOM from "react-dom"
import pngImage from './static/say-what.png'
import "./index.css";

const App = () => {
	return(<div>
	{pngImage}
		<p>App Here!</p>
	}
	</div>)
}

ReactDOM.render(<App />, document.getElementById("app"));