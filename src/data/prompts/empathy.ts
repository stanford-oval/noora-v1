const empathyPrompts = {
  positive: `You said, \"I just finished a really good book!\"
  \r\n(1) I replied, \"thats great, im really happy for you and your love of reading\"
  \r\nFeedback: Good reply. Thank you for showing your happiness for me! I feel supported by you.
  \r\n(2) I replied, \"I wonder what the weather's like today.\"
  \r\nFeedback: Bad reply. This makes me feel ignored. Try talking about my good experience.
  \r\n(3) I replied, \"You're always reading, you need to get a life!\"
  \r\nFeedback: Bad reply. I feel hurt because I was hoping you would be happy for me instead of upset.
  \r\n(4) I replied, \"i cant find any good books im so jealous!\"
  \r\nFeedback: Good reply. Although you sound jealous, it makes me feel good about reading the book.
  \r\n(5) I replied, \"i actually finished two really good books\"
  \r\nFeedback: Bad reply. I feel like you are trying to compete with me instead of being happy for me. Perhaps you can ask me about my book.
  \r\n(6) I replied, \"aasdf\"
  \r\nFeedback: Bad reply. Hmm, this is not a reply.
  \r\n
  \r\nYou said, \"I just got a promotion!\"
  \r\n(1) I replied, \"congratulations youre officially a step closer to becoming a slave to the corporate machine\"
  \r\nFeedback: Bad reply. I know you want to make a joke, but I wish you would share my happiness for my achievement.
  \r\n(2) I replied, \"I wouldn't want to get promoted because I would just get more work.\"
  \r\nFeedback: Bad reply. Although we might have different opinions, I feel like you are making the conversation about yourself.
  \r\n(3) I replied, \"i can imagine how happy you must be\"
  \r\nFeedback: Good reply. You make me feel understood and add to my happiness.
  \r\n(4) I replied, \"are you going to be working more hours now\"
  \r\nFeedback: Good reply. Asking about my work is good because you express interest in what I say.
  \r\n(5) I replied, \"Wow, you must be really special.\"
  \r\nFeedback: Bad reply. This can make me feel upset because your response comes off as sarcastic.
  \r\n(6) I replied, \"why did your boss give you a promotion\"
  \r\nFeedback: Good reply. It's always good to ask me a question that's relevant to what I said to keep the conversation going.`,
  negative: `You said, \"My grandmother just passed away this morning.\"
  \r\n(1) I replied, \"im so sorry for your loss, i am here for you if you ever need anything\"
  \r\nFeedback: Good reply. Thank you for offering support in a time that I may need it.
  \r\n(2) I replied, \"What time is it?\"
  \r\nFeedback: Bad reply. I feel ignored and hurt because your reply doesn't have to do with my loss.
  \r\n(3) I replied, \"my grandma visits me every month\"
  \r\nFeedback: Bad reply. Let's try showing you care about my loss and feelings instead of bringing up your own grandma.
  \r\n(4) I replied, \"That sucks.\"
  \r\nFeedback: Bad reply. This reply makes me feel like you are uninterested. Maybe you can try asking me about how I'm holding up.
  \r\n(5) I replied, \"are you going to be okay im here if you ever want to talk about it\"
  \r\nFeedback: Good reply. Your reply shows you care about my emotional well being, and offers support.
  \r\n(6) I replied, \"aasdf\"
  \r\nFeedback: Bad reply. Hmm, this is not a reply.
  \r\n
  \r\nYou said, \"My boss is always getting mad at me.\"
  \r\n(1) I replied, \"why do you think that is\"
  \r\nFeedback: Good reply. Asking more about my situation can be very helpful and it shows that you care.
  \r\n(2) I replied, \"i understand what you're going through my boss used to get angry at me all the time\"
  \r\nFeedback: Good reply. You validate my feelings and show me you understand what I'm going through.
  \r\n(3) I replied, \"Well at least you even have a job. I wish I had one.\"
  \r\nFeedback: Bad reply. I know that not having a job can be hard for you, but let's try to acknowledge my difficulty first.
  \r\n(4) I replied, \"That's great! I'm happy for you!\"
  \r\nFeedback: Bad reply. My hardship isn't something to be happy about, so you should try asking me to learn more instead.
  \r\n(5) I replied, \"im glad to hear your boss is watching over you\"
  \r\nFeedback: Bad reply. I feel hurt because you are dismissive of my difficult situation.
  \r\n(6) I replied, \"why do you think your boss gets mad at you\"
  \r\nFeedback: Good reply. It's always good to ask me a question that's relevant to what I said to keep the conversation going.`,
  neutral: `You said, \"I am going to the grocery store.\"
  \r\n(1) I replied, \"ill go with you if you need any help\"
  \r\nFeedback: Good reply. Thanks for making me feel supported even for little things like going to the grocery store.
  \r\n(2) I replied, \"don't go to the grocery store!\"
  \r\nFeedback: Bad reply. Even if you don't want to go, you don't need to tell me not to.
  \r\n(3) I replied, \"great what are you going to buy\"
  \r\nFeedback: Good reply. You are excited for me and want to know what I'll buy.
  \r\n(4) I replied, \"i went to the grocery store two times already\"
  \r\nFeedback: Bad reply. This makes me feel like you are trying to compete with me. Instead, maybe try asking me why I'm going or what I'm buying.
  \r\n(5) I replied, \"great! i hope you find everything you need\"
  \r\nFeedback: Good reply. Your reply is happy and encouraging.
  \r\n(6) I replied, \"aasdf\"
  \r\nFeedback: Bad reply. Hmm, this is not a reply.
  \r\n
  \r\nYou said, \"This is my cubicle.\"
  \r\n(1) I replied, \"oh did you just move into this one\"
  \r\nFeedback: Good reply. Because you ask about my cubicle, I feel like you genuinely care about what I have to say.
  \r\n(2) I replied, \"it looks quite nice and cozy. did you decorate it\"
  \r\nFeedback: Good reply. Thank you for showing that you are interested in my cubicle and asking about it.
  \r\n(3) I replied, \"I miss my cubicle. I had one before too, but I got fired.\"
  \r\nFeedback: Bad reply. Being fired must've been hard for you, but let's acknowledge my cubicle before talking about yourself.
  \r\n(4) I replied, \"I wish I had a cubicle all to myself.\"
  \r\nFeedback: Bad reply. I understand your wish, but it seems like you're just making the conversation about yourself.
  \r\n(5) I replied, \"oh my god your cubicle, that everyone else also has, is so amazing and beautiful. breathtaking.\"
  \r\nFeedback: Bad reply. Although it may be intended as a lighthearted joke, the sarcasm is unexpected to my typical statement so it feels mean.
  \r\n(6) I replied, \"how long have you had a cubicle\"
  \r\nFeedback: Good reply. It's always good to ask me a question that's relevant to what I said to keep the conversation going.`,
};

export default empathyPrompts;
