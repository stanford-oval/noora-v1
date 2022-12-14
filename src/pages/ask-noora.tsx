// import React from "react";
// import AskNoora from "../components/ask-noora/AskNoora";
// import Page from "../components/global/utility/Page";
// import fs from "fs";
//
// function asknoora() {
//     return (
//         <Page
//             title="Ask Noora"
//             desc="How would Noora reply? Noora is a conversational AI to improve the social conversation of individuals with ASD."
//         >
//             <AskNoora />
//         </Page>
//     );
// }
//
// console.log("TESTING");
// asknoora.getInitialProps = async (ctx) => {
//
// };
//
// export default asknoora;

import React from "react";
import AskNoora from "../components/ask-noora/AskNoora";
import Page from "../components/global/utility/Page";

export default function asknoora() {
    return (
        <Page
            title="Ask Noora"
            desc="How would Noora reply? Noora is a conversational AI to improve the social conversation of individuals with ASD."
        >
            <AskNoora />
        </Page>
    );
}
