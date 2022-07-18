import Completion from "./Completion";

import categoryPrompts from "../data/prompts/category-specific";
import generateDataPrompt from "../data/prompts/generate-data";

const temp = 0.9;
const freqPenalty = 0.5;
const presPenalty = 0.25;

export default async function generateResult(statement: string) {
  // 1. generate intermediate examples
  let intermediates = await generateIntermediateExamples(statement);
  intermediates.forEach((intermediate, idx) => {
    intermediates[idx] = `(${idx + 1}) ` + intermediate;
  });
  // 2. construct final prompt
  let prompt = generateDataPrompt.replace(
    "{intermediate_examples_formatted}",
    intermediates.join("\r\n")
  );
  // 3. call GPT-3
  let reply = await Completion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: temp,
    max_tokens: 1000,
    frequency_penalty: freqPenalty,
    presence_penalty: presPenalty,
  });
  // 4. parse examples
  let responses: any[] = [];
  reply.split("\n").forEach((r: string) => {
    let example = {};
    try {
      example = parseExStr(statement, r);
      responses.push(example);
    } catch (err) {
      console.error(err);
    }
  });

  // 5. return data
  return {
    statement: statement,
    replies: responses,
  };
}

export async function generateIntermediateExamples(statement: string) {
  // 1. randomly pick categories
  let index1 = Math.floor(Math.random() * categoryPrompts.length);
  let index2 = index1;
  while (index2 == index1)
    index2 = Math.floor(Math.random() * categoryPrompts.length);
  let categories = [categoryPrompts[index1], categoryPrompts[index2]];

  let intermediateExamples = ["", ""];
  // 2. create few-shot examples for the final prompt
  for (const [idx, c] of categories.entries()) {
    let intermediate = await getIntermediate(statement, c.category, c.prompt);
    intermediateExamples[idx] = intermediate;
  }

  return intermediateExamples;
}

async function getIntermediate(
  statement: string,
  category: string,
  template: string
) {
  let prompt = template.replace("{s}", statement);

  let intermediate = "";
  let reply = "";
  while (true) {
    reply = await Completion({
      model: "text-davinci-002",
      prompt: prompt,
      temperature: temp,
      max_tokens: 200,
      frequency_penalty: freqPenalty,
      presence_penalty: presPenalty,
    });

    if (isProperFormat(reply, true)) break;
    else
      console.log(
        "Regenerating intermediate response because format is incorrect."
      );
  }

  intermediate = capitalizeFirst(category) + ": " + capitalizeFirst(reply);
  return intermediate;
}

export function isProperFormat(exStr: string, strict: boolean) {
  // strict is for generating intermediate examples
  // intermediate examples are the few-shot examples for the final generation prompt, so must follow one format
  let dialoguePhrase = null;
  let acceptablePhrases = strict
    ? ["So you reply,"]
    : [
        "So you reply,",
        ", so you reply,",
        "so you reply",
        "So you reply",
        ", so you say,",
        "so you say,",
        "So you say,",
        ", and you reply,",
        "and you reply,",
        "So youreply,",
        "You reply,",
        "You reply with,",
      ];
  acceptablePhrases.every((dialogueStr) => {
    if (exStr.includes(dialogueStr)) {
      dialoguePhrase = dialogueStr;
      return false;
    }
    return true;
  });

  if (!dialoguePhrase) {
    console.log(
      "Generated example does not contain proper dialogue phrase:\n" + exStr
    );
    return false;
  }

  let ratingStr = null;
  let rating = "";
  acceptablePhrases = strict
    ? ["Good answer."]
    : [
        "Good answer.",
        "Good answer!",
        "Good answer;",
        "This is a good reply because",
        "This is a good answer because",
        "This is a good answer.",
      ];
  acceptablePhrases.every((positiveRatingStr) => {
    if (exStr.includes(positiveRatingStr)) {
      ratingStr = positiveRatingStr;
      rating = "Good answer.";
      return false;
    }
    return true;
  });

  acceptablePhrases = strict
    ? ["Bad answer."]
    : [
        "Bad answer.",
        "Bad answer;",
        "Bad answer!",
        "Wrong answer.",
        "Not a good answer.",
        "This is a bad reply because",
        "This is a bad answer because",
        "This is a bad answer.",
      ];
  acceptablePhrases.every((negativeRatingStr) => {
    if (exStr.includes(negativeRatingStr)) {
      ratingStr = negativeRatingStr;
      rating = "Bad answer.";
      return false;
    }
    return true;
  });

  if (!ratingStr) {
    console.log(
      "Generated example does not contain a proper answer rating:\n" + exStr
    );
    return false;
  }

  let ratingIdx = exStr.indexOf(ratingStr);
  let explanation = exStr.slice(ratingIdx + rating.length, exStr.length).trim();
  if (explanation === "") {
    console.log(
      "Generated example does not contain an explanation for the reply rating:\n" +
        exStr
    );
    return false;
  }

  return {
    proper_format: true,
    dialoguePhrase: dialoguePhrase,
    rating: rating,
    ratingStr: ratingStr,
  };
}

export function parseExStr(statement: string, exStr: string) {
  let example = {
    statement: statement,
    category: "",
    reasoning: "",
    reply: "",
    rating: "",
    explanation: "",
  };

  let formatCheck = isProperFormat(exStr, false);

  if (!formatCheck) return {};

  // parse into [category, reasoning, reply, rating, explanation]
  // 1. category
  // "(n) category here: ..." -> .split(':')[0] -> "(n) category here" -> .split(')')[1] -> "category here"
  example["category"] = exStr.split(":")[0].split(")")[1].trim().toLowerCase();

  // 2. reasoning: before the dialogue phrase but after the :
  example["reasoning"] = capitalizeFirst(
    exStr.split(formatCheck["dialoguePhrase"])[0].split(":")[1].trim()
  );
  // punctuate reasoning
  if (example["reasoning"][example["reasoning"].length - 1] != ".")
    example["reasoning"] += ".";
  // 3. reply: after dialogue phrase but before rating
  example["reply"] = exStr
    .split(formatCheck["dialoguePhrase"])[1]
    .split(formatCheck["ratingStr"])[0]
    .trim();
  // 4. rating
  example["rating"] = formatCheck["rating"];
  // 5. explanation: after ratingStr
  example["explanation"] = capitalizeFirst(
    exStr.split(formatCheck["ratingStr"])[1].trim()
  );

  return example;
}

function capitalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
