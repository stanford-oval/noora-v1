import React, { useEffect, useState } from "react";
import { ReactMic } from "react-mic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import {
  SpeechRecognizer,
  ResultReason,
  SpeechConfig,
  AudioConfig,
} from "microsoft-cognitiveservices-speech-sdk";
const sdk = require("microsoft-cognitiveservices-speech-sdk");

const ReactMicrophone: React.FC<Props> = ({
  className,
  turn,
  setTurn,
  setText,
  currText,
  convoState,
}) => {
  
  return <ReactMic />;
};

export default ReactMicrophone;

type Props = {
  className: string;
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  currText: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  convoState: any;
};
