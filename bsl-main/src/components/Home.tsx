'use client'
import { useState } from 'react'
import Image from 'next/image'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const CloseIcon = AiOutlineClose as React.FC<React.ComponentProps<'svg'>>;
  const MenuIcon = HiMenuAlt4 as React.FC<React.ComponentProps<'svg'>>;


  return (
    <main className="scroll-smooth relative w-full min-h-screen bg-white overflow-hidden">

      <div className="absolute top-[36px] left-[49px] z-20 w-[172px] h-[61.36px]">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={172}
          height={61.36}
        />
      </div>

      <div className="absolute top-[42px] right-[20px] md:right-[64px] border border-white rounded-[10px] px-4 py-3 z-20">
        <span className="text-black font-semibold text-sm md:text-base capitalize">Register Now</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex absolute top-[55px] left-1/2 transform -translate-x-1/2 gap-12 z-20">               
        <span className="text-[#005AAC] font-semibold text-sm md:text-base cursor-pointer">Home</span>   
        <span className="text-[#172943] font-semibold text-sm md:text-base cursor-pointer">About Us</span>                            
        <span className="text-[#172943] font-semibold text-sm md:text-base cursor-pointer">Training Dates</span>               
        <span className="text-[#172943] font-semibold text-sm md:text-base cursor-pointer">Become a Lifeline</span>   
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-between items-center p-4 relative z-20">
        <div className="flex items-center text-xl font-bold text-black">
          
        </div>
        <div className="flex items-center">
          {toggleMenu ? (
            <CloseIcon
              className="text-black w-7 h-7 cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <MenuIcon
              className="text-black w-7 h-7 cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />  
          )}
        </div>

        {toggleMenu && (
          <div className="z-30 fixed top-0 right-0 p-6 w-[75vw] h-screen bg-white shadow-lg flex flex-col items-end transition-all duration-300 ease-in-out">
            <CloseIcon
              className="text-black w-7 h-7 cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            {["Home", "About Us", "Training Dates", "Become a Lifeline"].map((item, index) => (
              <span key={index} className="text-black font-semibold my-3 text-base cursor-pointer">{item}</span>
            ))}
          </div>
        )}
      </div>

      <div className="relative w-full h-screen">
        <div className="absolute inset-0 w-full h-[832px]">
          <Image
            src="/bg-1.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        <h1 className="font-bebas absolute top-[352px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[612px] text-center text-black font-semibold text-3xl md:text-[50.25px] leading-tight tracking-wide uppercase z-10">
          Train to Save. Pledge to Protect.
        </h1>

        <button className="absolute top-[493px] left-1/2 transform cursor-pointer -translate-x-1/2 bg-[#005AAC] rounded-[10px] w-[209px] h-[56px] z-10" onClick={() => window.open('https://forms.gle/MNQ2dtiU4rPokEiD8', '_blank')}>
          <span className="text-white font-bold text-sm md:text-base uppercase">Become a lifeliner</span>
        </button>

        <div className="absolute bottom-[40px] right-[20px] cursor-pointer md:right-[64px] bg-[#005AAC] rounded-full w-[65px] h-[65px] flex items-center justify-center z-10">
          <Image
            src="/support.svg"
            alt="support"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </main>
  )
}
