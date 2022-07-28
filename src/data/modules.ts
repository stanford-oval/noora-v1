import React from "react";

import {
  ChatAltIcon,
  BriefcaseIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";

const modules = {
  general: {
    title: "General",
    desc: "Practice responding to positive, neutral, and negative statements in a general context. In this module, Noora is your friend and speaks on a variety of topics including family, weather, and school. ",
    selected:
      "In this module, Noora is your friend and you will practice replying to statements of a variety of general topics.",
    example: {
      noora: "I had a great vacation",
      goodUser: "That’s great. Where did you go?",
      goodExplanation:
        "This response allows Noora to hear that you have offered the understanding sentiment “That’s great” then followed up with a relevant question “Where did you go” to keep the conversation going. ",
      badUser: "I hate vacations",
    },
    icon: ChatAltIcon,
  },
  work: {
    title: "Work",
    desc: "Practice responding to positive, neutral, and negative statements in the workplace. In this module, Noora is your co-worker and speaks on a variety of work-related topics such as promotions and job updates.",
    selected:
      "In this module, Noora is your co-worker and you will practice replying to statements you might hear in a workplace.",
    example: {
      noora: "I’m way too busy right now",
      goodUser: "I’m sorry. Can I help you with anything?",
      goodExplanation:
        "This response allows Noora to hear that you have offered the understanding sentiment “I’m sorry.” then followed up with a relevant question “Can I help you with anything?” to be helpful or provide support.",
      badUser: "We're all busy",
    },
    icon: BriefcaseIcon,
  },
  all: {
    title: "All",
    desc: "Don't know which module to pick or want to try them all? Practice responding to positive, neutral, and negative statements in both the general and work settings.",
    selected:
      "Here, you can practice topics of both the General and Work module, which consist of a variety of social scenarios.",
    example: {
      noora: "I had a great vacation",
      goodUser: "That’s great. Where did you go?",
      goodExplanation:
        "This response allows Noora to hear that you have offered the understanding sentiment “That’s great” then followed up with a relevant question “Where did you go” to keep the conversation going. ",
      badUser: "I hate vacations",
    },
    icon: ChatAlt2Icon,
  },
};

export default modules;
