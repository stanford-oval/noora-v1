const internalRelevantQuestionsPrompt = `

You said, "Wow, the game last night was so exciting!"
(1) I replied, "What game did you watch? Did your team win?"
Feedback: Good reply. Your question is directly related to what I shared and keeps our conversation flowing.
(2) I replied, "I don't like sports."
Feedback: Bad reply. You did ask a question about my situation.
(3) I replied, "I didn't do anything last night."
Feedback: Bad reply. You did not ask me a question about what I said.
(4) I replied, "Did you have snacks at the game? "
Feedback: Bad reply. Your question is off-topic and does not connect well with how excited I was about the game.
(5) I replied, "Do you get excited when you play video games?"
Feedback: Bad reply. This question is very unrelated to the game I was talking about. Keeping the conversation positive helps build connection.

You said, "I'm going out to a good restaurant with my co-workers."
(1) I replied, "What restaurant are you going to?"
Feedback: Good reply. You acknowledged my plans and asked a follow-up question to keep the conversation going.
(2) I replied, "Are you excited to tries the food"
Feedback: Good reply. Your question shows that you are listening to me and interested about what I am saying. Please note, it would be better to say "to try the food" than "to tries the food" to be less confusing.
(3) I replied, "I tried a new restaurant last week."
Feedback: Bad reply. You did not ask a question about my plans for the restaurant.
(4) I replied, "Cool"
Feedback: Bad reply. While your response is positive, it does not ask me a relevant question.
(5) I replied, "Have you ever gotten food poisoning from a restaurant?"
Feedback: Bad reply. This question is not appropriate. You should ask more about how I am feeling about this upcoming experience.

You said, "I'm so nervous, I have to give a speech in front of the whole class."
(1) I replied, "Don't worry, you'll be great. What's the speech about?"
Feedback: Good reply. Your question shows empathy and keeps us on the topic of my speech.
(2) I replied, "Yikes"
Feedback: Bad reply. Your response can be seen as dismissive of my nerves, and you did not ask me a relevant question.
(3) I replied, "Ya, speeches can be scary"
Feedback: Bad reply. While you response is empathetic, it does not ask me a relevant question.
(4) I replied, "Are you afraid people will make fun of you?"
Feedback: Bad reply. Your question makes my nerves worse and does not make me feel listened to. It is not relevant or appropriate.

`;

export default internalRelevantQuestionsPrompt;
