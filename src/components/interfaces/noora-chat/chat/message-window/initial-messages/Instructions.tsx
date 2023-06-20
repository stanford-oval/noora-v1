import React from "react";

export default function Instructions(activeModules: any) {
    if (activeModules[0].title == 'relevantQuestions') {
      return {
        text: <div>If I say, <span className="font-bold text-noora-primary">“I had the best time with my friend yesterday, we watched movies and ordered pizza,”</span> you can reply, <span className="font-bold text-noora-secondary-light">“Wow, that sounds fun! What movies did you watch?”</span></div>,
        speech: "If I say, “I had the best time with my friend yesterday, we watched movies and ordered pizza!”, you can reply, “Wow, that sounds fun! What movies did you watch?”",
      };
    }
    else if (activeModules[0].title == 'listenAndRespond') {
      return {
        text: <div>If I say, <span className="font-bold text-noora-primary">“I’m on my way to class,”</span> you can reply, <span className="font-bold text-noora-secondary-light">“Oh, I hope it’s interesting. What class do you have?”</span></div>,
        speech: "If I say, “I’m on my way to class”, you can reply, “Oh, I hope it’s interesting. What class do you have?”",
      };
    }
    else if (activeModules[0].title == 'rightAmount') {
      return {
        text: <div>If I say, <span className="font-bold text-noora-primary">“Do you have any plans for the weekend?”</span> you can reply, <span className="font-bold text-noora-secondary-light">“Yes. I’m going to the beach. How about you?”</span></div>,
        speech: "If I say, “Do you have any plans for the weekend?”, you can reply, “Yes. I’m going to the beach. How about you?”",
      };
    }
    else if (activeModules[0].title == 'tactfulResponses') {
      return {
        text: <div>If I say, <span className="font-bold text-noora-primary">“I hate getting homework,”</span> you can reply, <span className="font-bold text-noora-secondary-light">“Homework is the worst—but at least it helps me get prepared for finals!”</span></div>,
        speech: "If I say, “I hate getting homework”, you can reply, “Homework is the worst, but at least it helps me get prepared for finals!”",
      };
    }
    else if (activeModules[0].title == 'personalInfo') {
      return {
        text: <div>If I say, <span className="font-bold text-noora-primary">“How are you doing?”</span> you can reply, <span className="font-bold text-noora-secondary-light">“Pretty good, thanks for asking! How about you?”</span></div>,
        speech: "If I say, “How are you doing?”, you can reply, “Pretty good, thanks for asking! How about you?”",
      };
    }
    else if (activeModules[0].title == 'giveCompliments') {
      return {
        text: <div>If I say, <span className="font-bold text-noora-primary">“I just got my hair cut and styled,”</span> you can reply, <span className="font-bold text-noora-secondary-light">“It looks fantastic! Where did you get it done?”</span></div>,
        speech: "If I say, “I just got my hair cut and styled”, you can reply, “It looks fantastic! Where did you get it done?”",
      };
    }
    else if (activeModules[0].title == 'stayOnTrack') {
      return {
        text: <div>If I say, <span className="font-bold text-noora-primary">“I can’t wait for the weekend,”</span> you can reply, <span className="font-bold text-noora-secondary-light">“I can’t either! I’m looking forward to getting some great rest.”</span></div>,
        speech: "If I say, “I can’t wait for the weekend”, you can reply, “I can’t either! I’m looking forward to getting some great rest.”",
      };
    }
    else if (activeModules[0].title == 'sarcasm') {
      return {
        text: <div>If I say, <span className="font-bold text-noora-primary">“Eating vegetables and exercising regularly is just sooo boring and overrated. Who needs good health and a longer life anyway?”</span> you can reply with a tongue-in-cheek but empathetic statement like<span className="font-bold text-noora-secondary-light"> “Who would want to eat those nasty greens? Just kidding, I totally see what you mean — everyone should eat vegetables!”</span></div>,
        speech: "If I say, 'Eating vegetables and exercising regularly is just sooo boring and overrated. Who needs good health and a longer life anyway?' you can reply with a tongue-in-cheek but empathetic statement like 'Who would want to eat those nasty greens? Just kidding, I totally see what you mean — everyone should eat vegetables!'",
      };
    }
    // BASE CASE if (activeModules[0].title == 'general' || activeModules[0].title == 'work') {
    return {
      text: <div>If I say, <span className="font-bold text-noora-primary">“I had a good weekend,”</span> you should say that this is a <span className="font-bold text-noora-secondary-light">positive </span>statement. Then, you can reply, <span className="font-bold text-noora-secondary-light">“I&apos;m happy for you! What did you do?”</span></div>,
      speech: "If I say, “I had a good weekend!”, you should tell me that this is a positive statement. Then, you can reply, “I'm happy to hear that!”",
    };
    //}
}
