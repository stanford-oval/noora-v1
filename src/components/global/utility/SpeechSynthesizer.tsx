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
    preText,
    text,
    postText,
    style,
    styleDegree
}: any) {
    const handler = () => {
        console.log("In speech handler");
        textToSpeech(text, preText, postText, style, styleDegree, turn, setTurn);
    };

    return (
        <button
            type="button"
            onClick={(e: any) => {
                e.preventDefault();
                handler();
            }}
            className="inline-block"
            disabled={!turn.startsWith("user")}
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
    turn: any,
    setTurn: any) {
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
    let originalTurn = turn.slice()
    if (turn.startsWith("user")) setTurn(turn + "-noora-reads")

    const ssmlStr = getSpeechSSMLStr(text, preText, postText, style, styleDegree)

    console.log(ssmlStr)

    // Start the synthesizer and wait for a result.
    await synthesizer.speakSsmlAsync(
        ssmlStr, // ssml.text
        (result: any) => {
            const wordCount = (text + preText + postText).split(" ").length
            setTimeout(() => {
                setTurn(originalTurn)
                // if (player) {
                //     player.pause()
                //     player.close()
                // }
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