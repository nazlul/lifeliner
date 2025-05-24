'use client'

import React from 'react'

export default function Mission() {
  const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="leading-relaxed">{children}</p>
  )

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-25 px-6 md:px-16 lg:px-22 flex justify-center items-center text-center"
      style={{ backgroundImage: 'url("/bg/bg-2.png")' }}
    >
      <div className="w-full max-w-6xl text-white space-y-6">
        <Paragraph>
          <h1 className="text-3xl md:text-5xl uppercase font-bold leading-tight">
            <span className="text-white">Empowering Communities </span> <br />
            <span className="text-[#EE5A22]">to Save Lives</span>
          </h1>
        </Paragraph>
        <div className="flex flex-col font-semibold text-base space-y-4">
          <Paragraph>
            LifeLinER is a CSR initiative by Baby Memorial Hospital aimed at training
            everyday citizens to become Emergency First Responders.
          </Paragraph>
          <Paragraph>
            In a medical emergency, every second counts. The first few minutes can mean
            the difference between life and death. Before ambulances arrive, a trained
            LifeLinER can step in and provide life-saving support.
          </Paragraph>
          <Paragraph>
            Whether it&apos;s a road accident, cardiac arrest, stroke, or choking,
            LifeLinERs ensure that help is never too far away.
          </Paragraph>
          <Paragraph>
            Our mission is vital: to create a state-wide network of trained individuals
            who can act swiftly and effectively during the golden hour of any medical crisis.
          </Paragraph>
        </div>
      </div>
    </section>
  )
}
