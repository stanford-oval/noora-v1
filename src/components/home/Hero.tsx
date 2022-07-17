import React from "react";

export default function Hero() {
  return (
    <div
      className="bg-noora-secondary-main pt-16 bg-cover bg-no-repeat overflow-hidden"
      id="homeHero"
    >
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-10 md:col-span-8">
            <p className="inline bg-gradient-to-r from-fuchsia-100 via-purple-300 to-violet-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Improve your social skills using AI.
            </p>
            <p className="mt-3 text-2xl tracking-tight text-slate-400">
              Noora is a virtual chatbot who guides you through a diverse set of
              social scenarios.
            </p>
            <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
              {/* <Button href="/">Get started</Button>
                    <Button href="/" variant="secondary">
                      View on GitHub
                    </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
