import React, { Component } from 'react';

import SunImage from '../../images/sun.png';


class Weather extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<>
				<div className="weather-container">
					<div className="header">Location Name</div>
					<div className="inner-container">
						<div className="image"><img src={SunImage} alt="Sun" /></div>
                        <div className="current-weather">10&deg;</div>
					</div>
                    <div className="footer">Sunny</div>
                    <button className='btn btn-search'>Search Location</button>
				</div>
			</>
		)
	}
}

export default Weather;
