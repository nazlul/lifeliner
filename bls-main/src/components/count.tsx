'use client'

import Image from 'next/image'

export default function StatsRow() {
  const stats = [
    {
      icon: '/count/1.svg',
      number: '2400+',
      label: 'Certified Lifeliners',
    },
    {
      icon: '/count/2.svg',
      number: '1200+',
      label: 'Lives Impacted',
    },
    {
      icon: '/count/3.svg',
      number: '500+',
      label: 'Trainings',
    },
  ]

  return (
    <section className="py-16 px-4 md:px-16 bg-[#F5FCFF] font-sans">
      <h1 className="text-[#005AAC] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-15">
        Our Lifesaving <span className="italic">Impact</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-20 gap-20 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={stat.icon}
              alt={stat.label}
              width={50}
              height={50}
              className="mb-2"
            />
            <p className="text-6xl font-bold text-[#005AAC]">{stat.number}</p>
            <p className="text-black text-m mt-1 font-semibold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
