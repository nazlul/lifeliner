'use client'

import React from 'react'
import Image from 'next/image'

export default function Feature() {
  const logos = [
    '/logos/f1.svg',
    '/logos/f2.svg',
    '/logos/f3.svg',
    '/logos/f4.svg',
    '/logos/f5.svg',
  ]

  return (
    <section className="w-full font-sans bg-white py-12 px-6 md:px-20">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#005AAC] font-sans font-bold">
          Proudly <span className="italic">Featured By</span>
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-8 lg:hidden md:hidden">
        {logos.map((src, i) => (
          <div
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
          </div>
        ))}
      </div>

      <div className="hidden lg:block md:block overflow-hidden mx-30">
        <div className="flex animate-slide gap-16 mx-20 w-max">
          {[...logos, ...logos].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[150px] h-[80px] flex items-center justify-center">
              <Image
                src={src}
                alt={`Logo ${i + 1}`}
                width={150}
                height={80}
                className="object-contain"
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>

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
