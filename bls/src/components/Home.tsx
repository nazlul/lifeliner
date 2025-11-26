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
  onClick?: () => void
}

function CountUpStat({ number, label, onClick }: Stat) {
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
    <div
      ref={ref}
      className="border border-[#0A68AD] bg-white/80 rounded-xl px-2 py-2 flex flex-col items-center w-[30%] min-w-[100px] h-[80px] md:w-[240px] md:h-[100px] md:flex-row md:px-4 md:py-3 sm:w-[30%] sm:h-[90px] sm:flex-row sm:px-4 sm:py-3 text-center sm:text-left cursor-pointer"
      onClick={onClick}
    >
      <span className="text-[#EE5A22] text-xl sm:text-4xl font-bold sm:mr-3">{count}+</span>
      <div className="leading-tight">
        <span className="text-[#0A68AD] text-xs sm:text-lg font-gilroyl block">{label.split(' ')[0]}</span>
        <span className="text-[#0A68AD] text-[0.5rem] sm:text-[0.6rem] uppercase font-gilroyb block">
          {label.split(' ').slice(1).join(' ')}
        </span>
      </div>
    </div>
  )
}

export default function Home() {
  const lgImages = ['/home/d1.png', '/home/d2.png', '/home/d3.png', '/home/d4.png']
  const smImages = ['/home/m1.png', '/home/m2.png', '/home/m3.png', '/home/m4.png']

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)') 
    setIsSmallScreen(mediaQuery.matches)

    function handleResize(e: MediaQueryListEvent) {
      setIsSmallScreen(e.matches)
    }
    mediaQuery.addEventListener('change', handleResize)

    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (isSmallScreen ? smImages.length : lgImages.length))
    }, 2000) 

    return () => clearInterval(interval)
  }, [isSmallScreen])

  const images = isSmallScreen ? smImages : lgImages
  const currentImage = images[currentIndex]

  const handleGalleryScroll = () => {
    const gallerySection = document.getElementById('gallery')
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="scroll-smooth relative w-full min-h-screen overflow-hidden flex flex-col">
      <NavBar />
      <Blinking />
      <section id="home" className="relative w-full flex-grow min-h-screen">
        <div className="absolute top-20 sm:top-20 md:top-20 left-0 right-0 bottom-0 -z-10">
          <Image
            src={currentImage}
            alt="Background slide"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute top-[36%] md:top-[28%] lg:top-[34%] left-1/2 transform -translate-x-1/2 w-[90%] max-w-md md:max-w-lg lg:max-w-4xl pointer-events-none">
          <div className="relative z-10 text-center">
            <h1 className="font-nyght font-semibold text-3xl md:text-[50.25px] leading-tight tracking-wide uppercase">
              <span className="block text-[#0A68AD]">First To Respond.</span>
              <span className="block text-[#EE5A22] whitespace-nowrap">First To Help.</span>
            </h1>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-full -z-10"></div>
          </div>
        </div>

        <button
          className="absolute top-[52%] lg:top-[60%] md:top-[62%] left-1/2 transform -translate-x-1/2 bg-[#005AAC] hover:bg-[#044786] rounded-[10px] w-[150px] h-[46px] md:w-[209px] md:h-[56px]"
          onClick={() => window.open('https://wa.me/+918589023000', '_blank')}
        >
          <span className="text-white font-sans cursor-pointer shadow-2xl font-bold text-sm md:text-base uppercase">
            Become a lifeliner
          </span>
        </button>

        <a
          href="https://wa.me/+918589023000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-[999] md:bottom-10 md:right-10"
        >
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={60}
            height={60}
            className="w-12 h-12 md:w-14 md:h-14"
          />
        </a>

       <div className="absolute top-30 md:top-auto md:bottom-3 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-2 flex flex-col items-center justify-center gap-2 md:gap-4">
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4">
          <CountUpStat number={12763} label="People Trained" onClick={handleGalleryScroll} />
          <CountUpStat number={14469} label="Pledges Taken" onClick={handleGalleryScroll} />
          <CountUpStat number={181} label="Sessions Organized" onClick={handleGalleryScroll} />
        </div>
        <p className="text-xs text-gray-500 mt-1">*since the launch of LifeLinER in May 2025.</p>
      </div>
      </section>
    </main>
  )
}
