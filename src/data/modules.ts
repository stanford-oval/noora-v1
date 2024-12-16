import {
  ChatAltIcon,
  BriefcaseIcon,
  ChatIcon,
  ChevronDoubleRightIcon,
  AdjustmentsIcon,
  ExclamationIcon,
  EyeIcon,
  HeartIcon,
  FlagIcon,
  FireIcon,
  ScaleIcon,
  StarIcon,
} from "@heroicons/react/outline";

const modules = {
  general: {
    title: "Empathy: General",
    module: "general",
    desc: "In this module, you will learn how to respond appropriately to a variety of topics including family, weather, and school. ",
    selectedDesc:
      "Noora is your friend and you will practice replying to statements of a variety of general topics.",
    icon: ChatAltIcon,
  },
  work: {
    title: "Empathy: Work Setting",
    module: "work",
    desc: "In this module, you will learn how to respond appropriately to a variety of work-related topics such as promotions and job updates.",
    selectedDesc:
      "Noora is your co-worker and you will practice replying to statements you might hear in a workplace.",
    icon: BriefcaseIcon,
  },
  // relevantQuestions: {
  //   title: "Relevant Questions",
  //   module: "relevantQuestions",
  //   desc: "In this module, you will learn how to reply to statements with relevant questions.",
  //   selectedDesc:
  //     "If someone brings up a topic, it helps keep the conversation going if you can stay on that same topic and ask a question that is directly related to the main point. It also helps the conversational partner feel that you are taking an interest in them.",
  //   icon: ChatIcon,
  // },
  listenAndRespond: {
    title: "Listen and Respond",
    module: "listenAndRespond",
    desc: "In this module, you will learn how to participate in conversation with leading statements.",
    selectedDesc:
      "When people make a statement or say something, it’s good to ask them a question to keep the conversation going. The question should be related to what the person said and should show that you’re taking an interest in that person and care about the other person.",
    icon: ChevronDoubleRightIcon,
  },
  rightAmount: {
    title: "Talk the Right Amount",
    module: "rightAmount",
    desc: "In this module, you will learn how to engage in conversation with the amount of detail.",
    selectedDesc:
      "To keep a balanced back-and-forth conversation, it’s important to talk the right amount – not too much and not too little. To do this, we will be practicing responding to a question, adding one or two pieces of information, then asking a question to keep the conversation going.",
    icon: AdjustmentsIcon,
  },
  tactfulResponses: {
    title: "Tactful Responses",
    module: "tactfulResponses",
    desc: "In this module, you will learn how to agree or disagree to opinions kindly.",
    selectedDesc:
      "It’s important to share your opinions when talking to others. But make sure that you do it right, otherwise you might sound like you’re arguing with your conversation partner.",
    icon: ExclamationIcon,
  },
  personalInfo: {
    title: "Personal Information",
    module: "personalInfo",
    desc: "In this module, you will learn how to respond to statements with an appropriate amount of personal information.",
    selectedDesc:
      "To have effective small talk, you should share a good amount of information about yourself. But take care not to overshare—otherwise, your conversation partner will feel awkward or worse, that you are ignoring them and only care about yourself.",
    icon: EyeIcon,
  },
  giveCompliments: {
    title: "Give Compliments",
    module: "giveCompliments",
    desc: "In this module, you will learn how to give compliments to others.",
    selectedDesc:
      "Always make an effort to give compliments and congratulations to others. They are the easiest way to spread happiness to others and even yourself.",
    icon: HeartIcon,
  },
  giveAdvice: {
    title: "Give Advice",
    module: "giveAdvice",
    desc: "In this module, you will learn how to give advice to others.",
    selectedDesc:
      "When others ask for your opinion or are unsure about a situation, they are looking for your help. Offer kind, helpful advice on what they can do in their situation.",
    icon: ScaleIcon,
  },
  preferences: {
    title: "Preferences",
    module: "preferences",
    desc: "In this module, you will learn how to say an explicit preference.",
    selectedDesc:
      "When others ask for if you prefer one thing over another, it is helpful to be clear that you have a preference. While your preferences might change based on small details of a situation, it is helpful to still have a general preference.",
    icon: StarIcon,
  },
  stayOnTrack: {
    title: "Stay on Track",
    module: "stayOnTrack",
    desc: "In this module, you will learn how to avoid digressing in conversation.",
    selectedDesc:
      "Try not to bring up topics that aren’t relevant, no matter how interesting you think they are.",
    icon: FlagIcon,
  },
  sarcasm: {
    title: "Sarcasm",
    module: "sarcasm",
    desc: "In this module, you will learn how to respond appropriately to sarcasm.",
    selectedDesc:
      "Identifying sarcastic statements can be hard! If you think someone is being sarcastic to you, try either acknowledging the sarcasm and being humorous back or just responding empathetically.",
    icon: FireIcon,
  },
  relevantQuestions: {
    title: "Relevant Questions",
    module: "relevantQuestions",
    desc: "In this module, you will learn how to reply to statements with relevant questions.",
    selectedDesc:
      "If someone brings up a topic, it helps keep the conversation going if you can stay on that same topic and ask a question that is directly related to the main point. It also helps the conversational partner feel that you are taking an interest in them.",
    icon: ChatIcon,
  },
};

export const getModulesByRole = (role: string) => {
  if (role == "full") {
    return modules; // Exclude "internalRelevantQuestions"
  } else if (role == "tester") {
    const { relevantQuestions, ...restModules } = modules;
    return restModules; // Exclude "internalRelevantQuestions"
  } else if (role == "internal") {
    return {
      general: modules.general,
      relevantQuestions: modules.relevantQuestions,
    }; // Only "internalRelevantQuestions"
  } else if (role == "rq-study") {
    return { relevantQuestions: modules.relevantQuestions };
  }
  // Default role: "user" sees only the general module
  return { general: modules.general };
};

export default modules;
