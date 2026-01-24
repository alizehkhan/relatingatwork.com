import { LINKS } from "../content/links";

export const Navigation = () => {
  return (
    <header>
      <nav className="container mx-auto flex justify-between py-12 text-white">
        <a href="/" className="font-serif text-3xl">
          Haneen Khan
        </a>
        <ul className="hidden gap-8 text-lg md:flex">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a href={`#${link.to}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
