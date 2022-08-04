import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import getSpeechSSMLStr from "../../../data/speech-ssml";
import { getTokenOrRefresh } from "../../../scripts/token_util";
const sdk = require("microsoft-cognitiveservices-speech-sdk");

export default function SpeechSynthesizer({
    className,
    turn,
    setTurn,
    text,
}: any) {
    const handler = () => {
        console.log("In speech handler");
        textToSpeech(text, turn, setTurn);
    };

    return (
        <button
            type="button"
            onClick={(e: any) => {
                e.preventDefault();
                handler();
            }}
            className="inline-block"
            disabled={!turn.startsWith("user-answer")}
        >
            <FontAwesomeIcon
                icon={faVolumeUp}
                className={className}
            />
        </button>
    );
}

export async function textToSpeech(text: string, turn: any, setTurn: any) {
    const tokenObj = await getTokenOrRefresh();
    const speechConfig = sdk.SpeechConfig.fromAuthorizationToken(
        tokenObj.authToken,
        tokenObj.region
    );
    const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();

    // The language of the voice that speaks.
    speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";

    // Create the speech synthesizer.
    let synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    if (turn.startsWith("user-answer")) setTurn("noora-reads")

    const ssmlStr = getSpeechSSMLStr(text)

    console.log(ssmlStr)

    // Start the synthesizer and wait for a result.
    await synthesizer.speakSsmlAsync(
        ssmlStr, // ssml.text,
        (result: any) => {
            setTurn("user-answer")
            if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                console.log("Synthesis finished.");
            } else {
                console.error(
                    "Speech synthesis canceled, " +
                    result.errorDetails
                );
            }
            synthesizer.close();
            synthesizer = null;
        },
        (err: any) => {
            console.trace("err - " + err);
            synthesizer.close();
            synthesizer = null;
        }
    );
}