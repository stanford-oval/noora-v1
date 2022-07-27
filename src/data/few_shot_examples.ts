const examples = {
  negative: {
    general: {
      angry: {
        explanation:
          "I know it's an upsetting situation, but I wish you would be nicer and more supportive.",
        rating: "bad",
        reply: "Big deal! What makes you think I even care.",
      },
      awkward: {
        explanation:
          "I would feel better if you asked about how I am doing or if you showed that you genuinely care.",
        rating: "bad",
        reply: "Oh... that's unfortunate? I think?",
      },
      cheerful: {
        explanation:
          "Although you are attempting to make things positive, I think your cheerful response to my tragic experience is misplaced.",
        rating: "bad",
        reply: "This is amazing news! I am so happy for you.",
      },
      concerned: {
        explanation:
          "Your reply shows you care about my emotional well being, and offers support.",
        rating: "good",
        reply:
          "Are you going to be okay? I'm here if you ever want to talk about it. ",
      },
      curious: {
        explanation:
          "This shows me you care about my emotions and want to talk about my loss.",
        rating: "good",
        reply: "Are you doing okay? How did you find out?",
      },
      disinterested: {
        explanation:
          "This reply makes me feel like you are uninterested. Maybe you can try asking me about how I'm holding up.",
        rating: "bad",
        reply: "That sucks.",
      },
      distracted: {
        explanation:
          "I feel ignored and hurt because your reply doesn't have to do with my loss.",
        rating: "bad",
        reply: "What time is it?",
      },
      empathetic: {
        explanation:
          "Thank you for showing me you understand my pain. It can make me feel better.",
        rating: "good",
        reply:
          "I understand what you are going through. I know how it feels to lose a loved one.",
      },
      encouraging: {
        explanation:
          "I feel better because of your thoughtful reply. Thank you for comforting me and assuring me things will get better.",
        rating: "good",
        reply:
          "This must be so hard for you, just know everything will be okay. ",
      },
      excited: {
        explanation:
          "Although you might have wanted to cheer me up, I feel hurt because this reply is dismissive.",
        rating: "bad",
        reply: "That's great! She is in a better place now.",
      },
      happy: {
        explanation:
          "I feel like my hardship is being dismissed. Consider asking about my feelings.",
        rating: "bad",
        reply: "That's great to hear! You must be very happy.",
      },
      humorous: {
        explanation:
          "I feel like you are dismissing my hardship. Instead, you can me about how I am feeling to show that you care.",
        rating: "bad",
        reply: "That's why we get two.",
      },
      inquiring: {
        explanation:
          "It's always good to ask me a question thats relevant to what I said to keep the conversation going.",
        rating: "good",
        reply: "How did your grandmother die?",
      },
      interested: {
        explanation:
          "You appropriately show interest in my loss and I feel that you care.",
        rating: "good",
        reply: "That's terrible to hear, was she sick?",
      },
      intrigued: {
        explanation:
          "Because you ask about my wellbeing, I feel like can turn to you at any time.",
        rating: "good",
        reply: "How did she die? Will you be okay?",
      },
      jealous: {
        explanation:
          "You might be jealous about that, but I would feel better if you could be supportive to me during this difficult situation.",
        rating: "bad",
        reply: "You are so lucky to have even have known your grandma.",
      },
      "one-upping": {
        explanation:
          "This makes me feel like you are trying to one-up me. Maybe ask about my wellbeing instead.",
        rating: "bad",
        reply:
          "That's unfortunate, I actually lost both my grandmothers this year.",
      },
      sad: {
        explanation:
          "It's comforting for me to know you understand the sadness of my loss and to hear your words of support.",
        rating: "good",
        reply: "That makes me so sad to hear.",
      },
      sarcastic: {
        explanation:
          "I feel hurt because now is not a time to be sarcastic. You could express sympathy instead.",
        rating: "bad",
        reply: "I hope she feels better.",
      },
      "self-centered": {
        explanation:
          "Let's try showing you care about my loss and feelings instead of bringing up your own grandma.",
        rating: "bad",
        reply: "My grandma visits me every month.",
      },
      statement: "My grandmother just passed away this morning.",
      supportive: {
        explanation:
          "Thank you for offering support in a time that I may need it.",
        rating: "good",
        reply:
          "I am so sorry for your loss, I am here for you if you ever need anything.",
      },
      sympathetic: {
        explanation:
          "Thank you for sharing my feelings of sorrow and showing me you care about my wellbeing.",
        rating: "good",
        reply:
          "I am so sorry, I can't imagine how you must be feeling right now.",
      },
    },
    work: {
      angry: {
        explanation:
          "Even though you are saying something negative, you are sharing my anger which validates my feelings.",
        rating: "good",
        reply: "I know right? He's such a jerk!",
      },
      awkward: {
        explanation:
          "You may not know what to say, but you can always ask me a question about my struggle to show you care.",
        rating: "bad",
        reply: "Oh\u2026 sorry?",
      },
      cheerful: {
        explanation:
          "My hardship isn't something to be happy about, so you should try asking me to learn more instead.",
        rating: "bad",
        reply: "That's great! I'm happy for you!",
      },
      concerned: {
        explanation:
          "You care about my wellbeing and also ask how I am feeling.",
        rating: "good",
        reply: "Why would he do that to you? Are you okay?",
      },
      curious: {
        explanation:
          "Asking more about my situation can be very helpful and it shows that you care.",
        rating: "good",
        reply: "Why do you think that is?",
      },
      disinterested: {
        explanation: "This reply makes me feel like you don't care.",
        rating: "bad",
        reply: "Okay.",
      },
      distracted: {
        explanation:
          "I feel like I'm being ignored because your reply is off-topic.",
        rating: "bad",
        reply: "What day of the month is it?",
      },
      empathetic: {
        explanation:
          "You validate my feelings and show me you understand what I'm going through.",
        rating: "good",
        reply:
          "I understand what you're going through, my boss used to get angry at me all the time. ",
      },
      encouraging: {
        explanation:
          "Your reply properly makes the subject more positive by comforting me and assuring me that the situation will better itself. ",
        rating: "good",
        reply: "I'm sure he'll soon understand your worth. ",
      },
      excited: {
        explanation:
          "Although you may be trying to be positive, this makes me feel more upset because there's nothing great about my situation.",
        rating: "bad",
        reply: "That's great to hear! Aren't you excited?",
      },
      happy: {
        explanation:
          "I feel hurt because you are dismissive of my difficult situation.",
        rating: "bad",
        reply: "I'm glad to hear your boss is watching over you!",
      },
      humorous: {
        explanation:
          "Your lighthearted joke about how the boss always gets angry makes me feel supported.",
        rating: "good",
        reply: "What's new? He's always like that.",
      },
      inquiring: {
        explanation:
          "It's always good to ask me a question thats relevant to what I said to keep the conversation going.",
        rating: "good",
        reply: "Why do you think your boss gets mad at you?",
      },
      interested: {
        explanation:
          "Although asking about details can be inappropriate, you show that you care for me and offer a potential solution.",
        rating: "good",
        reply: "What for? Have you tried talking to him about it?",
      },
      intrigued: {
        explanation:
          "Thank you for being supportive by offering to help talk about the root of  my issue.",
        rating: "good",
        reply: "Hm, do you know why your boss is getting mad at you?",
      },
      jealous: {
        explanation:
          "I know that not having a job can be hard for you, but let's try to acknowledge my difficulty first.",
        rating: "bad",
        reply: "Well at least you even have a job. I wish I had one.",
      },
      "one-upping": {
        explanation:
          "I feel worse about my boss being mad at me because you tell me that you never feel the same way. ",
        rating: "bad",
        reply: "My boss has never been mad at me.",
      },
      sad: {
        explanation:
          "I feel understood because you share a similar experience that validates my feelings.",
        rating: "good",
        reply: "I can attest to that. He's so mean.",
      },
      sarcastic: {
        explanation:
          "This makes me feel hurt. I don't think sarcasm is appropriate here.",
        rating: "bad",
        reply: "I wonder why.",
      },
      "self-centered": {
        explanation:
          "This doesn't make me feel any better about my hardship. You could try using your similar experience to express empathy.",
        rating: "bad",
        reply: "I hate it when my boss gets angry at me. ",
      },
      statement: "My boss is always getting mad at me.",
      supportive: {
        explanation: "You make me feel comforted and understood.",
        rating: "good",
        reply:
          "Don't worry, I'm sure it's not your fault. I'm here for you if you need me.",
      },
      sympathetic: {
        explanation: "Your response shows you care and are sympathetic. ",
        rating: "good",
        reply: "I'm sorry to hear that, it must be difficult.",
      },
    },
  },
  neutral: {
    general: {
      angry: {
        explanation:
          "Even if you don't want to go, you don't need to tell me not to.",
        rating: "bad",
        reply: "Don't go to the grocery store!",
      },
      awkward: {
        explanation:
          "It is a little awkward, but I can feel that you care and are interested in why I'm going to the store.",
        rating: "good",
        reply: "Uh okay. Are you out of food?",
      },
      cheerful: {
        explanation:
          "You are being positive and this reply can make me feel happy before leaving to the store.",
        rating: "good",
        reply: "Okay! Have fun!!",
      },
      concerned: {
        explanation:
          "Your question shows that you are interested in what I am talking about.",
        rating: "good",
        reply:
          "Why do you want to go to the grocery store? You can buy everything online.",
      },
      curious: {
        explanation: "You are showing interest in what I'm doing.",
        rating: "good",
        reply: "What do you need to get?",
      },
      disinterested: {
        explanation:
          "There's nothing wrong with saying okay to something ordinary.",
        rating: "good",
        reply: "Okay.",
      },
      distracted: {
        explanation:
          'Even though it may seem negative, going to the store is a very typical errand so it\'s fine just to say "okay."',
        rating: "good",
        reply: "Hm? Yeah, okay.",
      },
      empathetic: {
        explanation:
          "You show that you care about me and are willing to help me.",
        rating: "good",
        reply:
          "I completely understand. Going to the grocery store can be a real pain sometimes. I'm here for you if you need any help.",
      },
      encouraging: {
        explanation:
          "I feel like you are being sarcastic because going to the store is very simple and easy.",
        rating: "bad",
        reply: "You're doing a great job.",
      },
      excited: {
        explanation: "This reply works well.",
        rating: "good",
        reply: "Great! I'll come with you!",
      },
      happy: {
        explanation: "Your reply is happy and encouraging.",
        rating: "good",
        reply: "Great! I hope you find everything you need.",
      },
      humorous: {
        explanation:
          "Although your reply might be funny, I feel that you do not take me seriously.",
        rating: "bad",
        reply: "I need to go to the grocery store and buy a brain.",
      },
      inquiring: {
        explanation:
          "It's always good to ask me a question that is relevant to what I said to keep the conversation going.",
        rating: "good",
        reply: "Why do you choose to go to the grocery store?",
      },
      interested: {
        explanation: "You are excited for me and want to know what I'll buy.",
        rating: "good",
        reply: "Great! What are you going to buy?",
      },
      intrigued: {
        explanation:
          "Asking a relevant question to what I said is always a good way to reply.",
        rating: "good",
        reply: "Why do you need to go?",
      },
      jealous: {
        explanation:
          "It's okay to tell me you want me to go. Going to the store is very ordinary.",
        rating: "good",
        reply: "Aw, I want to go too.",
      },
      "one-upping": {
        explanation:
          "This makes me feel like you are trying to compete with me. Instead, maybe try asking me why I'm going or what I'm buying.",
        rating: "bad",
        reply: "I went to the grocery store two times already.",
      },
      sad: {
        explanation:
          "It's good that you acknowledge what I say and that you let me know you can't let me go.",
        rating: "good",
        reply: "I'm sorry, I can't go with you.",
      },
      sarcastic: {
        explanation:
          "You caught me off guard with your sarcasm since going to the store is something normal.",
        rating: "bad",
        reply: "No. You should stay home and starve to death.",
      },
      "self-centered": {
        explanation:
          "Although it can come off as mean, it's okay because I'm doing something normal and I can easily get ice cream for you.",
        rating: "good",
        reply: "You better buy me some ice cream on the way.",
      },
      statement: "I am going to the grocery store.",
      supportive: {
        explanation:
          "Thanks for making me feel supported even for little things like going to the grocery store.",
        rating: "good",
        reply: "I'll go with you if you need any help!",
      },
      sympathetic: {
        explanation:
          "You don't have to feel sorry about me going to the grocery store, because it's not too big of a deal.",
        rating: "bad",
        reply:
          "I'm sorry to hear that you need to go. It must be very tedious for you.",
      },
    },
    work: {
      angry: {
        explanation:
          "I feel hurt by your reply because it feels unecessarily mean. You could instead compliment my cubicle.",
        rating: "bad",
        reply: "You have an ugly cubicle. Why are you showing me?",
      },
      awkward: {
        explanation:
          "If you don't know what to say, you can always ask about my cubicle.",
        rating: "bad",
        reply: "Uh... Nice?",
      },
      cheerful: {
        explanation: "Thanks for being happy about my cubicle!",
        rating: "good",
        reply: "I'm glad you have this cubicle!",
      },
      concerned: {
        explanation:
          "Thank you for showing concern for me and that you care about my comfort.",
        rating: "good",
        reply:
          "Your cubicle looks a little small. Are you sure you have enough space to work in there?",
      },
      curious: {
        explanation:
          "Because you ask about my cubicle, I feel like you genuinely care about what I have to say.",
        rating: "good",
        reply: "Oh? Did you just move into this one?",
      },
      disinterested: {
        explanation:
          "There is no need to be very interested in something like a cubicle, so a short, positive reply suffices.",
        rating: "good",
        reply: "I see.",
      },
      distracted: {
        explanation:
          "This makes me feel ignored. You could ask about my cubicle instead.",
        rating: "bad",
        reply: "I'm going to fill my water bottle.",
      },
      empathetic: {
        explanation:
          "I feel understood and you do a great job of talking about your own experience without making the conversation about you.",
        rating: "good",
        reply:
          "I know how it feels to have a cubicle all to yourself, it's really nice!",
      },
      encouraging: {
        explanation:
          "I like hearing your own observation and insight about cubicles.",
        rating: "good",
        reply:
          "Having a cubicle is good because it gives you your own private workspace.",
      },
      excited: {
        explanation: "Thanks for complimenting my cubicle!",
        rating: "good",
        reply: "Cool! Nice cubicle!",
      },
      happy: {
        explanation:
          "You are being nice about my cubicle and makes me feel better.",
        rating: "good",
        reply: "Nice! It looks great!",
      },
      humorous: {
        explanation: "Your light-hearted joke adds to our conversation nicely.",
        rating: "good",
        reply: "This is your kingdom!",
      },
      inquiring: {
        explanation:
          "It's always good to ask me a question thats relevant to what I said to keep the conversation going.",
        rating: "good",
        reply: "How long have you had a cubicle?",
      },
      interested: {
        explanation:
          "Asking questions about it is good because it makes me feel like you care.",
        rating: "good",
        reply: "When did you get the cubicle?",
      },
      intrigued: {
        explanation:
          "Thank you for showing that you are interested in my cubicle and asking about it.",
        rating: "good",
        reply: "It looks quite nice and cozy. Did you decorate it?",
      },
      jealous: {
        explanation:
          "I understand your wish, but it seems like you're just making the conversation about yourself.",
        rating: "bad",
        reply: "I wish I had a cubicle all to myself.",
      },
      "one-upping": {
        explanation:
          "I feel uncomfortable because it seems that you are trying to make this a competition.",
        rating: "bad",
        reply: "My cubicle is better than yours.",
      },
      sad: {
        explanation:
          "Being fired must've been hard for you, but let's acknowledge my cubicle before talking about yourself.",
        rating: "bad",
        reply: "I miss my cubicle. I had one before too, but I got fired.",
      },
      sarcastic: {
        explanation:
          "Although it may be intended as a lighthearted joke, the sarcasm is unexpected to my typical statement so it feels mean.",
        rating: "bad",
        reply:
          "Oh my god. Your cubicle, that everyone else also has, is so amazing and beatiful. Breathtaking.",
      },
      "self-centered": {
        explanation: "This makes me feel worse about myself and my cubicle.",
        rating: "bad",
        reply:
          "What's so nice about a cubicle? Everyone in the office has the same one.",
      },
      statement: "This is my cubicle.",
      supportive: {
        explanation: "Thank you for your compliment!",
        rating: "good",
        reply: "Great! It looks pretty nice.",
      },
      sympathetic: {
        explanation:
          "You make me feel like you are really listening to me, and can lead to more conversation about it.",
        rating: "good",
        reply: "It must be difficult working in a cubicle and not an office.",
      },
    },
  },
  positive: {
    general: {
      angry: {
        explanation:
          "I feel hurt because I was hoping you would be happy for me instead of upset.",
        rating: "bad",
        reply: "You're always reading, you need to get a life!",
      },
      awkward: {
        explanation:
          "This makes our conversation feel a bit uncomfortable. Maybe you can try asking me a question instead.",
        rating: "bad",
        reply: "Uh, congratulations? I mean, books can be fun.",
      },
      cheerful: {
        explanation:
          "Your reply is very supportive and well spirited, and tells me you are happy with me.",
        rating: "good",
        reply: "Congratulations! I'm really happy for you!",
      },
      concerned: {
        explanation:
          "I know you care about my health, but this reply feels negative and we should be happy about my good book.",
        rating: "bad",
        reply:
          "You're not reading too much, are you? You need to take a break every once in a while.",
      },
      curious: {
        explanation:
          "I can see that you are expressing genuine interest in the book I read.",
        rating: "good",
        reply: "What was the book about?",
      },
      disinterested: {
        explanation:
          "I feel like you are uninterested in my good experience. You can always ask about my book to continue our conversation.",
        rating: "bad",
        reply: "Oh, cool.",
      },
      distracted: {
        explanation:
          "This makes me feel ignored. Try talking about my good experience.",
        rating: "bad",
        reply: "I wonder what the weather is like today.",
      },
      empathetic: {
        explanation:
          "Thank you for validating my feelings through telling me about your own similar experience.",
        rating: "good",
        reply: "I know how you feel, I just finished a great book too!",
      },
      encouraging: {
        explanation:
          "Your reply makes me feel encouraged and adds to my happiness.",
        rating: "good",
        reply:
          "That's wonderful! You should read more often, it's so good for you!",
      },
      excited: {
        explanation:
          "I feel happier because you share my joy and show your interest in my good experience.",
        rating: "good",
        reply: "I can't wait to read it! What's it about?",
      },
      happy: {
        explanation:
          "This makes me see you as a good friend because you show me you are happy for me.",
        rating: "good",
        reply: "I'm glad you are enjoying your book!",
      },
      humorous: {
        explanation:
          "Even though you may want to make a lighthearted joke, I feel hurt by your words.",
        rating: "bad",
        reply: "It's about time you finished a book!",
      },
      inquiring: {
        explanation:
          "It's always good to ask me a question thats relevant to what I said to keep the conversation going.",
        rating: "good",
        reply: "Why do you like reading?",
      },
      interested: {
        explanation:
          "Thank you for showing genuine interest in the book I read and continuing our conversation by asking a question.",
        rating: "good",
        reply: "Ooh! What genre is it? What's the story about?",
      },
      intrigued: {
        explanation:
          "You are being a good friend by asking me about my favorite part of the book.",
        rating: "good",
        reply: "What was your favorite part?",
      },
      jealous: {
        explanation:
          "Although you sound jealous, it makes me feel good about reading the book.",
        rating: "good",
        reply: "I can't find any good books! I'm so jealous!",
      },
      "one-upping": {
        explanation:
          "I feel like you are trying to compete with me instead of being happy for me. Perhaps you can ask me about my book.",
        rating: "bad",
        reply: "I actually finished two really good books!",
      },
      sad: {
        explanation:
          "I understand you might feel a bit sad, but telling me that can bring the mood of our conversation down.",
        rating: "bad",
        reply:
          "I wish I could find a book that I liked as much as you seem to like that one.",
      },
      sarcastic: {
        explanation:
          "I know you might be joking, but I wish you would show you are happy for me.",
        rating: "bad",
        reply: "Ha, as if you could read.",
      },
      "self-centered": {
        explanation:
          "We might have different opinions about reading, but I feel like you are ignoring my good news. Try to match my happiness.",
        rating: "bad",
        reply: "I don\u2019t like reading books. It takes too long.",
      },
      statement: "I just finished a really good book!",
      supportive: {
        explanation:
          "Thank you for showing your happiness for me! I feel supported by you.",
        rating: "good",
        reply:
          "That's great! I'm really happy for you and your love of reading!",
      },
      sympathetic: {
        explanation:
          "Your reply shares in my happiness from finishing a good book and you are being supportive.",
        rating: "good",
        reply: "It sounds like you really enjoyed it. I'm happy for you.",
      },
    },
    work: {
      angry: {
        explanation:
          "I feel like you are making the conversation about yourself instead of celebrating my promotion.",
        rating: "bad",
        reply: "I can't believe they promoted you and not me.",
      },
      awkward: {
        explanation:
          "Asking me a question about my promotions is always a good alternative way to reply.",
        rating: "bad",
        reply: "I... don't really know what to say.",
      },
      cheerful: {
        explanation:
          "Your cheerful reply matches my joy and recognizes my success, making me feel better too.",
        rating: "good",
        reply: "That's terrific! You're one step closer to the top.",
      },
      concerned: {
        explanation:
          "Asking about my work is good because you express interest in what I say.",
        rating: "good",
        reply: "Are you going to be working more hours now?",
      },
      curious: {
        explanation:
          "By asking me a question about my accomplishment, it makes me think you are interested in what I did.",
        rating: "good",
        reply: "How did you get promoted?",
      },
      disinterested: {
        explanation:
          "It's okay not to ask about my promotion and give a simple response.",
        rating: "good",
        reply: "Oh, that's nice.",
      },
      distracted: {
        explanation:
          "I feel ignored because this reply is off-topic. You could congratulate me instead.",
        rating: "bad",
        reply: "Looks like it's lunch time.",
      },
      empathetic: {
        explanation:
          "Your share my happiness by sharing your experience in a similar experience.",
        rating: "good",
        reply: "I know how you feel! You must feel very proud of yourself.",
      },
      encouraging: {
        explanation:
          "You are my feelings of joy and satisfaction by complementing my effort.",
        rating: "good",
        reply: "Nice! You must have worked really hard for this. ",
      },
      excited: {
        explanation:
          "By saying you are happy about my success, it makes me happy too.",
        rating: "good",
        reply: "That's amazing! I'm really happy for your success.",
      },
      happy: {
        explanation: "Thank you for recognizing my achievement!",
        rating: "good",
        reply: "Congratulations!",
      },
      humorous: {
        explanation:
          "I know you want to make a joke, but I wish you would share my happiness for my achievement.",
        rating: "bad",
        reply:
          "Congratulations! You're officially a step closer to becoming a slave to the corporate machine!",
      },
      inquiring: {
        explanation:
          "It's always good to ask me a question thats relevant to what I said to keep the conversation going.",
        rating: "good",
        reply: "Why did your boss give you a promotion?",
      },
      interested: {
        explanation:
          "Your response shows interest in my promotion and makes me want to talk about it more.",
        rating: "good",
        reply: "Wow! What made them choose you?",
      },
      intrigued: {
        explanation:
          "Thank you for congratulating me and showing interest in my accomplishment!",
        rating: "good",
        reply: "That's great! What does your new position entail?",
      },
      jealous: {
        explanation:
          "I understand that you might be sad, but this reply makes me feel like my accomplishment is being ignored.",
        rating: "bad",
        reply: "I wish I got a promotion.",
      },
      "one-upping": {
        explanation:
          "This reply makes me feel like you are competing with me. Instead, try congratulating me because I am happy.",
        rating: "bad",
        reply: "I got a promotion two months ago.",
      },
      sad: {
        explanation:
          "I know you might feel a little sad, but it would still be better if you first congratulated me.",
        rating: "bad",
        reply:
          "I'm really happy for you, but I wish I could have gotten a promotion too.",
      },
      sarcastic: {
        explanation:
          "This can make me feel upset because your response comes off as sarcastic.",
        rating: "bad",
        reply: "Wow, you must be really special.",
      },
      "self-centered": {
        explanation:
          "Although we might have different opinions, I feel like you are making the conversation about yourself.",
        rating: "bad",
        reply:
          "I wouldn't want to get promoted because I would just get more work.",
      },
      statement: "I just got a promotion!",
      supportive: {
        explanation: "Thanks for being supportive in my promotion!",
        rating: "good",
        reply: "I'm so happy for you!",
      },
      sympathetic: {
        explanation: "You make me feel understood and add to my happiness.",
        rating: "good",
        reply: "I can imagine how happy you must be.",
      },
    },
  },
};

export const attitudes = [
  "supportive",
  "curious",
  "distracted",
  "humorous",
  "empathetic",
  "intrigued",
  "excited",
  "angry",
  "sad",
  "self-centered",
  "jealous",
  "awkward",
  "disinterested",
  "sympathetic",
  "interested",
  "encouraging",
  "concerned",
  "one-upping",
  "cheerful",
  "happy",
  "sarcastic",
];

export default examples;
