'use client'

import React, { useRef, RefObject } from 'react';

function useOnScreen(ref: RefObject<HTMLElement | null>, rootMargin = '0px') {
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isVisible;
}

export default function Goals() {
  const AnimatedParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isVisible = useOnScreen(ref, '-100px');

    return (
      <p
        ref={ref}
        className={`max-w-6xl text-center transition-opacity duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {children}
      </p>
    );
  };

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-25 px-4 md:px-10 lg:px-16"
      style={{ backgroundImage: 'url(/bg/bg-3.png)' }}
    >
      <div className="max-w-6xl mx-auto text-[rgb(0,90,172)]">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Our <span className="italic text-[#EE5A22]">Goals</span>
        </h2>
        <div className="flex flex-col gap-8 font-bold text-lg md:text-xl leading-relaxed">
          <div className="flex justify-center">
            <AnimatedParagraph>
              Create a go-to-resource centre for all sorts of emergencies for the common public.
            </AnimatedParagraph>
          </div>
          <div className="flex justify-center">
            <AnimatedParagraph>
              Create a network of LifeLinERs in every district – ordinary people ready to respond to extraordinary situations.
            </AnimatedParagraph>
          </div>
          <div className="flex justify-center">
            <AnimatedParagraph>
              Create awareness among the public about different emergency situations, and the Dos and Don&apos;ts for each.
            </AnimatedParagraph>
          </div>
        </div>
      </div>
    </section>
  );
}
