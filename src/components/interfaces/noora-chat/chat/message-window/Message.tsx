import React from "react";
import ExampleTurns from "./ExampleTurns";
import MessageStyleWrapper from "./MessageStyleWrapper";

export function MessageWrapper({ message, audioRef, convoState }: any) {
    if (!message.show)
        return <></>

    if (message.exampleTurns)
        return <ExampleTurns />

    return <li>
        {message && (
            <MessageStyleWrapper message={message} convoState={convoState} audioRef={audioRef}>
                {message.text ? <Message message={message} /> : message.component}
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