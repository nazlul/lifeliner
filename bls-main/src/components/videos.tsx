'use client'

export default function Videos() {
  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-[#eaf2f9] to-[#5eaef8]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans text-[#005AAC] font-bold text-center mb-12">
        Learn How to <span className="italic">Save a Life</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          'https://www.youtube.com/embed/WkdwAliK1xc',
          'https://www.youtube.com/embed/WUv1R_P2vlE',
          'https://www.youtube.com/embed/jortS2HUW-Q',
        ].map((src, index) => (
          <div key={index} className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              src={src}
              title={`Video ${index + 1}`}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
