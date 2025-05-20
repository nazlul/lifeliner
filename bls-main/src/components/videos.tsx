'use client'

import { useState } from 'react'
import Image from 'next/image'

const videos = [
  {
    title: "Stroke And Heart Attack",
    thumbnail: "/thumbnail/1.jpg",
    videoUrl: "https://www.youtube.com/embed/WkdwAliK1xc",
    description: "A stroke or Heart Attack is a true emergency. Every moment counts."
  },
  {
    title: "Snake Bite",
    thumbnail: "/thumbnail/2.jpg",
    videoUrl: "https://www.youtube.com/embed/WUv1R_P2vlE",
    description: "In this video BMH brings to you the the first aid to be given in case of Snake Bite."
  },
  {
    title: "Seizure",
    thumbnail: "/thumbnail/3.jpg",
    videoUrl: "https://www.youtube.com/embed/jortS2HUW-Q",
    description: "In this video BMH brings to you the the first aid to be given in case of seizure."
  },
]

export default function Videos() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-[#edf1f7] to-[#93bbf6]">
      <h2 className="text-[#005AAC] text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-center mb-12">
        Learn How to <span className='italic'>Save a Life</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative aspect-video w-full rounded-xl overflow-hidden shadow-md group cursor-pointer"
            onClick={() => setPlayingIndex(index)}
          >
            {playingIndex === index ? (
              <iframe
                src={`${video.videoUrl}?autoplay=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <>
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/10 flex flex-col justify-between p-4">
                  <div className="flex justify-center items-start flex-grow pt-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 200 200"
                      className="w-20 h-20 fill-white"
                    >
                      <polygon points="70,55 70,145 145,100" />
                    </svg>
                  </div>
                  <div className="text-left text-white font-sans">
                    <h3 className="text-xl font-bold">{video.title}</h3>
                    <p className="text-sm opacity-90">{video.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
