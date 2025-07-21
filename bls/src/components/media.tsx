'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Media() {
  const [popupImage, setPopupImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const popupRef = useRef<HTMLDivElement>(null)

  const mediaList = [
    'asianet',
    'reporter',
    'chandrika',
    'dheshabhimani',
    'manorama',
    'mathrubhumi',
    'janmabhumi',
    'suprabhatham',
    'deepika',
    'janayugam',
    'kaumudy',
    'veekshanam',
  ]

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopupImage(null)
        setCurrentImageIndex(0)
      }
    }
    if (popupImage) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [popupImage])

  const getSize = (name: string) => {
    if (
      name === 'manorama' ||
      name === 'asianet' ||
      name === 'reporter' ||
      name === 'janayugam' ||
      name === 'chandrika'
    ) {
      return { width: 180, height: 90 }
    }
    return { width: 100, height: 50 }
  }

  const getRedirectLink = (name: string): string | null => {
    if (name === 'asianet')
      return 'https://www.asianetnews.com/health/what-to-do-immediately-after-a-car-accident-swypaf'
    if (name === 'mathrubhumi')
      return 'https://www.mathrubhumi.com/kozhikode/news/lifeliner-emergency-first-responder-training-kozhikode-1.10635584'
    if (name === 'dheshabhimani')
      return 'https://www.deshabhimani.com/epaper/share/68427631c2e95bf015715989'
    if (name === 'reporter') return 'https://youtu.be/VTv0yQPWS6A'
    return null
  }

  const getWrappedLogo = (name: string) => {
    const { width, height } = getSize(name)
    const redirectLink = getRedirectLink(name)

    const handleClick = () => {
      if (name === 'manorama') {
        setPopupImage('manorama')
        setCurrentImageIndex(0)
      } else {
        setPopupImage(`/media/post/${name}.jpg`)
        setCurrentImageIndex(0)
      }
    }

    if (redirectLink) {
      return (
        <a
          href={redirectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Image
            src={`/media/logos/${name}.svg`}
            alt={name}
            width={width}
            height={height}
            className="object-contain"
            priority
          />
        </a>
      )
    }

    return (
      <div onClick={handleClick} className="cursor-pointer">
        <Image
          src={`/media/logos/${name}.svg`}
          alt={name}
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </div>
    )
  }

  const getPopupSrc = () => {
    if (popupImage === 'manorama') {
      return currentImageIndex === 0
        ? `/media/post/manorama.jpg`
        : `/media/post/manorama-1.jpg`
    }
    return popupImage
  }

  const handleToggleImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0))
  }

  return (
    <>
      <section className="w-full font-sans bg-white py-12 px-6 md:px-20">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#005AAC] font-sans font-bold">
            Proudly <span className="text-[#EE5A22]">Featured By</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:hidden md:hidden">
          {mediaList.map((name) => (
            <div
              key={name}
              className="w-[45%] sm:w-[30%] md:w-[15%] flex justify-center"
            >
              {getWrappedLogo(name)}
            </div>
          ))}
        </div>

        <div className="hidden lg:block md:block overflow-hidden mx-30 py-6">
          <div className="flex animate-slide gap-16 mx-20 w-max">
            {[...mediaList, ...mediaList].map((name, idx) => (
              <div
                key={`${name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width:
                    name === 'manorama' ||
                    name === 'asianet' ||
                    name === 'reporter' ||
                    name === 'janayugam' ||
                    name === 'chandrika'
                      ? 180
                      : 150,
                  height:
                    name === 'manorama' ||
                    name === 'asianet' ||
                    name === 'reporter' ||
                    name === 'janayugam' ||
                    name === 'chandrika'
                      ? 90
                      : 100,
                }}
              >
                {getWrappedLogo(name)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {popupImage && (
        <div className="fixed inset-0 z-[50000] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div ref={popupRef} className="relative w-[90%] max-w-3xl">
            <div className="hidden lg:flex items-center justify-center relative">
        {popupImage === 'manorama' && currentImageIndex === 0 ? (
          <Image
            src="/media/post/manorama.jpg"
            alt="Manorama"
            width={400}
            height={250}
            className="rounded-lg object-contain"
          />
        ) : popupImage === 'manorama' && currentImageIndex === 1 ? (
          <Image
            src="/media/post/manorama-1.jpg"
            alt="Manorama 2"
            width={1200}
            height={600}
            className="rounded-lg object-contain"
          />
        ) : (
          <Image
            src={getPopupSrc() || ''}
            alt="Popup Feature"
            width={1200}
            height={600}
            className="rounded-lg object-contain"
          />
        )}

        {popupImage === 'manorama' && (
          <button
            onClick={handleToggleImage}
            className={`absolute top-1/2 -translate-y-1/2 ${
              currentImageIndex === 0 ? 'right-[-60px]' : 'left-[-60px] rotate-180'
            }`}
          >
            <Image
              src="/arrow.svg"
              alt="Toggle"
              width={40}
              height={40}
              className="opacity-80 hover:opacity-100"
            />
          </button>
        )}
      </div>

      <div className="lg:hidden flex gap-4 overflow-x-auto px-4 w-full">
        {popupImage === 'manorama' ? (
          <>
            <Image
              src="/media/post/manorama.jpg"
              alt="Manorama 1"
              width={250}
              height={160}
              className="rounded-md flex-shrink-0"
            />
            <Image
              src="/media/post/manorama-1.jpg"
              alt="Manorama 2"
              width={400}
              height={300}
              className="rounded-md flex-shrink-0"
            />
          </>
        ) : (
          <Image
            src={getPopupSrc() || ''}
            alt="Popup"
            width={400}
            height={300}
            className="rounded-md"
          />
        )}
      </div>
    </div>
  </div>
)}


      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </>
  )
}
