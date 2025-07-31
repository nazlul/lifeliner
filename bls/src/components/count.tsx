'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Stat {
  icon: string
  number: number
  label: string
}

export default function StatsRow() {
  const stats: Stat[] = [
    { icon: '/count/1.svg', number: 1889, label: 'People trained' },
    { icon: '/count/2.svg', number: 2162, label: 'Pledges Taken' },
    { icon: '/count/3.svg', number: 44, label: 'Sessions Organized' },
  ]

  return (
    <section className="py-16 px-4 md:px-16 bg-[#E0F5FE] font-sans text-center">
      <h1 className="text-[#005AAC] text-3xl md:text-4xl lg:text-5xl font-bold mb-15">
        Our Lifesaving <span className="text-[#EE5A22]">Impact</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 md:gap-20 gap-20">
        {stats.map((stat, index) => (
          <CountUpStat
            key={index}
            icon={stat.icon}
            number={stat.number}
            label={stat.label}
          />
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-8">
        *since the launch of LifeLinER in May 2025.
      </p>
    </section>
  )
}

function CountUpStat({ icon, number, label }: Stat) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (inView) {
      let current = 0
      const duration = 1000
      const stepTime = 16
      const increment = number / (duration / stepTime)

      interval = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)
    } else {
      setCount(0)
    }

    return () => clearInterval(interval)
  }, [inView, number])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <Image src={icon} alt={label} width={50} height={50} className="mb-2" />
      <p className="text-6xl font-bold text-[#005AAC]">{count}+</p>
      <p className="text-black text-m mt-1 font-semibold">{label}</p>
    </div>
  )
}
