import { forwardRef, Ref } from "react";

import { Button } from "../components/Button";

export const Flagship = forwardRef(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ({ refs }: { refs: any }, ref: Ref<HTMLDivElement>) => {
    return (
      <div className="container mt-12 mb-12 bg-white text-gray-600" ref={ref}>
        <div className="mx-auto max-w-[70ch] rounded-md border border-gray-200 bg-gray-100 p-8">
          <h2 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
            Flagship Offering
          </h2>

          <p className="font-serif text-4xl">
            Mastering Difficult Conversations at Work
          </p>
          <div className="mt-3 mb-4 flex flex-wrap gap-2">
            <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
              Two hour interactive workshop
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
              Online or in-person
            </div>
          </div>
          <p className="mb-4">
            Learn how to ask for what you need at work—clearly, confidently, and
            without triggering defensiveness in others. Whether you’re
            requesting support, setting boundaries, or giving feedback, the way
            you deliver your message makes all the difference. We’ll explore:
          </p>

          <ul className="my-4 space-y-2">
            <li className="ml-12 list-disc">
              The difference between a boundary and a request
            </li>
            <li className="ml-12 list-disc">
              Why most conflict comes from shame, not disagreement
            </li>
            <li className="ml-12 list-disc">
              What roles you unconsciously play in tricky dynamics (e.g.
              pleaser, fixer, avoider)
            </li>
            <li className="ml-12 list-disc">
              How to communicate directly without coming across as
              passive-aggressive, overly emotional, or too blunt
            </li>
            <li className="ml-12 list-disc">
              How to translate vague frustrations into specific, doable requests
            </li>
          </ul>
          <p>
            Expect journaling, reflection, and paired role-play practice—all
            designed to help you express yourself with more clarity, calm and
            impact. You’ll walk away with a practical framework to use in
            real-life workplace conversations.
          </p>
          <Button refs={refs} />
        </div>
      </div>
    );
  },
);

Flagship.displayName = "Flagship";
