import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import useTimer from './useTimer';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

export default function Clock({ convoState }: any) {

    const { timer, isActive, isPaused, handleStart, handlePause, handleReset } = useTimer(convoState)

    useEffect(() => {
        handleStart()
    }, [])

    const formatTime = (timer: any) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = parseInt(`${Math.floor(timer / 60)}`)
        const getMinutes = `0${minutes % 60}`.slice(-2)

        return `${getMinutes} : ${getSeconds}`
    }

    return (
        <div className="mt-2 bg-gray-100 rounded-lg flex flex-col p-2 text-center">
            <div className='space-y-1'>
                <div>
                    <p className="text-3xl font-bold text-noora-primary">{formatTime(timer)}</p>
                    <p className="text-lg text-noora-primary -mt-1">on problem {convoState.value.progress.length + 1}</p>
                </div>
                <div>
                    <p className="text-lg font-medium">{formatTime(timer)}</p>
                    <p className="text-xs text-gray-400 -mt-1">total time spent</p>
                </div>
                <div className='space-x-3 flex flex-row justify-center pt-2'>
                    <button onClick={() => { if (isPaused) handleStart(); else handlePause(); }}>
                        <FontAwesomeIcon icon={
                            isPaused ? faPlay :
                                faPause
                        } className="h-4 y-4" />
                    </button>
                    <button onClick={handleReset} disabled={!isActive}><FontAwesomeIcon icon={faRepeat} className="h-4 y-4" /></button>
                </div>
            </div>
        </div>
    );
}