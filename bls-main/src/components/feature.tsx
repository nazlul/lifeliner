'use client'

import React, { useRef, RefObject } from 'react'
import Image from 'next/image'

function useOnScreen(ref: RefObject<HTMLElement | null>, rootMargin = '0px') {
  const [isVisible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio >= 0.6)
      },
      {
        rootMargin,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), 
      }
    )

    observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [ref, rootMargin])

  return isVisible
}

export default function Feature() {
  const logos = [
    '/logos/f1.svg',
    '/logos/f2.svg',
    '/logos/f3.svg',
    '/logos/f4.svg',
    '/logos/f5.svg',
  ]

  const AnimatedDiv: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref, '-100px')

    return (
      <div
        ref={ref}
        className={`${className} transition-opacity will-change-transform  duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {children}
      </div>
    )
  }

  const AnimatedTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLHeadingElement>(null)
    const isVisible = useOnScreen(ref, '-100px')

    return (
      <h3
        ref={ref}
        className={`text-3xl md:text-4xl lg:text-5xl text-[#005AAC] font-sans font-bold transition-opacity will-change-transform duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {children}
      </h3>
    )
  }

  const AnimatedLogo: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className,
  }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isVisible = useOnScreen(ref, '-100px')

    return (
      <div
        ref={ref}
        className={`${className} transition-opacity will-change-transform duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {children}
      </div>
    )
  }

  return (
    <section className="w-full font-sans bg-white py-12 px-6 md:px-20">
      <div className="text-center mb-8">
        <AnimatedTitle>
          Proudly <span className="italic text-[#EE5A22]">Featured By</span>
        </AnimatedTitle>
      </div>

      <div className="flex flex-wrap justify-center gap-8 lg:hidden md:hidden">
        {logos.map((src, i) => (
          <AnimatedLogo
            key={i}
            className="w-[45%] sm:w-[30%] md:w-[15%] flex justify-center"
          >
            <Image
              src={src}
              alt={`Logo ${i + 1}`}
              width={150}
              height={80}
              className="object-contain"
              priority={true}
            />
          </AnimatedLogo>
        ))}
      </div>

      <AnimatedDiv className="hidden lg:block md:block overflow-hidden mx-30">
        <div className="flex animate-slide gap-16 mx-20 w-max">
          {[...logos, ...logos].map((src, i) => (
            <AnimatedLogo
              key={i}
              className="flex-shrink-0 w-[150px] h-[80px] flex items-center justify-center"
            >
              <Image
                src={src}
                alt={`Logo ${i + 1}`}
                width={150}
                height={80}
                className="object-contain"
                priority={true}
              />
            </AnimatedLogo>
          ))}
        </div>
      </AnimatedDiv>

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 10s linear infinite;
        }
      `}</style>
    </section>
  )
}
