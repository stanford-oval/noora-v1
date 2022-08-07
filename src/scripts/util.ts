export function messageToSpeechParams(convoState: any, message: any, audioRef: any, history: any, hidden: any) {
    const preText = message.suggestion ? "A better reply might've been: " : ""
    const text = message.read ? message.read : message.text
    const postText = message.statement ? " Is this a positive, neutral, or negative statement?" : ""
    let style = "neutral"
    if (message.style)
        style = message.style
    else if (message.sentiment == "positive")
        style = "cheerful"
    else if (message.sentiment == "negative")
        style = "sad"

    return {
        text: text,
        preText: preText,
        postText: postText,
        style: style,
        id: message.id,
        styleDegree: style == "cheerful" ? 1.1 : 1.3,
        convoState: convoState,
        history: history,
        audioRef: audioRef,
        hidden: hidden,
    }
}

export function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
