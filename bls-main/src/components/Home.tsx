'use client'
import Image from 'next/image'
import NavBar from './NavBar'
import Blinking from './blink'

export default function Home() {
  return (
    <main className="scroll-smooth relative w-full min-h-screen bg-white sm:items-center sm:justify-center overflow-hidden">
      <NavBar />
      <Blinking />
      <div id="home" className="relative w-full h-screen">
        <video
          src="/bg-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-[832px] object-cover z-0"
        />
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 w-[90%] md:w-[612px] pointer-events-none">
          <div className="relative z-10 text-center">
            <h1 className="font-nyght font-semibold text-3xl md:text-[50.25px] leading-tight tracking-wide uppercase">
              <span className="text-[#0A68AD]">Train to Save.</span> <br />
              <span className="text-[#EE5A22]">Pledge to Protect.</span>
            </h1>
            <div className="absolute -inset-4 -z-10 bg-white/80 blur-2xl rounded-full"></div>
          </div>
        </div>


        <button
          className="absolute top-[430px] md:top-[450px] lg:top-[490px] left-1/2 transform cursor-pointer -translate-x-1/2 bg-[#005AAC] hover:bg-[#044786] rounded-[10px] lg:w-[209px] lg:h-[56px] md:w-[209px] md:h-[56px] w-[150px] h-[46px]"
          onClick={() => window.open('https://forms.gle/MNQ2dtiU4rPokEiD8', '_blank')}
        >
          <span className="text-white font-sans font-bold text-sm md:text-base uppercase">
            Become a lifeliner
          </span>
        </button>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-[9999] lg:bottom-15 lg:right-15 sm:bottom-10 md:right-10"
        >
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={60}
            height={60}
            className="w-12 h-12 md:w-14 md:h-14"
          />
        </a>
      </div>
    </main>
  )
}
