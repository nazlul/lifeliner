'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Mission() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true })
  }, [])

  const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="leading-relaxed" data-aos="fade-up">
      {children}
    </p>
  )

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-25 px-6 md:px-16 lg:px-22 flex justify-center items-center text-center"
      style={{ backgroundImage: 'url("/bg/bg-2.png")' }}
    >
      <div className="w-full max-w-6xl text-white space-y-6">
        <h1
          className="text-3xl md:text-5xl uppercase font-bold leading-tight"
          data-aos="fade-up"
        >
          <span className="text-white">Empowering Communities </span> <br />
          <span className="text-[#EE5A22]">to Save Lives</span>
        </h1>
        <div className="flex flex-col font-semibold text-base space-y-4">
          <Paragraph>
            LifeLinER is a life-saving community initiative conceptualized by Baby Memorial Hospitals, with a clear and urgent mission: to reduce preventable pre-hospital deaths by empowering everyday individuals with the knowledge and skills to respond effectively to medical emergencies.
          </Paragraph>
          <Paragraph>
            Medical emergencies can strike anywhere, at any time. In critical situations—such as cardiac arrest, trauma, or severe bleeding—the actions taken in the first few minutes often determine the outcome. Yet, across India, and even in Kerala, many lives are lost each year due to a lack of timely first aid and emergency response before professional help arrives.
          </Paragraph>
          <Paragraph>
            According to the Indian Council of Medical Research (ICMR), over 4.28 lakh lives are lost annually in India due to delays in emergency intervention. These are not just statistics—they are reminders of a gap in public preparedness that needs urgent attention.
          </Paragraph>
          <Paragraph> 
            LifeLinER aims to bridge this gap by offering structured emergency response training tailored for different age groups. Through this initiative, Baby Memorial Hospitals envisions a more responsive and prepared society—where every trained individual becomes a potential “life-liner,” capable of making a meaningful difference when seconds coun
          </Paragraph>
          <Paragraph>
            Together, we can build a community where no life is lost for lack of first response.
          </Paragraph>
        </div>
      </div>
    </section>
  )
}
