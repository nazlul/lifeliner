'use client'

import React, { useRef } from 'react'
import Image from 'next/image'

const profiles = [
  { image: '/dr/1.jpg', name: 'Dr. Fabith Moideen V M', profession: 'Cluster Head - Emergency Medicine' },
  { image: '/dr/2.png', name: 'Dr. Rinoop Ramachandran', profession: 'Consultant & ED Chief' },
  { image: '/dr/3.png', name: 'Dr. Sanooj O P', profession: 'Senior Consultant' },
  { image: '/dr/4.png', name: 'Dr. Priya Padmanabhan', profession: 'Consultant' },
  { image: '/dr/5.png', name: 'Dr. Ajay Solomon Linson', profession: 'Specialist in Emergency Medicine' },
  { image: '/dr/6.png', name: 'Dr. Reshma B K', profession: 'Specialist in Emergency Medicine' },
  { image: '/dr/7.png', name: 'Dr. Faisal Basheer', profession: 'Associate Consultant' },
  { image: '/dr/8.png', name: 'Dr. Drishya S', profession: 'Associate Consultant' },
  { image: '/dr/9.png', name: 'Dr. Anisha K', profession: 'Specialist in Emergency Medicine' },
  { image: '/dr/10.png', name: 'Dr. Anitha Ann John', profession: 'Senior Medical Officer' },
  { image: '/dr/17.png', name: 'Dr. Vishal Abraham', profession: 'Chief' },
  { image: '/dr/11.png', name: 'Dr. Asish Kishore', profession: 'Specialist' },
  { image: '/dr/12.png', name: 'Dr. Muad', profession: 'Specialist' },
  { image: '/dr/13.png', name: 'Dr. Nithin Akkal', profession: 'Associate Consultant' },
  { image: '/dr/14.png', name: 'Dr. Sarath Narayan', profession: 'Specialist' },
  { image: '/dr/15.png', name: 'Dr. Shaheer Sulaiman', profession: 'Specialist' },
  { image: '/dr/16.png', name: 'Dr. Sumin Jacob', profession: 'Specialist' },
  { image: '/dr/18.png', name: 'Dr. Vivek Krishnan S', profession: 'Specialist' },
  { image: '/dr/19.png', name: 'Dr. Hirash P K', profession: 'Specialist' },
  { image: '/dr/20.png', name: 'Dr. Shameel Usman Moidoo', profession: 'Team Lead Consultant' },
  { image: '/dr/21.png', name: 'Dr. Noushad T P', profession: 'Consultant' },
  { image: '/dr/22.png', name: 'Dr. Nithin K', profession: 'Associate Consultant' },
  { image: '/dr/23.png', name: 'Dr. Sruthi Ajith Kumar ', profession: 'Associate Consultant' },
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
    <section className="relative w-full font-sans px-6 md:px-25 pt-12 pb-10 bg-[#E0F5FE]">
      <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#005AAC] text-center mb-10 font-bold">
        Our <span className="text-[#EE5A22]">Team</span>
      </h3>

      {/* Mobile version */}
      <div className="flex md:hidden overflow-x-auto scrollbar-hide gap-6">
        {profiles.map((person, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[200px] h-[320px] relative rounded-[10px] overflow-hidden"
          >
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover object-top scale-100"
            />
            <div className="absolute bottom-0 w-full bg-white h-[70px] px-[20px] pt-[16px] gap-[8px]">
              <h3 className="text-black text-xs font-bold leading-tight tracking-[0.1px] text-center">{person.name}</h3>
              <p className="text-gray-500 text-[0.65rem] leading-tight tracking-[0.2px] text-center">{person.profession}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop version */}
      <div className="relative hidden md:flex justify-center items-center">
        <button
          onClick={() => scroll('left')}
          className="absolute left-[-80px]"
          aria-label="Scroll Left"
        >
          <Image
            src="/arrow.svg"
            alt="Left Arrow"
            width={26}
            height={52}
            className="rotate-180 cursor-pointer"
          />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-14 overflow-x-auto scrollbar-hide"
        >
          {profiles.map((person, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] h-[430px] shadow-md hover:shadow-lg transform transition duration-200 mb-4 relative rounded-[10px] overflow-hidden"
            >
              <Image
                src={person.image}
                alt={person.name}
                fill
                className="object-cover object-top scale-100"
              />
              <div className="absolute bottom-0 w-full bg-white h-[90px] px-[30px] pt-[20px] gap-[10px]">
                <h3 className="text-black text-sm font-bold leading-[36px] tracking-[0.1px] text-center">{person.name}</h3>
                <p className="text-gray-500 text-[0.7rem] leading-[16px] tracking-[0.2px] text-center">{person.profession}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-[-80px]"
          aria-label="Scroll Right"
        >
          <Image src="/arrow.svg" alt="Right Arrow" width={26} height={52} />
        </button>
      </div>
    </section>
  )
}
