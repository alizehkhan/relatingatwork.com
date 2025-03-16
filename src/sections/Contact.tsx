import { forwardRef,Ref } from "react";

export const Contact = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="container py-24" id="contact" ref={ref}>
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
        Contact
      </h2>
      <p className="font-serif text-4xl font-semibold tracking-[-1px] text-gray-600 md:text-5xl">
        Get in touch
      </p>
      <p className="mt-8 max-w-xl text-lg text-gray-600">
        All my workshops are easily adapted for companies, and can be offered
        both in-person or online. I&apos;m happy to explore your needs and offer
        a simple solution that delivers.
      </p>

      <address className="mt-4 font-serif text-3xl font-semibold not-italic text-gray-500">
        hello@haneenkhan.com
      </address>
    </div>
  );
});

Contact.displayName = "Contact";
