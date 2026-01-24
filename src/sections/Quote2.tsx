import { Button } from "../components/Button";

export const Quote2 = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <p className="max-w-3xl font-serif text-4xl leading-snug font-semibold tracking-[-1px] text-gray-600 md:text-5xl md:leading-tight">
          Any communication technique can be hurtful or stop working if it is
          coming from strategy instead of {""}
          <span className="text-amber-700 italic">authenticity</span>.
        </p>
        <Button />
      </div>
    </div>
  );
};
