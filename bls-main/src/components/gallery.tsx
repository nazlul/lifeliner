'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        galleryRef.current &&
        !galleryRef.current.contains(event.target as Node)
      ) {
        setActiveIndex(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClick = (i: number) => {
    if (window.innerWidth < 1024) {
      setActiveIndex(activeIndex === i ? null : i)
    }
  }

  function getMarginLeft(index: number) {
    if (index === 0) return '0px'
    if (typeof window === 'undefined') return '-30px'

    const width = window.innerWidth
    if (width >= 1024) return '-30px'
    if (width >= 768) return '-25px'
    return '-20px'
  }

  const imagesCount = 12

  return (
    <section className='bg-gray-100'>
        <h2 className="text-[#005AAC] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 pt-6 px-4 md:px-25">
        Gallery
      </h2>
    <div className="relative w-full font-sans px-16 md:px-24 pt-12 pb-10 bg-gray-100 overflow-x-auto custom-scrollbar">
      

      <div ref={galleryRef} className="relative flex items-center h-64">
        {Array(imagesCount).fill(null).map((_, i, arr) => {
          const isActive = activeIndex === i
          const isLast = i === arr.length - 1
          return (
            <div
              key={i}
              className="relative h-full transition-all duration-300"
              style={{
                marginLeft: getMarginLeft(i),
                marginRight: isLast ? '40px' : undefined,
              }}
            >
              <div
                onClick={() => handleClick(i)}
                className={`relative w-64 h-full transition-all duration-700 rounded-lg shadow-lg
                  ${
                    isActive
                      ? 'scale-110 z-1 border-4 border-[#EE5A22] rounded-xl'
                      : ''
                  }
                  lg:group
                  lg:hover:scale-110
                  lg:hover:z-1
                  lg:hover:border-4
                  lg:hover:rounded-xl
                  lg:hover:border-[#EE5A22]
                `}
              >
                <Image
                  src={`/gallery/${i + 1}.jpg`}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 50vw, 256px"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </section>
  )
}
