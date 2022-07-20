const work_statements = [
  [
    "work/positive",
    "This is such a great job.",
    "I'm really happy for you! You deserve it.",
  ],
  [
    "work/positive",
    "I love working at this place.",
    "I'm really happy for you! That's great news!",
  ],
  [
    "work/positive",
    "My co-workers are really nice.",
    "I'm really happy for you! It's great that you have such good relationships with your co-workers.",
  ],
  [
    "work/positive",
    "My co-workers are really supportive.",
    "That's great! Keep up the good work!",
  ],
  [
    "work/positive",
    "Everyone works as a team around here.",
    ", 'I'm really happy for you! It sounds like you've found a place where you fit in and can contribute.",
  ],
  [
    "work/positive",
    "I got a pay raise.",
    "Congratulations! That\u2019s wonderful news! I knew you could do it!",
  ],
  [
    "work/positive",
    "My boss said I'm doing a great job.",
    "Tell me more about what your boss said! I\u2019m so happy for you.",
  ],
  [
    "work/positive",
    "My boss really liked the project I just finished.",
    "That's fantastic! I'm really happy for you.",
  ],
  [
    "work/positive",
    "I complimented my co-worker on doing such a great job. ",
    "That was really nice of you! I\u2019m sure it made their day.",
  ],
  [
    "work/positive",
    "I finished a big project at work.",
    "That\u2019s great! I\u2019m so happy for you!",
  ],
  [
    "work/positive",
    "We got a lot of new customers at the company,",
    "I'm going to help out with the new customer project!",
  ],
  [
    "work/positive",
    "Everyone really likes our products.",
    "Really? Why do you think that?",
  ],
  [
    "work/positive",
    "I'm so glad I switched jobs. This is a great place to work.",
    "That sounds amazing! Tell me more about your job.",
  ],
  [
    "work/positive",
    "My boss is super nice.",
    "That's great! I'm really happy for you.",
  ],
  [
    "work/positive",
    "I got a bonus last month.",
    "What did you do with the extra money? Save it, spend it, or invest it?",
  ],
  [
    "work/positive",
    "My boss gave me a bigger office.",
    ", 'That's great news! Congratulations!",
  ],
  [
    "work/positive",
    "Our company moved to a really nice building. ",
    "Yeah, the new building is really nice!",
  ],
  [
    "work/positive",
    "I have met so many nice people at work.",
    "That\u2019s great! What do they do?",
  ],
  [
    "work/positive",
    "Everyone at work is so friendly.",
    "I'm really happy for you! It's great that you've found a place where you can be yourself.",
  ],
  [
    "work/positive",
    "I feel really supported at work.",
    "What happened at work that made you feel supported?",
  ],
  [
    "work/positive",
    "It's been a great quarter at work.",
    "I'm happy for you, but I'm also really jealous.",
  ],
  [
    "work/positive",
    "I have such a fun job.",
    "That's great! I'm really happy for you.",
  ],
  [
    "work/positive",
    "Work is going great.",
    "That's great! I'm really happy for you.",
  ],
  [
    "work/positive",
    "I'm so glad to have such a great job.",
    "That\u2019s great! I\u2019m really happy for you!",
  ],
  [
    "work/positive",
    "I have really great co-workers.",
    "I\u2019m really happy for you. That must make work a lot more enjoyable for you.",
  ],
  [
    "work/positive",
    "I love my office mate.",
    "That\u2019s great! What do you love about your office mate?",
  ],
  [
    "work/positive",
    "My boss complimented me today.",
    "What are you going to do now that your boss has noticed you?",
  ],
  [
    "work/positive",
    "I got a promotion at work.",
    "I'm so proud of you! I knew you could do it!",
  ],
  [
    "work/positive",
    "I get to hire an assistant.",
    "That's great! How did you get the job?",
  ],
  [
    "work/positive",
    "We have great restaurants near the office.",
    "You should definitely try them out! I'm sure you'll find a new favorite.",
  ],
  [
    "work/positive",
    "There are really good food trucks near my office.",
    "I'm so excited to try them! I love food trucks!",
  ],
  [
    "work/positive",
    "One of my colleagues sent me a really nice email.",
    "What did it say?",
  ],
  [
    "work/positive",
    "The project I've been working on turned out great. ",
    "Congratulations! That's amazing news! I'm so happy for you!",
  ],
  [
    "work/positive",
    "My boss is so understanding.",
    "I know how you feel. My boss is really understanding too.",
  ],
  [
    "work/positive",
    "We have a great team at work.",
    "That sounds like a lot of pressure. Are you doing okay?",
  ],
  [
    "work/positive",
    "Everyone pitches in at work.",
    "Why do you think that everyone pitches in at work?",
  ],
  [
    "work/neutral",
    "It's a bit slow today.",
    "Are you sure you're okay? You seem really down.",
  ],
  [
    "work/neutral",
    "I had a lot of phone calls today.",
    "You don't have to tell me about your phone calls if you don't want to.",
  ],
  [
    "work/neutral",
    "I organized my desk this week.",
    "How did it make you feel when you organized your desk?",
  ],
  [
    "work/neutral",
    "The supply room has been restocked.",
    "That\u2019s terrific! I\u2019m really happy for you.",
  ],
  [
    "work/neutral",
    "I did a lot of organizing today at work.",
    "That\u2019s great! I\u2019m really proud of you.",
  ],
  [
    "work/neutral",
    "Work is slow, but not boring.",
    "Keep going, I\u2019m interested!",
  ],
  [
    "work/neutral",
    "We got lots of mail today.",
    "I'm so jealous! I wish I had gotten mail today.",
  ],
  [
    "work/neutral",
    "Everything at work is sorted and recycled. ",
    "That's amazing! I'm so proud of you for doing something that you're passionate about.",
  ],
  [
    "work/neutral",
    "We have a green program at work.",
    "Can you tell me more about the program? I\u2019d love to learn how I can help.",
  ],
  [
    "work/neutral",
    "Our company merged with a larger one.",
    "Who is the new company? What does this mean for our jobs? What is the timeline for the merger?",
  ],
  [
    "work/neutral",
    "It was an average day at work.",
    "That sounds like it was a tough day. I\u2019m here for you if you want to talk about it.",
  ],
  [
    "work/neutral",
    "I don't love my job but I don't hate it either.",
    "At least you have a job! I\u2019d kill for a job! or You\u2019re so lucky to have a job! I\u2019d love to be in your position!",
  ],
  [
    "work/neutral",
    "Work is fine. ",
    "That sounds like it's been tough. I'm sorry to hear that you're not enjoying your work.",
  ],
  [
    "work/neutral",
    "It's a bit slow at work today.",
    "Wow! That sounds like a really tough day. I'm here for you if you need to talk about it.",
  ],
  [
    "work/neutral",
    "I get to work on time everyday.",
    "That\u2019s great! I\u2019m really happy for you!",
  ],
  [
    "work/neutral",
    "I had some computer work to do at work today.",
    "That sounds like it was really tough. I'm sorry you had to do it.",
  ],
  [
    "work/neutral",
    "Nothing much happened at work today.",
    "Did anything interesting or exciting happen today? Did you learn anything new?",
  ],
  [
    "work/neutral",
    "Today was pretty calm. ",
    "I\u2019m so glad you had a calm day! That sounds like it was really good for you.",
  ],
  [
    "work/neutral",
    "Apparently there's going to be a few new people around the office. ",
    "That's really cool! I'm excited to meet them.",
  ],
  [
    "work/neutral",
    "Sometimes I love my boss and other days I don't. ",
    "It sounds like you're having a tough time, but I'm sure your boss is a good person.",
  ],
  [
    "work/neutral",
    "Some of my coworkers are great and others aren't very on top of their work. ",
    "That sounds really tough. I'm here for you if you need to talk about it.",
  ],
  [
    "work/neutral",
    "There's a mini fridge in the breakroom if you bring your own lunch. ",
    "Yeah, it's really convenient to have a mini fridge in the breakroom.",
  ],
  [
    "work/neutral",
    "Mondays through Wednesdays are typically busy, and Thursdays and Fridays are a bit slower.  ",
    "I know how you feel. I\u2019m usually busy during the week too.",
  ],
  [
    "work/neutral",
    "We got our ratings back and they were pretty avergae, not too bad and not too great. ",
    "It's not the end of the world. I know you'll do better next time.",
  ],
  [
    "work/neutral",
    "Pretty much everyone in the office is married with families. ",
    "That must be really hard for you, being the only one without a family.",
  ],
  [
    "work/neutral",
    "There's a no fratinizing policy at the office. ",
    "I\u2019m sorry that the policy is preventing you from fraternizing with your colleagues. That must be really tough for you.",
  ],
  [
    "work/neutral",
    "We have our work party coming up soon. ",
    "I'm so excited for you! I can't wait to hear about it.",
  ],
  [
    "work/neutral",
    "We should restock some of the office supplies. ",
    "Only if you promise to do all the restocking yourself!",
  ],
  [
    "work/neutral",
    "There's going to be some construction going on in the office over the next week. ",
    "That sounds really inconvenient. I'm sorry to hear that.",
  ],
  [
    "work/neutral",
    "Some of us are going to a convention in a few days for work.   ",
    "I know you'll do great! You're really good at your job.",
  ],
  [
    "work/neutral",
    "The company just signed an agreement. ",
    "That sounds like great news! I\u2019m so happy for you!",
  ],
  [
    "work/neutral",
    "We're updating our contracts. ",
    "Why are you updating the contracts? What kind of changes are you making?",
  ],
  [
    "work/neutral",
    "One of our collegues will be out of town for the next few days. ",
    "Where are they going and for how long?",
  ],
  [
    "work/negative",
    "This job is so boring.",
    "It sounds like you\u2019re really unhappy with your job right now, but I\u2019m sure things will get better. Just hang in there!",
  ],
  [
    "work/negative",
    "I hate going to work.",
    "Have you tried looking for a new job?",
  ],
  [
    "work/negative",
    "My boss gives me too many things to do.",
    "That sounds really tough. I\u2019ve been there before and it\u2019s not fun.",
  ],
  [
    "work/negative",
    "I'm really stressed out about work.",
    "It sounds like things are really tough for you right now. I'm here for you and I know you'll get through this.",
  ],
  [
    "work/negative",
    "I have too much responsibility at work.",
    "That sounds really tough. I'm here for you if you want to talk about it.",
  ],
  [
    "work/negative",
    "My boss is always getting mad at me.",
    "Maybe you could try talking to your boss about how you feel and see if there\u2019s anything you can do to improve the situation.",
  ],
  [
    "work/negative",
    "I hate having to get to work so early.",
    "It's tough getting used to waking up early, but you'll get used to it.",
  ],
  [
    "work/negative",
    "I'm really tired of my job.",
    "It sounds like you're really going through a tough time. I'm here for you and I know things will get better.",
  ],
  [
    "work/negative",
    "I really need to get a different job.",
    "It sounds like you're feeling frustrated with your current situation. Have you considered looking for a new job?",
  ],
  [
    "work/negative",
    "I hate my job.",
    "That sounds really tough. I'm here for you if you need to talk.",
  ],
  [
    "work/negative",
    "Work is too busy and stressful.",
    "You\u2019re telling me that work has been really tough for you lately and that it\u2019s been causing you a lot of stress.",
  ],
  [
    "work/negative",
    "It's so noisy at work I can't get anything done.",
    "That's awful! I can't believe they would make you work in such conditions.",
  ],
  [
    "work/negative",
    "My boss is really mean.",
    "That sounds really tough. I'm here for you if you need to talk.",
  ],
  [
    "work/negative",
    "One of my co-workers doesn't do his share.",
    "It will all work out in the end. Just hang in there.",
  ],
  [
    "work/negative",
    "I always get blamed for unfinished projects.",
    ", That sounds really frustrating. I\u2019m sorry that keeps happening to you.",
  ],
  [
    "work/negative",
    "Work is so slow and boring.",
    "Don't worry! Things will get better.",
  ],
  [
    "work/negative",
    "I hate having to stay late to finish work projects.",
    "That sounds really frustrating. I\u2019m sorry that you have to deal with that.",
  ],
  [
    "work/negative",
    "I sometimes have to work on the weekends to finish projects.",
    "That sounds really tough. I\u2019m sorry you have to go through that.",
  ],
  [
    "work/negative",
    "I'm always worried I'll get fired.",
    "Don't worry, I'm sure you won't get fired.",
  ],
  [
    "work/negative",
    "My boss doesn't give me any support.",
    "It sounds like things are tough right now, but I'm sure it will get better.",
  ],
  [
    "work/negative",
    "I should have an assistant but my boss doesn't want to spend them money.",
    "That sounds really difficult. I'm here for you if you need to talk or want help with anything.",
  ],
  [
    "work/negative",
    "My boss always asks me to lay off people. ",
    "That sounds really difficult. I can\u2019t imagine having to do that.",
  ],
  [
    "work/negative",
    "My hours got cut back at work and I'm afraid I won't be able to pay my bills.",
    "I'm so sorry to hear that. Let me see if I can help you out.",
  ],
  [
    "work/negative",
    "My co-worker always gives me jobs he doesn't want.",
    "That sounds really rough. I'm here for you if you need to talk.",
  ],
  [
    "work/negative",
    "I can't wait to find a new job. I hate this one.",
    "Have you tried looking for a new job?",
  ],
  [
    "work/negative",
    "This job is just a placeholder until I get a better one.",
    "This job might not be your dream job, but it\u2019s a great way to gain experience in the field you want to pursue.",
  ],
  [
    "work/negative",
    "One of my colleagues is so mean to everyone.",
    "I'm sorry she's been making your life difficult. Do you want to talk about it?",
  ],
  [
    "work/negative",
    "My boss dug into me today at work. ",
    "That sounds really tough. I'm here for you though, and I know you can get through it.",
  ],
  [
    "work/negative",
    "I'm drowning in work right now. ",
    "That sounds really tough. I'm here for you if you need to talk.",
  ],
  [
    "work/negative",
    "We're expected to pay for our own supplies. ",
    "That sounds really hard. I'm sorry that you have to deal with that.",
  ],
  [
    "work/negative",
    "We had to take pay cuts so that they wouldn't have to lay people off. ",
    "That sounds really tough. I'm sorry to hear that. What happened?",
  ],
  [
    "work/negative",
    "My contract is up soon. ",
    "It\u2019s okay, I\u2019m sure everything will work out in the end.",
  ],
  [
    "work/negative",
    "I sent some resumes out and didn't hear back from anyone. ",
    "That sounds really tough. I'm sorry you're going through this.",
  ],
  [
    "work/negative",
    "I work so much I rarely get time to take a lunch. ",
    "I know it's hard when you're so busy, but try to take a break when you can.",
  ],
  [
    "work/positive",
    "I have been able to help out our new employee.",
    "That's great! I'm sure our new employee appreciated your help.",
  ],
  [
    "work/positive",
    "We took our new employee out to dinner last night.",
    "Wow, how was it? What did you guys talk about?",
  ],
  [
    "work/positive",
    "We have a great happy hour once a month at work.",
    "That's great! I'm really happy for you.",
  ],
  [
    "work/positive",
    "My boss really appreciated how much effort I put in.",
    "That's great! What did you do?",
  ],
  [
    "work/positive",
    "My co-workers took me out for my birthday.",
    "That sounds like a really fun time! I\u2019m glad your co-workers took you out to celebrate.",
  ],
  [
    "work/positive",
    "Everyone at work chipped in and bought me flowers.",
    "Congratulations! That's really great that you got flowers at work.",
  ],
  [
    "work/positive",
    "I got a brand new computer.",
    "Good job! I knew you could do it!",
  ],
  [
    "work/positive",
    "I got my own private office at work.",
    "I\u2019m happy for you.",
  ],
  [
    "work/positive",
    "My boss gave me an assistant to help me out.",
    "I think it's great that you have an assistant! I'm sure they will be a big help to you.",
  ],
  [
    "work/positive",
    "My boss gave me the afternoon off since we've been working so hard.",
    "That's amazing! What are you going to do with your free time?",
  ],
  [
    "work/positive",
    "I love our new work projects.",
    "This project is going to be so amazing! I can't wait to get started.",
  ],
  [
    "work/positive",
    "This is a great place to work.",
    "It\u2019s a good place to work.",
  ],
  [
    "work/positive",
    "My new assignment is really fun.",
    "I'm so happy for you. I'm sure you'll do great.",
  ],
  [
    "work/positive",
    "I have great colleagues.",
    "That sounds like they're really great! Tell me more about them.",
  ],
  [
    "work/positive",
    "My coworkers are so nice.",
    "That sounds like they\u2019re really supportive of you. Do you feel like you have a good relationship with them?",
  ],
  [
    "work/positive",
    "I have the best job.",
    "Seriously? You really believe that?",
  ],
  [
    "work/positive",
    "I have been working at this place for so long because I love it.",
    "Why do you love it so much? What are some of your favorite things about it?",
  ],
  [
    "work/positive",
    "I get bonuses at work twice a year.",
    "That's terrific! What are you going to do with the extra money?",
  ],
  [
    "work/positive",
    "Everyone at work is so kind.",
    "That\u2019s great! I\u2019m really happy for you.",
  ],
  [
    "work/positive",
    "My boss lets me work from home when I want.",
    "How often do you get to work from home? And what do you like about it?",
  ],
  [
    "work/positive",
    "We have great food trucks near work.",
    "Yeah, the food trucks are great.",
  ],
  [
    "work/positive",
    "I'm glad I can use my skills at the office.",
    "I'm glad you're using your skills in a way that makes you happy. Keep up the good work!",
  ],
  [
    "work/positive",
    "Everyone appreciates me at work.",
    "Yes, it feels great to be appreciated.",
  ],
  [
    "work/positive",
    "My coworkers and I carpool to work and have great discussions.",
    "It sounds like you're enjoying your carpool rides. I'm glad you have found a way to connect with your coworkers.",
  ],
  [
    "work/positive",
    "We always celebrate birthdays at work.",
    "Do people actually enjoy that?",
  ],
  [
    "work/positive",
    "My boss is so generous.",
    "That sounds like a tough situation. I\u2019m sorry your boss is being so difficult.",
  ],
  [
    "work/positive",
    "Our company donates to the food bank.",
    "That's really cool! How much did they donate? What will the money be used for?",
  ],
  [
    "work/positive",
    "We collected coats and blankets for the homeless at work.",
    "Why did you decide to do that?",
  ],
  [
    "work/positive",
    "Everyone at work is so thoughtful. ",
    "That\u2019s really nice! What happened?",
  ],
  [
    "work/positive",
    "Our company has been doing well.",
    "That\u2019s amazing news! Congratulations! I am really happy for your company\u2019s successes.",
  ],
  [
    "work/positive",
    "We have some great learning opportunities at work.",
    "That\u2019s great! I\u2019m sure you\u2019ll make the most of them.",
  ],
  [
    "work/positive",
    "My boss complimented me on the project I just finished.",
    "Congratulations! That\u2019s really great news! I knew you could do it!",
  ],
  [
    "work/positive",
    "My workload is totally managable.",
    "Are you sure you\u2019re okay? You look really stressed.",
  ],
  [
    "work/positive",
    "I have some great coworkers.",
    "I'm sorry. I know how you feel.",
  ],
  [
    "work/positive",
    "I am best friends with a colleague from work.",
    "How did you become friends? What do you have in common?",
  ],
  [
    "work/neutral",
    "I love that we finally have new computers, but I can't figure out how to work them. ",
    "It sounds like you are having some trouble adjusting to the new computers. Let me help you figure it out.",
  ],
  [
    "work/neutral",
    "I never get any feedback at work.",
    "That sounds really tough, I\u2019m here for you.",
  ],
  [
    "work/neutral",
    "I work for a large company.",
    "Good for you! I'm happy that you found a job that you like.",
  ],
  [
    "work/neutral",
    "There are a lot of employees at my company.",
    "Wow, you must be really important!",
  ],
  [
    "work/neutral",
    "I travel for work. ",
    "I know how you feel. I've been there before.",
  ],
  [
    "work/neutral",
    "There are a lot of people at the office today",
    "It sounds like you're feeling a little overwhelmed. That's totally understandable. Just take a deep breath and remember that you can handle anything that comes your way.",
  ],
  [
    "work/neutral",
    "They painted the office railings last week",
    "Oh, yeah. I noticed that too.",
  ],
  [
    "work/neutral",
    "I have a two o clock meeting today",
    "Let me know if you need help preparing for your meeting.",
  ],
  [
    "work/neutral",
    "The janitor cleans the office on Saturdays",
    "I wish I had a janitor. My place is always a mess.",
  ],
  [
    "work/neutral",
    "The key to the bathroom is in the back office",
    "That's really interesting! I would love to hear more about it.",
  ],
  [
    "work/neutral",
    "I'm going to the gas station on my way to work today",
    "Do you need help getting anything from the gas station?",
  ],
  [
    "work/neutral",
    "I have a zoom meeting today",
    "That sounds great! I'm happy for you.",
  ],
  [
    "work/neutral",
    "I'm going in to work late today",
    "Do you want me to stay with you tonight so you can get some extra work done?",
  ],
  [
    "work/neutral",
    "There are a lot of meetings today. ",
    "I'm sorry to hear that. Do you want to talk about it?",
  ],
  [
    "work/neutral",
    "There are some new paintings in the office. ",
    "I'm glad you like the paintings. I think they're really cool.",
  ],
  [
    "work/neutral",
    "All of our meeting have been moved online. ",
    "I\u2019m glad we\u2019re meeting online. It\u2019s been really great to see everyone\u2019s faces.",
  ],
  [
    "work/neutral",
    "The meeting today has been postponed. ",
    "Why was the meeting postponed? When will it be rescheduled?",
  ],
  [
    "work/neutral",
    "Our investors are coming into the office today. ",
    "I'm behind you all the way. Good luck today! ",
  ],
  [
    "work/neutral",
    "The general manager will be visiting today. ",
    "That\u2019s great! I\u2019m really happy for you.",
  ],
  [
    "work/neutral",
    "We should check our Yelp page. ",
    "Let's take a look at it together and see what we can do.",
  ],
  [
    "work/neutral",
    "I asked my supervior what it is that I can improve upon. ",
    "What did they say? I'm here to help you.",
  ],
  [
    "work/neutral",
    "I work downtown. ",
    "That sounds really tough. I don\u2019t know how you do it.",
  ],
  [
    "work/neutral",
    "My job requires a lot of reading. ",
    "I feel you, I never have enough time to read either.",
  ],
  [
    "work/neutral",
    "I'm going on break. ",
    "Good for you! You deserve a break.",
  ],
  [
    "work/neutral",
    "This next week is gown to calm down a bit. ",
    "Are you sure? What if something comes up?",
  ],
  [
    "work/neutral",
    "I heard they might expand the office space. ",
    "Oh, that\u2019s cool. I wonder how much bigger they\u2019ll make it.",
  ],
  [
    "work/neutral",
    "We might be getting another receptionist. ",
    "I hope I'm not going to have to train them. I already have enough on my plate.",
  ],
  [
    "work/neutral",
    "They're introducing a new system for us to work through. ",
    "What does the new system do?",
  ],
  [
    "work/neutral",
    "We each have our own email specifically for work. ",
    "I'm sorry to hear that. That sounds really frustrating.",
  ],
  [
    "work/neutral",
    "I need a second opinion on this. ",
    "Your opinion matters to me. I think you can make the right decision.",
  ],
  [
    "work/neutral",
    "In my career there's a very strict pecking order. ",
    "It's great that you have a place in the pecking order at your work!",
  ],
  [
    "work/neutral",
    "Everyone in the office keeps their personal lives to themselves. ",
    "I think it\u2019s good that people can keep their personal lives to themselves at work.",
  ],
  [
    "work/negative",
    "I'm afriad I'm going to get laid off. ",
    "That sounds really tough. I'm here for you if you need to talk.",
  ],
  [
    "work/negative",
    "We got our reviews back and my was not good. ",
    "That sounds really tough. I'm here for you if you want to talk about it.",
  ],
  [
    "work/negative",
    "We had really low ratings this quarter. ",
    "That must be really tough for you. I\u2019m sorry.",
  ],
  [
    "work/negative",
    "We didn't meet our goals for this month. ",
    "We didn't meet our goals, but that's not going to stop us. We'll just try harder next month.",
  ],
  [
    "work/negative",
    "I'm trying so hard at work and I feel like it goes unnoticed. ",
    "I know you\u2019re working hard and I believe in you.",
  ],
  [
    "work/negative",
    "No matter how hard I try, I keep getting told I'm not doing well. ",
    "It's okay, things will get better.",
  ],
  [
    "work/negative",
    "There's a lot of drama in my workplace. ",
    "I know how you feel. I've been through something like that before and it was really tough.",
  ],
  [
    "work/negative",
    "People keep getting lazy and I end up having to pick up the slack.  ",
    "That sounds really tough! Can you tell me more about why people keep getting lazy and how it ends up affecting you?",
  ],
  [
    "work/negative",
    "We have all these new people that don't seem to know what they're doing. ",
    "Don't worry, it'll be okay.",
  ],
  [
    "work/negative",
    "I don't get very good benefits with my job. ",
    "That sounds really tough. I\u2019m here for you if you want to talk about it more.",
  ],
  [
    "work/negative",
    "My boss totally plays favorites. ",
    "That sounds really difficult. I\u2019m sorry that your boss is treating you that way.",
  ],
  [
    "work/negative",
    "I don't think I want to stay at this job much longer. ",
    "I'm here for you no matter what. And I support your decision.",
  ],
  [
    "work/negative",
    "I had the worst day today. ",
    "That sounds really tough. I'm here for you if you want to talk about it more.",
  ],
  [
    "work/negative",
    "I was just told that I'm not cut out for this. ",
    "If you want, I can help you study for your test.",
  ],
  [
    "work/negative",
    "My boss told me I need to find a more 'realistic' goal with advancing in my career. ",
    "You can do it! I know you\u2019ll reach your goal!",
  ],
  [
    "work/negative",
    "I feel like I'm given critisism rather than constructive critisism. ",
    "It sounds like you're feeling really hurt and frustrated. I'm here for you and I'll help you figure this out.",
  ],
  [
    "work/negative",
    "I think my coworker took it the wrong way when I tried giving some pointers. ",
    "That sucks. I'm sorry that happened.",
  ],
  [
    "work/negative",
    "I was told I don't have a strong work ethic. ",
    "I'm sorry if I didn't do a good job, but I was trying my best.",
  ],
  [
    "work/negative",
    "We switched to a new system at work and it's so confusing. ",
    "That sounds really hard. I'm here for you if you need to talk.",
  ],
  [
    "work/negative",
    "I've been having a lot of trouble focusing at work recently. ",
    "I've been through something similar before. It's really tough when you can't focus at work.",
  ],
  [
    "work/negative",
    "My work keeps piling up. As soon as I finish one task, there's three new assignments. ",
    "Don't worry, you'll finish all your work... eventually.",
  ],
  [
    "work/negative",
    "My coworker keeps bringing her personal life into work. ",
    "It sounds like this is really bothering you. Do you want to talk about it?",
  ],
  [
    "work/negative",
    "We have some younger people at work and they're very unprofessional. ",
    "That's tough, but I know you can handle it.",
  ],
  [
    "work/negative",
    "Some of my coworkers make me feel very uncomforable. ",
    "That sounds really tough. I'm here for you if you want to talk about it.",
  ],
  [
    "work/negative",
    "Our company doesn't have enough money to give us bonuses this year. ",
    "It's not the end of the world. Things will get better.",
  ],
  [
    "work/negative",
    "I got off today much later than I anticipated. ",
    "What happened that made your day so long?",
  ],
  [
    "work/negative",
    "I have to travel for work and on top of the packed schedule I'll have, I have to fly there and back in only a matter of days. ",
    "That sounds tough. I\u2019m sure you\u2019ll do great, but I\u2019ll miss you while you\u2019re gone.",
  ],
  [
    "work/negative",
    "I feel like my boss may be discriminating against me because I'm 'x.'",
    "It sounds like you're handling the situation really well. I'm sure you'll figure out a way to solve the problem.",
  ],
  [
    "work/negative",
    "For some reason, the office has been smelling awful recently. ",
    "That sounds really unpleasant. Do you know what might be causing it?",
  ],
  [
    "work/negative",
    "My coworker keeps chomping her gum and it's very distracting. ",
    "That sounds really frustrating. Do you want to talk to her about it? I can come with you if you want.",
  ],
  [
    "work/negative",
    "I hate when people eat loud foods in the office. ",
    "I\u2019m sorry, I know how annoying it is when people are loud eaters.",
  ],
  [
    "work/negative",
    "The printer is broken right now. ",
    "What happened? Let\u2019s see if we can figure it out together.",
  ],
  [
    "work/negative",
    "I forgot to fill out my time sheet. ",
    "It\u2019s okay, everyone makes mistakes. Just try to remember to fill it out next time.",
  ],
  [
    "work/negative",
    "I have too much work right now.",
    "That sounds really rough. Do you want to talk about it?",
  ],
  [
    "work/negative",
    "One of my co-workers always eats my snacks.",
    "That sounds really frustrating. Maybe we can talk to your co-worker and see if there\u2019s a way to work out a solution.",
  ],
  [
    "work/positive",
    "I have so much fun at my job.",
    "That's great! I'm really happy for you.",
  ],
  [
    "work/positive",
    "It's really nice to work for such a great place.",
    "You're right! It's a great job!",
  ],
  [
    "work/positive",
    "My boss always gets everyone's input.",
    "That sounds really tough. I\u2019m sorry.",
  ],
  [
    "work/positive",
    "It's super fun working at my job.",
    "That\u2019s amazing! I\u2019m so happy for you!",
  ],
  [
    "work/positive",
    "I always feel supported by my boss.",
    "What specific things has he done that make you feel this way?",
  ],
  [
    "work/positive",
    "My coworkers are always there when I need support.",
    "You are doing a great job with your coworkers. Keep up the good work!",
  ],
  [
    "work/positive",
    "It's so great to have such a nice work environment.",
    "Let me know if there's anything I can do to help you keep it nice.",
  ],
  [
    "work/positive",
    "We had so much fun at our last work party.",
    "That sounds like it was a lot of fun! What did you do?",
  ],
  [
    "work/positive",
    "Work had been going well.",
    "That\u2019s great! I\u2019m really happy for you.",
  ],
  [
    "work/positive",
    "I like having lunch with my coworkers",
    "That sounds like a really great routine that you have going on! I\u2019m really happy for you. Keep it up!",
  ],
  [
    "work/positive",
    "I really have learned a lot at this job.",
    "I know how you feel! I felt the same way when I first started my job.",
  ],
  [
    "work/positive",
    "I like having a job with low stress. I feel more productive.",
    "I can imagine how good it feels to have a low-stress job. It's tough finding a job that's a good fit.",
  ],
  [
    "work/positive",
    "My job is so close to my house.",
    "I'm sorry your job is so close to your house.",
  ],
  [
    "work/positive",
    "My boss is so flexible about my work hours.",
    "Are you sure your boss is okay with that?",
  ],
  [
    "work/positive",
    "My boss always lets me work with the nice customers. She takes the tricky ones.",
    "I don't think it's fair that your boss only lets you work with the nice customers. Everyone deserves a chance to work with the tricky ones.",
  ],
  [
    "work/positive",
    "This is the best job I've ever had.",
    "I wish I could find a job that I loved as much as you seem to love yours.",
  ],
  [
    "work/positive",
    "My new job allows me to have time for myself.",
    "I\u2019m glad you found a job you like! You seem much happier now.",
  ],
  [
    "work/positive",
    "They have a great gym at work.",
    "I wish we had a gym at our workplace. It would be so convenient.",
  ],
  [
    "work/positive",
    "My work reimburses us for going to conferences which is really nice.",
    "It's great that your work reimburses you for conferences. That's a really valuable perk.",
  ],
  [
    "work/positive",
    "I have great projects at work.",
    "That sounds really tough. Do you want to talk about it?",
  ],
  [
    "work/positive",
    "Our boss never gets mad about anything.",
    "I'm sure he's not mad at you. He probably just wants us to do our best.",
  ],
  [
    "work/positive",
    "My boss loaned me his car today because mine broke down.",
    "That must have been really difficult for you. I'm glad your boss was able to help you out.",
  ],
  [
    "work/positive",
    "I always appreciate the constructive critisism from the boss. ",
    "Why does your boss critisize you? ",
  ],
  [
    "work/positive",
    "I like the friendly, collaborative nature of this workplace. ",
    "I know what you mean! This workplace is really friendly and collaborative. I love it here!",
  ],
  [
    "work/positive",
    "I hope to be considered for this next project!",
    "What is the project about?' or 'What made you decide to apply for the job?",
  ],
  [
    "work/positive",
    "I think I'm gaining great experience here. ",
    "You're doing a great job! Keep up the good work!",
  ],
  [
    "work/positive",
    "I'm making great headway with this research. ",
    "That sounds really interesting. Can you tell me more?",
  ],
  [
    "work/positive",
    "I finally closed that deal!",
    "Great job! I knew you could do it!",
  ],
  [
    "work/positive",
    "Today was a huge success. ",
    "That's great! You deserve it.",
  ],
  [
    "work/positive",
    "The benefits for my job are are a huge plus. ",
    "I'm sorry that your benefits aren't good.",
  ],
  [
    "work/positive",
    "I recieved some positive news from my boss. ",
    ", 'That's great news! I knew you could do it. Keep up the good work.",
  ],
  [
    "work/positive",
    "We reached our goals for this month!",
    "That's amazing! Congratulations, you worked so hard for this.",
  ],
  [
    "work/positive",
    "I was chosen to be apart of one of our biggest projects at the moment.  ",
    "It\u2019s okay, you\u2019ll do great. I know you\u2019ll be the best one on the project.",
  ],
  [
    "work/positive",
    "I had a very productive work day. ",
    "That\u2019s great! I am really happy for you!",
  ],
  [
    "work/positive",
    "I just got a raise. ",
    "That's amazing! I'm so happy for you.",
  ],
  [
    "work/positive",
    "I just got a promotion. ",
    "Tell me more about your promotion. What will your new responsibilities be?",
  ],
  [
    "work/positive",
    "We all recieved our yearly bonuses today. ",
    "That's great news! I'm so happy for you!",
  ],
  [
    "work/positive",
    "I was chosen for emplyee of the month!",
    "I knew you could do it! I'm so proud of you.",
  ],
  [
    "work/positive",
    "I had the largest sales in my sector. ",
    "That\u2019s amazing news! I\u2019m really happy for you!",
  ],
  [
    "work/positive",
    "I'm so grateful to be working under 'name.' ",
    "If you ever need help with anything at work, just let me know.",
  ],
  [
    "work/positive",
    "I needed to take some time off and work was very understanding. ",
    "You did the right thing by taking some time off. I'm sure everything will work out.",
  ],
  [
    "work/positive",
    "I got my time off request approved. ",
    "That's amazing! Congratulations!",
  ],
  [
    "work/positive",
    "My boss said that he/she sees a lot of potential in me.",
    "Congratulations! That's great news! I'm sure your hard work is paying off.",
  ],
  [
    "work/positive",
    "They brought in lunch for everyone today. ",
    "That's great! I'm really happy for you.",
  ],
  [
    "work/positive",
    "We had some people come into the office and I was able to do some networking. ",
    "So, did you meet anyone interesting?",
  ],
  [
    "work/positive",
    "We had a 'bring our pet to work day' and it put everyone in a great mood. ",
    "That sounds like it was really fun! Tell me more about it!",
  ],
  [
    "work/positive",
    "Someone brought delicious snacks to work today.",
    "I hope they're not poisoned!' or 'I hope they left some for me!",
  ],
  [
    "work/positive",
    "The day went really quickly.",
    "I wish the day had lasted longer. I feel like I didn\u2019t get anything accomplished.",
  ],
  [
    "work/positive",
    "We had a lot of fun at work today.",
    "That sounds like it was a really enjoyable day. I'm glad you had fun.",
  ],
  [
    "work/positive",
    "Our boss treated us to lunch today.",
    "That\u2019s great! I\u2019m really happy for you.",
  ],
  [
    "work/positive",
    "My boss if giving me my birthday off.",
    "That's awesome. I'm happy for you.",
  ],
  [
    "work/positive",
    "I just started my own business and it's doing well. ",
    "That\u2019s amazing! I\u2019m really happy for you and your hard work is paying off.",
  ],
  [
    "work/positive",
    "I got a beautiful new desk at work today.",
    "Where did you get it? How much did it cost? Do you like it?",
  ],
  [
    "work/positive",
    "We have a great coffee machine at work.",
    "That sounds great! What kind of coffee does it make?",
  ],
  [
    "work/positive",
    "Our projects at work are so much fun.",
    "I'm so glad you're enjoying your work! What project are you working on?",
  ],
  [
    "work/positive",
    "We get to order any supplies we need at work.",
    "You should order whatever you think will help you do your best work.",
  ],
  [
    "work/positive",
    "My co-workers are really helpful.",
    "That's great! I'm glad you have such helpful co-workers.",
  ],
  [
    "work/positive",
    "I have a great office partner.",
    "I\u2019m glad you have a great office partner! That sounds like it makes work much more enjoyable for you.",
  ],
  [
    "work/positive",
    "I would never want another job.",
    "It's okay to feel that way. A lot of people feel like they don't want to leave their comfort zone.",
  ],
  [
    "work/positive",
    "My boss gave us all bonuses this year.",
    "That\u2019s amazing! What are you going to do with your bonus?",
  ],
  [
    "work/positive",
    "Our company is doing really well.",
    "I'm really happy for you! Congratulations on your success!",
  ],
  [
    "work/positive",
    "It's nice that my work is flexible about hours.",
    "That sounds really great! I'm happy for you.",
  ],
  [
    "work/positive",
    "I like this job because I can work from home.",
    "That's great! I'm really happy for you.",
  ],
  [
    "work/positive",
    "I got so much done at work today.",
    "You must be exhausted! Here, let me get you a drink and we can talk about something else.",
  ],
  [
    "work/positive",
    "This was a productive week at work.",
    "That sounds like it was a really productive week! Tell me more about it.",
  ],
  [
    "work/positive",
    "I just got a bigger office that is so nice.",
    "That's great! I'm really happy for you.",
  ],
  [
    "work/positive",
    "The temperature is always perfect in our offices.",
    "Why do you think the temperature is perfect in our offices?",
  ],
  [
    "work/positive",
    "Our new work computers are so nice. ",
    "The new computers sound fantastic! Can\u2019t wait to see them in person!",
  ],
  [
    "work/positive",
    "I hope to be with this company for a while. ",
    "That's great! I'm really happy for you!",
  ],
  [
    "work/positive",
    "I think this may be one of the best jobs I've had. ",
    "I'm really happy for you! I knew you'd get a great job.",
  ],
  [
    "work/positive",
    "I love my coworkers. ",
    "I know how you feel! I used to work with a great group of people and we were always helping each other out.",
  ],
  [
    "work/neutral",
    "The office is typically very quiet. ",
    "I\u2019m so sorry to hear that! Maybe you can bring in some music to liven up the place.",
  ],
  [
    "work/neutral",
    "We had a plumber come in today. ",
    "That sounds really frustrating. I'm glad you were able to get it taken care of.",
  ],
  [
    "work/neutral",
    "We had pest control come into the office today. ",
    "Oh, I hope they don\u2019t use any harmful chemicals.",
  ],
  [
    "work/neutral",
    "There may some changes around the office in the coming weeks. ",
    "Well, change can be good! Maybe this will be a chance for you to get that promotion you've been wanting.",
  ],
  [
    "work/neutral",
    "Some days at the office feel short and other days can feel very long. ",
    "That sounds really tough. I\u2019m here for you if you want to talk about it more.",
  ],
  [
    "work/neutral",
    "I traded shifts with 'x'. ",
    "That's a great idea! Let me know if you need help.",
  ],
  [
    "work/neutral",
    "I'm going to call in a few more people since we're so busy. ",
    "You're going to make the best decision for you. I know you'll figure it out.",
  ],
  [
    "work/neutral",
    "We need more hours for this week. ",
    "It's okay! We'll get through this!",
  ],
  [
    "work/neutral",
    "No one should work in a place where they don't feel happy. ",
    "That sounds really tough. I'm sorry you're feeling so unhappy at work.",
  ],
  [
    "work/neutral",
    "There is parking in front of the offices. ",
    "I hope there\u2019s still parking by the time I get there.",
  ],
  [
    "work/neutral",
    "People frequently trade shifts. ",
    "Why do people swap shifts?",
  ],
  [
    "work/neutral",
    "I'm taking a mental health day from work next week",
    "Taking a mental health day is definitely a step in the right direction!",
  ],
  [
    "work/neutral",
    "Communication is very important. ",
    "Hmm, that\u2019s an interesting point. I never thought about it that way before. Communication is definitely important, but I can see how it might not be necessary in some cases.",
  ],
  [
    "work/neutral",
    "I need total silence to work. ",
    "Ok, I'll be quiet. But why do you need silence?",
  ],
  [
    "work/neutral",
    "People talk a lot. ",
    "Why? Are you worried people will start talking about you?",
  ],
  [
    "work/neutral",
    "The office typically remains very quiet. ",
    "I\u2019m sorry that the office is so quiet for you. Maybe you can try listening to music with headphones?",
  ],
  [
    "work/neutral",
    "We're working on understanding different pronouns for our employees. ",
    "That\u2019s great! I\u2019m glad you\u2019re doing that. Can you tell me more about why it\u2019s important? I\u2019d like to learn more myself.",
  ],
  [
    "work/neutral",
    "It's important to pay your dues in order to understand a job better. ",
    "Can you tell me more about why you believe it's important to pay your dues?",
  ],
  [
    "work/neutral",
    "Everyone has to work their way up. ",
    "I'm so happy for you! I hope one day I can be as successful as you.",
  ],
  [
    "work/neutral",
    "If you put in the time and energy you'll get better responses. ",
    "I know you can do it! I'll be rooting for you!",
  ],
  [
    "work/neutral",
    "Management chooses an employee of the month. ",
    "Congratulations! That\u2019s great news!",
  ],
  [
    "work/neutral",
    "A lot of the time we'll all go to lunch together. ",
    "That sounds like a lot of fun! I'm happy for you.",
  ],
  [
    "work/neutral",
    "Your personal life shouldn't affect your work. ",
    "I'm concerned about how your personal life will affect your work.",
  ],
  [
    "work/neutral",
    "You have to be very careful at this job, you'll be working with hazardous materials. ",
    "I'll be there to support you. You can do it!",
  ],
  [
    "work/neutral",
    "Management wants us to do bonding exercises. ",
    "I\u2019m not sure how I feel about bonding exercises. Do you think they\u2019re effective?",
  ],
  [
    "work/neutral",
    "There's no uniform for the job, just look put together. ",
    "I think a nice pair of jeans and a polo shirt would look put together.",
  ],
  [
    "work/neutral",
    "Management will send you to the uniform store to pick up your clothes for work. ",
    "Are you sure you want to go to the store? It's kind of far.",
  ],
  [
    "work/neutral",
    "The company was bought out. ",
    "It'll be okay. Things will work out.",
  ],
  [
    "work/neutral",
    "Feel free to ask questions. ",
    "I can see how much effort you put into this.",
  ],
  [
    "work/neutral",
    "Management doesn't want us using our own computers. ",
    "That's really hard. I'm sorry that management is doing this.",
  ],
  [
    "work/neutral",
    "There's a lot of applications to go through. ",
    "I'll help you with the applications.",
  ],
  [
    "work/neutral",
    "There's a screening process for applicants. ",
    "I'm sorry to hear that.",
  ],
  [
    "work/neutral",
    "I have two cell phones, one for work and one for personal use.",
    "Do you find having two phones helpful or is it a lot of extra work?",
  ],
  [
    "work/neutral",
    "I start a new job tomorrow.",
    "That's great news! I'm really happy for you.",
  ],
  [
    "work/neutral",
    "My office is moving to a new building.",
    "When is the move happening? And are you looking forward to it?",
  ],
  [
    "work/neutral",
    "We have a new receptionist.",
    "That's great! I'm sure they will do a great job.",
  ],
  [
    "work/neutral",
    "I share my office with one other person.",
    "That sounds like it would be challenging to work in. Do you have your own space to spread out?",
  ],
  [
    "work/neutral",
    "I ran into my boss at the store today.",
    "That sounds like it was really amazing! I\u2019m so happy for you!",
  ],
  [
    "work/neutral",
    "We got new office chairs yesterday.",
    "Oh my gosh, new office chairs! That's so exciting! I can't wait to see them!",
  ],
  [
    "work/neutral",
    "People of all ages work here.",
    "That sounds like a really great place to work.",
  ],
  [
    "work/neutral",
    "My boss just announced that she is retiring.",
    "Your hard work has paid off! I'm so proud of you.",
  ],
  [
    "work/neutral",
    "My supervisor comes in on Wednesdays.",
    "It sounds like you're doing a great job managing your time and responsibilities.",
  ],
  [
    "work/neutral",
    "Our company changed the logo.",
    "I hope this doesn\u2019t mean that there are going to be other big changes at the company.",
  ],
  [
    "work/neutral",
    "Our uniforms shirts are blue.",
    "At least we don't have to wear those ugly plaid skirts!",
  ],
  [
    "work/neutral",
    "We have a team meeting every Tuesday.",
    "Good for you! I\u2019m glad you have a team meeting.",
  ],
  [
    "work/neutral",
    "Some people eat lunch out, others bring a lunch from home.",
    "I\u2019m sorry that you don\u2019t like lunch.",
  ],
  [
    "work/neutral",
    "I met my new boss today.",
    "That's great! What are they like?",
  ],
  [
    "work/neutral",
    "You need a keycard to get into the office.",
    "You\u2019re right, I need a keycard to get into the office.",
  ],
  [
    "work/neutral",
    "My job involves a lot of travel.",
    "Wow, I had no idea your job involved travel!",
  ],
  [
    "work/neutral",
    "We have an office retreat this weekend.",
    "That sounds like a great idea! I'm excited for the retreat! Let me know if there's anything I can do to help you plan it.",
  ],
  [
    "work/neutral",
    "I have a new officemate.",
    "That's great! I'm so happy for you! What's she like?",
  ],
  [
    "work/neutral",
    "My boss called on me in the meeting today.",
    "That\u2019s great! I\u2019m really happy for you.",
  ],
  [
    "work/neutral",
    "I'm training someone new tomorrow.",
    "I'm sure you'll do great! You're always so prepared and organized.",
  ],
  [
    "work/neutral",
    "I have a lot of responsibility at my new job.",
    "That sounds like a really great opportunity! I know you\u2019ll do great!",
  ],
  [
    "work/neutral",
    "I don't see my supervisor very often.",
    "It's tough when we don't feel like we're getting the support we need. Hang in there, I'm sure things will get better.",
  ],
  [
    "work/neutral",
    "My position requires a lot of math.",
    "That's amazing! You're really good at math.",
  ],
  [
    "work/neutral",
    "My schedule changed at work.",
    "That\u2019s awesome! What kind of new opportunities will you have at work?",
  ],
  [
    "work/neutral",
    "I take the subway to work.",
    "I commend you for taking the subway to work. It's environmentally friendly!",
  ],
  [
    "work/neutral",
    "My coworker is going on maternity leave.",
    "That's great news! Let me know if you need help with anything while she's gone.",
  ],
  [
    "work/neutral",
    "I need to listen to music while I work.",
    "Why do you need to listen to music while you work?",
  ],
  [
    "work/neutral",
    "My supervisor said I don't need to come into work tomorrow.",
    "That's great! I'm so happy for you.",
  ],
  [
    "work/neutral",
    "I'm moving to a new office.",
    "I'm really excited for you! I know you'll love the new office.",
  ],
  [
    "work/neutral",
    "Our annual review is next week.",
    "Don\u2019t worry, I\u2019m sure it will be fine.",
  ],
  [
    "work/neutral",
    "People always bring in a ton of sweets for the office.",
    "That must be really hard for you. I feel bad for you.",
  ],
  [
    "work/neutral",
    "They assigned me more shifts at work.",
    "That sounds really tough. I\u2019m here for you if you need to talk about it more.",
  ],
  [
    "work/neutral",
    "Everyone likes to socialize at work.",
    "I'm curious, why don't you like socializing at work?",
  ],
  [
    "work/neutral",
    "My boss called me and wants to set up a meeting.",
    "What did he say? Why does he want to meet with you?",
  ],
  [
    "work/negative",
    "No one cleans out the refrigerator at work.",
    "That must be really frustrating for you. I'm sorry.",
  ],
  [
    "work/negative",
    "All of our work computers are so old and slow.",
    "Why do you think the work computers are slow?",
  ],
  [
    "work/negative",
    "The internet is always crashing at work.",
    "That sounds really frustrating! What happened?",
  ],
  [
    "work/negative",
    "My boss cut back my hours.",
    "That sounds really tough. I\u2019m so sorry that happened.",
  ],
  [
    "work/negative",
    "I had to fire someone today.",
    "That's so tough. I'm really sorry.",
  ],
  [
    "work/negative",
    "I had to reprimand someone at work today for not finishing a job.",
    "What made you decide to reprimand them?",
  ],
  [
    "work/negative",
    "Some of my coworkers always leave work early.",
    "That must be really tough for you. I\u2019m here for you if you want to talk about it.",
  ],
  [
    "work/negative",
    "My project manager is so lazy.",
    "It sounds like you\u2019re really struggling with your project manager. I\u2019m sorry.",
  ],
  [
    "work/negative",
    "I did most of the work on our group project and didn't get credit.",
    "It's not a big deal. Things will get better.",
  ],
  [
    "work/negative",
    "My coworker always takes credit for my work.",
    "It's frustrating when people take credit for our work, but you can handle it! Talk to your coworker about it and see what they say.",
  ],
  [
    "work/negative",
    "My office mate talks so much and it's distracting.",
    "That sounds really frustrating. Have you talked to your office mate about it?",
  ],
  [
    "work/negative",
    "I hate the radio station they play at work.",
    "I know how you feel. I can\u2019t stand that radio station either.",
  ],
  [
    "work/negative",
    "I'm so tired of my job.",
    "That sounds really tough. I'm here for you if you need to vent.",
  ],
  [
    "work/negative",
    "Work is so boring.",
    "Why do you think work is so boring?",
  ],
  [
    "work/negative",
    "There's nothing to do at work but my boss won't let me check my personal emails.",
    "That sounds really frustrating. I'm sorry you have to deal with that.",
  ],
  [
    "work/negative",
    "My boss is always checking my work and it's annoying.",
    "That sounds really frustrating. I\u2019m sorry you have to deal with that.",
  ],
  [
    "work/negative",
    "I never get enough responsibility at work.",
    "Maybe you could talk to your boss about getting more responsibility.",
  ],
  [
    "work/negative",
    "I'm so tired of having to get to work so early.",
    "I know how you feel. I've been there too.",
  ],
  [
    "work/negative",
    "I was really sick but my boss made me come in to finish a project.",
    "At least your boss didn\u2019t make you work when you were sick! That would have been awful!",
  ],
  [
    "work/negative",
    "I'm afriad my last job won't give me a good recommendation. ",
    "Don't worry, I'm sure you'll be able to find a great new job. You're really talented and smart.",
  ],
  [
    "work/negative",
    "My coworker is gossiping about me at work. ",
    "Well, at least you have a great group of friends at work.",
  ],
  [
    "work/negative",
    "I just got fired. ",
    "It's not so bad! You'll find another job soon.",
  ],
  [
    "work/negative",
    "I haven't gotten a pay raise in five years.",
    "That must be really tough for you. I\u2019m here for you if you want to talk about it more.",
  ],
  [
    "work/negative",
    "My boss stopped giving me bonuses.",
    "That sounds really tough. I\u2019m here for you if you need to talk more about it.",
  ],
  [
    "work/negative",
    "I got moved to a smaller space at work.",
    "Do you want me to help you talk to your boss about it? I bet there\u2019s a way we can figure this out together.",
  ],
  [
    "work/negative",
    "Our great assistant found another job and is leaving.",
    "It's going to be okay. We'll find someone else to help us.",
  ],
  [
    "work/negative",
    "I had so much work that I took some home over the weekend.",
    "It's okay, I'm here for you. We'll get through this together.",
  ],
  [
    "work/negative",
    "My supervisor caught me on the internet and got mad. ",
    "That sucks. I'm sorry that happened.",
  ],
  [
    "work/negative",
    "I'm not allowed to do any personal emails at work.",
    "That sounds really frustrating. I'm sorry you have to deal with that.",
  ],
  [
    "work/negative",
    "My supervisor won't let me work remotely.",
    "Tell me more about why your supervisor won't let you work remotely.",
  ],
  [
    "work/negative",
    "My supervisor is always getting on my case.",
    "That sounds really tough. Do you want to talk about it more? I\u2019m here for you.",
  ],
  [
    "work/negative",
    "I got in trouble at work for playing online games.",
    "I\u2019m sorry to hear that. I hope everything works out for you.",
  ],
  [
    "work/negative",
    "My supervisor thinks I work too slowly.",
    "I\u2019m sure you\u2019ll be able to figure it out! You\u2019re really smart and capable.",
  ],
  [
    "work/negative",
    "My supervisor said I'm not chipping in enough.",
    "That sounds really tough. I'm here for you.",
  ],
  [
    "work/negative",
    "I overslept and was late to work.",
    "That sounds really frustrating. I'm sorry you had to deal with that.",
  ],
  [
    "work/negative",
    "My office space is really cold and uncomfortable.",
    "That sounds really uncomfortable. I\u2019ve been in situations like that before and it\u2019s not fun.",
  ],
  [
    "work/negative",
    "My office is way too hot.",
    "Do you want me to talk to HR with you?",
  ],
  [
    "work/negative",
    "My boss expects too much.",
    "It's okay, everything will be alright.",
  ],
  [
    "work/negative",
    "My supervisor is always checking in on me and it's annoying.",
    "That sounds really challenging and frustrating. I'm here for you if you need to talk more about it.",
  ],
  [
    "work/negative",
    "If I'm a few minutes late to work my supervisor gets mad.",
    "That sounds really difficult. I'm sorry you have to deal with that.",
  ],
  [
    "work/negative",
    "I can be so hard to focus at work. ",
    "Lack of focus at work? Sounds like somebody needs more coffee!",
  ],
  [
    "work/negative",
    "The boss keeps getting mad at every little thing. ",
    "The boss is just angry at the situation, not you specifically.",
  ],
  [
    "work/negative",
    "We have to pay for parking at work. ",
    "I'm sorry that you have to pay for parking. Let me know if you need help with the cost.",
  ],
  [
    "work/negative",
    "The restroom is out of service at the moment. ",
    "I'm sorry to hear that. Is there anything I can do to help you?",
  ],
  [
    "work/negative",
    " 'X' is running late to the meeting. ",
    "Yeah, 'X' is always running late. They must have been born late too!",
  ],
  [
    "work/negative",
    "Our products have been recieving negative reviews. ",
    "That sounds really tough. I\u2019m here for you if you want to talk about it.",
  ],
  [
    "work/negative",
    "My supervisor doesn't seem to trust my judgement. ",
    "I've been in a similar situation before where I didn't feel like my supervisor trusted my judgement. Here's what I did that helped me...",
  ],
  ["work/negative", "My supervisor gave me a write up. ", "What happened?"],
  [
    "work/negative",
    "I get very nervous when I have to present in meetings. ",
    "I know how you feel! I get so nervous before presentations too.",
  ],
  [
    "work/negative",
    "My work is in a very sketchy part of town. ",
    "What do you do there?",
  ],
  [
    "work/negative",
    "My coworker always tell me I'm inadequate. ",
    "Yeah, coworkers can be jerks. I'm sorry you have to deal with that.",
  ],
  [
    "work/negative",
    "My partner at work never seems to understand what is going on. ",
    "It sounds like you're really feeling frustrated and alone right now. I'm here for you and I'll help you try to figure this out.",
  ],
  [
    "work/negative",
    "Our newest hire is not learning as fast as needed. ",
    "That sounds really difficult and frustrating. I'm here for you if you need to talk.",
  ],
  [
    "work/negative",
    "I have so much paperwork to catch up on. ",
    "It\u2019s okay, I\u2019m here for you.",
  ],
  [
    "work/negative",
    "The construction on the office space is going to be so distracting. ",
    "I know the construction noise is going to be loud but I am excited about the new office space.",
  ],
  [
    "work/negative",
    "We're so understaffed. ",
    "It's okay, we'll figure it out.",
  ],
  [
    "work/negative",
    "The wifi is really slow right now. ",
    "What do you think is causing the wifi to be slow?",
  ],
  [
    "work/negative",
    "None of these documents are downloading. ",
    "That sounds really frustrating. Let\u2019s see if we can figure out what\u2019s going on.",
  ],
  [
    "work/negative",
    "My coworker calls is sick all the time. ",
    "That sounds really tough. Do you want to talk about it?",
  ],
  [
    "work/negative",
    "We seem to have some irresponsible employees in the office. ",
    "That sounds really frustrating. I\u2019m here for you if you need to talk about it.",
  ],
  [
    "work/negative",
    "I hate my coworkers. ",
    "I'm sorry that you're dealing with that. It sounds really tough.",
  ],
  [
    "work/negative",
    "I really need a raise. ",
    "I know you can do it! You're so smart and capable.",
  ],
  [
    "work/negative",
    "I think I asked for too little when I was being hired. ",
    "I'm sure you did the best you could at the time. It's hard to know what to ask for in a situation like that. But don't worry, you'll figure it out.",
  ],
  [
    "work/negative",
    "Today we found out we have rodents in the office. ",
    "What kind of rodents are they? Do you think they're dangerous?",
  ],
  [
    "work/negative",
    "It turns out there are termites in the building. ",
    "Wow, I had no idea there were termites in this area.",
  ],
  [
    "work/negative",
    "A bunch of the employees are going on strike. ",
    "It\u2019s going to be okay. I\u2019m sure everything will work out in the end.",
  ],
  [
    "work/negative",
    "The boss was trying to low ball some people. ",
    "You're a great employee and I'm sure you'll be able to work something out with the boss.",
  ],
  [
    "work/negative",
    "My back hurts from sitting in our desk chairs for so long. ",
    "Wow, school has been so busy lately! I can't believe it's already Friday.",
  ],
  [
    "work/negative",
    "I have one coworker who doesn't stop talking. ",
    "That sounds really frustrating. Do you want to talk about it?",
  ],
];

export default work_statements;
