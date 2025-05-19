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

      <div className="absolute top-[2px] left-[49px] z-20 w-[272px] h-[161.36px]">
        <Image
          src="/logo.png"
          alt="Logo"
          width={272}
          height={161.36}
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex absolute top-[55px] left-1/2 transform -translate-x-1/2 gap-12 z-20">               
        <span className="text-[#005AAC] font-semibold text-sm md:text-base cursor-pointer">Home</span>   
        <span className="text-[#172943] font-semibold text-sm md:text-base cursor-pointer">About Us</span>                            
        <span className="text-[#172943] font-semibold text-sm md:text-base cursor-pointer">Training Dates</span>               
        <a
          href="https://forms.gle/MNQ2dtiU4rPokEiD8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-[#172943] font-semibold text-sm md:text-base cursor-pointer">
            Become a Lifeliner
          </span>
        </a>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex justify-between items-center p-9 fixed top-0 left-0 right-0 z-30">
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
      </div>

    {toggleMenu && (
  <div className="fixed inset-0 z-20 bg-white/30 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
    {["Home", "About Us", "Training Dates", "Become a Lifeliner"].map((item, index) => {
      const handleClick = () => {
        if (item === "Become a Lifeliner") {
          window.open('https://forms.gle/MNQ2dtiU4rPokEiD8', '_blank');
        } 
        else if (item === "Home") {
          const section = document.getElementById("home");
          section?.scrollIntoView({ behavior: "smooth" });
          setToggleMenu(false);
        }
      };
      return (
        <span
          key={index}
          className="text-black font-bold my-6 text-2xl uppercase tracking-wide cursor-pointer"
          onClick={handleClick}
        >
          {item}
        </span>
      );
    })}
  </div>
)}


      <div className="relative w-full h-screen">
        <video
          src="/bg-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-[832px] object-cover z-0"
        />
        <h1 className="font-nyght absolute top-[300px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[612px] text-center text-black font-semibold text-3xl md:text-[50.25px] leading-tight tracking-wide uppercase z-10">
          Train to Save. <br /> Pledge to Protect.
        </h1>

        <button className="absolute top-[493px] left-1/2 transform cursor-pointer -translate-x-1/2 bg-[#005AAC] rounded-[10px] w-[209px] h-[56px] z-10" onClick={() => window.open('https://forms.gle/MNQ2dtiU4rPokEiD8', '_blank')}>
          <span className="text-white font-bold text-sm md:text-base uppercase">Become a lifeliner</span>
        </button>
      </div>
    </main>
  )
}
