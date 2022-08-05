import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";
const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

import { getTokenOrRefresh } from "../../../scripts/token_util";

export default function Microphone({
  className,
  turn,
  setTurn,
  setText,
  currText,
}: any) {
  const microphoneHandler = () => {
    console.log("In Microphone handler");
    sttFromMic(turn, setTurn, setText, currText);
  };

  return (
    <button
      type="button"
      onClick={(e: any) => {
        e.preventDefault();
        microphoneHandler();
      }}
      disabled={turn.includes("reads")}
      className={className}
    >
      <FontAwesomeIcon icon={faMicrophone} className="w-4 h-4 text-white" />
    </button>
  );
}

async function sttFromMic(
  turn: string,
  setTurn: any,
  setText: any,
  currText: string
) {
  const tokenObj = await getTokenOrRefresh();

  const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(
    tokenObj.authToken,
    tokenObj.region
  );
  speechConfig.speechRecognitionLanguage = "en-US";

  const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
  const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

  if (turn.startsWith("user")) setTurn("user-answer-microphone")
  else return;

  recognizer.recognizeOnceAsync((result: any) => {
    setTurn(turn + "-edit");
    let transcribed;
    if (result.reason === ResultReason.RecognizedSpeech) {
      transcribed = `${result.text}`;
    } else return;

    setText(
      currText +
      (currText.length > 0 && !currText.endsWith(" ") ? " " : "") +
      transcribed
    );
  });
}
