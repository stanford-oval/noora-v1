<p align="center">
    <h1 align="center"><b>Noora</b></h1>
    <p align="center">Use AI to improve your social skills.</p>
    <p align="center">
    A platform utilizing conversational AI to improve the social skills of individuals with Autism Spectrum Disorder (ASD).
    </p>
    <p align="center" style="align: center;">
        <a href="https://stanford.edu" target="_blank">
            <img src="./public/img/logos/stanford/university.png" width="140px" alt="Stanford University" />
        </a>
    </p>
    <p align="center" style="align: center;">
        <a href="https://vercel.com/?utm_source=[stanford-oval]&utm_campaign=oss" target="_blank">
            <img src="./public/img/logos/vercel/powered-by.svg" width="120px" alt="Powered by Vercel" />
        </a>
    </p>
</p>

<hr />

## Overview

Noora is is a research project led by Prof. Monica Lam, from Stanford University, with the goal of improving the social skills of people with Autism Spectrum Disorder (ASD). The project is a collaboration between <a href="https://oval.cs.stanford.edu" target="_blank">Stanford's Open Virtual Assistant Lab</a> and <a href="https://profiles.stanford.edu/lynn-koegel" target="_blank">Dr. Lynn Koegel</a> from Stanford's Dept. of Psychiatry and Behavioral Sciences.

<!-- Dr. Koegel's intervention method, pivotal response training, has been shown to help individuals make friends, have romantic relationships, collaborate in the workplace, and engage in leisure activities. Because pivotal response training's applicability is restricted by the lack of trained professionals, Noora's goal is to automate the intervention, the success of which can have a great impact on society, as 1 in 54 children is currently diagnosed with ASD.  -->

This project built with Next.js, Tailwind CSS, OpenAI's GPT-3, and Microsoft Azure.

<a href="http://noora.stanford.edu" target="_blank"><img src="./public/img/other/preview.png" /></a>


## Developer Setup

To run Noora locally for development, install the dependencies from your package manager and start the Next.js app.

```bash
yarn install
yarn run dev
```

Create a `.env.local` file for the following environment variables. 

For the speech-to-text and text-to-speech functionality, create an Azure speech resource (and a corresponding resource group).

```
OPENAI_API_KEY=[your API key]
SPEECH_KEY=[your API key]
SPEECH_REGION=[your API key]
```

## Repo Structure

**`pages`**: all of the Next.js app's paths (e.g., `noora.tsx`, `_404.tsx`). These files simply return components, typically wrapped by the `<Page>` component.

**`components`**: the bulk of the website code. Folders under this directory reference the pages of the website, with the exception of `components/global` and `components/interfaces`.
- `components/interfaces` contains the code behind the Noora Chat feature and the Ask Noora feature.

**`data`**: all static or pre-written data, such as GPT-3 prompts, statement banks, routes.

**`scripts`**: code that is called by components.
- `get-reply.ts` contains the logic and flow for Noora's replies, and is used in `MessageBox.tsx` (where users submit their message in the Noora Chat). 

**`pages/api`**: the REST API endpoints. Rate limiting is in place for endpoints (implementation found in `scripts/rate-limit.ts`). 
- `api/openai` calls OpenAI's Completion endpoint and returns the resulting `text` and `logprobs`. 
- `api/get-speech-token.ts` retrieves an ephemeral authentication token for Microsoft Azure's speech service.

**`public`**: the public assets including images and static files.
