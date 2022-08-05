import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import {
  SpeechRecognizer,
  ResultReason,
  SpeechConfig,
  AudioConfig,
} from "microsoft-cognitiveservices-speech-sdk";
const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

import { getTokenOrRefresh } from "../../../scripts/token_util";

export default function Microphone({
  className,
  turn,
  setTurn,
  setText,
  currText,
}: any) {
  const [recog, setRecog] = useState<SpeechRecognizer>();

  // initialize recognizer
  useEffect(() => {
    if (recog) return;
    const init = async () => {
      setRecog(await initRecognizer());
    };
    init();
  }, []);

  const microphoneHandler = async (recognizer: any, mode: boolean) => {
    console.log("In Microphone handler");
    if (mode) await sttFromMic(turn, setTurn, setText, currText, recognizer);
    else stopSttFromMic(turn, setTurn, recog);
  };

  return (
    <button
      type="button"
      onMouseDown={(e: any) => {
        e.preventDefault();
        microphoneHandler(recog, true);
      }}
      onMouseUp={(e: any) => {
        console.log("released");
        e.preventDefault();
        microphoneHandler(recog, false);
      }}
      disabled={turn.includes("reads")}
      className={className}
    >
      <FontAwesomeIcon icon={faMicrophone} className="w-4 h-4 text-white" />
    </button>
  );
}

async function initRecognizer() {
  const tokenObj = await getTokenOrRefresh();

  const speechConfig = SpeechConfig.fromAuthorizationToken(
    tokenObj.authToken,
    tokenObj.region
  );
  speechConfig.speechRecognitionLanguage = "en-US";

  const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
  const recognizer: SpeechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);

  recognizer.recognizing = function (s, e) {
    var str = "(recognizing) Reason: " + ResultReason[e.result.reason] + " Text: " + e.result.text;
    console.log(str);
  };

  return recognizer;
}

async function sttFromMic(
  turn: string,
  setTurn: any,
  setText: any,
  currText: string,
  recognizer: SpeechRecognizer
) {
  if (turn.startsWith("user")) setTurn("user-answer-microphone");
  else return;

  recognizer.startContinuousRecognitionAsync();

  // (result: any) => {
  //   let transcribed;
  //   if (result.reason === ResultReason.RecognizedSpeech) {
  //     transcribed = `${result.text}`;
  //   } else return;

  //   setText(
  //     currText +
  //       (currText.length > 0 && !currText.endsWith(" ") ? " " : "") +
  //       transcribed
  //   );
  // }

  // recognizer.recognizeOnceAsync((result: any) => {
  //   setTurn(turn + "-edit");
  //   let transcribed;
  //   if (result.reason === ResultReason.RecognizedSpeech) {
  //     transcribed = `${result.text}`;
  //   } else return;

  //   setText(
  //     currText +
  //       (currText.length > 0 && !currText.endsWith(" ") ? " " : "") +
  //       transcribed
  //   );
  // });
}

async function stopSttFromMic(turn: any, setTurn: any, recognizer: any) {
  setTurn(turn + "-edit");
  recognizer.stopContinuousRecognitionAsync();
}
