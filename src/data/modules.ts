import {
  ChatAltIcon,
  BriefcaseIcon,
  // ChatAlt2Icon,
} from "@heroicons/react/outline";

const modules = {
  general: {
    title: "General",
    module: "general",
    desc: "In this module, Noora is your friend and speaks on a variety of topics including family, weather, and school. ",
    selectedDesc:
      "Noora is your friend and you will practice replying to statements of a variety of general topics.",
    example: {
      statement: "I had a great vacation.",
      reply: "That’s great. Where did you go?",
      sentiment: "Positive",
      explanation:
        "Your reply shows that you are happy for me.",
    },
    icon: ChatAltIcon,
  },
  work: {
    title: "Work",
    module: "work",
    desc: "In this module, Noora is your co-worker and speaks on a variety of work-related topics such as promotions and job updates.",
    selectedDesc:
      "Noora is your co-worker and you will practice replying to statements you might hear in a workplace.",
    example: {
      statement: "I’m way too busy right now.",
      reply: "I’m sorry. Can I help you with anything?",
      sentiment: "Negative",
      explanation:
        "Your reply shows that you understand and want to help me.",
    },
    icon: BriefcaseIcon,
  },
  empathy: {
    title: "empathy",
    module: "empathy",
    desc: "In this module, Noora is your co-worker and speaks on a variety of work-related topics such as promotions and job updates.",
    selectedDesc:
      "Noora is your co-worker and you will practice replying to statements you might hear in a workplace.",
    example: {
      statement: "I’m way too busy right now.",
      reply: "I’m sorry. Can I help you with anything?",
      sentiment: "Negative",
      explanation:
        "Your reply shows that you understand and want to help me.",
    },
    icon: BriefcaseIcon,
  },
};

export default modules;
