'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface DaySet {
  day: number
  title: string
  location?: string
  description?: string
  images: string[]
  date?: string
}

export default function CPR() {
  const [selectedDay, setSelectedDay] = useState<DaySet | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const expeditionDays: DaySet[] = [
    {
      day: 0,
      title: 'Launching Ceremony',
      location: 'Launch Event',
      description: 'Official launch of the LifeLinER CPR Literacy India Expedition',
      images: ['/expedition/launch/1.jpg','/expedition/launch/2.jpg','/expedition/launch/3.jpg','/expedition/launch/4.jpg','/expedition/launch/5.jpg','/expedition/launch/6.jpg'],
      date: '9 Nov 2025'
    },
    {
      day: 1,
      title: 'CPR Session For Teaching & Non-Teaching Staff',
      location: 'Gudallur Vidyodaya Adivasi Primary School',
      description: 'First day of the LifeLinER CPR Literacy India Expedition',
      images: ['/expedition/d1/1.jpg','/expedition/d1/2.jpg','/expedition/d1/3.jpg'],
      date: '10 Nov 2025'
    },
    {
      day: 2,
      title: 'Started at Achoor Tea Estate',
      location: 'Achoor Tea Estate',
      description: 'Training sessions with tea estate workers',
      images: ['/expedition/d2/1.jpg','/expedition/d2/2.jpg','/expedition/d2/3.jpg','/expedition/d2/4.jpg','/expedition/d2/5.jpg','/expedition/d2/6.jpg','/expedition/d2/7.jpg'],
      date: '11 Nov 2025'
    },
    {
      day: 3,
      title: 'Basha Heals',
      location: 'Home Healthcare Services Pvt. Ltd. - STARS Health Care Academy Bangalore',
      images: ['/expedition/d3/1.jpg','/expedition/d3/2.jpg','/expedition/d3/3.jpg'],
      date: '12 Nov 2025'
    },
    {
      day: 4,
      title: "Children's Day Sidhi Viayak Public School",
      location: 'Balesware',
      description: "Special CPR training on Children's Day",
      images: ['/expedition/d4/1.jpg','/expedition/d4/2.jpg','/expedition/d4/3.jpg','/expedition/d4/4.jpg','/expedition/d4/5.jpg'],
      date: '13 Nov 2025'
    },
    {
      day: 5,
      title: 'Municipal Park Thirupathy',
      location: 'Thirupathy',
      description: 'CPR awareness in public spaces',
      images: ['/expedition/d5/1.jpg','/expedition/d5/2.jpg','/expedition/d5/3.jpg','/expedition/d5/4.jpg','/expedition/d5/5.jpg','/expedition/d5/6.jpg','/expedition/d5/7.jpg','/expedition/d5/8.jpg','/expedition/d5/9.jpg'],
      date: '14 Nov 2025'
    },
    {
      day: 6,
      title: 'JNV Guntur',
      location: 'Guntur',
      images: ['/expedition/d6/1.jpg','/expedition/d6/2.jpg','/expedition/d6/3.jpg','/expedition/d6/4.jpg'],
      date: '15 Nov 2025'
    },
    {
      day: 7,
      title: 'Kailasagiri Adventure Park',
      location: 'Kailasagiri',
      description: 'CPR training at adventure park',
      images: ['/expedition/d7/1.jpg','/expedition/d7/2.jpg','/expedition/d7/3.jpg','/expedition/d7/4.jpg','/expedition/d7/5.jpg','/expedition/d7/6.jpg','/expedition/d7/7.jpg'],
      date: '16 Nov 2025'
    },
    {
      day: 8,
      title: 'Vishakhapatnam CPR Awareness',
      location: 'Court Premises, Vishakhapatnam',
      description: 'CPR awareness in the court premises',
      images: ['/expedition/d8/1.jpg','/expedition/d8/2.jpg','/expedition/d8/3.jpg'],
      date: '17 Nov 2025'
    },
    {
      day: 9,
      title: 'Gov Medical College Srikakulam',
      location: 'Srikakulam, Andhra Pradesh',
      images: ['/expedition/d9/1.jpg','/expedition/d9/2.jpg'],
      date: '18 Nov 2025'
    },
    {
      day: 10,
      title: 'Kerala Kala Samithi Visakhapatnam',
      location: 'Visakhapatnam',
      images: ['/expedition/d10/1.jpg','/expedition/d10/2.jpg'],
      date: '19 Nov 2025'
    },
    {
      day: 11,
      title: 'Rotary Club of Balasore',
      location: 'Balasore',
      description: 'Training with Rotary Club members',
      images: ['/expedition/d11/1.jpg','/expedition/d11/2.jpg','/expedition/d11/3.jpg','/expedition/d11/4.jpg','/expedition/d11/5.jpg'],
      date: '20 Nov 2025'
    },
    {
      day: 12,
      title: 'LGBTQ Community Kolkatta',
      location: 'Kolkata',
      images: ['/expedition/d12/1.jpg','/expedition/d12/2.jpg'],
      date: '21 Nov 2025'
    },
    {
      day: 13,
      title: 'Culcatta Malayalee Association',
      location: 'Kolkata',
      images: ['/expedition/d13/1.jpg','/expedition/d13/2.jpg','/expedition/d13/3.jpg','/expedition/d13/4.jpg','/expedition/d13/5.jpg'],
      date: '22 Nov 2025'
    },
    {
      day: 14,
      title: 'Unexpected Sessions',
      location: 'Various Locations',
      images: ['/expedition/d14/1.jpg'],
      date: '23 Nov 2025'
    },
    {
      day: 15,
      title: 'Jio Pump Mursidabad',
      location: 'Mursidabad',
      images: ['/expedition/d15/1.jpg','/expedition/d15/2.jpg'],
      date: '24 Nov 2025'
    },
    {
      day: 16,
      title: 'Guwahati',
      location: 'Guwahati',
      images: ['/expedition/d16/1.jpg','/expedition/d16/2.jpg','/expedition/d16/3.jpg'],
      date: '25 Nov 2025'
    },
    {
      day: 17,
      title: 'Don Bosco Higher Secondary School',
      location: 'Sonaighuli, Guwahati',
      images: ['/expedition/d17/1.jpg','/expedition/d17/2.jpg'],
      date: '26 Nov 2025'
    }
  ]

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) setSelectedDay(null)
    }
    if (selectedDay) document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [selectedDay])

  const scroll = (d: 'left' | 'right') => {
    if (!scrollRef.current) return
    const c = scrollRef.current
    const amt = 340 * 3 + 96
    if (d === 'right') {
      if (c.scrollLeft + c.offsetWidth >= c.scrollWidth) c.scrollTo({ left: 0, behavior: 'smooth' })
      else c.scrollBy({ left: amt, behavior: 'smooth' })
    } else {
      if (c.scrollLeft === 0) c.scrollTo({ left: c.scrollWidth, behavior: 'smooth' })
      else c.scrollBy({ left: -amt, behavior: 'smooth' })
    }
  }

  return (
    <section className="p-8 bg-blue-50">
      <div className="mx-auto">
        <div className="flex items-center justify-center mb-12 gap-4">
            
            <div className="flex-shrink-0">
                <Image
                src="/cpr-logo.png"
                alt="CPR Logo"
                width={120}
                height={120}
                className="object-contain max-h-[100px] md:max-h-[120px] lg:max-h-[150px]"
                />
            </div>
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                <span className="text-[#005AAC]">CPR Literacy</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#EE5A22]">India Expedition</h2>
            </div>
        </div>


        <div className="relative px-4 md:px-12">
          <button onClick={() => scroll('left')} className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 rotate-180 z-10">
            <Image src="/arrow.svg" alt="Left" width={24} height={24} />
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto gap-8 scroll-smooth pb-5 scrollbar-hide py-2 px-2">
            {expeditionDays.map((d) => (
             <div
            key={d.day}
            onClick={() => setSelectedDay(d)}
            className="min-w-[340px] max-w-[340px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group border-2 border-transparent hover:border-[#005AAC] flex flex-col"
            >
            <div className="bg-[#005AAC] text-white px-4 py-4 flex items-center justify-between h-[70px]">
                <div>
                <div className="text-xs font-medium opacity-90">{d.day === 0 ? "Launch Day" : "Day"}</div>
                <div className="text-2xl font-bold">{d.day === 0 ? "" : d.day}</div>
                </div>
                {d.date && <div className="text-xs text-right opacity-90">{d.date}</div>}
            </div>

            <div className="grid grid-cols-2 gap-1 p-2">
                {d.images.slice(0, 4).map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-md">
                    <Image src={src} alt="" width={200} height={200} className="object-cover w-full h-full" unoptimized />
                </div>
                ))}
            </div>

            <div className="p-4 flex-1 flex flex-col justify-end pb-6">
                <h3 className="font-bold text-[#005AAC] text-lg group-hover:text-[#EE5A22] transition-colors leading-tight line-clamp-2 mb-2">
                {d.title}
                </h3>

                {d.location && (
                <div className="flex items-start text-sm text-gray-600 mb-1">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="line-clamp-2">{d.location}</span>
                </div>
                )}

                {d.description && <p className="text-sm text-gray-600 line-clamp-2">{d.description}</p>}
            </div>
            </div>
            ))}
          </div>

          <button onClick={() => scroll('right')} className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Image src="/arrow.svg" alt="Right" width={24} height={24} />
          </button>
        </div>
      </div>

      {selectedDay && (
        <div className="fixed z-[9999] inset-0 bg-black/40 backdrop-blur-xl flex items-center justify-center p-4">
            <div
            ref={modalRef}
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 relative custom-scrollbar"
            >
            <button
                onClick={() => setSelectedDay(null)}
                className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
                &times;
            </button>

            <div className="flex justify-between text-sm md:text-base font-semibold mb-1 text-[#EE5A22] px-6">
                <div>{selectedDay.date}</div>
            </div>

            <h2 className="text-2xl font-bold text-center text-[#005AAC]">
                {selectedDay.day === 0 ? 'Launch Day' : `Day ${selectedDay.day}`}
            </h2>

            <h3 className="text-xl font-semibold text-center text-[#005AAC] mt-1">
                {selectedDay.title}
            </h3>

            {selectedDay.location && (
                <p className="text-[#005AAC] text-center mt-1 text-base font-medium">
                {selectedDay.location}
                </p>
            )}

            {selectedDay.description && (
                <p className="text-[#005AAC] text-center mt-1 mb-4 text-base font-medium">
                {selectedDay.description}
                </p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedDay.images.map((src, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded">
                    <Image
                    src={src}
                    alt=""
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                    />
                </div>
                ))}
            </div>
            </div>
        </div>
     )}

    </section>
  )
}
