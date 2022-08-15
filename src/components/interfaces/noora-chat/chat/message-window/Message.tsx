import React from "react";
import { clsx } from "clsx";

import SpeechSynthesizer from "../../../speech/SpeechSynthesizer";
import { messageToSpeechParams } from "../../../../../scripts/noora-chat/audio_utils";
import ExampleTurns from "./ExampleTurns";
import MessageStyleWrapper from "./MessageStyleWrapper";

export function MessageWrapper({ message, audioRef, convoState }: any) {
    if (!message.show)
        return <></>

    if (message.exampleTurns)
        return <ExampleTurns />

    return <li>
        {message && (
            <MessageStyleWrapper fromNoora={message.fromNoora}>
                <div className="flex flex-row items-center gap-x-2">
                    {message.text ? <Message message={message} /> : message.component}
                    {message.fromNoora && <SpeechButton audioRef={audioRef} convoState={convoState} message={message} />}
                </div>
            </MessageStyleWrapper>
        )}
    </li>
}

function Message({ message }: any) {
    if (message.statement)
        return (
            <div>
                <span>
                    <span className="font-bold text-noora-primary-dark">
                        &ldquo;{message.text}&rdquo;
                    </span>{" "}
                    When I say this, do I sound positive, neutral, or negative?
                </span>
            </div>
        );
    else if (message.suggestion)
        return (
            <div>
                <span>
                    A better reply might&apos;ve been:{" "}
                    <span className="font-bold text-noora-secondary-light">
                        &ldquo;{message.text}&rdquo;
                    </span>
                </span>
            </div>
        );
    else if (message.correction)
        return (
            <div>
                <span>
                    Actually, this is a{" "}
                    <span className="font-bold text-noora-secondary-light">
                        {message.text}
                    </span> statement.
                </span>
            </div>
        );
    return <div>{message.text}</div>;
}

function SpeechButton({ convoState, message, audioRef }: any) {
    const props = messageToSpeechParams(convoState, message, audioRef, null, null)

    return (<SpeechSynthesizer {...props}
        className={clsx("-mt-0.5 h-4 w-4 inline-block ", message.id == -3 ? "demo-audio" : "")} />
    )
}
