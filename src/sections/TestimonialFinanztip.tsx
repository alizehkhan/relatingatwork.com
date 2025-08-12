import { IconVideo } from "@tabler/icons-react";

export const TestimonialFinanztip = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-500">
      <div className="mx-auto max-w-xl px-6">
        <img src="/finanztip.jpg" className="h-10" alt="" />
        <div className="my-2 text-xs font-semibold tracking-wide uppercase">
          Finanztip – Germany's money guide
        </div>
        <p className="mb-4 font-serif text-3xl font-semibold">
          Learning to express needs — and enjoying it
        </p>
        <div className="my-3 flex flex-wrap gap-1">
          <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
            <IconVideo size={20} />
            Online
          </div>
          <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
            🇩🇪 Germany
          </div>
        </div>
        <blockquote>
          <q>
            <p className="mb-4">
              Today I had the chance to join a truly inspiring webinar — and I'm
              so glad I did. "How to express your needs without burning
              bridges."
            </p>
            <p className="mb-4">
              Haneen did an incredible job. It was more than just a
              presentation: we had interactive moments, short exercise, honest
              discussions, and plenty of practical tools and techniques for
              expressing needs in a healthy, constructive way.
            </p>
            <p className="mb-4">
              I was especially impressed by how much energy Haneen brought —
              even over Zoom. Her approach made the whole experience feel safe,
              engaging, and uplifting. I left the session feeling energised and
              more confident in my ability to express my own needs.
            </p>
            <p className="mb-4">
              One thing I realized during the session was: often it's not easy
              to understand what we actually need. But we can support each other
              in clarifying those needs — and in doing so, improve our
              relationships at work, at home, and with friends.
            </p>
            <p className="mb-2">
              I really appreciated how Haneen gave us space to speak, to try out
              her suggestions, and to reflect. She listened deeply, explained
              complex ideas in simple terms, and filled the session with
              positivity and smiles. I walked away with a clearer understanding
              of:
            </p>
            <ul className="ml-6">
              <li>• how to identify my needs</li>
              <li>• how to communicate them</li>
              <li>• how to prepare for difficult conversations</li>
              <li>• and how to make those conversations less stressful</li>
            </ul>
            <p className="mt-4">
              A big thank you to Haneen for leading such a powerful session.
            </p>
          </q>
          <div className="flex items-center gap-4">
            <img
              src="/aleksei.jpeg"
              alt=""
              className="size-12 rounded-full border-2 border-gray-700"
            />
            <cite className="block">
              <p className="font-bold">Aleksei Menkov</p>
              <p>Software Engineer</p>
            </cite>
          </div>
        </blockquote>
      </div>
    </div>
  );
};
