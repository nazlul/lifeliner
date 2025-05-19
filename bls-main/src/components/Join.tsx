'use client'

import Image from 'next/image'
import React from 'react'

export default function Join() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
        <div className="w-full">
            <Image
            src="/banner.png"
            alt="Yes I Donate Banner"
            width={1879}
            height={645}
            layout="responsive"
            priority
            />
        </div>
        <button
            className="absolute cursor-pointer top-[70%] left-[8%]
                    bg-[#E11B22] text-white font-semibold
                      text-xs px-2 py-1 
                      md:text-base md:px-6 md:py-3
                      lg:text-lg lg:px-8 lg:py-4
                     
                      rounded-lg shadow-md hover:bg-red-700 transition"
                    onClick={() => window.open('https://forms.gle/MNQ2dtiU4rPokEiD8', '_blank')}>
            Join the Certified Lifeliners
        </button>
 </section>
  )
}
