'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Goals() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true })
  }, [])

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-25 px-4 md:px-10 lg:px-16"
      style={{ backgroundImage: 'url(/bg/bg-3.png)' }}
    >
      <div className="max-w-6xl mx-auto text-[rgb(0,90,172)]">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-10"
          data-aos="fade-up"
        >
          Our <span className="text-[#EE5A22]">Goals</span>
        </h2>
        <div className="flex flex-col gap-8 font-bold text-lg md:text-xl leading-relaxed">
          <div className="flex justify-center" data-aos="fade-up">
            <p className="max-w-6xl text-center">
              Reduce preventable pre-hospital deaths<br /> <span className="text-[#EE5A22]"> Address the critical window between emergency onset and professional medical intervention.</span>
            </p>
          </div>
          <div className="flex justify-center" data-aos="fade-up">
            <p className="max-w-6xl text-center">
              Empower everyday individuals with life-saving skills<br /> <span className="text-[#EE5A22]">Train non-medical people—students, parents, workers, bystanders—to act in emergencies.</span>
            </p>
          </div>
          <div className="flex justify-center" data-aos="fade-up">
            <p className="max-w-6xl text-center">
              Build a community of trained “LifeLinERs”<br /><span className="text-[#EE5A22]"> Create a network of first responders capable of stepping in when seconds count.</span>
            </p>
          </div>
          <div className="flex justify-center" data-aos="fade-up">
            <p className="max-w-6xl text-center">
              Foster a culture of civic responsibility and readiness<br /><span className="text-[#EE5A22]"> Encourage people to view first aid knowledge as a vital life skill—not just for professionals.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
