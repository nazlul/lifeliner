'use client'

import React, { useRef, RefObject } from 'react';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: "റോഡപകടം : പരിക്കേറ്റവരെ രക്ഷിക്കുമ്പോൾ",
    description: "അപകടത്തിൽപ്പെട്ടവരെ എങ്ങനെ ശരിയായ രീതിയിൽ ആശുപത്രിയിലേക്കു മാറ്റണമെന്നത്... ",
    imageUrl: "/blogs/blog1.jpg",
    link: "https://babymhospital.org/road-accident-first-aid/",
    external: true
  },
  {
    id: 2,
    title: "ഇലക്ട്രിക് ഷോക്ക്",
    description: "ഷോക്കേറ്റ വ്യക്തിക്ക് പ്രഥമശുശ്രൂഷ നൽകുന്നതിന് മുൻപ് ഏറ്റവും പ്രാഥമികമായി ചെയ്യേണ്ട കാര്യം...",
    imageUrl: "/blogs/blog2.jpg",
    link: "https://babymhospital.org/electric-shock-first-aid/", 
    external: true
  },
  {
    id: 3,
    title: "പൊള്ളൽസംഭവിച്ചാൽ",
    description: "ശരീരത്തിന്റെ എത്ര ശതമാനം ഭാഗത്തെ ബാധിച്ചിട്ടുണ്ട് എന്നതിന് അനുസരിച്ചാണ്...",
    imageUrl: "/blogs/blog3.jpg",
    link: "https://babymhospital.org/%e0%b4%aa%e0%b5%8a%e0%b4%b3%e0%b5%8d%e0%b4%b3%e0%b5%bd%e0%b4%b8%e0%b4%82%e0%b4%ad%e0%b4%b5%e0%b4%bf%e0%b4%9a%e0%b5%8d%e0%b4%9a%e0%b4%be%e0%b5%bd/",
    external: true
  }
];

function useOnScreen(ref: RefObject<HTMLElement | null>, rootMargin = '0px') {
  const [isVisible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio >= 0.6)
      },
      {
        rootMargin,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), 
      }
    )

    observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [ref, rootMargin])

  return isVisible
}

const AnimatedSectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <h2
      ref={ref}
      className={`text-[#005AAC] font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 transition-opacity duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </h2>
  );
};

const AnimatedTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <h3
      ref={ref}
      className={`text-xl text-black font-semibold mb-2 transition-opacity duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </h3>
  );
};

const AnimatedDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <p
      ref={ref}
      className={`text-black text-sm mb-4 transition-opacity duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {children}
    </p>
  );
};

const AnimatedImage: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <div
      ref={ref}
      className={`overflow-hidden transition-opacity duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      <Image src={src} alt={alt} width={400} height={250} className="w-full h-66 object-cover" />
    </div>
  );
};

export default function Blog() {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <AnimatedSectionTitle>
        Recent <span className="italic text-[#EE5A22]">Blogs</span>
      </AnimatedSectionTitle>
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
              <AnimatedImage src={blog.imageUrl} alt={blog.title} />
            </a>
            <AnimatedImage src={blog.imageUrl} alt={blog.title} className="md:hidden" />

            <div className="p-4">
              <AnimatedTitle>{blog.title}</AnimatedTitle>
              <AnimatedDescription>{blog.description}</AnimatedDescription>
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
