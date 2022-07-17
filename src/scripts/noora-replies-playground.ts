export default function generateResult(statement: string) {
  return {
    statement: statement,
    replies: {
      reply: "example",
      category: "example category",
      good_answer: true,
    },
  };
}

// type ResultsType = {
//   statement: string;
//   replies?: ReplyType[];
// };

type ReplyType = {
  reply: string;
  category: string;
  good_answer: boolean;
};
