'use client'

export default function Goals() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat py-25 px-4 md:px-10 lg:px-16" style={{ backgroundImage: 'url(/bg/bg-3.png)' }}>
      <div className="max-w-6xl mx-auto text-[rgb(0,90,172)]">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Our <span className="italic text-[#EE5A22]">Goals</span></h2>
        <div className="flex flex-col gap-8 font-bold text-lg md:text-xl leading-relaxed">
          <div className="flex justify-center">
            <p className="max-w-6xl text-center">Create a go-to-resource centre for all sorts of emergencies for the common public.</p>
          </div>
          <div className="flex justify-center">
            <p className="max-w-6xl text-center">Create at least 1000 LifeLinERs in every district – ordinary people ready to respond to extraordinary situations.</p>
          </div>
          <div className="flex justify-center">
            <p className="max-w-6xl text-center">Create awareness among the public about different emergency situations, and the Dos and Don&apos;ts for each.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
