import React, { Component } from 'react';

//libraries
import * as d3 from "d3";

//svg
import Sector from '../assets/sector.svg';

class Track extends Component {
	constructor(props) {
	super( props );
		this.state = {

		};
	}
	componentDidMount() {

		// var points = [
		// 	[480, 200],
		// 	[580, 400],
		// 	[680, 100],
		// 	[780, 300],
		// 	[180, 300],
		// 	[280, 100],
		// 	[380, 400]
		//   ]
		  

		//   var svg = d3.select("#circleSVG");
		  
		//   //d3v4 line generator that uses a cardinal-closed curve   
		//   var path = svg.append("path")
		// 	  .data([points])
		//   	.classed("trackPath", true)
		// 	  .attr("d", d3.line().curve(d3.curveCardinalClosed));
	

		var svg = d3.select("#trackSVG");
		
		//d3v4 line generator that uses a cardinal-closed curve   
		var path = svg.select("path")
			// .data([points])
			.classed("trackPath", true)
			// .attr("d", d3.line().curve(d3.curveCardinalClosed))
			;

			  
		console.log('path', path);

		  
		//   svg.selectAll(".point")
		// 	  .data(points)
		// 	.enter().append("circle")
		// 	  .attr("r", 4)
		// 	  .attr("transform", function(d) { return "translate(" + d + ")"; });
		  
		  var circle = svg.append("circle")
		  	.classed("trackPt", true)
			  .attr("r", 13)
			//   .attr("transform", "translate(" + points[0] + ")");
			  .attr("transform", "translate(" + -500/3 + ")");//find out why this is -height/3
		  
		  transition();
		  
		  function transition() {
// console.log('path nodes', path.node())
			circle.transition()
				.duration(1000)
				.ease(d3.easeLinear)
				.attrTween("transform", translateAlong(path.node()))
				.on("end", transition);
		  }
		  
		  // Returns an attrTween for translating along the specified path element.
		  // Notice how the transition is slow for the first quarter of the aniimation
		  // is fast for the second and third quarters and is slow again in the final quarter
		  // This is normal behavior for d3.transition()
		  function translateAlong(path) {
			var l = path.getTotalLength() * 2;
			return function(d, i, a) {
			  return function(t) {

				var p = path.getPointAtLength(t * l);
				return "translate(" + p.x + "," + p.y + ")";
				// //logic for reversing?
				// if(t* l >= l/2){
				// 	var p = path.getPointAtLength(l - (t*l))
				// } else {
				// 	var p = path.getPointAtLength(t * l);
				// }
				// return "translate(" + p.x + "," + p.y + ")";
			  };
			};
		  }

		  //svg props
		  //style="opacity:0.8;fill:none;stroke:#0057A3;stroke-width:4.2;stroke-linejoin:round;stroke-miterlimit:10;" 
		  // style="enable-background:new 0 0 720 456;" 
	}
	render() {
		console.log('track props', this.props, 'state', this.state, 'sector', Sector);
		return (
			<div className="chart">
				<svg 
					id="trackSVG"
					x="0px" y="0px" 
					width="720px"
					height="456px" 
					viewBox="0 0 720 456"
				>
					{/* <g id="sectors">

						<path d="M 460.013,350.338 c 39.311,-0.53 74.197,-1.003 93.271,-1.003 56.527,0 69.666,-27.499 69.666,-42.166 0,-14.667 -15.583,-16.499 -35.139,-16.499 -19.555,0 -174.469,0.305 -180.58,0.305 -6.112,0 -18.638,-0.611 -22.612,-4.584 -3.971,-3.972 -14.387,-11.366 -19.86,-11.916 -6.279,-0.631 -16.193,1.834 -19.86,1.834 -3.667,0 -9.779,-8.861 -22.306,-20.778
						M 322.593,255.531 c -8.117,-7.722 -42.404,-39.304 -67.118,-62.412 -13.429,-12.556 -24.03,-22.609 -26.075,-24.976 -2.655,-3.074 -10.613,-15.35 -18.967,-28.47 -9.912,-15.569 -20.38,-32.327 -23.199,-36.308 -5.194,-7.333 -14.361,-8.86 -25.361,-7.027 -8.139,1.357 -25.254,4.679 -33.605,6.313 l -4.284,1.021 c -26.889,5.806 -12.527,41.249 -6.416,50.416 6.111,9.166 14.666,25.36 15.583,30.249 0.917,4.89 1.528,7.944 6.417,9.167 4.889,1.223 5.805,7.943 7.333,20.166 0.258,2.069 0.474,5.688 0.768,10.415
						M 147.668,224.085 c 1.443,23.191 4.795,73.027 24.593,97.139 23.833,29.029 55.915,31.473 86.472,31.473 5.846,0 30.784,-11 40.638,-11 5.729,0 -0.688,10.083 12.374,10.083 40.901,0 98.176,-0.767 148.268,-1.441"
						/>

					</g> */}
					<g
						id="sectors"
					>
						<path
							id="path3856"
							d="M 135.94893,5.5529769 68.548109,15.480517 c -0.52083,0 -7.94272,0.78125 -9.76563,1.5625 -1.82291,0.78125 -5.64917,1.41833 -7.42187,3.51562 -5.53042,6.54305 -3.90839,17.61489 -3.92939,26.10507 -0.025,10.13065 0.54455,23.60129 -2.89628,32.90501 -4.30371,11.63688 -3.98157,13.55988 -11.27928,23.437503 -4.67937,6.33364 -13.03915,7.96083 -18.75,12.10938 -4.38911,3.1884 -8.7663995,6.96685 -10.1562495,12.89062 -1.24953,5.32568 -2.18967,14.11707 5.40193,20.56951 7.5915995,6.45244 20.9340195,7.26474 29.1452695,8.13374 11.91438,1.2609 23.57166,5.99958 28.06699,7.63523 1.08471,0.39468 2.75386,0.22352 2.75386,0.22352 m -2e-5,0 c 119.297901,-1.5573 4.75751,-0.25651 97.300901,-1.265 92.67464,-1.00992 191.73175,0.9708 282.04285,-9.44523 35.0459,-4.04202 70.1842,-5.05113 104.5094,-19.43327 18.8797,-7.91053 40.7882,-25.91007 53.541,-42.630713 9.6132,-12.60432 10.8404,-25.78246 11.1287,-37.75185 -2.0886,-33.22035 -18.4174,-50.2012801 -55.0895,-50.1360801 -180.6184,-1.19578 -247.15375,0.52573 -427.27126,1.6035"
							/>
					</g>
				</svg>

			</div>
		);
	}
}

export default Track;
