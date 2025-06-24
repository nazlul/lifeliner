'use client'

import Image from 'next/image'
import { useState } from 'react'

type Props = {
  title: string
  images: string[]
}

export default function ImageSet({ title, images }: Props) {
  const [open, setOpen] = useState(false)

  const previewImages = images.slice(0, 4)

  return (
    <>
      <div
        className="border rounded-xl p-2 hover:shadow-lg transition cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="grid grid-cols-2 gap-2">
          {previewImages.map((src, idx) => (
            <div key={idx} className="aspect-square overflow-hidden rounded-md">
              <Image src={src} alt={`Preview ${idx}`} width={200} height={200} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full overflow-y-auto max-h-[90vh] p-4 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {images.map((src, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-md">
                  <Image src={src} alt={`Image ${idx}`} width={400} height={400} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
