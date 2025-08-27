import { IconBuildings } from "@tabler/icons-react";

export const TestimonialHelloFresh = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-500">
      <div className="mx-auto max-w-xl px-6">
        <img src="/hellofresh.png" className="h-10" alt="" />
        <div className="my-2 text-xs font-semibold tracking-wide uppercase">
          HelloFresh – Meal-kit company
        </div>
        <p className="mb-4 font-serif text-3xl font-semibold">
          Haneen taught me how much our words shape workplace relationships.
        </p>
        <div className="my-3 flex flex-wrap gap-1">
          <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
            <IconBuildings size={20} />
            In-person
          </div>
          <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
            🇩🇪 Germany
          </div>
        </div>
        <blockquote>
          <q>
            <p className="mb-4">
              In our multicultural company, I learned that I can rewire how I
              communicate to avoid conflicts before they happen. The biggest
              insight was understanding how to clearly express what I need while
              genuinely listening to what my colleagues need too. Haneen showed
              me that different cultural backgrounds don't have to create
              tension - they can actually enrich our conversations when we
              choose our words thoughtfully. Now I'm much more aware of how my
              language affects others, especially when working across diverse
              perspectives. She gave me practical skills I use daily to build
              better understanding and connection with my team.
            </p>
            <p className="mb-4">
              These communication tools have helped me not just at work, but in
              every area of my life. I've always found this kind of thoughtful
              communication hard to develop without proper guidance — and I
              highly recommend Haneen's facilitation to anyone wanting to build
              these skills. You're in trusted hands.
            </p>
          </q>
          <div className="flex items-center gap-3">
            <img
              src="/matteo.jpeg"
              alt=""
              className="size-12 rounded-full border-2 border-gray-700"
            />
            <cite className="block">
              <p className="font-bold">Matteo Osio</p>
              <p>Senior Data Engineer</p>
            </cite>
          </div>
        </blockquote>
      </div>
    </div>
  );
};
