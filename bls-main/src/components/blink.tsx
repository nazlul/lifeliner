'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Blinking() {
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="
        fixed top-2 right-4
        md:top-2 md:right-8
        lg:top-4 lg:right-13
        z-[9999]
        flex flex-col lg:flex-row lg:items-center lg:space-x-2 
        items-center
        p-1 
        select-none 
      "
    >
      <Image
        src={showFirst ? '/bl1.svg' : '/bl2.svg'}
        alt="Blinking Icon"
        width={32}
        height={32}
        className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
      />
      <div className="flex flex-col items-center lg:items-start text-red-600 font-sans font-bold leading-tight">
        <span className="text-[0.5rem] md:text-[0.55rem] lg:text-[0.75rem] text-center uppercase">
          Emergency
          <span className="hidden lg:inline"></span>
        </span>
        <a
          href="tel:+919747200002"
          className="block md:hidden bg-red-600 text-white px-3 py-1 rounded text-[0.65rem] text-center hover:bg-red-700 transition"
        >
          CALL
        </a>
        <span className="hidden md:block text-[0.5rem] md:text-[0.65rem] lg:text-[0.75rem]">
          +91 974 720 0002
        </span>
      </div>
    </div>
  )
}
