import React, { useEffect, useRef, useState } from "react";
import MessageBox from "./message-box/MessageBox";
import Header from "./Header";
import Messages from "./message-window/Messages";
import { messageToSpeechParams } from "../../../../scripts/noora-chat/audio_utils";
import { textToSpeech } from "../../speech/SpeechSynthesizer";

export default function NooraChat({
  convoState,
  history,
}: any) {
  let audioRef = useRef()

  audioRef.current = convoState.value.audio

  // console.log("I'm here rn.");


  useEffect(() => {

    return () => {
      // on component unmount
      const player = (audioRef.current as any).player as any
      if (player) {
        player.pause()
        player.close()
      }
    }
  }, [])

  useEffect(() => {
    if (!convoState.value.audio.shouldAutoPlay) {
      convoState.setValue((cs: any) => ({ ...cs, turn: convoState.value.turn.split("-noora-reads")[0], audio: { ...cs.audio, autoPlaying: false } }))
      // stop audio
      if (convoState.value.audio.player && convoState.value.audio.autoPlaying) {
        convoState.value.audio.player.pause()
        convoState.value.audio.player.close()
      }
      let idxHidden = history.value.findIndex((m: any) => !m.show);

      if (idxHidden == -1)
        return;

      let item = history.value[idxHidden]

      history.setValue((h: any) => {
        return h.map((m: any) => {
          if (m.id == item.id)
            return { ...item, show: true }
          else
            return m
        })
      })

      return;
    }

    if (convoState.value.audio.autoPlaying)
      return;

    let idxHidden = history.value.findIndex((m: any) => !m.show);

    if (idxHidden == -1) {
      convoState.setValue((cs: any) => ({ ...cs, turn: convoState.value.turn.split("-noora-reads")[0] }))
      return;
    }

    convoState.setValue((cs: any) => ({ ...cs, turn: convoState.value.turn.split("-noora-reads")[0] + "-noora-reads" }))

    let item = history.value[idxHidden]

    const prevFromUser = !history.value[idxHidden - 1].fromNoora

    if (prevFromUser) {
      let hidden = history.value.filter((m: any) => !m.show);
      const props = messageToSpeechParams(convoState, item, audioRef, history, hidden)
      textToSpeech(props)

      history.setValue((h: any) => {
        return h.map((m: any) => {
          if (m.id == item.id)
            return { ...item, show: true }
          else
            return m
        })
      })
      convoState.setValue((cs: any) => ({ ...cs, audio: { ...cs.audio, autoPlaying: true } }))
    }

  }, [history.value, convoState.value.audio.shouldAutoPlay])

  let activeModules = convoState.value.modules.filter((m: any) => m.active);

  return (
    <div>
      <Header />
      <Messages history={history} convoState={convoState} currModule={activeModules[0].title} />
      <MessageBox
        history={history}
        convoState={convoState}
      />
    </div>
  );
}
