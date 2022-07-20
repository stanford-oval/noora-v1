const general_statements = [
  [
    "general/positive",
    "I just finished a really good book.",
    "That sounds amazing! I can\u2019t wait to hear more about it!",
  ],
  [
    "general/positive",
    "My brother surprised me with some ice cream.",
    "Why was it a surprise?",
  ],
  [
    "general/positive",
    "I can\u2019t wait for my sister/brother to visit me this weekend.",
    "That's great! What can I do to help you prepare for their visit?",
  ],
  [
    "general/positive",
    "I love volunteering at the dog shelter.",
    "That\u2019s amazing! I\u2019m really proud of you for giving your time to help those dogs.",
  ],
  [
    "general/positive",
    "I\u2019ve been playing some really cool online games.",
    "That's great! I'm glad you're finding ways to enjoy your free time.",
  ],
  [
    "general/positive",
    "I just downloaded some great music.",
    "What kind of music did you download?",
  ],
  ["general/positive", "I love eating dessert.", "I love dessert too!"],
  [
    "general/positive",
    "I saw a great movie last night.",
    "We should go see that movie together!",
  ],
  [
    "general/positive",
    "I had a great lunch today.",
    "That sounds great! What did you have for lunch?",
  ],
  [
    "general/positive",
    "The flowers are blooming near my house.",
    "It sounds like you\u2019re really enjoying the spring weather! Flowers are such a nice way to decorate your yard too.",
  ],
  [
    "general/positive",
    "My garden is growing tons of fruit and veggies.",
    "Good for you! I\u2019m so happy for you that your garden is doing so well.",
  ],
  [
    "general/positive",
    "I am going out with friends this weekend.",
    "I wish I could go out with friends this weekend too.",
  ],
  [
    "general/positive",
    "My dog is always so happy to see me.",
    "I can understand why you feel that way. I feel the same way about my dog too.",
  ],
  [
    "general/positive",
    "I\u2019m excited to see my friend this weekend.",
    "That sounds like a lot of fun! What are you guys going to do?",
  ],
  [
    "general/positive",
    "I slept really well last night.",
    "That\u2019s great! I\u2019m really happy for you!",
  ],
  [
    "general/positive",
    "I moved into a nicer apartment.",
    "I'm so happy for you! I wish I could afford to move into a nicer place too.",
  ],
  [
    "general/positive",
    "I got a new car.",
    "Do you need help washing it or anything?",
  ],
  [
    "general/positive",
    "I just finished a big job at work.",
    "That's great! I'm really happy for you.",
  ],
  [
    "general/positive",
    "I\u2019m dating a girl who is really fun.",
    "She sounds really interesting! What's she like?",
  ],
  [
    "general/positive",
    "I\u2019m taking a really great class.",
    "That's amazing! I'm so happy for you.",
  ],
  [
    "general/positive",
    "My dog was happy to see me last night.",
    "I'm really happy for both of you! Dogs are great companions.",
  ],
  [
    "general/positive",
    "It\u2019s such a beautiful day.",
    "I know! It\u2019s so great! I feel so lucky!",
  ],
  [
    "general/positive",
    "My boss promoted me at work.",
    "That's great! I'm really happy for you. Here's some advice on how to celebrate your success.",
  ],
  [
    "general/positive",
    "I found a really good restaurant.",
    "That sounds great! Let\u2019s go there together!",
  ],
  [
    "general/positive",
    "I went to a great concert last night.",
    "That\u2019s great! I\u2019m sure it was a awesome experience.",
  ],
  [
    "general/positive",
    "A friend is coming to visit me this weekend.",
    "Do you think your friend would want to hang out with me too?",
  ],
  [
    "general/positive",
    "I\u2019m going on vacation next week.",
    "Do you need help packing? I can come over and help you out.",
  ],
  [
    "general/positive",
    "It\u2019s so beautiful out today.",
    "I don\u2019t really like talking about the weather. What else is new with you?",
  ],
  [
    "general/positive",
    "I finished watching a watching a good show.",
    "What was your favorite part?",
  ],
  [
    "general/positive",
    "I love the holidays.",
    "I love the holidays too! What are your plans?",
  ],
  [
    "general/positive",
    "I went to a great Yoga class this morning",
    "That\u2019s fantastic! I\u2019m really happy for you.",
  ],
  [
    "general/positive",
    "There are some great movies out now.",
    "Oh, there are a lot of great movies out right now. Let's see...there's ____, ____, ____...",
  ],
  [
    "general/positive",
    "I just heard about a beautiful vacation spot in Florida.",
    "Are you sure you want to go to Florida? It's full of alligators and snakes!",
  ],
  [
    "general/positive",
    "There\u2019s an awesome new show on.",
    "That sounds really great! I'll have to check it out.",
  ],
  [
    "general/neutral",
    "Tomorrow night I have a date.",
    "That's great! I'm sure you'll have a great time.",
  ],
  [
    "general/neutral",
    "I went for a run this morning.",
    "Good for you! I\u2019m proud of you for making time to exercise.",
  ],
  [
    "general/neutral",
    "The new law that limits the use of plastic bags is going into effect this week.",
    "It's great that we're finally taking action to reduce pollution.",
  ],
  [
    "general/neutral",
    "I read about a wildfire that happened last year in Australia.",
    "That sounds really intense! What was the most fascinating thing you read about it?",
  ],
  [
    "general/neutral",
    "There\u2019s a new restaurant open on that street.",
    "That sounds like a great idea! I'm sure you'll have a lot of fun.",
  ],
  [
    "general/neutral",
    "This is my cubicle.",
    "What's it like working in a cubicle? I've always wondered.",
  ],
  [
    "general/neutral",
    "I watched a movie last night.",
    "I bet you watched it on Netflix because it\u2019s not worth paying for.",
  ],
  [
    "general/neutral",
    "I went to a restaurant yesterday.",
    "That sounds like it was really fun! I\u2019m glad you got to go.",
  ],
  [
    "general/neutral",
    "I bought a pair of new shoes last week.",
    "Ha! I love your new shoes! They're so funny looking!",
  ],
  [
    "general/neutral",
    "There\u2019s a new mayor of the city.",
    "Tell me more! I\u2019m really interested in what you think about the new mayor.",
  ],
  [
    "general/neutral",
    "Did you hear about the storm coming in?",
    "That sounds really scary. I'm here for you if you need to talk.",
  ],
  [
    "general/neutral",
    "I just saw this person post about X",
    "That happened to me too. I\u2019m so sorry.",
  ],
  [
    "general/neutral",
    "I binged watched a show last night",
    "That sounds like a lot of pressure",
  ],
  [
    "general/neutral",
    "The climate change seems to be getting more attention lately.",
    "I completely agree with you! Something needs to be done about climate change.",
  ],
  [
    "general/neutral",
    "It\u2019s getting colder outside",
    "It sounds like you're not looking forward to the cold weather.",
  ],
  [
    "general/neutral",
    "People say such mean things on social media.",
    "That sounds really tough. I'm sorry that happened.",
  ],
  [
    "general/neutral",
    "A lot of people buy sports memoriala.",
    "That's really interesting! What kind of sports memorabilia do people usually buy?",
  ],
  [
    "general/neutral",
    "Some of the big cities really have a problem with homelessness.",
    "That sounds really tough. I can\u2019t imagine how hard it must be to not have a place to call home.",
  ],
  [
    "general/neutral",
    "I need to go to the grocery store.",
    "That sounds like it could be fun.",
  ],
  [
    "general/neutral",
    "I got a new computer.",
    "That's really exciting news! I know you've been wanting a new computer for a while. I'm glad you finally have one.",
  ],
  [
    "general/neutral",
    "I\u2019ve been getting into art lately.",
    "Wow, that\u2019s great! I\u2019m really proud of you for pursuing something you\u2019re passionate about.",
  ],
  [
    "general/neutral",
    "I read the headlines on my phone every morning.",
    "I wish I had time for that. I always feel so rushed in the mornings.",
  ],
  [
    "general/neutral",
    "I\u2019m really busy at work.",
    "Tell me more about your work. I'm really interested in hearing about it.",
  ],
  [
    "general/neutral",
    "I\u2019m really busy at school.",
    "Wow, that sounds like a lot of work. How are you dealing with it all?",
  ],
  [
    "general/neutral",
    "I walked my dog this morning.",
    "That's amazing! I'm so happy for you and your dog!",
  ],
  ["general/neutral", "It's cloudy today.", "Hey, at least it's not snowing!"],
  [
    "general/neutral",
    "I had a lot of errands today.",
    "That sounds like it was really tough. I\u2019m sorry you had to go through all that.",
  ],
  [
    "general/neutral",
    "I've been reading a lot lately.",
    "What kinds of books have you been reading?",
  ],
  [
    "general/neutral",
    "My parents went on vacation.",
    "Good for them! I'm glad they could take some time off.",
  ],
  [
    "general/neutral",
    "A new restaurant just opened in my neighborhood.",
    "That's great! I'm sure you'll love it. Let me know how it is.",
  ],
  [
    "general/neutral",
    "I had to do some housecleaning today.",
    "Good for you! I\u2019m sure it feels nice to have a clean house.",
  ],
  [
    "general/neutral",
    "It was a relaxing weekend.",
    "I wish I could have had a relaxing weekend too.",
  ],
  [
    "general/neutral",
    "I finished some school assignments over the weekend.",
    "Great job! Keep it up!",
  ],
  [
    "general/neutral",
    "I have some homework to do this week.",
    "I will help you with your homework this week. Let me know when you need help.",
  ],
  [
    "general/neutral",
    "It's going to be a busy week.",
    "It's going to be okay. I'm here for you if you need to talk.",
  ],
  [
    "general/neutral",
    "My boss gave me a lot of work this week.",
    "I was really looking forward to hanging out this week, but I guess that's not going to happen now.",
  ],
  [
    "general/negative",
    "I\u2019m super sick.",
    "That sounds really tough. I\u2019m sorry you\u2019re going through this. Is there anything I can do to help you?",
  ],
  [
    "general/negative",
    "My sister and I just got into a fight.",
    "That sounds really tough. I\u2019m here for you if you want to talk about it more.",
  ],
  [
    "general/negative",
    "I failed a test.",
    "That\u2019s okay. It\u2019s not the end of the world. I know you\u2019ll do better next time.",
  ],
  [
    "general/negative",
    "I got into a car accident.",
    "I'm so sorry. That must have been really scary for you.",
  ],
  [
    "general/negative",
    "I went running and sprained my ankle.",
    "That sounds terrible. Do you need help with anything?",
  ],
  [
    "general/negative",
    "My friend broke her leg last week.",
    "That sounds really tough. I'm here for you if you need to talk.",
  ],
  [
    "general/negative",
    "I\u2019m stressed about my work now.",
    "It's not that bad. I'm sure you'll be able to finish it.",
  ],
  [
    "general/negative",
    "I came down with a flu.",
    "Oh my gosh, I'm so sorry. That sounds really terrible. I remember when I had the flu a few years ago and it was the worst. Are you feeling any better? Do you want me to bring you anything?",
  ],
  [
    "general/negative",
    "I\u2019m so tired.",
    "Well, at least you don't have to work today!",
  ],
  [
    "general/negative",
    "I\u2019m nervous about my upcoming test.",
    "I know how you feel. I used to get so nervous before tests too.",
  ],
  [
    "general/negative",
    "I\u2019m not feeling well.",
    "I\u2019m sorry to hear that you\u2019re not feeling well. I know you\u2019ll feel better soon.",
  ],
  [
    "general/negative",
    "Work was so hard today",
    "Um...I'm sorry? That sounds really tough?",
  ],
  [
    "general/negative",
    "I had to take my pet to the vet last night.",
    "That sounds really rough. I\u2019m here for you if you need to talk.",
  ],
  [
    "general/negative",
    "My phone ran out of battery.",
    "Are you sure your phone is okay? Do you need help troubleshooting?",
  ],
  [
    "general/negative",
    "My phone broke.",
    "That\u2019s really sucks that your phone broke. I\u2019m sorry.",
  ],
  [
    "general/negative",
    "I lost my phone charger.",
    "That sounds really annoying. I\u2019m sorry you have to deal with that.",
  ],
  [
    "general/negative",
    "My girlfriend broke up with me yesterday.",
    "Do you want to talk about it? I'm here for you.",
  ],
  [
    "general/negative",
    "I accidentally dropped my phone in the toilet.",
    "That sounds really frustrating. I\u2019m sorry that happened.",
  ],
  [
    "general/negative",
    "I\u2019m getting a sore throat.",
    "Aww, I'm sorry you're feeling sick. Do you want me to bring you anything?",
  ],
  [
    "general/negative",
    "I went to the most boring movie last night.",
    "I'm sorry that you didn't enjoy the movie. At least you went out and did something.",
  ],
  [
    "general/negative",
    "I am taking a class that\u2019s so hard.",
    "It sounds like you are really struggling right now. Let me know if there is anything I can do to help you.",
  ],
  [
    "general/negative",
    "My friend got fired from his job.",
    "What happened? or How did it happen?",
  ],
  [
    "general/negative",
    "My phone broke last night.",
    "That sounds really frustrating. I'm sorry your phone broke.",
  ],
  [
    "general/negative",
    "I lost my phone.",
    "That\u2019s really upsetting. I\u2019m so sorry you lost your phone.",
  ],
  [
    "general/negative",
    "My landlord is annoying.",
    "It sounds like your landlord is really getting on your nerves. Do you want to talk about it?",
  ],
  [
    "general/negative",
    "It\u2019s too hot in my office.",
    "Let me see if I can help you cool down. I'll go get a fan for you.",
  ],
  [
    "general/negative",
    "Someone said some mean stuff about me on social media.",
    "That's really rough. I'm sure it feels like the whole world is against you, but know that I'm here for you and I believe in you.",
  ],
  [
    "general/negative",
    "I couldn\u2019t sleep at all last night.",
    "I've been there before. I couldn't sleep at all one night and it was really tough.",
  ],
  [
    "general/negative",
    "I\u2019m so tired, I woke up in the middle of the night.",
    "It\u2019s okay, we all have trouble sleeping sometimes. Just try to relax and you\u2019ll be able to fall back asleep.",
  ],
  [
    "general/negative",
    "Holidays are always so stressful for my family.",
    "That sounds really tough. I\u2019m here for you if you need to talk about it more.",
  ],
  [
    "general/negative",
    "I\u2019m really nervous about social situations.",
    "Can you tell me more about why you're feeling nervous? I'm just curious.",
  ],
  [
    "general/negative",
    "My job is so boring.",
    "That sounds really tough. I'm sorry you're going through that.",
  ],
  [
    "general/negative",
    "I hate my boss.",
    "Why do you hate your boss? What has he done to make you feel that way?",
  ],
  [
    "general/positive",
    "I got a really good grade on my test.",
    "Good job! I knew you could do it!",
  ],
  [
    "general/positive",
    "My dad gave me some spending money.",
    "Just be careful not to spend it all in one place.",
  ],
  [
    "general/positive",
    "I enrolled in a great class.",
    "That sounds like a really great opportunity! I\u2019m really happy for you.",
  ],
  [
    "general/positive",
    "We have a really good team at work.",
    "Our teams are similar. We're both doing well.",
  ],
  [
    "general/positive",
    "I\u2019m going to treat myself to ice cream today.",
    "I'm sorry, I'm busy right now.",
  ],
  [
    "general/positive",
    "I love reading about new apps.",
    "What does the app do? How did you find out about it?",
  ],
  [
    "general/positive",
    "We got a new plant for the apartment.",
    "What kind of plant is it?",
  ],
  [
    "general/positive",
    "I can\u2019t wait for the holidays.",
    "What is it about the holidays that you\u2019re looking forward to?",
  ],
  [
    "general/positive",
    "It\u2019s a beautiful day.",
    "What specifically do you like about the day?",
  ],
  [
    "general/positive",
    "I just finished a paper.",
    "I'm sorry, that sounds like it was a lot of work.",
  ],
  [
    "general/positive",
    "I can\u2019t wait for the weekend.",
    "That sounds like fun! What time are you going?",
  ],
  [
    "general/positive",
    "My birthday is coming up.",
    "What are your plans for your birthday? I'll help you make them happen!",
  ],
  [
    "general/positive",
    "My sister is visiting this weekend.",
    "That sounds tough. I\u2019m here for you if you need to talk about it.",
  ],
  [
    "general/positive",
    "I went to a great Thai restaurant last night.",
    "That sounds like it was a really great experience! I\u2019m so happy for you!",
  ],
  [
    "general/positive",
    "My friend is having a baby.",
    "It\u2019s normal to feel scared and unsure at first, but you\u2019ll be a great parent. I\u2019ll be here for you if you need to talk.",
  ],
  [
    "general/positive",
    "I just finished my midterms.",
    "How did your midterms go?",
  ],
  [
    "general/positive",
    "I love getting coffee.",
    "I love coffee too! What's your favorite kind?",
  ],
  [
    "general/positive",
    "There\u2019s a great ice cream store by my house.",
    "Where is it? I want to check it out!",
  ],
  [
    "general/positive",
    "My girlfriend and I are going out to eat tonight.",
    "I'm happy for you! I'm glad you're dating someone and spending time together.",
  ],
  [
    "general/positive",
    "The flowers are blooming by my house.",
    "That\u2019s really great! I\u2019m so happy for you.",
  ],
  [
    "general/positive",
    "I\u2019m going skiing next weekend.",
    "I\u2019m so jealous that you get to go skiing! I wish I could go too.",
  ],
  [
    "general/positive",
    "I finally recovered from my twisted ankle.",
    "That's great! I know how much you were struggling. I'm really happy for you.",
  ],
  [
    "general/positive",
    "I just took a great cooking class",
    "That sounds like so much fun! I\u2019m so happy for you!",
  ],
  [
    "general/positive",
    "My girlfriend made an awesome dinner last night.",
    "That sounds amazing! Your girlfriend is a great cook!",
  ],
  [
    "general/positive",
    "We had a really fun work party last Friday.",
    "I\u2019m glad you had a good time! That sounds like it was a lot of fun!",
  ],
  [
    "general/positive",
    "There's a great yoga class in my neighborhood.",
    "I don't know if I'm ready for a yoga class. I might not be flexible enough.",
  ],
  [
    "general/positive",
    "We had some extra vegetables in the garden so I gave them to my elderly neighbor.",
    "That\u2019s so great that you were able to help out your neighbor! I\u2019m sure they appreciate it very much.",
  ],
  [
    "general/positive",
    "I've been volunteering at the food bank.",
    "That's so great that you're volunteering! It's really important work that you're doing.",
  ],
  [
    "general/positive",
    "I made a delicious dinner for my boyfriend last night.",
    "That sounds great! What did you make?",
  ],
  [
    "general/positive",
    "I downloaded a great app yesterday.",
    "Yeah, that app is really cool. I\u2019ve been using it a lot lately.",
  ],
  [
    "general/positive",
    "My mom baked me some cookies last week.",
    "Your mom is an amazing baker! The cookies were delicious.",
  ],
  [
    "general/positive",
    "I love hanging out with my sister.",
    "I\u2019m so happy for you! I know how much you love your sister and I\u2019m glad you have such a great relationship with her.",
  ],
  [
    "general/positive",
    "Whenever I feel bad I call my brother.",
    "I'm so sorry that you're feeling down. I've been there before and it's really tough.",
  ],
  [
    "general/positive",
    "My mom gives me really good advice.",
    "That sounds really difficult. I'm sorry your mom isn't around to help you out.",
  ],
  [
    "general/positive",
    "A group of us went to a great happy hour yesterday.",
    "I\u2019m glad you had a good time! It\u2019s important to relax and let loose sometimes.",
  ],
  [
    "general/positive",
    "I got some great exercise yesterday.",
    "You are so amazing! I don't know how you do it.",
  ],
  [
    "general/neutral",
    "I took my dog on a walk this morning.",
    "That's great! I'm glad you took your dog on a walk this morning!",
  ],
  [
    "general/neutral",
    "It rained a lot this year.",
    "That sounds really tough. I'm here for you if you want to talk more about it.",
  ],
  [
    "general/neutral",
    "My sister spent the weekend with me.",
    "I'm glad you had a great time! What did you guys do?",
  ],
  [
    "general/neutral",
    "I'm going to go hiking today.",
    "Here, let me help you map out your route.",
  ],
  [
    "general/neutral",
    "I need to do laundry today.",
    "Do you want help with your laundry? I can wash your clothes for you or help you carry your laundry down to the laundromat.",
  ],
  [
    "general/neutral",
    "I usually go to church on Sundays.",
    "I also go to church on Sundays.",
  ],
  [
    "general/neutral",
    "It's supposed to be nice weather this week.",
    "I'm glad you'll get to enjoy the weather.",
  ],
  [
    "general/neutral",
    "It might be nice to take a walk today.",
    "Yes! Walking is great exercise. Let\u2019s go!",
  ],
  [
    "general/neutral",
    "I'm going to check the weather.",
    "What's the forecast for today? I'm curious to know!",
  ],
  [
    "general/neutral",
    "My friends went on a road trip.",
    "I'm so happy for you and your friends! I'm glad you had a great time.",
  ],
  [
    "general/neutral",
    "I need to do some computer work today.",
    "That sounds great! I'm excited to help you with your work.",
  ],
  [
    "general/neutral",
    "I took a drive today.",
    "Aww, I'm sorry you had to drive.",
  ],
  [
    "general/neutral",
    "Tomorrow is a work day.",
    "I'm sure you'll have a great day at work tomorrow!",
  ],
  [
    "general/neutral",
    "I had a big breakfast this morning.",
    "Good for you! I'm proud of you for having a big breakfast.",
  ],
  [
    "general/neutral",
    "I went out to eat yesterday.",
    "I\u2019m glad you had a good time! You deserve it!",
  ],
  [
    "general/neutral",
    "I cooked for my girlfriend over the weekend.",
    "You must have put a lot of effort into that meal. Did it take you all day to cook it?",
  ],
  [
    "general/neutral",
    "I went fishing over the weekend.",
    "I\u2019m glad you had a good time fishing! I\u2019m happy for you!",
  ],
  [
    "general/neutral",
    "I ran out of toothpaste this morning.",
    "That sounds really frustrating. Do you want to borrow my toothpaste?",
  ],
  [
    "general/neutral",
    "I need to go grocery shopping today.",
    "It's tough having to go grocery shopping when you're already so busy.",
  ],
  [
    "general/neutral",
    "I really want to take a vacation. ",
    "That sounds like a great idea! I'm so happy for you.",
  ],
  [
    "general/neutral",
    "I've never tried Russian food.",
    "That sounds really cool! I'm so jealous.",
  ],
  [
    "general/neutral",
    "I haven't had much time to read lately.",
    "I know how you feel. I\u2019ve been so busy lately too. I haven\u2019t had time to read either.",
  ],
  [
    "general/neutral",
    "Gas prices are pretty good these days.",
    "Really? I\u2019ve been meaning to get a new car. How much did you pay?",
  ],
  [
    "general/neutral",
    "It was busy at the carwash yesterday.",
    "I'm always here for you. You can tell me anything.",
  ],
  [
    "general/neutral",
    "My friends are busy with school right now.",
    "I'm sorry your friends are busy. That must be really hard for you.",
  ],
  [
    "general/neutral",
    "I rode my bike to work today.",
    "That's fantastic! Keep up the good work.",
  ],
  [
    "general/neutral",
    "There isn't much parking so I usually try to walk to work.",
    "You should walk more often, it's good for your health!",
  ],
  [
    "general/neutral",
    "My boss is pretty busy and doesn't have much free time.",
    "Sorry, can you please repeat what you were saying? I didn't catch it.",
  ],
  [
    "general/neutral",
    "My roommate did the gardening this week.",
    "Why did your roommate do the gardening this week?",
  ],
  [
    "general/neutral",
    "Not much new news today.",
    "I\u2019m sorry to hear about your tough day. Are you feeling okay?",
  ],
  [
    "general/neutral",
    "It's been snowing back East.",
    "I wish I was there with you! I bet it's really pretty.",
  ],
  [
    "general/neutral",
    "There's a new grocery store opening up.",
    "That's so exciting! When is it opening? I bet it's going to be really great.",
  ],
  [
    "general/neutral",
    "People mostly buy on line these days.",
    "I do a lot of my shopping online, but I still like to go to stores for certain things.",
  ],
  [
    "general/neutral",
    "I keep busy with online games.",
    "I love playing online games too! I always find them to be a great way to relax after a long day.",
  ],
  [
    "general/neutral",
    "My friends are at work today.",
    "I\u2019m really happy for your friends! They must be doing a great job.",
  ],
  [
    "general/negative",
    "My classes are so hard.",
    "I know how you feel. I\u2019ve been there too. It sucks, but you can get through it.",
  ],
  [
    "general/negative",
    "I don\u2019t like my parents.",
    "It's tough when we don't get along with our parents, but maybe there are some good things about them that you haven't noticed.",
  ],
  [
    "general/negative",
    "I hate going shopping.",
    "I'll go shopping with you. I hate it too, but we can do it together.",
  ],
  [
    "general/negative",
    "I\u2019ve been really depressed lately.",
    "I know how you feel. I've been through depression too.",
  ],
  [
    "general/negative",
    "My brother is so annoying.",
    "I know how you feel. My brother can be really annoying sometimes too.",
  ],
  [
    "general/negative",
    "I got a bad grade on my midterm.",
    "That sounds really tough. I\u2019m here for you if you want to talk about it.",
  ],
  [
    "general/negative",
    "I hate going to the grocery store.",
    "I know it's not your favorite place, but at least we have grocery stores! Can you imagine having to hunt and gather all our food?",
  ],
  [
    "general/negative",
    "A car cut me off on the freeway this morning.",
    "That sounds really frustrating. I've been cut off by a car before too and it's so scary.",
  ],
  [
    "general/negative",
    "I have a horrible headache.",
    "That sounds really painful. I\u2019m sorry.",
  ],
  [
    "general/negative",
    "I\u2019m so mad at my boss.",
    "Why are you so angry? What did your boss do?",
  ],
  [
    "general/negative",
    "My grandmother is really sick.",
    "It's good that she's getting lots of rest and hopefully she'll feel better soon.",
  ],
  [
    "general/negative",
    "My boyfriend just got fired.",
    "I'm so sorry to hear that. If you need any help, let me know.",
  ],
  [
    "general/negative",
    "Someone hit my car and didn\u2019t leave a note.",
    "Are you sure you\u2019re okay? That sounds really scary/upsetting/dangerous.",
  ],
  [
    "general/negative",
    "My car broke down yesterday.",
    "It\u2019s okay, these things happen. It\u2019s not the end of the world.",
  ],
  [
    "general/negative",
    "I hate sad movies.",
    "I'm sorry that you don't like sad movies. I hope you can find a way to enjoy them.",
  ],
  [
    "general/negative",
    "My dog died last week.",
    "Yeah, it's really hard to lose a pet.",
  ],
  [
    "general/negative",
    "It\u2019s so hot.",
    "Yes, it is quite hot today. I don\u2019t really like the heat though.",
  ],
  [
    "general/negative",
    "The teller at the bank was really rude.",
    "Don\u2019t worry, it\u2019s not a big deal. I\u2019m sure the teller didn\u2019t mean to be rude.",
  ],
  [
    "general/negative",
    "I have a doctor\u2019s appointment today that I\u2019m dreading.",
    "It's not that bad! Doctors are there to help us, not hurt us.",
  ],
  [
    "general/negative",
    "I have to work all weekend.",
    "That sounds really tough. I\u2019m sorry you have to work all weekend.",
  ],
  [
    "general/negative",
    "I\u2019m so behind at work.",
    "That sounds really tough. Do you want to talk about it? I\u2019m here for you.",
  ],
  [
    "general/negative",
    "Going to work gives me anxiety.",
    "It sounds like work is really tough for you right now. Can you tell me more about what is making you anxious?",
  ],
  [
    "general/negative",
    "I am worried about the traffic.",
    "That sounds really tough. I'm here for you.",
  ],
  [
    "general/negative",
    "There is always such a long line at the grocery store.",
    "I know how you feel. I was just at the grocery store yesterday and the line was so long that I left without getting anything.",
  ],
  [
    "general/negative",
    "We went to the beach but the weather was horrible.",
    "That sounds like it was really tough. I\u2019m sorry the weather was so bad.",
  ],
  [
    "general/negative",
    "It rained really hard when I was driving and it was super scary.",
    "It's okay, it's just a little rain. You're fine.",
  ],
  [
    "general/negative",
    "I was so bored over the weekend.",
    "I know how you feel. I've been there before.",
  ],
  [
    "general/negative",
    "My friends went out but didn't include me.",
    "Yeah, I hate it when that happens.",
  ],
  [
    "general/negative",
    "I miss seeing my best friend that moved away. ",
    "I'm sorry to hear that.",
  ],
  [
    "general/negative",
    "The food is horrible at that restaurant. ",
    "It's okay, there are other places to eat.",
  ],
  [
    "general/negative",
    "My wallet got stolen.",
    "It\u2019s going to be okay. I\u2019m here for you.",
  ],
  [
    "general/negative",
    "I lost my driver's license.",
    "I'm sorry that happened. Do you want me to help you look for it?",
  ],
  [
    "general/negative",
    "My driver's license is expiring this year and I have to take the test before my birthday.",
    "That sounds like a tough situation. Do you want to study together?",
  ],
  [
    "general/negative",
    "My father had surgery last week.",
    "Let me know if you need help with anything, I'm here for you.",
  ],
  [
    "general/negative",
    "My grandmother passed away in her sleep.",
    "Sorry to hear that. I hope you're doing okay.",
  ],
  [
    "general/negative",
    "Work is too busy and it's been really stressful.",
    "Do you want to talk about it? I'm here for you if you need to vent.",
  ],
  [
    "general/negative",
    "I'm so bored at work. There isn't much to do.",
    "That sounds really boring. I'm sorry you have to deal with that.",
  ],
  [
    "general/positive",
    "I love hiking.",
    "I love hiking, too. I'm so glad we have that in common.",
  ],
  [
    "general/positive",
    "We went to the beach last weekend.",
    "That sounds like so much fun! I\u2019m so jealous!",
  ],
  [
    "general/positive",
    "I sold a bunch of stuff at my garage sale last weekend.",
    "Congratulations! I\u2019m really proud of you.",
  ],
  [
    "general/positive",
    "It's beautiful weather today.",
    "I know, it's so nice out! I wish I could enjoy it more.",
  ],
  [
    "general/positive",
    "I just started a workout routine.",
    "Good for you! Having a workout routine is great for your health!",
  ],
  [
    "general/positive",
    "It's really fun going to the dog park.",
    "Umm...I like going to the dog park too.",
  ],
  [
    "general/positive",
    "My friend is helping me learn Spanish.",
    "That\u2019s really wonderful that you are learning Spanish! What made you decide to start?",
  ],
  [
    "general/positive",
    "I got a really cheap airplane ticket for my vacation.",
    "That sounds fantastic! Where are you going?",
  ],
  [
    "general/positive",
    "The weather was great last weekend.",
    "I\u2019m glad you had a great time!",
  ],
  [
    "general/positive",
    "I've been teaching my friends how to knit.",
    "That's awesome that you're teaching your friends to knit! I'm really happy for you.",
  ],
  [
    "general/positive",
    "I just joined a volunteer group.",
    "That's fantastic! Why did you decide to join a volunteer group?",
  ],
  [
    "general/positive",
    "I donated some money to the homeless shelter.",
    "That was a really kind and generous thing to do. I'm so proud of you.",
  ],
  [
    "general/positive",
    "I love working in my garden.",
    "You must be really talented to be able to make things grow. I can\u2019t even keep a plant alive.",
  ],
  [
    "general/positive",
    "My brother emailed me some great pictures.",
    "That sounds really great! Can I see the pictures too?",
  ],
  [
    "general/positive",
    "I just got a really funny text.",
    "That sounds like a really funny text! I would love to see it.",
  ],
  [
    "general/positive",
    "I love my apartment.",
    "I\u2019m sorry to hear that your apartment is so small/old/expensive/etc.",
  ],
  [
    "general/positive",
    "I'm so lucky to live in a great city.",
    "I know how you feel! I love living in this city too.",
  ],
  [
    "general/positive",
    "My neighbor brought me some fruit yesterday.",
    "That\u2019s great! I\u2019m so happy for you!",
  ],
  [
    "general/positive",
    "I'm fortunate to have such a great family.",
    "That's terrific! What makes your family so great?",
  ],
  [
    "general/positive",
    "I had a super fun weekend. ",
    "That sounds like a blast! What did you do?",
  ],
  [
    "general/positive",
    "Finals were really easy this quarter.",
    "That\u2019s fantastic! I\u2019m really proud of you!",
  ],
  [
    "general/positive",
    "I studied hard and did well in school this year. ",
    "Let\u2019s go out and celebrate! I\u2019m so proud of you.",
  ],
  [
    "general/positive",
    "My neighbor baked me some bread yesterday.",
    "That sounds like it would be a really great bread. I'm sure you enjoyed it.",
  ],
  [
    "general/positive",
    "The weather is supposed to be great this week.",
    "I am excited for the weather too! Do you have any plans for the week?",
  ],
  [
    "general/positive",
    "The bulbs I planted are blooming.",
    "That\u2019s great! I\u2019m so happy for you!",
  ],
  [
    "general/positive",
    "I can't wait to go skiing this weekend.",
    "Skiing sounds like a lot of fun! I'm really happy for you.",
  ],
  [
    "general/positive",
    "My girlfriend and I had a great talk last night. ",
    "Really? What exactly did you talk about?",
  ],
  [
    "general/positive",
    "My neighbor offered to mow my lawn.",
    "That\u2019s great! Now you don\u2019t have to worry about mowing your lawn!",
  ],
  [
    "general/positive",
    "My boss gave me a gift card for coffee.",
    "Do you want to go get coffee now?",
  ],
  [
    "general/positive",
    "I watched a great you tube song.",
    "Can you send me the link? I would love to watch it.",
  ],
  [
    "general/positive",
    "I found a really great guitar teacher.",
    "That's great! I'll help you look for a guitar teacher.",
  ],
  [
    "general/positive",
    "I went to a great art exhibit over the weekend.",
    "I loved that art exhibit! I went to the opening night and met the artist. They're so talented!",
  ],
  [
    "general/positive",
    "There are some great hiking trails near my house.",
    "YES! I love hiking! When can we go?",
  ],
  [
    "general/positive",
    "I got a really nice email from a friend today.",
    "That sounds like great news! I\u2019m really happy for you.",
  ],
  [
    "general/positive",
    "I got a ton of work done today.",
    "Congratulations! I'm really proud of you.",
  ],
  [
    "general/positive",
    "A lot of people wished me a happy birthday.",
    "I\u2019m so glad you had a great birthday! You deserved it.",
  ],
  [
    "general/positive",
    "My sister dropped off a bunch of groceries for me yesterday.",
    "That\u2019s so sweet of her! Why did she bring them?",
  ],
  [
    "general/positive",
    "I went out to dinner with some friends last night.",
    "That sounds like a really fun night! I'm glad you got to spend time with your friends.",
  ],
  [
    "general/positive",
    "The weather was great so we had a picnic last night.",
    "That sounds like it was a really great time! I'm glad you got to enjoy the nice weather.",
  ],
  [
    "general/positive",
    "My daughter won an academic award.",
    "Congratulations! That's a really impressive accomplishment.",
  ],
  [
    "general/positive",
    "I got really good grades this quarter.",
    "That\u2019s amazing! I\u2019m really proud of you!",
  ],
  [
    "general/positive",
    "The weather is great today.",
    "The sun is out? Must be summertime!",
  ],
  [
    "general/positive",
    "I love my new job.",
    "What's the job like? What are your hours? Do you like your co-workers?",
  ],
  [
    "general/positive",
    "I have such a nice family.",
    "That's great! I'm really happy for you and your family.",
  ],
  [
    "general/positive",
    "Exercising makes me feel great.",
    "That\u2019s great! Keep up the good work!",
  ],
  [
    "general/positive",
    "It was so much fun working in my garden today.",
    "What was your favorite part of working in the garden today?",
  ],
  [
    "general/positive",
    "This weekend we're going to get together with friends.",
    "I wish I had friends to spend the weekend with too.",
  ],
  [
    "general/positive",
    "I'm going to my best friend's wedding on Saturday.",
    "Congratulations! Who is officiating the wedding? What are you wearing?",
  ],
  [
    "general/positive",
    "I'm really enjoying cooking.",
    "You're doing a great job! Keep up the good work.",
  ],
  [
    "general/positive",
    "I took a great run today.",
    "That sounds like a great run! How did it feel? Were there any tough parts?",
  ],
  [
    "general/positive",
    "Picnics are so much fun.",
    "That sounds like so much fun! I\u2019m really happy for you.",
  ],
  [
    "general/positive",
    "I love doing crafts.",
    "I\u2019m really happy for you!",
  ],
  [
    "general/positive",
    "I finished a puzzle last night.",
    "What kind of puzzle was it? Was it difficult?",
  ],
  [
    "general/positive",
    "I'm planning a birthday party for my best friend.",
    "I'm so excited for your party! Let me know if you need help with anything.",
  ],
  [
    "general/positive",
    "My favorite holiday is Thanksgiving.",
    "What do you like to do on Thanksgiving?",
  ],
  [
    "general/positive",
    "I love going to movies.",
    "I love going to movies too! We should go see one together sometime.",
  ],
  [
    "general/positive",
    "I got some beautiful flowers delivered yesterday.",
    "That's amazing! I'm so happy for you!",
  ],
  [
    "general/positive",
    "My closet looks great. I cleaned it over the weekend.",
    "Wow, good for you! That\u2019s amazing! I\u2019m so proud of you!",
  ],
  [
    "general/positive",
    "I went on a really fun date last night.",
    "I'm sorry your date wasn't as good as you wanted it to be.",
  ],
  [
    "general/positive",
    "My girlfriend made me a great dinner last night.",
    "What did she make?",
  ],
  [
    "general/positive",
    "My dog is so friendly.",
    "That's great! I'm happy for you and your dog!",
  ],
  [
    "general/positive",
    "I met some really nice new neighbors today.",
    "That sounds like it was a really great experience! What are they like?",
  ],
  [
    "general/positive",
    "My dog loves when I play with her.",
    "I'm sorry to hear that your dog isn't doing well. Is there anything I can do to help?",
  ],
  [
    "general/positive",
    "I went on a great bike ride this weekend.",
    "Tell me more about your bike ride. What did you see? How did you feel?",
  ],
  [
    "general/positive",
    "It's perfect weather today.",
    "Yeah, it's gorgeous out! I love days like this.",
  ],
  [
    "general/positive",
    "My stress level is so low at this job. ",
    "I know how you feel. I get so stressed out at work sometimes too.",
  ],
  [
    "general/positive",
    "There's a great view spot near my house.",
    "I wish I had a view like that near my house.",
  ],
  [
    "general/positive",
    "We watched a beautiful sunset last night.",
    "That sounds like it was really beautiful! What was it like?",
  ],
  [
    "general/neutral",
    "Tomorrow is supposed to be warm.",
    "I can't wait for summer!",
  ],
  [
    "general/neutral",
    "I take a run every morning.",
    "Good for you! I\u2019m glad you\u2019re taking care of yourself.",
  ],
  [
    "general/neutral",
    "There are still a lot of businesses that mail paper catalogs.",
    "Yeah, I've actually been thinking about doing that for my business.",
  ],
  [
    "general/neutral",
    "I had to get a new coffee maker.",
    "I'm so proud of you for getting a new coffee maker.",
  ],
  [
    "general/neutral",
    "It's a good idea to study every night instead of waiting until the test.",
    "It's definitely important to study for exams.",
  ],
  [
    "general/neutral",
    "I just got a housekeeper.",
    "That\u2019s great! What\u2019s her name? Does she have any kids?",
  ],
  [
    "general/neutral",
    "I usually go out on Friday nights, but this week I'm staying home.",
    "That sounds like a great idea! I'm sure you'll have a blast.",
  ],
  [
    "general/neutral",
    "I've been listening to books on tape.",
    "That sounds like a really interesting book! What\u2019s it about?",
  ],
  [
    "general/neutral",
    "My friends went to a movie over the weekend.",
    "I\u2019m so jealous! I wish I had been able to go with you guys.",
  ],
  [
    "general/neutral",
    "There are some new shows on tv.",
    "Are the new shows any good? What do other people think about them?",
  ],
  [
    "general/neutral",
    "I'm looking for a job.",
    "Good luck! I'm sure you'll find something soon.",
  ],
  [
    "general/neutral",
    "I applied for a few jobs.",
    "I'm sorry the job hunt has been tough recently. I know you're a great candidate and you'll find something soon.",
  ],
  [
    "general/neutral",
    "I gave my dog a bath last night.",
    "How did the bath go? Was your dog cooperative?",
  ],
  [
    "general/neutral",
    "They make decent food there.",
    "I\u2019m glad you liked it! You should definitely go back and try it again!",
  ],
  [
    "general/neutral",
    "I had to finish a paper last night.",
    "I'm really proud of you for finishing your paper.",
  ],
  [
    "general/neutral",
    "The professor assigned us some readings this week.",
    "That sucks, I'm sorry you have to do readings.",
  ],
  [
    "general/neutral",
    "I rearranged my furniture last weekend.",
    "What made you decide to rearrange your furniture? Was it a lot of work?",
  ],
  [
    "general/neutral",
    "Our refridgerator is pretty full right now.",
    "I'm sorry, our refridgerator is pretty full right now.",
  ],
  [
    "general/neutral",
    "I tried a new kind of tea yesterday.",
    "I'm sorry, what kind of tea was it? I hope you liked it.",
  ],
  [
    "general/neutral",
    "I gave my sister some of my shoes that I never wear. ",
    "That was really sweet of you! Your sister is lucky to have you as a brother.",
  ],
  [
    "general/neutral",
    "I'm trying to find some new activities.",
    "That sounds like a great idea! I'm glad you're trying something new.",
  ],
  [
    "general/neutral",
    "I finally had a chance to read the news today.",
    "What was the most interesting thing you read? I\u2019m dying to know!",
  ],
  [
    "general/neutral",
    "The coffee store near me closed.",
    "At least you don't have to worry about caffeine addiction anymore.",
  ],
  [
    "general/neutral",
    "I'm doing some cooking today.",
    "That's great! I'm sure it will taste delicious.",
  ],
  [
    "general/neutral",
    "I'm recording some tv shows.",
    "Wow, I can\u2019t wait to see them! What are they about?",
  ],
  [
    "general/neutral",
    "My friend is going back to school.",
    "That's great! Why did your friend decide to go back to school?",
  ],
  [
    "general/neutral",
    "I've been taking some online courses.",
    "I'm really proud of you for taking the initiative to learn new things. How are you finding the courses?",
  ],
  [
    "general/neutral",
    "This was a rainy winter.",
    "That sounds really tough. I'm sorry.",
  ],
  [
    "general/neutral",
    "My friend is studying to be a pharmacist.",
    "That\u2019s great! I think being a pharmacist is a really rewarding career.",
  ],
  [
    "general/neutral",
    "I had to buy some stamps today.",
    "Did you find the four-leaf clover stamp?",
  ],
  [
    "general/neutral",
    "I'm working on a puzzle with a lot of pieces.",
    "How's your puzzle going? Do you need help with it?",
  ],
  [
    "general/neutral",
    "I downloaded a few new songs this morning.",
    "That's awesome! I can't wait to hear them. What kind of music are they?",
  ],
  [
    "general/neutral",
    "I try and exercise every day.",
    "That\u2019s really great that you exercise every day. I wish I had that kind of discipline.",
  ],
  [
    "general/neutral",
    "My boyfriend is going to visit his family this weekend.\\",
    "It will be okay, I promise. He always comes back to visit his family eventually. Plus, you can always call or text him while he\u2019s gone if you need to talk to him.",
  ],
  [
    "general/neutral",
    "I helped my best friend move over the weekend.",
    "That's great! I'm happy you could help your best friend move.",
  ],
  [
    "general/neutral",
    "My parents just moved out of state.",
    "That's really tough. I'm here for you if you need to talk.",
  ],
  [
    "general/neutral",
    "I got some new prescription glasses.",
    "Your new glasses look great! They bring out the color of your eyes.",
  ],
  [
    "general/neutral",
    "I need some new workout clothes.",
    "That sounds great! I know just the place to go. Let\u2019s go shopping together!",
  ],
  [
    "general/neutral",
    "My friend gave me some books to read.",
    "That's so generous of your friend! I'm sure you'll enjoy them.",
  ],
  [
    "general/neutral",
    "I got to work early today.",
    "Wow, that\u2019s great! I\u2019m really proud of you.",
  ],
  [
    "general/neutral",
    "Tomorrow my coworkers want to go to lunch.",
    "That sounds like so much fun! I wish I could go too!",
  ],
  [
    "general/neutral",
    "I ordered some food to be delivered today.",
    "I\u2019m so happy you ordered food! I can\u2019t wait to try it!",
  ],
  [
    "general/neutral",
    "I had to make a powerpoint for my boss today.",
    "If you don't like making PowerPoint presentations, maybe you could try using Prezi or Google Slides instead.",
  ],
  [
    "general/neutral",
    "My friend is writing a book.",
    "That\u2019s amazing! Congratulations! I can\u2019t wait to read it! When will it be published?",
  ],
  [
    "general/neutral",
    "I need to go to the hardware store.",
    "I\u2019ll go with you to the store. Are you sure you\u2019re feeling okay? You seem a little out of it today.",
  ],
  ["general/neutral", "I'm almost out of milk.", "Why do you need milk?"],
  [
    "general/neutral",
    "My fridge is empty. I need to go shopping.",
    "Do you usually make a list before you go grocery shopping?",
  ],
  [
    "general/neutral",
    "My sister is taking some time off work.",
    "I'm so glad she's taking some time for herself. She deserves it.",
  ],
  [
    "general/neutral",
    "I got some vitamins today.",
    "Good for you! I'm proud of you for taking care of yourself.",
  ],
  [
    "general/neutral",
    "I read the news this morning.",
    "That sounds really interesting! What were your thoughts on it?",
  ],
  [
    "general/neutral",
    "I've been watching a documentary.",
    "What's the documentary about? I'm interested in hearing more. Do you like documentaries about history or current events?",
  ],
  [
    "general/neutral",
    "My boyfriend got a hair cut yesterday.",
    "I\u2019m sorry to hear that. I hope you\u2019re doing okay.",
  ],
  [
    "general/neutral",
    "My friends took a hike yesterday.",
    "I\u2019m really happy for you! I know how much you love hiking.",
  ],
  [
    "general/neutral",
    "There wasn't much traffic today.",
    "Did you listen to any good podcasts on your drive?",
  ],
  [
    "general/neutral",
    "I've been studying Spanish.",
    "That's great! I'm sure you'll be able to learn Spanish quickly.",
  ],
  [
    "general/neutral",
    "I took an online course last week.",
    "That\u2019s great! I\u2019m really proud of you for taking the initiative to learn something new.",
  ],
  [
    "general/neutral",
    "I need to get units for my license.",
    "You should talk to your advisor about how to get units for your license.",
  ],
  [
    "general/neutral",
    "We had a work meeting today.",
    "Really? What happened at the meeting? Tell me more!",
  ],
  [
    "general/neutral",
    "My boss discussed a long term plan today.",
    ", What is a long term plan? Do you mean like a retirement plan?",
  ],
  [
    "general/neutral",
    "I finally did the laundry today.",
    "That\u2019s great! I\u2019m really proud of you for doing that!",
  ],
  [
    "general/neutral",
    "This month went by so quickly.",
    "It sounds like you're feeling a little overwhelmed. Is everything okay?",
  ],
  [
    "general/neutral",
    "It's been a busy week.",
    "That sounds really tough. Do you want to talk about it?",
  ],
  [
    "general/neutral",
    "We have had a fair amount of work this week. ",
    "At least we get paid to do this.",
  ],
  [
    "general/neutral",
    "I usually read non-fiction books.",
    "I usually read fiction books, but I\u2019m interested in hearing more about why you like reading non-fiction. What are some of your favorite non-fiction books?",
  ],
  [
    "general/neutral",
    "My friend's son is moving back home.",
    "That's great! I'm sure your friend is excited to have her son back home.",
  ],
  [
    "general/neutral",
    "I relaxed at home over the weekend. ",
    "That sounds like it was a really relaxing weekend for you.",
  ],
  [
    "general/neutral",
    "I get two weeks vacation a year. ",
    "It sounds like you\u2019re not really looking forward to your vacation. Is everything okay?",
  ],
  [
    "general/neutral",
    "I listened to a book on tape during my drive.",
    "What was the book about? I\u2019ve been looking for a new book to read!",
  ],
  [
    "general/neutral",
    "I read the news online.",
    "Oh, I'm sorry to hear that. Do you want to talk about it?",
  ],
  [
    "general/neutral",
    "We decided to meet online.",
    "I think it's great that you're giving it a try!",
  ],
  [
    "general/negative",
    "My brother and I got in an argument last night.",
    "It\u2019s okay that you got into an argument with your brother. Do you want to talk about what happened? I\u2019m here for you.",
  ],
  [
    "general/negative",
    "I had an upset stomach last night.",
    "Poor thing! Here, have some of my tea. It will make you feel better.",
  ],
  [
    "general/negative",
    "I was so sick over the weekend.",
    "That\u2019s great. I\u2019m really happy for you.",
  ],
  [
    "general/negative",
    "I overslept this morning and was late to work.",
    "It's okay, everyone oversleeps sometimes. I'm sure you had a good reason.",
  ],
  [
    "general/negative",
    "My girlfriend has been visiting her family and I miss her.",
    "You should text her or call her! I\u2019m sure she misses you too.",
  ],
  [
    "general/negative",
    "My boyfriend lost his job.",
    "I'm so happy for you! This is great news!",
  ],
  [
    "general/negative",
    "My cat ate something and was so sick last night.",
    "Oh no! What did your cat eat? Is she going to be okay?",
  ],
  [
    "general/negative",
    "I had the flu that lasted a week.",
    "It's good that you got it over with quickly. Now you'll be immune to it!",
  ],
  [
    "general/negative",
    "It's been too busy at work to take a vacation.",
    "It sounds like it's been really tough at work lately. I'm here for you if you need to talk.",
  ],
  [
    "general/negative",
    "I applied for three jobs and didn't get any call backs.",
    "I'm sorry to hear that. Do you want to talk about it?",
  ],
  [
    "general/negative",
    "I was interviewed for a job but someone else got it.",
    "I know how you feel. I was rejected from my dream school too.",
  ],
  [
    "general/negative",
    "My aunt wants to visit but my house is too small. ",
    "I know how you feel. My house is small too and I get overwhelmed when people come to stay. But it's always worth it in the end because it's nice to catch up with family.",
  ],
  [
    "general/negative",
    "I could't figure out the new computer program.",
    "That sounds like a tough problem. Let me see if I can help you figure it out.",
  ],
  [
    "general/negative",
    "My friend's mother died over the weekend.",
    "I'm sorry, I don't know what to say.",
  ],
  [
    "general/negative",
    "My best friend just found out she has cancer.",
    "That\u2019s really tough. I\u2019m sorry she has to go through that.",
  ],
  [
    "general/negative",
    "I had to wait in a really long line at the bank.",
    "I know how you feel! I had to wait in a long line at the bank yesterday too.",
  ],
  [
    "general/negative",
    "My landlord is raising the rent.",
    "I'm so sorry to hear that. Have you considered looking for a new place to live?",
  ],
  [
    "general/negative",
    "I have to move out of my apartment.",
    "When do you need to be out of your apartment? Have you started looking for a new place?",
  ],
  [
    "general/negative",
    "My landlord sold the house so I have to move out.",
    "At least you have a place to stay for now and you\u2019ll be able to find a new place that you love even more!",
  ],
  [
    "general/negative",
    "It's been horrible weather.",
    "That sounds really rough. I\u2019m sorry it\u2019s been so tough for you.",
  ],
  [
    "general/negative",
    "I need to move to a state with a better climate.",
    "That sounds really tough. I\u2019m sorry you\u2019re not happy here. Do you have any place in mind?",
  ],
  [
    "general/negative",
    "The movie we went to last night was horrible. ",
    "I didn't think it was that bad. I actually liked it.",
  ],
  [
    "general/negative",
    "I got into a fender bender yesterday.",
    "That sounds like it was really tough. I\u2019m here for you if you need to talk.",
  ],
  [
    "general/negative",
    "My paycheck didn't get deposited this month.",
    "I'm so sorry to hear that. Is there anything I can do to help you out?",
  ],
  [
    "general/negative",
    "I didn't get a bonus this month which is depressing.",
    "Hey, at least you still have a job! That's more than I can say.",
  ],
  [
    "general/negative",
    "I work so hard and my boss just keeps giving me more work.",
    "That sounds really tough. I've been there before and it's so frustrating.",
  ],
  [
    "general/negative",
    "My purse got stolen last night.",
    "That sounds really difficult. I\u2019m here for you if you need to talk about it.",
  ],
  [
    "general/negative",
    "My house was broken into yesterday.",
    "Oh my gosh, are you okay? What happened? Do you need a place to stay?",
  ],
  [
    "general/negative",
    "I think I'm getting the flu.",
    "Do you need help with anything? Can I get you anything?",
  ],
  [
    "general/negative",
    "I feel under the weather today.",
    "I'm sorry to hear that you're feeling under the weather. Is there anything I can do to help you feel better?",
  ],
  [
    "general/negative",
    "I think I'm getting sick.",
    "I'm sorry to hear that. Do you want to talk about it?",
  ],
  [
    "general/negative",
    "I feel really tired today.",
    "You can do it! I know you're tired but you're strong!",
  ],
  [
    "general/negative",
    "My co-worker came to work sick and we had a lot of meetings together.",
    "That sounds really tough. I\u2019m so sorry you have to deal with that. Is there anything I can do to help you?",
  ],
  [
    "general/negative",
    "My son was sick and I had to leave work to pick him up yesterday.",
    "Oh no, that must have been really tough for you yesterday. I\u2019m here for you if you need to talk about it.",
  ],
  [
    "general/negative",
    "It's way too hot out for me.",
    "It sounds like it's really tough for you.",
  ],
  [
    "general/negative",
    "My credit card company is charging me a lot of interest even though I'm paying the minimum each month.",
    "That sounds really tough. I\u2019m here for you if you need to talk about it more.",
  ],
  [
    "general/negative",
    "I got a new job but I don't feel comfortable yet.",
    "It's okay to feel a little uncomfortable at first. Just give it some time and you'll get used to it.",
  ],
  [
    "general/negative",
    "My boss got mad at me today.",
    "That sounds really difficult. I'm here for you if you want to talk about it.",
  ],
  [
    "general/negative",
    "I got in a car accident last week.",
    "That sounds really scary. I'm glad you're okay. Do you want to talk about it?",
  ],
  [
    "general/negative",
    "My car broke down on the freeway this morning and I was late to work.",
    "That sounds really frustrating. Have you called a tow truck?",
  ],
  ["general/negative", "I got a fix-it ticket.", "What did you do?"],
  [
    "general/negative",
    "I have some unpaid traffic tickets.",
    "That sounds really difficult. I'm sorry you're going through that.",
  ],
  [
    "general/negative",
    "My bike has a flat tire.",
    "That sounds really tough. I\u2019m here for you and I\u2019ll help you fix it.",
  ],
  [
    "general/negative",
    "I wanted to go for a run but it started raining.",
    "That sounds really frustrating. I hope the rain clears up soon so you can go for your run.",
  ],
  [
    "general/negative",
    "My sister got mad at me.",
    "I'm sorry she's mad at you. That sounds really tough.",
  ],
  [
    "general/negative",
    "I have a really bad toothache. ",
    "I hope you get better soon. I don't want to get a toothache too.",
  ],
  [
    "general/negative",
    "It's been a slow week.",
    "Hang in there! I'm sure things will get better.",
  ],
  [
    "general/negative",
    "Today was so boring.",
    "I\u2019m sorry your day was so boring. Maybe tomorrow will be better.",
  ],
  [
    "general/negative",
    "I like to shop but never have time.",
    "I can help you fit shopping into your schedule. Let me know when you're free and we'll work something out.",
  ],
  [
    "general/negative",
    "My grandmother passed away last night.",
    "At least she didn't suffer. She went quickly.",
  ],
  [
    "general/negative",
    "My boyfriend has been really sick.",
    "I\u2019m so sorry to hear that. What can I do to help you?",
  ],
  [
    "general/negative",
    "I stubbed my toe and it really hurts.",
    "That sounds really painful. I\u2019m so sorry you have to go through that.",
  ],
  [
    "general/negative",
    "We had to take my friend to the emergency hospital last night.",
    "I\u2019m so sorry. I don\u2019t know what to say. Is there anything I can do?",
  ],
  [
    "general/negative",
    "I had horrible insomnia last night.",
    "It's good that you're trying to get help for your insomnia.",
  ],
  [
    "general/negative",
    "My husband snores and it keeps waking me up.",
    "That sounds really tough. Is there anything I can do to help you?",
  ],
  [
    "general/negative",
    "My dog barked all night and I couldn't sleep.",
    "At least your dog is healthy and you have a roof over your head.",
  ],
  [
    "general/negative",
    "My cat scratched up my new sofa.",
    "Aww, that's too bad. I'm sorry.",
  ],
  [
    "general/negative",
    "I just got evicted.",
    "I'm sorry to hear that. It's just a set-back though, you'll get through it.",
  ],
  [
    "general/negative",
    "My apartment is so noisy.",
    "That's awful! I would be complaining to the landlord if I were you.",
  ],
  [
    "general/negative",
    "I got stuck in horrible traffic today.",
    "Well, at least you made it home in one piece. That's the important thing.",
  ],
  [
    "general/negative",
    "I twisted my ankle today.",
    "It\u2019s going to be okay. You\u2019ll heal quickly and be back to normal in no time.",
  ],
  [
    "general/negative",
    "My knee has been bothering me.",
    "Oh, honey, don't cry!",
  ],
  [
    "general/negative",
    "I went to the pharmacy but my prescription wasn't ready.",
    "I'm sorry to hear that. I know it's not fun to deal with.",
  ],
  [
    "general/negative",
    "I haven't found any new shows I like.",
    "I'm glad you found a new show you like!",
  ],
  [
    "general/negative",
    "My doctor was really late for my appointment.",
    "That sounds really frustrating. I wish there was something I could do to help.",
  ],
  [
    "general/negative",
    "I totally said the wrong thing to my co-worker.",
    "Let\u2019s brainstorm some solutions to your problem.",
  ],
  [
    "general/negative",
    "I feel so badly about hurting my sister's feelings.",
    "That sounds really tough. I'm here for you if you want to talk.",
  ],
  [
    "general/negative",
    "I hate it when people complain.",
    "That sounds really tough. I\u2019m here for you if you want to talk about it more.",
  ],
  [
    "general/negative",
    "I have a friend who is so negative.",
    "That sounds really tough. I'm sorry you have to deal with that.",
  ],
  [
    "general/negative",
    "My brother complains to me every time he has a fight with his girlfriend.",
    "It sounds like it's really hard for you to hear your brother fight all the time. I'm here for you if you need to talk.",
  ],
  [
    "general/negative",
    "My brother only calls me when he wants to borrow money.",
    "I know how you feel. My brother doesn\u2019t call me either.",
  ],
  [
    "general/negative",
    "It rained so hard and flooded my backyard.",
    "I remember one time I got caught in a downpour and my umbrella turned inside out. It was so funny.",
  ],
  [
    "general/negative",
    "There has been a drought and everything is dying.",
    "It's going to be okay. We will get through this together.",
  ],
  [
    "general/negative",
    "My mom is really sick.",
    "I\u2019m so sorry to hear that. I\u2019ll be praying for your mom. Let me know if there\u2019s anything I can do to help.",
  ],
];

export default general_statements;
