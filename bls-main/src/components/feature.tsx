'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Feature() {
  const [popupImage, setPopupImage] = useState<string | null>(null)
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

  const getWrappedLogo = (name: string, i: number) => {
    const { width, height } = getSize(name)
    const redirectLink = getRedirectLink(name)

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
      <div
        onClick={() => setPopupImage(`/media/post/${name}.jpg`)}
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
      </div>
    )
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
          {mediaList.map((name, i) => (
            <div
              key={i}
              className="w-[45%] sm:w-[30%] md:w-[15%] flex justify-center"
            >
              {getWrappedLogo(name, i)}
            </div>
          ))}
        </div>

        <div className="hidden lg:block md:block overflow-hidden mx-30 py-6">
          <div className="flex animate-slide gap-16 mx-20 w-max">
            {[...mediaList, ...mediaList].map((name, i) => (
              <div
                key={i}
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
                {getWrappedLogo(name, i)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {popupImage && (
        <div className="fixed inset-0 z-50000 flex items-center justify-center bg-black/40 bg-opacity-50 backdrop-blur-sm">
          <div ref={popupRef} className="relative w-[90%] max-w-3xl">
            <Image
              src={popupImage}
              alt="Popup Feature"
              width={1200}
              height={600}
              className="rounded-lg w-full h-auto"
            />
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
