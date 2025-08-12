import { Link } from "react-router-dom";

export const Button = ({ refs }: { refs: any }) => {
  return (
    <Link
      className="mt-6 inline-block rounded-lg bg-amber-700 px-4 py-2 font-semibold text-white hover:bg-amber-800 active:scale-95 active:bg-amber-900"
      to="#contact"
      onClick={(event) => {
        event?.preventDefault();
        refs["contact"].current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }}
    >
      Get in touch
    </Link>
  );
};
