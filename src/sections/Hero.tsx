import { Button } from "../components/Button";
import { Navigation } from "../components/Navigation";

export const Hero = () => {
  return (
    <div className="hero min-h-[100svh] bg-cover bg-center bg-no-repeat">
      <Navigation />
      <div className="container mx-auto mt-20 pb-8">
        <h1 className="max-w-[540px] font-serif text-4xl leading-tight font-bold text-white/90 md:text-6xl md:leading-[1.12]">
          Bring radically clear communication to your workplace
        </h1>
        <p className="mt-2 max-w-[360px] text-2xl text-white opacity-80">
          The key to greater engagement & efficiency in the workplace
        </p>
        <Button />
      </div>
    </div>
  );
};
