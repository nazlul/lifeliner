'use client'

import React from 'react'

export default function Mission() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center px-6 md:px-16 py-10 md:py-20"
      style={{ backgroundImage: 'url("/bg/bg-2.png")' }}
    >
      <div className="max-w-4xl text-white text-center space-y-6 p-8">
        <h1 className="text-3xl md:text-5xl uppercase font-bold leading-tight">
          <span className="text-white">Empowering Communities </span> <br />
            <span className="text-[#EE5A22] italic">to Save Lives</span>
        </h1>
        <div className='flex flex-col font-semibold text-l'>
          <p className="leading-relaxed">
            LifeLinER is a CSR initiative by Baby Memorial Hospital aimed at training
            everyday citizens to become Emergency First Responders.
          </p>
          <p className="leading-relaxed">
            In a medical emergency, every second counts. The first few minutes can mean
            the difference between life and death. Before ambulances arrive, a trained
            LifeLinER can step in and provide life-saving support.
          </p>
          <p className="leading-relaxed">
            Whether it&apos;s a road accident, cardiac arrest, stroke, or choking,
            LifeLinERs ensure that help is never too far away.
          </p>
          <p className="leading-relaxed">
            Our mission is vital: to create a state-wide network of trained individuals
            who can act swiftly and effectively during the golden hour of any medical crisis.
          </p>
        </div>
      </div>
    </section>
  )
}
