import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";
import { getTokenOrRefresh } from "../../../scripts/utils/token_util";
const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

export default function Microphone({
  className,
  turn,
  setTurn,
  setText,
  currText,
  convoState,
}: any) {
  const [recog, setRecog] = useState<SpeechRecognizer>();
  const [tempDisable, setTempDisable] = useState(false);

  useEffect(() => {
    if (tempDisable) {
      setTimeout(() => {
        setTempDisable(false);
      }, 1000);
    }
  }, [tempDisable]);

  // initialize recognizer
  // useEffect(() => {
  //   if (recog) return;
  //   const init = async () => {
  //     setRecog(await initRecognizer());
  //   };
  //   init();
  // }, []);

  const microphoneHandler = async (recog: any, mode: boolean) => {
    if (mode) await sttFromMic(turn, setTurn, setText, currText, recog);
    else stopSttFromMic(turn, setTurn, currText, setText, recog);
  };

  return (
    <button
      type="button"
      onMouseDown={(e: any) => {
        e.preventDefault();
        // stop audio
        if (convoState.value.audio.player) {
          convoState.value.audio.player.pause();
          convoState.value.audio.player.close();
        }
        const initStart = async () => {
          if (recog) {
            recog.stopContinuousRecognitionAsync();
          }
          let newRecog = await initRecognizer();
          sttFromMic(turn, setTurn, setText, currText, newRecog);
          await setRecog(newRecog);
        };
        initStart();
      }}
      onMouseUp={(e: any) => {
        e.preventDefault();
        microphoneHandler(recog, false);
        setTempDisable(true);
      }}
      disabled={
        turn.includes("read") || turn.includes("rate-reply") || tempDisable
      }
      className={className}
    >
      <FontAwesomeIcon icon={faMicrophone} className="w-4 h-4 text-white" />
    </button>
    // <>
    //   <button
    //     type="button"
    //     onMouseDown={(e: any) => {
    //       if (recog) {
    //         try {
    //           recog.stopContinuousRecognitionAsync();
    //         } catch (error) {
              
    //         }
    //       }
    //       const initStart = async () => {
    //         let recog = await initRecognizer();
    //         sttFromMic(turn, setTurn, setText, currText, recog);
    //         await setRecog(recog);
    //       };
    //       initStart();
    //     }}
    //     className={className}
    //   >
    //     <FontAwesomeIcon icon={faMicrophone} className="w-4 h-4 text-white" />
    //   </button>
    //   <button
    //     type="button"
    //     onMouseDown={(e: any) => {
    //       stopSttFromMic(turn, setTurn, currText, setText, recog as SpeechRecognizer);
    //     }}
    //     className={className}
    //   >
    //     Stop
    //   </button>
    // </>
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
  // const audioConfig = AudioConfig.fromMicrophoneInput();
  const recognizer: SpeechRecognizer = new SpeechRecognizer(
    speechConfig,
    audioConfig
  );

  console.log(`Init`);
  console.log(recognizer);
  return recognizer;
}

async function sttFromMic(
  turn: string,
  setTurn: any,
  setText: any,
  currText: string,
  recognizer: SpeechRecognizer
) {
  console.log(`STT`);
  console.log(recognizer);
  if (turn.startsWith("user")) setTurn("user-answer-microphone");
  else return;

  recognizer.startContinuousRecognitionAsync();
  let recogText = "";

  // text logic
  recognizer.recognized = function (s, e) {
    if (e.result.reason == sdk.ResultReason.NoMatch) {
    } else {
      let text = e.result.text;
      if (recogText == "") {
        recogText = text;
      } else {
        if (text != "") {
          recogText += " " + text;
        } else {
          recogText = text;
        }
      }
      console.log(
        "\r\n(recognized)  Reason: " +
          sdk.ResultReason[e.result.reason] +
          " Text: " +
          e.result.text
      );
    }

    setText(currText + (currText == "" ? "" : " ") + recogText);
  };
}

async function stopSttFromMic(
  turn: any,
  setTurn: any,
  currText: string,
  setText: any,
  recognizer: SpeechRecognizer
) {
  await setTimeout(() => {
    console.log("Stopping");
    console.log(recognizer);
    setTurn("user-answer-edit");
    recognizer.stopContinuousRecognitionAsync();
  }, 500);
}
