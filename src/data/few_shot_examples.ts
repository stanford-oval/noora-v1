const examples = {
  negative: {
    general: {
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
    statement: "My boss is always getting mad at me.",
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
    statement: "This is my cubicle.",
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
    statement: "I just got a promotion!",
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
