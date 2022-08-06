import React, { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import Header from "./Header";
import Messages from "./Messages";
import { messageToSpeechParams } from "../../../../scripts/util";
import { textToSpeech } from "../../../global/utility/SpeechSynthesizer";

export default function NooraChat({
  convoState,
  history,
}: any) {
  let currentAudioRef = useRef()

  currentAudioRef.current = convoState.value.currentAudio

  useEffect(() => {
    if (convoState.value.autoPlaying)
      return;

    let idxHidden = history.value.findIndex((m: any) => !m.show);

    if (idxHidden == -1) {
      convoState.setValue((cs: any) => ({ ...cs, turn: convoState.value.turn.split("-noora-reads")[0] }))
      return;
    }

    let item = history.value[idxHidden]

    const prevFromUser = !history.value[idxHidden - 1].fromNoora

    if (prevFromUser) {
      let hidden = history.value.filter((m: any) => !m.show);
      const props = messageToSpeechParams(convoState, item, currentAudioRef, history, hidden)
      textToSpeech(props)

      history.setValue((h: any) => {
        return h.map((m: any) => {
          if (m.id == item.id)
            return { ...item, show: true }
          else
            return m
        })
      })
      convoState.setValue((cs: any) => ({ ...cs, autoPlaying: true }))
    }

  }, [history.value])

  return (
    <div>
      <Header />
      <Messages history={history} convoState={convoState} />
      <MessageBox
        history={history}
        convoState={convoState}
      />
    </div>
  );
}