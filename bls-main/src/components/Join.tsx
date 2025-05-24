'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Join() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true })
  }, [])

  return (
    <section
      className="relative w-full h-auto lg:h-[488px] bg-cover bg-center bg-no-repeat px-6 md:px-12 py-12"
      style={{ backgroundImage: "url('/bg/bg-4.png')" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full relative">
        <div className="text-white max-w-[574px] lg:ml-20">
          <div>
            <h1
              className="text-[36px] md:text-[64px] lg:text-[81.55px] leading-[50px] md:leading-[65px] lg:leading-[60px] mt-15 font-bold capitalize"
              data-aos="fade-up"
            >
              BE A LifeLin<span className="text-[#EE5A22]">ER</span>,
            </h1>
            <h2
              className="text-[28px] md:text-[45px] lg:text-[59.63px] leading-[40px] md:leading-[70px] lg:leading-[89px] font-bold capitalize"
              data-aos="fade-up"
            >
              LET&apos;S TRAIN & SAVE
            </h2>
          </div>

          <div className="mt-4">
            <p
              className="text-[18px] md:text-[24px] lg:text-[27px] leading-[30px] md:leading-[38px] font-light capitalize"
              data-aos="fade-up"
            >
              Each of us can be a lifeLinER To keep alive.
            </p>
            <p
              className="text-[18px] md:text-[24px] lg:text-[27px] leading-[30px] md:leading-[38px] font-light capitalize"
              data-aos="fade-up"
            >
              Let&apos;s make a movement!
            </p>
          </div>

          <div className="mt-8 lg:hidden w-full flex justify-center">
            <button className="bg-[#EE5A22] hover:bg-[#ee4422] rounded-[11px] w-full max-w-[200px] h-[66px] flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-[18px] leading-[22px] font-bold capitalize">Join the Certified</div>
                <div className="text-[23px] leading-[26px] font-bold capitalize">LifeLInERs</div>
              </div>
            </button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 right-4 lg:right-28 -translate-y-1/2">
            <button
              className="bg-[#EE5A22] hover:bg-[#ee4422] rounded-[11px] cursor-pointer w-[240px] h-[72px] flex items-center justify-center"
              onClick={() => window.open('https://wa.me/+918589023000', '_blank')}
            >
              <div className="text-white text-center">
                <div className="text-[22px] leading-[33px] font-bold capitalize">Join the Certified</div>
                <div className="text-[28px] leading-[41px] font-bold capitalize">LifeLInERs</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
