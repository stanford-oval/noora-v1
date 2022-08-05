import React, { useEffect, useRef } from "react";
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
    const idxHidden = history.value.findIndex((m: any) => {
      return !m.show;
    });

    if (idxHidden == -1) {
      return;
    }

    let item = history.value[idxHidden]

    // show this if the previous message was from user
    const prevFromUser = !history.value[idxHidden - 1].fromNoora
    console.log(history.value[idxHidden - 1], prevFromUser)

    const showItem = (id: string) => {
      const props = messageToSpeechParams(convoState, item, currentAudioRef)
      console.log(JSON.parse(JSON.stringify(props)))
      textToSpeech(props)

      history.setValue((h: any) => {
        return h.map((m: any) => {
          if (m.id == id)
            return { ...item, show: true }
          else
            return m
        })
      })
    }

    if (prevFromUser) {
      showItem(item.id)
    } else {
      // otherwise show it AFTER waiting for speaking to finish
      setTimeout(() => {
        const duration = currentAudioRef.current ? (currentAudioRef.current as any).duration / 10000 : 5000
        setTimeout(() => { showItem(item.id) }, duration - 500)
      }, 1000)
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