import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../../../../Authenticate'; // Import the useAuth function
import { db } from '../../../../../../firebase';
import useTimer from './useTimer';
import { writeToFirestore } from "../../../../../../lib/firestoreUtils";

export default function Clock({ convoState }: any) {
    const [user, email] = useAuth();

    const { timer, isActive, isPaused, handleStart, handlePause, handleReset } = useTimer(convoState)
    const [turn, setTurn] = useState(convoState.value.turn)
    const previousLenRef = useRef(0);


    useEffect(() => {
        // if email is not set, set it
        if (email && !convoState.value.EMAIL) {
            convoState.setValue((cs: any) => ({
                ...cs,
                EMAIL: email
            }));
        }
    }, [convoState.value.turn])

    useEffect(() => {
        if (convoState.value.PAUSE_TIMER) {
            handlePause();
            convoState.setValue((cs: any) => ({ ...cs, PAUSE_TIMER: false }));
        }
    }, [convoState.value.PAUSE_TIMER])

    useEffect(() => {
        console.log("turn was  " + turn + " and now is " + convoState.value.turn)
        if (turn.endsWith("user-answer-noora-reads") || turn.endsWith("user-answer") && convoState.value.turn == "user-answer") {
            if (previousLenRef.current != 0) {
                // TODOX: here is where pause is handled
                handlePause();
                handleReset();
                console.log("We have paused and reset the timer.")
                convoState.value.times.push(formatTime(timer));

                // RESET STT value
                if (convoState.value.stt) {
                    convoState.setValue((cs: any) => ({
                        ...cs,
                        stt: false,
                    }));
                    console.log("JUST DISMOUNTED stt.");
                }
                console.log("STT", convoState.value.stt);


                // console.log(`Current state of convoState times: ${convoState.value.times}`)
            }

            // TODOX: move this to onSubmit
            handleStart();
        }

        if (previousLenRef.current == convoState.value.progress.length - 1) {

            previousLenRef.current += 1;
            handlePause();
        }


        setTurn(convoState.value.turn)
    }, [convoState.value.turn])

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
                    {isPaused ? <p className="text-lg text-noora-primary -mt-1">on problem {Math.max(1, convoState.value.progress.length)}</p> : <p className="text-lg text-noora-primary -mt-1">on problem {convoState.value.progress.length + 1}</p>}
                </div>
                {/* <div>
                    <p className="text-lg font-medium">{formatTime(timer)}</p>
                    <p className="text-xs text-gray-400 -mt-1">total time spent</p>
                </div> */}
                {/* {!convoState.value.turn.includes("start") && <div className='space-x-3 flex flex-row justify-center pt-2'>
                    <button onClick={() => { if (isPaused) handleStart(); else handlePause(); }}>
                        <FontAwesomeIcon icon={
                            isPaused ? faPlay :
                                faPause
                        } className="h-4 y-4" />
                    </button>
                    <button onClick={handleReset} disabled={!isActive}><FontAwesomeIcon icon={faRepeat} className="h-4 y-4" /></button>
                </div>} */}
            </div>
        </div>
    );
}