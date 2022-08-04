function getSpeechSSMLStr(text: any, style?: string, styleDegree?: number,) {
    style = style ? style : "neutral"
    styleDegree = styleDegree ? styleDegree : 1.5

    return `<speak version="1.0" xmlns="http:\/\/www.w3.org\/2001\/10\/synthesis"\r\n       xmlns:mstts="https:\/\/www.w3.org\/2001\/mstts" xml:lang="en-US">\r\n    <voice name="en-US-JennyNeural">\r\n        <mstts:express-as style="${style}" styledegree="${styleDegree.toString()}">\r\n            ${text}\r\n        <\/mstts:express-as>\r\n    <\/voice>\r\n<\/speak>`
}

export default getSpeechSSMLStr;