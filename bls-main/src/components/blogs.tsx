'use client'

import React, { useRef } from 'react'
import Image from 'next/image'

const blogs = [
  {
    id: 1,
    title: "ലൈഫ് ലൈനർ സംരംഭവുമായി ബിഎംഎച്ച്",
    description: "ബേബി മെമ്മോറിയൽ ഹോസ്പിറ്റലിൽ സിഎസ്ആർ  സംരംഭമായ ലൈഫ്ലൈനർ... ",
    imageUrl: "/blogs/blog1.jpg",
    link: "https://www.deshabhimani.com/epaper/share/68427631c2e95bf015715989/",
    external: true
  },
  {
    id: 2,
    title: "വാഹനാപകടങ്ങൾ, ജീവൻ രക്ഷിക്കാനുള്ള ചില മുൻകരുതലുകൾ",
    description: "സീറ്റ് ബെൽറ്റ് എപ്പോഴും നിർബന്ധമായും ധരിക്കുക, അമിതവേഗത ഒഴിവാക്കുക, മദ്യപിച്ച് വാഹനം ഓടിക്കരുത്...",
    imageUrl: "/blogs/blog2.jpg",
    link: "https://www.mathrubhumi.com/kozhikode/news/lifeliner-emergency-first-responder-training-kozhikode-1.10635584", 
    external: true
  },
  {
    id: 3,
    title: "അത്യാഹിത സാഹചര്യങ്ങൾ നേരിടാം",
    description: "അപകടങ്ങളും അത്യാഹിത സാഹചര്യങ്ങളും ഉണ്ടാകുമ്പോൾ മെഡിക്കൽ സാഹചര്യങ്ങൾ അറിഞ്ഞു പ്രവർത്തിക്കുന്ന...",
    imageUrl: "/blogs/blog3.jpg",
    link: "https://www.asianetnews.com/health/what-to-do-immediately-after-a-car-accident-swypaf",
    external: true
  },
  {
    id: 4,
     title: "റോഡപകടം : പരിക്കേറ്റവരെ രക്ഷിക്കുമ്പോൾ",
    description: "അപകടത്തിൽപ്പെട്ടവരെ എങ്ങനെ ശരിയായ രീതിയിൽ ആശുപത്രിയിലേക്കു മാറ്റണമെന്നത്... ",
    imageUrl: "/blogs/blog4.jpg",
    link: "https://babymhospital.org/road-accident-first-aid/",
    external: true
  },
  {
    id: 5,
    title: "ഇലക്ട്രിക് ഷോക്ക്",
    description: "ഷോക്കേറ്റ വ്യക്തിക്ക് പ്രഥമശുശ്രൂഷ നൽകുന്നതിന് മുൻപ് ഏറ്റവും പ്രാഥമികമായി ചെയ്യേണ്ട കാര്യം...",
    imageUrl: "/blogs/blog5.jpg",
    link: "https://babymhospital.org/electric-shock-first-aid/", 
    external: true
  },
  {
    id: 6,
    title: "പൊള്ളൽസംഭവിച്ചാൽ",
    description: "ശരീരത്തിന്റെ എത്ര ശതമാനം ഭാഗത്തെ ബാധിച്ചിട്ടുണ്ട് എന്നതിന് അനുസരിച്ചാണ്...",
    imageUrl: "/blogs/blog6.jpg",
    link: "https://babymhospital.org/%e0%b4%aa%e0%b5%8a%e0%b4%b3%e0%b5%8d%e0%b4%b3%e0%b5%bd%e0%b4%b8%e0%b4%82%e0%b4%ad%e0%b4%b5%e0%b4%bf%e0%b4%9a%e0%b5%8d%e0%b4%9a%e0%b4%be%e0%b5%bd/",
    external: true
  }
]


export default function Blog() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
  };

  return (
    <section className="relative py-16 px-4 md:px-20 bg-white">
      <h2 className="text-[#005AAC] font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Recent <span className="text-[#EE5A22]">Blogs</span>
      </h2>

      <button
        onClick={() => scroll('left')}
        className="hidden lg:flex items-center justify-center absolute left-3 top-[50%] transform -translate-y-1/2 p-2"
      >
        <Image src="/arrow.svg" alt="Scroll Left" width={24} height={24} className="rotate-180" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="hidden lg:flex items-center justify-center absolute right-3 top-[50%] transform -translate-y-1/ p-2"
      >
        <Image src="/arrow.svg" alt="Scroll Right" width={24} height={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-[20px] py-6"
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="min-w-[280px] max-w-sm bg-[#E0F5FE] rounded-xl overflow-hidden shadow-md flex-shrink-0 transform transition duration-300 hover:scale-105"
          >
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-60 object-cover"
              />
            </a>
            <div className="p-4">
              <h3 className="text-xl text-black font-semibold mb-2">{blog.title}</h3>
              <p className="text-black text-sm mb-4">{blog.description}</p>
              {blog.external && blog.link && (
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BF2C2F] font-medium hover:underline"
                >
                  Read more →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
