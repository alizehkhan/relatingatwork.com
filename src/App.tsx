import "./index.css";

import { Analytics } from "@vercel/analytics/react";
import ReactPlayer from "react-player";

import { About } from "./sections/About";
import { Approach } from "./sections/Approach";
import { Contact } from "./sections/Contact";
import { Flagship } from "./sections/Flagship";
import { Hero } from "./sections/Hero";
import { Offering } from "./sections/Offering";
import { Quote1 } from "./sections/Quote1";
import { Quote2 } from "./sections/Quote2";
import { TestimonialFinanztip } from "./sections/TestimonialFinanztip";
import { TestimonialHelloFresh } from "./sections/TestimonialHelloFresh";
import { TestimonialMojo } from "./sections/TestimonialMojo";
import { Workshops } from "./sections/Workshops";

function App() {
  return (
    <>
      <Hero />
      <Offering />
      <Workshops />
      <Quote1 />
      <Approach />
      <TestimonialHelloFresh />
      <img
        src="coaching.jpg"
        alt=""
        className="aspect-video w-full object-cover md:aspect-16/7"
      />
      <Quote2 />
      <About />
      <TestimonialMojo />
      <Flagship />
      <div className="hidden md:block">
        <ReactPlayer
          src="workshop.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>
      <TestimonialFinanztip />
      <Contact />
      <Analytics />
    </>
  );
}

export default App;
