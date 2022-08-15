import React from "react"
import modules from "../../../../../data/modules"
import Message from "./Message"

export default function ExampleTurns({ convoState, audioRef, module }: any) {
    const moduleKey = module as keyof typeof modules
    const exampleMessages = [
        {
            id: 1,
            show: true,
            fromNoora: true,
            text: modules[moduleKey].example.statement,
            statement: true
        },
        {
            id: 2,
            show: true,
            fromNoora: false,
            text: modules[moduleKey].example.sentiment,
        },
        {
            id: 3,
            show: true,
            fromNoora: true,
            text: "That's right! How would you reply to me?",
        },
        {
            id: 4,
            show: true,
            fromNoora: false,
            text: modules[moduleKey].example.reply,
        },
        {
            id: 5,
            show: true,
            fromNoora: true,
            text: "Good reply! " + modules[moduleKey].example.explanation,
        },
    ]

    return <div className="pt-2 pb-2">
        <TextLine>EXAMPLE</TextLine>
        {exampleMessages.map((m: any) => (
            <Message message={m} convoState={convoState} audioRef={audioRef} key={m.id} />))}
        <TextLine>END OF EXAMPLE</TextLine>
    </div>
}

function TextLine({ children }: any) {
    return <div className="flex items-center py-3">
        <div className="flex-grow h-0.5 bg-slate-400" />
        <span className="flex-shrink text-lg text-noora-secondary-light px-4">
            {children}
        </span>
        <div className="flex-grow h-0.5 bg-slate-400" />
    </div>
}