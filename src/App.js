import React, { Component } from 'react';

//components
import Track from "./components/Track";

//data


class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			counter: 3,
			tempPts: [
				[480, 200],
				[580, 400],
				[680, 100],
				[780, 300],
				[180, 300],
				[280, 100],
				[380, 400]
			  ],
		};
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				<Track data = { this.setState.tempPts } />
			</div>
		);
	}
}

export default App;
