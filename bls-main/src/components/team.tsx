'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

const profiles = [
  { image: '/dr.jpg', name: 'Dr. Alice Smith', profession: 'Cardiologist' },
  { image: '/dr.jpg', name: 'Dr. John Lee', profession: 'Neurologist' },
  { image: '/dr.jpg', name: 'Dr. Maria Gomez', profession: 'Pediatrician' },
  { image: '/dr.jpg', name: 'Dr. Ryan Chen', profession: 'Orthopedic Surgeon' },
  { image: '/dr.jpg', name: 'Dr. Olivia Ray', profession: 'Dermatologist' },
  { image: '/dr.jpg', name: 'Dr. Ethan Park', profession: 'Radiologist' },
]

export default function TeamCards() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const scrollAmount = 248 * 4 + 40 
      if (direction === 'right') {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      } else {
        if (container.scrollLeft === 0) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <section className="relative w-full font-sans px-6 md:px-20 pt-12 pb-10 py-2 bg-gray-100">
      <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#005AAC] text-center mb-10 font-sans font-bold">
        Our <span className="italic">Team</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
        {profiles.map((person, index) => (
          <div
            key={index}
            className="w-full h-[375px] bg-white shadow-[0px_13px_19px_rgba(0,0,0,0.07)] rounded-[10px] flex flex-col items-center"
          >
            <div className="w-[238px] h-[231px] relative">
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover rounded-t-[10px]"
              />
            </div>
            <div className="flex flex-col items-center px-[30px] pt-[20px] gap-[10px] h-[144px]">
              <h3 className="text-[#252B42] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center">
                {person.name}
              </h3>
              <p className="text-[#737373] text-[12px] font-normal leading-[16px] tracking-[0.2px] text-center">
                {person.profession}
              </p>
              <div className="flex justify-center items-center gap-[20px] mt-2">
                <a href="#" className="text-[#FF685B] text-[20px]">
                  <FaFacebook />
                </a>
                <a href="#" className="text-[#FF685B] text-[20px]">
                  <FaTwitter />
                </a>
                <a href="#" className="text-[#FF685B] text-[20px]">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden relative hidden md:flex">
        <div
          ref={scrollRef}
          className="flex gap-10 transition-all duration-500 overflow-x-auto scrollbar-hide"
        >
          {profiles.map((person, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[375px] bg-white rounded-[10px] mb-4 flex flex-col items-center shadow-[0_8px_10px_-2px_rgba(0,0,0,0.2)]"

            >
              <div className="w-[250px] h-[250px] relative">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover rounded-t-[10px]"
                />
              </div>
              <div className="flex flex-col items-center px-[30px] pt-[20px] gap-[10px] h-[144px]">
                <h3 className="text-[#252B42] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center">
                  {person.name}
                </h3>
                <p className="text-[#737373] text-[12px] font-normal leading-[16px] tracking-[0.2px] text-center">
                  {person.profession}
                </p>
                <div className="flex justify-center items-center gap-[20px] mt-2">
                  <a href="#" className="text-[#FF685B] text-[20px]">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-[#FF685B] text-[20px]">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-[#FF685B] text-[20px]">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[26px] h-[52px]"
          aria-label="Scroll Left"
        >
          <Image
            src="/arrow.svg"
            alt="Left Arrow"
            width={26}
            height={52}
            className="transform rotate-180"
          />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[26px] h-[52px]"
          aria-label="Scroll Right"
        >
          <Image src="/arrow.svg" alt="Right Arrow" width={26} height={52} />
        </button>
      </div>
    </section>
  )
}
