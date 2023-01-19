import React from "react";
import MessageWrapper from "./MessageWrapper";

export default function Message({ message, audioRef, convoState }: any) {
    if (!message.show)
        return <></>

    return <li>
        {message && (
            <MessageWrapper message={message} convoState={convoState} audioRef={audioRef}>
                {message.text ? <MessageText message={message} /> : message.component}
            </MessageWrapper>
        )}
    </li>
}

function MessageText({ message }: any) {
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