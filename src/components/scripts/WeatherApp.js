import React from 'react';
import WeatherTop from "./WeatherTop";
import WeatherBottom from "./WeatherBottom";

import axios from "axios";


class WeatherApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "Durban"
    }
  }

  componentDidMount() {
    const { cityName } = this.state;
    const url = "http://api.weatherstack.com/current?access_key=08c62b3042d8c2dca32d907d36895ce5&query=Durban"; 

    axios.get(url).then((res) => {
      return res.data;
    }).then((data) => {
      
    }).catch((err) => {
      if(err) {
        console.error("Cannot not fetch weather data from API ", err)
      }
    })
  }

  render() {
    return (
      <>
        <div className='mainContainer'>
            <div className="upContainer">
              <div className='top-section'>
                  <WeatherTop location="Durban"/>
              </div>
                
              <div className='bottom-section'>
                  <WeatherBottom />
              </div>
            </div>
        </div>
      </>
    )
  }
}

export default WeatherApp;
