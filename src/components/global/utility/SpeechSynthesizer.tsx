import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import getSpeechSSMLStr from "../../../data/speech-ssml";
import { getTokenOrRefresh } from "../../../scripts/token_util";
const sdk = require("microsoft-cognitiveservices-speech-sdk");

export default function SpeechSynthesizer({
    className,
    convoState,
    preText,
    text,
    postText,
    style,
    styleDegree
}: any) {
    const handler = () => {
        console.log("In speech handler");
        textToSpeech(text, preText, postText, style, styleDegree, convoState);
    };

    return (
        <button
            type="button"
            onClick={(e: any) => {
                e.preventDefault();
                handler();
            }}
            className="inline-block text-gray-500 disabled:text-gray-400"
            disabled={convoState.value.turn.includes("noora-reads")}
        >
            <FontAwesomeIcon
                icon={faVolumeUp}
                className={className}
            />
        </button>
    );
}

export async function textToSpeech(text: string,
    preText: any,
    postText: any,
    style: any,
    styleDegree: any,
    convoState: any) {

    const setTurn = (str: string) => {
        convoState.setValue((cs: any) => ({
            ...cs,
            turn: str,
        }))
    }

    const tokenObj = await getTokenOrRefresh();
    const speechConfig = sdk.SpeechConfig.fromAuthorizationToken(
        tokenObj.authToken,
        tokenObj.region
    );
    var player = new sdk.SpeakerAudioDestination();
    const audioConfig = sdk.AudioConfig.fromSpeakerOutput(player);

    // The language of the voice that speaks.
    speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";

    // Create the speech synthesizer.
    let synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    let originalTurn = convoState.value.turn.slice()
    if (originalTurn.startsWith("user")) setTurn(originalTurn + "-noora-reads")

    const ssmlStr = getSpeechSSMLStr(text, preText, postText, style, styleDegree)

    console.log(ssmlStr)

    // Start the synthesizer and wait for a result.
    await synthesizer.speakSsmlAsync(
        ssmlStr, // ssml.text
        (result: any) => {
            const wordCount = (text + preText + postText).split(" ").length
            setTurn(originalTurn)
            setTimeout(() => {
                // if (player)
                //     setTurn(originalTurn)
            }, 0.38 * wordCount * 1000)

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