'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function NewYear() {
  const [view, setView] = useState<'landing' | 'quiz' | 'thanks'>('landing')
  const [count, setCount] = useState<number | null>(null)
  const [loadingCount, setLoadingCount] = useState(true)

  const SHEET_ID = '1Zl-AqNqPBWXB7hnVL45jaTT3OgTJj_uIix_LOywIWf4'
  const SHEET_NAME = 'Sheet1'
  const CELL = 'O2'

  const fetchCount = async () => {
    try {
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}&range=${CELL}`;
      const response = await fetch(url);
      const text = await response.text();
      const json = JSON.parse(text.substring(47).slice(0, -2));

      if (json.table.rows.length > 0 && json.table.rows[0].c[0]) {
        const val = json.table.rows[0].c[0].v;
        const countValue = typeof val === 'number' ? val : parseInt(val);
        
        setCount(countValue);
        setLoadingCount(false);
      }
    } catch (err) {
      console.error(err);
      setLoadingCount(false);
    }
  }

  useEffect(() => {
    fetchCount()
    const interval = setInterval(fetchCount, 60000)
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)

    const onFormSubmitted = (e: MessageEvent) => {
      if (typeof e.data === 'string' && e.data.includes('Tally.FormSubmitted')) {
        setView('thanks')
      }
    }

    window.addEventListener('message', onFormSubmitted)
    return () => {
      window.removeEventListener('message', onFormSubmitted)
      clearInterval(interval)
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const shareText = "I just took the LifeLinER CPR Resolution for 2026! Be ready to save a life. Join me at lifeliner.org"
  const shareUrl = "https://lifeliner.org"

  return (
    <main className="min-h-screen bg-white pb-32 flex flex-col items-center pt-6">
      {view !== 'thanks' && (
        <div className="flex flex-col items-center w-full mb-2">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A68AD] mb-1 text-center">
            LifeLin<span className="text-[#EE5A22]">ER</span> CPR Resolution
          </h1>

          {!loadingCount && count !== null && (
            <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE5A22] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE5A22]"></span>
              </span>
              <span className="text-sm md:text-base font-bold text-[#0A68AD]">
                <span className="text-[#EE5A22]">{count}</span> {count === 1 ? 'resolution' : 'resolutions'} taken so far
              </span>
            </div>
          )}
        </div>
      )}

      <div className="w-full max-w-4xl px-4">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div 
              key="landing" 
              initial={{ opacity: 1 }} 
              exit={{ opacity: 0, rotateY: 90 }} 
              transition={{ duration: 0.6 }} 
              className="relative w-full"
            >
              <Image src="/newyear.png" alt="New Year Resolution" width={1200} height={675} priority className="w-full h-auto rounded-2xl shadow-xl" />
              <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  onClick={() => setView('quiz')} 
                  className="bg-[#EE5A22] text-white text-lg md:text-2xl font-bold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-2xl transition-all border-2 border-white/20 backdrop-blur-sm"
                >
                  Make Your Promise
                </motion.button>
              </div>
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div 
              key="quiz" 
              initial={{ opacity: 0, rotateY: -90 }} 
              animate={{ opacity: 1, rotateY: 0 }} 
              transition={{ duration: 0.6 }} 
              className="w-full bg-white flex flex-col items-center"
            >
              <button 
                onClick={() => setView('landing')} 
                className="mb-2 self-start flex items-center text-[#0A68AD] font-semibold hover:underline relative z-20 cursor-pointer"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              <iframe 
                src="https://tally.so/r/9qXbNp?hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                width="100%" 
                height="1500" 
                title="LifeLinER Resolution Form" 
                className="border-0 w-full min-h-[1100px] -mt-30" 
              />
            </motion.div>
          )}

          {view === 'thanks' && (
            <motion.div 
              key="thanks" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex flex-col items-center max-w-2xl mx-auto text-center pt-4"
            >
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold mb-6">✓ Resolution Recorded Successfully!</div>
              <h2 className="text-3xl font-bold text-[#0A68AD] mb-4">You&apos;ve taken a powerful resolution.</h2>
              <p className="text-gray-600 mb-8">The next step is learning CPR — because when every second matters, readiness saves lives.</p>
              <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg border-4 border-[#0A68AD]/10 max-w-[400px]">
                <Image src="/pledge.png" alt="Resolution Poster" width={500} height={750} className="w-full h-auto" priority />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-4">
                <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`} target="_blank" className="flex items-center justify-center bg-[#25D366] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">Share on WhatsApp</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" className="flex items-center justify-center bg-[#1877F2] text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity">Share on Facebook</a>
              </div>
              <a href="https://wa.me/918589023000" target="_blank" className="w-full flex items-center justify-center bg-[#EE5A22] text-white font-bold py-3 rounded-xl hover:bg-[#d44d1d] transition-colors mb-4 text-center">Register for a free LifeLinER Training</a>
              <a href="/LifeLinER_Booklet.pdf" download className="w-full flex items-center justify-center bg-[#0A68AD] text-white font-bold py-3 rounded-xl hover:bg-[#085a96] transition-colors mb-4">Download LifeLinER Booklet</a>
              <button onClick={() => setView('landing')} className="mt-4 text-[#0A68AD] font-semibold underline">Back to Home</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}