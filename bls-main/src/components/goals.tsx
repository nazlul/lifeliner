'use client'

import Image from 'next/image'

export default function Goals() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-6 md:px-20 lg:px-80" style={{ backgroundImage: 'url(/bg-3.png)' }}>
      <div className="max-w-4xl mx-auto text-[#005AAC] text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Our Goals</h2>
        <div className="flex flex-col gap-8 font-bold text-center text-lg md:text-xl leading-relaxed">
          <div className="flex items-start gap-4">
            <Image src="/point.svg" alt="point" width={24} height={24} className="mt-1" />
            <p>Create a go-to-resource centre for all sorts of emergencies for the common public.</p>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/point.svg" alt="point" width={24} height={24} className="mt-1" />
            <p>Create at least 1000 LifeLinERs in every district – ordinary people ready to respond to extraordinary situations.</p>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/point.svg" alt="point" width={24} height={24} className="mt-1" />
            <p>Create awareness among the public about different emergency situations, and the Dos and Don&apos;ts for each.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
