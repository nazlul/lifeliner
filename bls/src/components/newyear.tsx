'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef, Suspense } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

function NewYearContent() {
  const [view, setView] = useState<'landing' | 'quiz' | 'thanks'>('landing')
  const [count, setCount] = useState<number | null>(null)
  const [loadingCount, setLoadingCount] = useState(true)
  const [personalizedImage, setPersonalizedImage] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  const searchParams = useSearchParams()
  const userName = searchParams.get('name') || ""

  const SHEET_ID = '1Zl-AqNqPBWXB7hnVL45jaTT3OgTJj_uIix_LOywIWf4'
  const SHEET_NAME = 'Sheet1'
  const CELL = 'P2'

  const fetchCount = async () => {
    try {
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}&range=${CELL}`
      const response = await fetch(url)
      const text = await response.text()
      const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/)
      if (!match) throw new Error("Invalid format")
      const json = JSON.parse(match[1])
      if (json.table.rows.length > 0 && json.table.rows[0].c[0]) {
        const val = json.table.rows[0].c[0].v
        const countValue = typeof val === 'number' ? val : parseInt(val)
        if (!isNaN(countValue)) {
          setCount(countValue)
        } else {
          setCount(0)
        }
      }
      setLoadingCount(false)
    } catch (err) {
      console.error(err)
      setLoadingCount(false)
    }
  }

  useEffect(() => {
    fetchCount()
    const interval = setInterval(fetchCount, 60000)
    const onFormSubmitted = (e: MessageEvent) => {
      if (typeof e.data === 'string' && e.data.includes('Tally.FormSubmitted')) {
        setView('thanks')
      }
    }
    window.addEventListener('message', onFormSubmitted)
    return () => {
      window.removeEventListener('message', onFormSubmitted)
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (view === 'thanks') {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = "/pledge/newyear.jpeg"

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)

        if (userName) {
          ctx.font = "bold 42px sans-serif"
          ctx.fillStyle = "white"
          ctx.textAlign = "center"
          ctx.shadowColor = "rgba(0,0,0,0.5)"
          ctx.shadowBlur = 10
          ctx.fillText(userName.toUpperCase(), canvas.width / 2, canvas.height * 0.68)
        }

        setPersonalizedImage(canvas.toDataURL("image/jpeg", 0.9))
      }
    }
  }, [view, userName])

  const shareText = "I just took the LifeLinER CPR Resolution for 2026! Be ready to save a life. Join me at "
  const shareUrl = "https://lifeliner.org"

  return (
    <main className="min-h-screen bg-white flex flex-col items-center pt-26 overflow-x-hidden pb-10">
      <canvas ref={canvasRef} className="hidden" />
      
      {(view === 'landing' || view === 'quiz') && (
        <div className="flex flex-col items-center w-full mb-6 px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0A68AD] mb-3 leading-tight">
            LifeLin<span className="text-[#EE5A22]">ER</span> CPR Resolution
          </h1>

          {!loadingCount && count !== null && !isNaN(count) && (
            <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE5A22] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EE5A22]"></span>
              </span>
              <span className="text-xs md:text-base font-bold text-[#0A68AD]">
                <span className="text-[#EE5A22]">{count}</span> {count === 1 ? 'resolution' : 'resolutions'} taken so far
              </span>
            </div>
          )}
        </div>
      )}

      <div className="w-full max-w-6xl px-2 md:px-6 relative flex-grow">
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div 
              key="landing" 
              initial={{ opacity: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }} 
              transition={{ duration: 0.4 }} 
              className="relative w-full"
            >
              <div className="relative w-full">
                <div className="md:hidden py-3 px-2">
                  <Image src="/pledge/pledge2.jpg" alt="Mobile" width={800} height={1200} priority className="w-full h-auto rounded-2xl shadow-lg" />
                </div>
                <div className="hidden md:block">
                  <Image src="/pledge/pledge.jpg" alt="Desktop" width={1920} height={1080} priority className="w-full h-auto rounded-3xl shadow-xl" />
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30 px-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    onClick={() => setView('quiz')} 
                    className="bg-[#EE5A22] cursor-pointer text-white text-[13px] md:text-lg font-bold py-2.5 px-6 md:py-4 md:px-12 rounded-full shadow-2xl transition-all border border-white/40 backdrop-blur-sm whitespace-nowrap"
                  >
                    Take the LifeLinER 2026 Resolution
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div 
              key="quiz" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="w-full max-w-4xl mx-auto flex flex-col items-center"
            >
              <button 
                onClick={() => setView('landing')} 
                className="mb-4 cursor-pointer self-start flex items-center text-[#0A68AD] font-bold hover:text-[#EE5A22] transition-colors px-2"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
              
              <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden relative">
                <div className="h-[550px] md:h-[750px] overflow-y-auto scrollbar-hide">
                  <iframe 
                    src="https://tally.so/r/9qXbNp?hideTitle=1&transparentBackground=1" 
                    width="100%" 
                    height="1200" 
                    title="LifeLinER Resolution Form" 
                    className="w-full border-0 mb-[-150px]"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {view === 'thanks' && (
            <motion.div 
              key="thanks" 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex flex-col items-center max-w-2xl mx-auto text-center py-6 px-4"
            >
              <div className="bg-green-50 text-green-700 px-6 py-2 rounded-full font-bold mb-4 border border-green-100 shadow-sm text-sm">
                ✓ Resolution Recorded Successfully!
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-[#0A68AD] mb-4">You&apos;ve taken a powerful resolution.</h2>
              <p className="text-gray-600 mb-8 text-base md:text-lg">The next step is learning CPR — because when every second matters, readiness saves lives.</p>
              
              <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0A68AD]/5 max-w-[280px] md:max-w-[420px] relative">
                <img 
                  src={personalizedImage || "/pledge/newyear.jpeg"} 
                  alt="Resolution Poster" 
                  className="w-full h-auto" 
                />
                
                <a 
                  href={personalizedImage || "/pledge/newyear.jpeg"} 
                  download={`LifeLinER_Resolution_2026_${userName || 'Member'}.jpg`}
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg border border-gray-200 text-[#0A68AD] hover:scale-110 active:scale-95 transition-all z-40"
                  title="Download Poster"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-6">
                <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-md text-sm">Share on WhatsApp</a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-[#1877F2] text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-md text-sm">Share on Facebook</a>
              </div>

              <div className="flex flex-col gap-3 w-full mb-8">
                <a href="https://wa.me/918589023000" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-[#EE5A22] text-white font-bold py-4 rounded-xl hover:bg-[#d44d1d] transition-all shadow-md text-sm">Register for a free LifeLinER Training</a>
                <a href="/LifeLinER_Booklet.pdf" download className="w-full flex items-center justify-center bg-[#0A68AD] text-white font-bold py-4 rounded-xl hover:bg-[#085a96] transition-all shadow-md text-sm">Download LifeLinER Booklet</a>
              </div>

              <button onClick={() => setView('landing')} className="text-[#0A68AD] font-bold underline hover:text-[#EE5A22] transition-colors pb-10">Back to Home</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}

export default function NewYear() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewYearContent />
    </Suspense>
  )
}