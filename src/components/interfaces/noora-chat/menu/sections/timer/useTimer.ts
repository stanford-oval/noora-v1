import { useState, useRef } from 'react';

const useTimer = (convoState: any) => {
    const timer = convoState.value.clock.currentTimeSpent
    const incrementTimer = () => {
        convoState.setValue((cs: any) => {
            return {
                ...cs, clock: {
                    currentTimeSpent: cs.clock.currentTimeSpent + 1,
                }
            }
        })
    }

    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef: any = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(false)
        countRef.current = setInterval(() => {
            incrementTimer()
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(true)
    }

    const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(true)
        convoState.setValue((cs: any) => {
            return {
                ...cs, clock: {
                    currentTimeSpent: 0,
                }
            }
        })
    }

    return { timer, isActive, isPaused, handleStart, handlePause, handleReset }
}

export default useTimer