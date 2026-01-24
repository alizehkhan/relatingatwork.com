import { Button } from "../components/Button";

export const Quote1 = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container">
        <p className="max-w-2xl font-serif text-4xl leading-snug font-semibold tracking-[-1px] text-gray-600 md:text-5xl md:leading-tight">
          Stay connected, motivated and create {""}
          <span className="text-amber-700 italic">
            psychological safety
          </span>{" "}
          for difficult conversations.
        </p>
        <Button />
      </div>
    </div>
  );
};
