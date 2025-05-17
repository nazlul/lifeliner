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
        <h2 className="text-3xl text-[#F3838D] font-bold mb-2">In the Spotlight:</h2>
        <h3 className="text-5xl font-medium text-black">Proudly Featured By</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
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
    </section>
  )
}
