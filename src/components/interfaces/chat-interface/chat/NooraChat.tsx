import React, { useEffect, useRef } from "react";
import MessageBox from "./MessageBox";
import Header from "./Header";
import Messages from "./Messages";

export default function NooraChat({
  convoState,
  history,
}: any) {
  useEffect(() => {
    const idxHidden = history.value.findIndex((m: any) => {
      return !m.show;
    });

    if (idxHidden == -1) return;
    let item = history.value[idxHidden]

    // show this if the previous message was from user
    const prevFromUser = !history.value[idxHidden - 1].fromNoora
    // console.log(history.value[idxHidden - 1], prevFromUser)

    const showItem = (id: string) => {
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
      setTimeout(() => { showItem(item.id) }, 2000)
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