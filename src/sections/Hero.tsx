import { Button } from "../components/Button";
import { Navigation } from "../components/Navigation";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-transparent bg-cover bg-center md:bg-[linear-gradient(90deg,rgba(0,0,0,0.6)0%,rgba(0,0,0,0)100%),url('/hero.jpeg')]">
      <Navigation />
      <div className="container mt-0 pb-8 md:mt-20">
        <img
          src="/hero.jpeg"
          alt=""
          className="mb-4 block aspect-square rounded-md object-cover md:hidden"
        />
        <h1 className="max-w-2xl font-serif text-4xl leading-[1.12] font-bold text-gray-700 md:text-7xl md:text-white/90">
          Bring radically clear communication to your workplace
        </h1>
        <p className="mt-2 max-w-100 text-2xl text-gray-600 md:text-white/80">
          The key to greater engagement & efficiency in the workplace
        </p>
        <Button />
      </div>
    </div>
  );
};
