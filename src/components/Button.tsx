export const Button = ({ refs }: { refs: any }) => {
  return (
    <a
      className="mt-6 inline-block rounded-lg bg-amber-700 px-4 py-2 font-semibold text-white hover:bg-amber-800 active:scale-95 active:bg-amber-900"
      href="#contact"
      onClick={(event) => {
        event?.preventDefault();
        refs["contact"].current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }}
    >
      Get in touch
    </a>
  );
};
