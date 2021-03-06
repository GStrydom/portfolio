import React, { Component } from 'react';
import Weather from './Weather';

import '../sass/topstyles.scss';


class WeatherTop extends Component {
	constructor(props) {
		super(props);
        this.state = {
        	location: props.location
        };
	}

	render() {
		return(
			<>
				<div className="top-container">
				    <div className='title'>REACT&nbsp;WEATHER</div>
					<Weather />
				</div>
			</>
		)
	}
}

export default WeatherTop;
