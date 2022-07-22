import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";
const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

import { getTokenOrRefresh } from "../../../scripts/token_util";

export default function Microphone({ className, setTurn, setText }: any) {
  const microphoneHandler = () => {
    console.log("In Microphone handler");
    sttFromMic(setTurn, setText);
  };

  return (
    <button
      type="button"
      onClick={(e: any) => {
        e.preventDefault();
        microphoneHandler();
      }}
      className={className}
    >
      <FontAwesomeIcon icon={faMicrophone} className="w-4 h-4 text-white" />
    </button>
  );
}

async function sttFromMic(setTurn: any, setText: any) {
  const tokenObj = await getTokenOrRefresh();

  const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(
    tokenObj.authToken,
    tokenObj.region
  );
  speechConfig.speechRecognitionLanguage = "en-US";

  const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
  const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

  if (setTurn) setTurn("user-answer-microphone");
  else setText("Speak into your microphone...");

  recognizer.recognizeOnceAsync((result: any) => {
    let displayText;
    if (result.reason === ResultReason.RecognizedSpeech) {
      displayText = `${result.text}`;
    } else {
      displayText =
        "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.";
    }

    setText(displayText);
    if (setTurn) setTurn("user-answer");
  });
}
