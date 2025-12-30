'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const CloseIcon = AiOutlineClose as React.FC<React.ComponentProps<'svg'>>

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About LifeLinER', id: 'about' },
    { label: 'Our goals', id: 'goals' },
    { label: 'Learn', id: 'learn' },
    { label: 'Take a pledge', id: 'pledge' },
  ]

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setToggleMenu(false)
  }

  return (
    <>
      <div
        className={`top-0 left-0 w-full h-[90px] fixed z-10 transition-colors duration-300 ${
          scrolled ? 'bg-white/30 backdrop-blur-2xl' : 'bg-white'
        }`}
      />
      <div className="fixed top-1 w-full flex justify-center xl:justify-start items-center z-20 h-[80px] px-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={100}
          className="w-auto h-[120px] object-contain"
        />
      </div>

      <div className="hidden xl:flex fixed font-sans font-semibold top-[32px] left-1/2 transform -translate-x-1/2 gap-12 z-50 w-auto items-center">
        {navLinks.map(({ label, id }) => (
          <span
            key={id}
            onClick={() => handleScrollTo(id)}
            className="text-[#0A68AD] font-bold text-sm md:text-base cursor-pointer hover:text-[#EE5A22] transition-colors duration-200"
          >
            {label}
          </span>
        ))}
      </div>

      <div className="xl:hidden fixed top-0 left-0 w-full h-[80px] flex items-center justify-start px-6 z-40">
        {!toggleMenu && (
          <div
            className="flex flex-col justify-between w-6 h-5 cursor-pointer"
            onClick={() => setToggleMenu(true)}
          >
            <div className="w-full h-0.5 bg-black" />
            <div className="w-full h-0.5 bg-black" />
            <div className="w-full h-0.5 bg-black" />
          </div>
        )}
      </div>

      {toggleMenu && (
        <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-md font-sans flex flex-col items-center justify-center gap-y-6 transition-all duration-500 ease-in-out">
          <CloseIcon
            className="absolute top-6 left-6 text-black w-7 h-7 cursor-pointer z-50"
            onClick={() => setToggleMenu(false)}
          />
          {navLinks.map(({ label, id }) => (
            <div
              key={id}
              onClick={() => handleScrollTo(id)}
              className="text-black text-2xl font-semibold cursor-pointer hover:underline"
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </>
  )
}