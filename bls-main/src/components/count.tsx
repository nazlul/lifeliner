'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

type Stat = {
  icon: string
  number: number
  label: string
}

export default function StatsRow() {
  const stats: Stat[] = [
    {
      icon: '/count/1.svg',
      number: 2400,
      label: 'Certified Lifeliners',
    },
    {
      icon: '/count/2.svg',
      number: 1200,
      label: 'Lives Impacted',
    },
    {
      icon: '/count/3.svg',
      number: 500,
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
          <StatItem key={index} icon={stat.icon} number={stat.number} label={stat.label} />
        ))}
      </div>
    </section>
  )
}

function StatItem({ icon, number, label }: Stat) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 1000 
    const increment = number / (duration / 16) 
    let current = 0

    const counter = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(counter)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [inView, number])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <Image src={icon} alt={label} width={50} height={50} className="mb-2" />
      <p className="text-6xl font-bold text-[#005AAC]">{count}+</p>
      <p className="text-black text-m mt-1 font-semibold">{label}</p>
    </div>
  )
}
