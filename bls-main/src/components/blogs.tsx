'use client'

import React from 'react'
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
    title: "ഇലക്ട്രിക് ഷോക്ക്",
    description: "ഷോക്കേറ്റ വ്യക്തിക്ക് പ്രഥമശുശ്രൂഷ നൽകുന്നതിന് മുൻപ് ഏറ്റവും പ്രാഥമികമായി ചെയ്യേണ്ട കാര്യം...",
    imageUrl: "/blogs/blog2.jpg",
    link: "https://www.mathrubhumi.com/kozhikode/news/lifeliner-emergency-first-responder-training-kozhikode-1.10635584", 
    external: true
  },
  {
    id: 3,
    title: "പൊള്ളൽസംഭവിച്ചാൽ",
    description: "ശരീരത്തിന്റെ എത്ര ശതമാനം ഭാഗത്തെ ബാധിച്ചിട്ടുണ്ട് എന്നതിന് അനുസരിച്ചാണ്...",
    imageUrl: "/blogs/blog3.jpg",
    link: "https://www.asianetnews.com/health/what-to-do-immediately-after-a-car-accident-swypaf",
    external: true
  }
]

export default function Blog() {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-[#005AAC] font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Recent <span className="text-[#EE5A22]">Blogs</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#E0F5FE] rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
          >
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              <Image src={blog.imageUrl} alt={blog.title} width={400} height={250} className="w-full h-66 object-cover" />
            </a>
            <Image src={blog.imageUrl} alt={blog.title} width={400} height={250} className="w-full h-66 object-cover md:hidden" />

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
  )
}
