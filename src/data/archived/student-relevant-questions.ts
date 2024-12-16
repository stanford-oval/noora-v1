const relevantQuestionsPrompt = `

You said, "I had the best time with my friend yesterday, we watched movies and ordered pizza."
(1) I replied, "Wow, that sounds fun! What movies did you watch?"
Feedback: Good reply. Your question is directly related to what I shared and keeps our conversation flowing.
(2) I replied, "Cool! What kind of pizza did you get?"
Feedback: Good reply. You stayed on topic and asked about something I mentioned, which keeps the interaction engaging.
(3) I replied, "I love pizza and movie nights. Where did you order the pizza from?"
Feedback: Good reply. You added a personal touch about pizza nights and kept the question relevant.
(4) I replied, "Oh. How old is your friend?"
Feedback: Bad reply. Off-topic. This question doesn’t connect well with the main focus of our conversation and feels out of place.
(5) I replied, "I didn’t do anything yesterday. Why did you?"
Feedback: Bad reply. This question is off-topic and could feel dismissive. Keeping the conversation positive helps build connection.
(6) I replied, "Where does your friend live?"
Feedback:  Bad reply. Irrelevant question. This detail isn’t necessary for the conversation and takes focus away from what I shared.

You said, "It’s a nice warm day today, I think I’m going to go to the beach."
(1) I replied, "Yes, the weather is great. What beach are you planning to go to?"
Feedback: Good reply. You acknowledged the weather and asked a related question that keeps us talking.
(2) I replied, "What do you usually like to do at the beach?"
Feedback: Good reply. This helps me share more about my plans and keeps the conversation moving naturally.
(3) I replied, "It is. Do you like to go in the ocean when it’s this warm?"
Feedback: Good reply. This is a fun, related question that invites more conversation.
(4) I replied, "Did you know that every year, 140 million babies are born?"
Feedback: Bad reply. Off-topic. This fact is unrelated and doesn’t fit with the conversation’s theme.
(5) I replied, "It's always warm this time of year. In fact, did you know that the average temperature this month is 80 degrees?"
Feedback: Bad reply. This response is overly factual and doesn’t add to our conversation. Staying personal and light is more engaging.
(6) I replied, "When was the first time you went to the beach?"
Feedback: Bad reply. Off-topic. This doesn’t follow the flow of the conversation and can feel random.

You said, "It was so stressful getting home from my trip, my flights kept getting delayed."
(1) I replied, "Oh no, I’m so sorry! What time did you end up getting home?"
Feedback: Good reply. Your question shows empathy and keeps us on the topic of travel delays.
(2) I replied, "Traveling can be stressful. Were you able to relax once you got home?"
Feedback: Good reply. You’re empathizing and showing interest in how I felt afterward, which builds connection.
(3) I replied, "Did you miss any connections?"
Feedback: Good reply. Relevant question! You’re keeping the conversation focused on my trip and potential delays.
(4) I replied, "Wow, that sounds fun! What movies did you watch on the plane?"
Feedback: Bad reply. Off-topic. This question doesn’t match my experience and feels out of context.
(5) I replied, "What was the name of your hotel?"
Feedback: Bad reply. Off-topic and lacks empathy. A question focused on my experience would be more supportive here.
(6) I replied, "Have you ever been to Hawaii?"
Feedback: Bad reply. This doesn’t connect with what I shared and can feel random or confusing.

`;

export default relevantQuestionsPrompt;
