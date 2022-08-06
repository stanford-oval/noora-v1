import {
  ChatAlt2Icon,
  NewspaperIcon,
  TerminalIcon,
} from "@heroicons/react/outline";

const nooraFeatures = [
  {
    id: 1,
    name: "Research-backed methods",
    description:
      "Dr. Koegel's intervention method, pivotal response training, has been shown to help individuals make friends, have romantic relationships, collaborate in the workplace, and engage in leisure activities.",
    icon: NewspaperIcon,
  },
  {
    id: 2,
    name: "AI for automation",
    description:
      "Because pivotal response training's applicability is restricted by the lack of trained professionals, Noora's goal is to automate the intervention using AI.",
    icon: TerminalIcon,
  },
  {
    id: 3,
    name: "Diverse scenarios",
    description:
      "Dr. Koegel's team has curated multiple modules in different contexts (e.g., workplace, general) and sentiments (e.g., positive news, neutral statements). ",
    icon: ChatAlt2Icon,
  },
];

export default function Features() {
  return (
    <div className="py-14 bg-gray-50 overflow-hidden md:py-22">
      <div className="relative container">
        <svg
          className="hidden md:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        {/* <div className="relative mb-12 md:mb-24 ">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Research-backed Methods
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div> */}

        <div className="relative md:grid md:grid-cols-2 md:gap-16 md:items-center">
          <div className="relative">
            <h3 className="font-bold text-gray-900 tracking-tight text-3xl md:4xl">
              About <span className="text-noora-primary">Noora</span>
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Noora is a conversational AI designed to help improve the social
              skills of people with Autism Spectrum Disorder (ASD). Noora is
              designed by{" "}
              <a
                href="https://oval.cs.stanford.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                Stanford&apos;s OVAL Lab
              </a>{" "}
              in collaboration with{" "}
              <a
                href="https://profiles.stanford.edu/lynn-koegel"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                Dr. Lynn Koegel
              </a>{" "}
              in Stanford&apos;s Dept. of Psychiatry and Behavioral Sciences.
            </p>

            <dl className="mt-10 space-y-10">
              {nooraFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-noora-primary text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative md:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 md:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto px-4 sm:px-0"
              width={490}
              src="img/home/demo.png"
              alt="noora in action"
            />
          </div>
        </div>

        <svg
          className="hidden md:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        {/* <div className="relative mt-12 sm:mt-16 md:mt-24">
          <div className="md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-8 md:items-center">
            <div className="md:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Always in the loop
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                ex obcaecati natus eligendi delectus, cum deleniti sunt in
                labore nihil quod quibusdam expedita nemo.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-noora-primary text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative md:mt-0 md:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 md:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-2.png"
                alt=""
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
