import { IconBuildings } from "@tabler/icons-react";

export const TestimonialMojo = () => {
  return (
    <div className="bg-gray-100 py-16 text-gray-500">
      <div className="mx-auto max-w-xl px-6">
        <img src="/mojo.svg" className="h-10" alt="" />
        <div className="my-2 text-xs font-semibold tracking-wide uppercase">
          Mojo – AI-powered therapists for dating, sex, and relationships
        </div>
        <p className="font-serif text-3xl font-semibold">
          Effective, energising, and unforgettable
        </p>
        <div className="my-3 flex flex-wrap gap-1">
          <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
            <IconBuildings size={20} />
            In-person
          </div>
          <div className="flex w-fit items-center gap-1 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold">
            United Kingdom 🇬🇧
          </div>
        </div>
        <blockquote>
          <q>
            <p className="mb-4">
              Haneen created a bespoke communication workshop for our company
              offsite. The team was unanimous it was the highlight of the day.
              We listened with rapt attention as Haneen unfolded how to
              understand and take accountability for our needs. We hatched
              scenarios and stepped into different energies for delivering our
              messages (greatly inspired by Haneen's Oscar-worthy
              performances!). And we did deep group work to apply Haneen's
              actionable formula to the real-life confrontations we were shying
              away from.
            </p>
            <p className="mb-4">
              But the magic began before we even got into the room that day. I
              experienced firsthand how
              <strong>
                {" "}
                Haneen's curious and nuanced inquiry teased out where our
                company culture was at{" "}
              </strong>
              — and what we really needed to get from the session. She took
              quantitative and qualitative data about our culture and what our
              employees had to say. And she synthesised different solutions,
              taking on lots of feedback to find the right workshop for us.
            </p>
            <p>
              I was really wowed by Haneen's deep passion, expertise, and
              professionalism throughout.
              <strong>
                {" "}
                But her real secret weapon, in my opinion at least, is getting
                people to lean forward, prick their ears up, and care.{" "}
              </strong>
              Even the people who thought a communication workshop would be
              fluff, squish, and someone putting words in their mouth (spoiler:
              it was none of those things) were enthralled. Every team member
              came away thinking and behaving differently. And that right there
              is the difference between a facilitator and a real change-maker.
              Thank you, Haneen!
            </p>
          </q>
          <div className="flex items-center gap-3">
            <img
              src="/grace.jpeg"
              alt=""
              className="size-12 rounded-full border-2 border-gray-700"
            />
            <cite className="block">
              <p className="font-bold">Grace Willatt</p>
              <p>Science Lead</p>
            </cite>
          </div>
        </blockquote>
      </div>
    </div>
  );
};
