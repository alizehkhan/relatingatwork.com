import "./index.css";

import { Analytics } from "@vercel/analytics/react";
import { useRef } from "react";
import ReactPlayer from "react-player";

import { Footer } from "./components/Footer";
import { About } from "./sections/About";
import { Approach } from "./sections/Approach";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Offering } from "./sections/Offering";
import { Quote1 } from "./sections/Quote1";
import { Quote2 } from "./sections/Quote2";
import { TestimonialFinanztip } from "./sections/TestimonialFinanztip";
import { TestimonialHelloFresh } from "./sections/TestimonialHelloFresh";
import { TestimonialMojo } from "./sections/TestimonialMojo";
import { Workshops } from "./sections/Workshops";

function App() {
  const sectionRefs = {
    approach: useRef(null),
    workshops: useRef(null),
    about: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  return (
    <>
      <Hero refs={sectionRefs} />
      <Offering />
      <Workshops ref={sectionRefs.workshops} />
      <Quote1 refs={sectionRefs} />
      <Approach ref={sectionRefs.approach} />
      <TestimonialHelloFresh />
      <img
        src="coaching.jpg"
        alt=""
        className="aspect-video w-full object-cover md:aspect-16/7"
      />
      <Quote2 refs={sectionRefs} />
      <About refs={sectionRefs} ref={sectionRefs.about} />
      <TestimonialMojo />
      <ReactPlayer
        src="workshop.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <TestimonialFinanztip />
      <Contact ref={sectionRefs.contact} />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
