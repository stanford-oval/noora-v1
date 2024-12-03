const relevantQuestionsPrompt = `You said, "I had the best time with my friend yesterday, we watched movies and ordered pizza."
\r\n(1) I replied, "Wow, that sounds fun! What movies did you watch?"
\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(2) I replied, "Cool! What kind of pizza did you get?"
\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(3) I replied, "I love pizza and movie nights. Where did you order the pizza from?"
\r\nFeedback:Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(4) I replied, "Oh. How old is your friend?"
\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.
\r\n(5) I replied, "I didn’t do anything yesterday. Why did you?"
\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation. It is also rude and doesn't feel supportive.
\r\n(6) I replied, "Where does your friend live?"
\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation. It is also unnecessary for you to know this information.
\r\n
\r\nYou said, "It’s a nice warm day today, I think I’m going to go to the beach."
\r\n(1) I replied, "Yes, the weather is great. What beach are you planning to go to?"
\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(2) I replied, "What do you usually like to do at the beach?"
\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(3) I replied, "It is. Do you like to go in the ocean when it’s this warm?"
\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(4) I replied, "Did you know that every year, 140 million babies are born?"
\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.
\r\n(5) I replied, "It's always warm this time of year. In fact, did you know that the average temperature this month is 80 degrees and sometimes we have a high of 95 degrees."\r\nFeedback: Bad reply. Your question is pedantic and not related to the main point of our conversation.
\r\n(6) I replied, "When was the first time you went to the beach?"
\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation and doesn't really make sense.
\r\n
\r\nYou said, "It was so stressful getting home from my trip, my flights kept getting delayed."
\r\n(1) I replied, "Oh no, I’m so sorry! What time did you end up getting home?"
\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(2) I replied, "Traveling can be stressful. Were you able to relax once you got home?"
\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(3) I replied, "Did you miss any connections?"
\r\nFeedback: Good reply. Your response includes a relevant question that keeps our conversation going.
\r\n(4) I replied, "Wow, that sounds fun! What movies did you watch on the plane?"
\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.
\r\n(5) I replied, "What was the name of your hotel?"
\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation and also isn't emotionally supportive.
\r\n(6) I replied, "Have you ever been to Hawaii?"
\r\nFeedback: Bad reply. Your question is not related to the main point of our conversation.`;

export default relevantQuestionsPrompt;
