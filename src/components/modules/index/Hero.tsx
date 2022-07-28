import React from "react";

export default function Hero() {
  return (
    <div className="pt-16">
      <div className="container pt-8">
        <p className="inline font-bold leading-tight bg-gradient-to-r from-noora-primary-dark1 via-noora-primary-dark2 to-noora-secondary-main bg-clip-text font-display text-4xl tracking-tight text-transparent">
          Practice with our curated modules
        </p>
        <div className="mt-3 text-lg font-base tracking-tight text-gray-700 flex flex-col gap-y-4">
          <p>
            Thank you for choosing Noora to assist you with social conversation.
            Noora is designed to provide practice in areas that can be
            challenging during social conversation, such as{" "}
            <b>responding empathetically and positively to others</b>.
            {/* initiating and ending a
                  conversation, responding to bullying, and keeping a conversation
                  going. */}
          </p>
          <p>
            <b>Each of our modules focuses on a different area</b> that is
            commonly used during conversation. You will get a score after each
            group of 10 practice opportunities and an opportunity to improve
            your own score. We recommend that you continue to practice until you
            get a score of above 80% on three consecutive tries, but feel free
            to complete as many as you&apos;d like until you feel comfortable
            and confident with your responses.
            {/* The modules will help you with a different response if it feels that
            yours needs improvement. */}
          </p>
          <p>
            The goal is that after successfully completing these modules, you
            will <b>respond well during social conversation</b> and will{" "}
            <b>feel more comfortable and confident</b> when they come up in
            everyday situations.
          </p>
        </div>
      </div>
    </div>
  );
}
