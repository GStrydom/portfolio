import React, { useState, useRef } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

import "./css/Stopwatch.css";

const element = <FontAwesomeIcon icon={faClock} />

const size = "fullscreen";


function StopWatch() {
   const [open, setOpen] = React.useState(false);
   const [timer, setTimer] = useState(0);
   const [isActive, setIsActive] = useState(false);
   const [isPaused, setIsPaused] = useState(0);
   const countRef = useRef(null);

   const handleStart = () => {
      setIsActive(true);
      setIsPaused(true);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
   }

   const handlePause = () => {
      clearInterval(countRef.current);
      setIsPaused(false);
   }

   const handleResume = () => {
     setIsPaused(true)
     countRef.current = setInterval(() => {
       setTimer((timer) => timer + 1)
     }, 1000)
   }

   const handleReset = () => {
      clearInterval(countRef.current)
      setIsActive(false)
      setIsPaused(false)
      setTimer(0)
   }

   const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
   }

   return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size={size}
        trigger={<Button>Launch Script</Button>}
      >
      <Modal.Header>StopWatch</Modal.Header>
      
      <Modal.Content>
        <div className="app">
          <h3>React Stopwatch {element}</h3>
          <div className='stopwatch-card'>
          <p>{formatTime()}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
      </Modal.Content>
      
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>Close</Button>
        <Button
		      color='green'
          content="Done"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default StopWatch;
