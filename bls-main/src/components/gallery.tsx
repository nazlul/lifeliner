'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ImageSet {
  title: string
  description?: string
  images: string[]
}

export default function GalleryPage() {
  const [openSet, setOpenSet] = useState<ImageSet | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const sets: ImageSet[] = [
    {
      title: 'Launch Event',
      description: 'Launch event conducted at Hilite Mall, Kozhikode on 25th May 2025',
      images: [
        '/gallery/launch/1.jpg', '/gallery/launch/2.jpg', '/gallery/launch/3.jpg', '/gallery/launch/4.jpg',
        '/gallery/launch/5.jpg', '/gallery/launch/6.jpg', '/gallery/launch/7.jpg', '/gallery/launch/8.jpg',
        '/gallery/launch/9.jpg', '/gallery/launch/10.jpg', '/gallery/launch/11.jpg', '/gallery/launch/12.jpg'
      ]
    },
    {
      title: 'Nadakkavu Girls School',
      description: 'LifeLinER training for students of Nadakkavu Girls School',
      images: [
        '/gallery/nadakav/1.jpg', '/gallery/nadakav/2.jpg', '/gallery/nadakav/3.jpg',
        '/gallery/nadakav/4.jpg', '/gallery/nadakav/5.jpg', '/gallery/nadakav/6.jpg'
      ]
    },
    {
      title: 'JDT  Event',
      description: 'LifeliNER training at JDT Islam Arts & Science College',
      images: ['/gallery/jdt/1.jpg', '/gallery/jdt/2.jpg', '/gallery/jdt/3.jpg', '/gallery/jdt/4.jpg']
    },
    {
      title: 'Vythiri Training Program',
      description: 'LifeLinER training for Staff in Vythiri Resort, Wayanad',
      images: ['/gallery/vythiri/1.jpg', '/gallery/vythiri/2.jpg', '/gallery/vythiri/3.jpg', '/gallery/vythiri/4.jpg']
    },
    {
      title: 'Kondotty Event',
      description: 'LifeliNER program for Ambulance drivers and their families of  Kondotty region',
      images: ['/gallery/kondotty/1.jpg', '/gallery/kondotty/2.jpg']
    },   
    {
      title: 'Koodaranji Program',
      description: 'LifeLinER training at Koodaranji Grama Panchayat',
      images: ['/gallery/koodaranji/1.jpg', '/gallery/koodaranji/2.jpg', '/gallery/koodaranji/3.jpg']
    },
    {
      title: 'Kuttikatoor Training',
      description: 'LifeLinER training For Health Club Students at Kuttikatoor Govt Higher Secondary School',
      images: ['/gallery/kuttikatoor/1.jpg', '/gallery/kuttikatoor/2.jpg', '/gallery/kuttikatoor/3.jpg', '/gallery/kuttikatoor/4.jpg']
    }
  ]

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpenSet(null)
      }
    }
    if (openSet) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openSet])

  useEffect(() => {
    const handleImageClickOutside = (e: MouseEvent) => {
      if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
        setSelectedImage(null)
      }
    }
    if (selectedImage) {
      document.addEventListener('mousedown', handleImageClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleImageClickOutside)
    }
  }, [selectedImage])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const scrollAmount = 248 * 4 + 40
      if (direction === 'right') {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      } else {
        if (container.scrollLeft === 0) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <section className="p-8 bg-gray-100">
      <h1 className="text-[#005AAC] text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-center mb-12">
        Image <span className="text-[#EE5A22]">Gallery</span>
      </h1>

      <div className="relative px-12">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 rotate-180 cursor-pointer"
        >
          <Image src="/arrow.svg" alt="Left" width={24} height={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth pb-5 scrollbar-hide py-2 px-2"
        >
          {sets.map((set, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] flex-shrink-0 rounded-xl p-3 shadow hover:shadow-lg transition cursor-pointer bg-[#E0F5FE] hover:bg-[#D1EAFB] hover:scale-102 hover:translate-y-[-2px] duration-300 ease-in-out"
              onClick={() => setOpenSet(set)}
            >
              <h2 className="text-lg font-semibold mb-2 text-[#005AAC]">{set.title}</h2>
              <div className="grid grid-cols-2 gap-2">
                {set.images.slice(0, 4).map((src, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded">
                    <Image
                      src={src}
                      alt={`Preview ${idx}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <Image src="/arrow.svg" alt="Right" width={24} height={24} />
        </button>
      </div>

      {openSet && (
        <div className="fixed z-50 inset-0 bg-black/40 backdrop-blur-xl flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 relative custom-scrollbar"
          >
            <button
              onClick={() => setOpenSet(null)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center text-[#005AAC]">{openSet.title}</h2>
            {openSet.description && (
              <p className="text-[#005AAC] text-center mt-1 mb-4 text-base font-medium">
                {openSet.description}
              </p>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {openSet.images.map((src, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded">
                  <Image
                    src={src}
                    alt={`Image ${idx}`}
                    width={600}
                    height={600}
                    className="object-cover w-full h-full z-510"
                    onClick={() => setSelectedImage(src)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
