'use client'
import Image from 'next/image'
import NavBar from './NavBar'
import Blinking from './blink'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Stat {
  icon?: React.ReactNode
  number: number
  label: string
}
  
function    CountUpStat({ number, label }: Stat) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (inView) {
      let current = 0
      const duration = 1000
      const stepTime = 16
      const increment = number / (duration / stepTime)

      interval = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          if (interval) clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)
    } else {
      setCount(0)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [inView, number])

  return (
    <div ref={ref} className="border border-white rounded-xl px-2 py-2 flex flex-col items-center w-[30%] min-w-[100px] h-[80px] md:w-[240px] md:h-[100px] md:flex-row md:px-4 md:py-3 sm:w-[30%] sm:h-[100px] sm:flex-row sm:px-4 sm:py-3 text-center sm:text-left">
      <span className="text-[#EE5A22] text-xl sm:text-4xl font-bold sm:mr-3">{count}+</span>
      <div className="leading-tight">
        <span className="text-[#0A68AD] text-xs sm:text-lg font-gilroyl block">{label.split(' ')[0]}</span>
        <span className="text-[#0A68AD] text-[0.5rem] sm:text-[0.6rem] uppercase font-gilroyb block">{label.split(' ').slice(1).join(' ')}</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="scroll-smooth relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
      <NavBar />
      <Blinking />
      <section id="home" className="relative w-full flex-grow min-h-screen">
        <video
          src="/bg/bg-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-[38%] md:top-[42%] lg:top-[42%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-md md:max-w-lg lg:max-w-4xl pointer-events-none">
          <div className="relative z-10 text-center">
            <h1 className="font-nyght font-semibold text-3xl md:text-[50.25px] leading-tight tracking-wide uppercase">
              <span className="block text-[#0A68AD]">Train to Save.</span>
              <span className="block text-[#EE5A22] whitespace-nowrap">Pledge to Protect.</span>
            </h1>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full -z-10 bg-white/80 blur-2xl rounded-full"></div>
          </div>
        </div>

        <button
          className="absolute top-[52%] lg:top-[62%] md:top-[62%] left-1/2 transform -translate-x-1/2 bg-[#005AAC] hover:bg-[#044786] rounded-[10px] w-[150px] h-[46px] md:w-[209px] md:h-[56px]"
          onClick={() => window.open('https://forms.gle/MNQ2dtiU4rPokEiD8', '_blank')}
        >
          <span className="text-white font-sans shadow-2xl font-bold text-sm md:text-base uppercase">
            Become a lifeliner
          </span>
        </button>

        <a
          href="https://wa.me/8589023000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-[9999] md:bottom-10 md:right-10"
        >
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={60}
            height={60}
            className="w-12 h-12 md:w-14 md:h-14"
          />
        </a>

        <div className="absolute bottom-25 md:bottom-10 lg:bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-2 flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4">
          <CountUpStat number={2400} label="People Trained" />
          <CountUpStat number={1200} label="People Taken the Pledge" />
          <CountUpStat number={500} label="Training Sessions" />
        </div>
      </section>
    </main>
  )
}
