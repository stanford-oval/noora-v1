import {
  ChatAltIcon,
  BriefcaseIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";

const modules = {
  general: {
    title: "General",
    desc: "Practice responding to positive, neutral, and negative statements in a general context. In this module, Noora is your friend and speaks on a variety of topics including family, weather, and school. ",
    icon: ChatAltIcon,
  },
  work: {
    title: "Work",
    desc: "Practice responding to positive, neutral, and negative statements in the workplace. In this module, Noora is your co-worker and speaks on a variety of work-related topics such as promotions and job updates.",
    icon: BriefcaseIcon,
  },
  all: {
    title: "All",
    desc: "Don't know which module to pick or want to try them all? Practice responding to positive, neutral, and negative statements in both the general and work settings.",
    icon: ChatAlt2Icon,
  },
};

export default modules;
