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
        fixed top-2 right-5
        z-[9999]
        flex flex-col items-center space-y-1 
        p-1 
        select-none pointer-events-none
      "
    >
      <Image
        src={showFirst ? '/bl1.svg' : '/bl2.svg'}
        alt="Blinking Icon"
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <span className="text-[0.5rem] md:text-[0.55rem] lg:text-[0.65rem] text-red-600 font-sans font-bold text-center uppercase leading-tight whitespace-nowrap">
        Emergency <br /> contact
      </span>
      <span className="text-[0.5rem] md:text-[0.65rem] lg:text-[0.75rem] -mt-1 text-red-600 font-sans font-bold">
        +91 974 720 0002
      </span>
    </div>
  )
}
