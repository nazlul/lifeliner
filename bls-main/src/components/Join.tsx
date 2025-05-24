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
      className="relative w-full h-auto lg:h-[488px] bg-cover bg-center bg-no-repeat px-6 md:px-12 py-7 md:py-12"
      style={{ backgroundImage: "url('/bg/bg-4.png')" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between h-full relative">
        <div className="text-white max-w-[674px] lg:ml-20 text-center lg:text-left">
          <div>
            <h1
              className="text-[28px] md:text-[64px] lg:text-[81.55px] leading-[40px] md:leading-[65px] lg:leading-[60px] mt-8 font-bold capitalize"
              data-aos="fade-up"
            >
              BE A LifeLin<span className="text-[#EE5A22]">ER</span>,
            </h1>
            <h2
              className="text-[22px] md:text-[45px] lg:text-[59.63px] leading-[32px] md:leading-[70px] lg:leading-[89px] font-bold capitalize"
              data-aos="fade-up"
            >
              TRAIN TO SAVE LIVES
            </h2>
          </div>

          <div className="mt-4">
            <p
              className="text-[16px] md:text-[24px] lg:text-[27px] leading-[26px] md:leading-[38px] font-light capitalize"
              data-aos="fade-up"
            >
              You Can Be Someone&apos;s Lifeline. Get Certified. <br /> Be Prepared. Make a Difference.
            </p>
            <p
              className="text-[16px] md:text-[24px] lg:text-[27px] leading-[26px] md:leading-[38px] font-light capitalize"
              data-aos="fade-up"
            >
              Join the LifeLinER Movement Today!
            </p>
          </div>

          <div className="mt-6 lg:hidden w-full flex justify-center">
            <button className="bg-[#EE5A22] hover:bg-[#ee4422] rounded-[8px] w-[160px] h-[50px] flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-[14px] leading-[20px] font-bold capitalize">Become a LifeLinER</div>
              </div>
            </button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 right-4 lg:right-28 -translate-y-1/2">
            <button
              className="bg-[#EE5A22] hover:bg-[#ee4422] rounded-[11px] cursor-pointer w-[240px] h-[72px] flex items-center justify-center"
              onClick={() => window.open('https://wa.me/+918589023000', '_blank')}
            >
              <div className="text-white text-center">
                <div className="text-[22px] leading-[33px] font-bold capitalize">Become a LifeLinER</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
