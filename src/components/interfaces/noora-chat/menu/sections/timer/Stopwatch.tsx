import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons';
import useTimer from './useTimer';

const element = <FontAwesomeIcon icon={faClock} />

const Timer = () => {
    const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

    const formatTime = (timer: any) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = parseInt(`${Math.floor(timer / 60)}`)
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (
        <div className="app">
            <h3>React Stopwatch {element}</h3>
            <div className='stopwatch-card'>
                <p>{formatTime(timer)}</p>
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
    );
}

export default Timer;