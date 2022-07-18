export default function generateResult(statement: string) {
  return {
    statement: statement,
    replies: [
      {
        reply: "example",
        category: "example category",
        good_answer: true,
      },
    ],
  };
}
