import React, { useEffect, useRef } from "react";
import MessageBox from "./MessageBox";
import Header from "./Header";
import Messages from "./Messages";
import { v4 as uuidv4 } from "uuid"

export default function NooraChat({
  convoState,
  history,
}: any) {
  useEffect(() => {
    const unshownHistoryElements = history.value.filter((m: any) => !m.show)
    console.log(unshownHistoryElements.length)
    for (const idx in unshownHistoryElements) {
      let item = unshownHistoryElements[idx]


      history.setValue((h: any) => {
        return h.map((m: any) => {
          if (m.id == item.id)
            return { ...item, show: true }
          else
            return m
        })
      })
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
