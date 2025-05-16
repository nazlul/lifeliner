'use client'

import React from 'react'

export default function Mission() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/mission.png')" }}
    >
      <div className="text-white font-sans px-6 py-10 md:px-20 md:py-24 sm:py-39 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
           EMPOWERING COMMUNITIES<br className="hidden md:inline" /> TO SAVE LIVES
        </h2>
        <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Every second matters when someone's life is on the line. This campaign aims to empower individuals with the skills and confidence to respond in emergencies through Basic Life Support (BLS) training.
        </p>
      </div>

      <div className="text-black font-sans px-6 py-16 md:px-20 md:py-39 text-center">
        <h2 className="text-[#005AAC] text-4xl md:text-4xl font-bold mb-10">Our Goals</h2>
        <ul className="list-disc list-inside text-2xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto space-y-4 text-left md:text-center">

            <li>Train 10,000+ community members</li>
            <li>Build a network of certified Lifeliners across the region</li>
            <li>Promote timely action during cardiac and respiratory emergencies</li>
        </ul>
    </div>
    </section>
  )
}
