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
        absolute 
        md:fixed
        lg:fixed
        bottom-5 left-5
        sm:top-2 sm:right-12 sm:bottom-auto sm:left-auto
        z-1
        md:z-[9999]
        lg:z-[9999]
        flex flex-col items-center space-y-1 
        rounded-md p-1 
        select-none pointer-events-none
      "
    >
      <Image
        src={showFirst ? '/bl1.svg' : '/bl2.svg'}
        alt="Blinking Icon"
        width={24}
        height={24}
        className="w-8 h-8"
      />
      <span className="text-[0.6rem] text-red-600 font-sans font-bold text-center uppercase leading-tight whitespace-nowrap">
        Emergency <br /> contact<br />
      </span>
      <span className="text-[0.7rem] -mt-1 text-red-600 font-sans font-bold">+91 974 720 0002</span>
    </div>
  )
}
