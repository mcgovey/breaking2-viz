import React, { Component } from 'react';

//components
import Track from "./components/Track";

//data
import data from "./data/times.json"

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			counter: 3,
			data	: {
				kipSplits		: data.map( ( lap ) => {
					return lap.TotalSplitSeconds;
				}),
				targetSplits	: data.map( ( lap ) => {
					return lap.TargetSplitSeconds;
				}),
			},
			animationCtrl	: {
				isRunning	: false,
				kipLap		: 0,
				targetLap	: 0,
			},
		};
	}
	render() {
console.log('data', data );
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				<Track data = { this.state.data } animationCtrl = { this.state.animationCtrl } />
			</div>
		);
	}
}

export default App;
