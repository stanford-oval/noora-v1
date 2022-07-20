import React, {
  Fragment,
  createContext,
  useState,
  useEffect,
  useMemo,
  useRef
} from "react";
import AskNoora from "./ask-noora/AskNoora";
import { Tab } from "@headlessui/react";
import { clsx } from "clsx";
import Practice from "./practice/Practice";
import { useRouter } from "next/router";

export default function Playground() {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(
    router.query.page == "ask-noora" ? 1 : 0
  ); // tabs and routing

  useEffect(() => {
    const page: any =
      router.query.page ||
      router.asPath.match(new RegExp(`[&?]page=(.*)(&|$)`));
    if (page == "practice") {
      setSelectedIndex(0);
    } else if (page == "ask-noora") {
      setSelectedIndex(1);
    } else if (!page) {
      router.push("/playground?page=practice", undefined, {
        shallow: true,
      }); // default if no path
    }
  }, [router.query]);

  // PRACTICE
  const [draft, setDraft] = useState("");
  const [history, setHistory] = useState([
    {
      id: -1,
      fromNoora: true,
      text: "Hi! I'm Noora.",
    },
  ]);
  const [historyQueue, setHistoryQueue] = useState([]);
  const [convoState, setConvoState] = useState({ turn: "user-answer" });
  const [inputBoxRef, setInputBoxRef] = useState(
    useRef<HTMLInputElement>(null)
  );

  // ASK NOORA
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([
    {
      id: -1,
      statement: "I just finished a really good book!",
      good_replies: [
        {
          category: "curious",
          reasoning: "You want to know more about the good book I read.",
          reply:
            "“What book did you read? What was your favorite part of the book?”",
          rating: "Good answer.",
          explanation:
            "You showed me you are interested in my experiences and you asked about my book.",
        },
      ],
      bad_replies: [
        {
          category: "know-it-all",
          reasoning:
            "You feel the need to tell me the benefits of reading and why it's important.",
          reply:
            "“Reading is good for your brain and helps you understand the world better. You should read more.”",
          rating: "Bad answer.",
          explanation:
            "To be a good friend, you should not say that because you do not acknowledge my happiness and tell me what to do.",
        },
      ],
    },
  ]);
  const [resultsQueue, setResultsQueue] = useState<any[]>([]);

  const value = useMemo(
    () => ({
      practice: {
        draft: {
          value: draft,
          setValue: setDraft,
        },
        history: {
          value: history,
          setValue: setHistory,
        },
        historyQueue: {
          value: historyQueue,
          setValue: setHistoryQueue,
        },
        convoState: {
          value: convoState,
          setValue: setConvoState,
        },
        inputBoxRef: {
          value: inputBoxRef,
          setValue: setInputBoxRef,
        },
      },
      askNoora: {
        query: {
          value: query,
          setValue: setQuery,
        },
        results: {
          value: results,
          setValue: setResults,
        },
        resultsQueue: {
          value: resultsQueue,
          setValue: setResultsQueue,
        },
      },
    }),
    [
      query,
      setQuery,
      results,
      setResults,
      resultsQueue,
      setResultsQueue,
      draft,
      setDraft,
      history,
      setHistory,
      historyQueue,
      setHistoryQueue,
      inputBoxRef,
      setInputBoxRef,
    ]
  );

  return (
    <PlaygroundContext.Provider value={value}>
      <div className="pt-16"></div>

      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List>
          <nav
            className="fixed w-screen z-20 flex divide-x divide-gray-200"
            aria-label="Tabs"
          >
            {["Practice", "Ask Noora"].map((title) => {
              let pageId = title.toLowerCase().replace(" ", "-");
              return (
                <Tab as={Fragment} key={title}>
                  {({ selected }) => (
                    <button
                      onClick={() => {
                        router.push("/playground?page=" + pageId, undefined, {
                          shallow: true,
                        });
                      }}
                      className={clsx(
                        "text-gray-900 group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-sm font-medium text-center focus:z-10",
                        selected ? "bg-gray-100" : "hover:bg-gray-50 bg-white"
                      )}
                    >
                      <span
                        className={clsx(
                          "text-lg",
                          selected
                            ? "text-noora-primary-main font-bold"
                            : "text-gray-700"
                        )}
                      >
                        {title}
                      </span>
                      <span
                        aria-hidden={true}
                        className={clsx(
                          "absolute inset-x-0 bottom-0 h-1",
                          selected ? "bg-noora-primary-main" : "bg-gray-300"
                        )}
                      />
                    </button>
                  )}
                </Tab>
              );
            })}
          </nav>
        </Tab.List>
        {router.query.page && (
          <Tab.Panels>
            <Tab.Panel>
              <Practice />
            </Tab.Panel>
            <Tab.Panel>
              <AskNoora />
            </Tab.Panel>
          </Tab.Panels>
        )}
        {!router.query.page && <div className="h-screen"></div>}
      </Tab.Group>
    </PlaygroundContext.Provider>
  );
}

export const PlaygroundContext = createContext<any>({
  practice: {
    draft: {
      value: "",
      setValue: () => {},
    },
    history: {
      value: [
        {
          fromNoora: false,
          text: "",
        },
      ],
      setValue: () => {},
    },
    historyQueue: {
      value: [
        {
          fromNoora: false,
          text: "",
        },
      ],
      setValue: () => {},
    },
    convoState: {
      value: {
        turn: "",
      },
      setValue: () => {},
    },
  },
  askNoora: {
    query: {
      value: "",
      setValue: () => {},
    },
    results: {
      value: "",
      setValue: () => {},
    },
    resultsQueue: {
      value: "",
      setValue: () => {},
    },
  },
});