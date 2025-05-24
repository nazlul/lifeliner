'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const phoneNumbers = {
  kozhikode: { label: 'Kozhikode', number: '+91 974 720 0002' },
  kannur: { label: 'Kannur', number: '+91 974 706 0006' },
  thodupuzha: { label: 'Thodupuzha', number: '+91 920 772 4727' },
}

export default function Blinking() {
  const [showFirst, setShowFirst] = useState(true)
  const [location, setLocation] = useState<'kozhikode' | 'kannur' | 'thodupuzha'>('kozhikode')

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const { number } = phoneNumbers[location]

  return (
    <div className="fixed top-2 right-3 md:top-4 md:right-6 z-[9999] select-none text-red-600 font-sans font-bold text-[0.65rem]">

      {/* MOBILE */}
      <div className="flex flex-col items-center md:hidden mt-3">
        <select
          className="mb-1 px-0.1 py-[2px] rounded border border-red-500 text-[0.6rem] bg-white focus:outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value as keyof typeof phoneNumbers)}
        >
          {Object.entries(phoneNumbers).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>

        <div className="flex items-center justify-center gap-1 space-x-1">
          <Image
            src={showFirst ? '/bl1.svg' : '/bl2.svg'}
            alt="Blinking Icon"
            width={24}
            height={24}
            className="w-6 h-6 hidden md:block"
          />
          <a
            href={`tel:${number.replace(/\s+/g, '')}`}
            className="bg-red-600 text-white px-7 py-[2px] rounded text-[0.6rem] hover:bg-red-700 transition"
          >
            CALL
          </a>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center space-x-2 mt-3">
        <Image
          src={showFirst ? '/bl1.svg' : '/bl2.svg'}
          alt="Blinking Icon"
          width={36}
          height={36}
          className="w-9 h-9"
        />
        <div className="flex flex-col justify-center text-[0.65rem] lg:text-[0.68rem] leading-none">
          <select
            className="mb-[2px] px-2.2 py-[1px] rounded border border-red-500 bg-white focus:outline-none text-[0.65rem]"
            value={location}
            onChange={(e) => setLocation(e.target.value as keyof typeof phoneNumbers)}
          >
            {Object.entries(phoneNumbers).map(([key, val]) => (
              <option key={key} value={key}>{val.label}</option>
            ))}
          </select>
          <a href={`tel:${number.replace(/\s+/g, '')}`}>
            {number}
          </a>
        </div>
      </div>

    </div>
  )
}
