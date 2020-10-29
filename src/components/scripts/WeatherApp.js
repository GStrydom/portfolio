import React from 'react';
import WeatherTop from "./WeatherTop";


const WeatherApp = () => {
  return (
    <>
      <div className='mainContainer'>
          <div className="upContainer">
            <div className='top-section'>
                <WeatherTop />
            </div>
              
            <div className='bottom-section'>
                <Bottom />
            </div>
          </div>
      </div>
    </>
  );
}

export default WeatherApp;
