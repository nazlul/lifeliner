'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

const ALL_QUESTIONS = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  question: `Question ${i + 1}: What is the primary goal of LifeLinER?`,
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  answer: 0,
}))

export default function NewYear() {
  const [view, setView] = useState<'landing' | 'quiz' | 'thanks'>('landing')
  const [count, setCount] = useState<number | null>(null)
  const [loadingCount, setLoadingCount] = useState(true)

  const [questions, setQuestions] = useState<typeof ALL_QUESTIONS>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

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

  const startQuiz = () => {
    const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random())
    setQuestions(shuffled.slice(0, 10))
    setView('quiz')
    setTimeLeft(30)
    setCurrentIndex(0)
    setScore(0)
    setIsFinished(false)
  }

  const handleNext = useCallback((selectedAnswer?: number) => {
    if (selectedAnswer === questions[currentIndex]?.answer) {
      setScore((prev) => prev + 1)
    }

    if (currentIndex < 9) {
      setCurrentIndex((prev) => prev + 1)
      setTimeLeft(30)
    } else {
      setIsFinished(true)
      setView('thanks')
    }
  }, [currentIndex, questions])

  useEffect(() => {
    fetchCount()
    const interval = setInterval(fetchCount, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (view !== 'quiz' || isFinished) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNext()
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [view, isFinished, handleNext])

  const shareText = "I just took the LifeLinER CPR Resolution for 2026! Be ready to save a life. Join me at lifeliner.org"
  const shareUrl = "https://lifeliner.org"

  return (
    <main className="min-h-screen bg-white flex flex-col items-center pt-6 overflow-x-hidden pb-10">
      {view !== 'thanks' && (
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
                <div className="md:hidden">
                  <Image src="/pledge2.jpg" alt="Mobile" width={800} height={1200} priority className="w-full h-auto rounded-2xl shadow-lg" />
                </div>
                <div className="hidden md:block">
                  <Image src="/pledge.jpg" alt="Desktop" width={1920} height={1080} priority className="w-full h-auto rounded-3xl shadow-xl" />
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30 px-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    onClick={startQuiz} 
                    className="bg-[#EE5A22] text-white text-[13px] md:text-lg font-bold py-2.5 px-6 md:py-4 md:px-12 rounded-full shadow-2xl transition-all border border-white/40 backdrop-blur-sm whitespace-nowrap"
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
              className="w-full max-w-2xl mx-auto px-4"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-[#0A68AD]">Question {currentIndex + 1}/10</span>
                <span className={`font-mono text-xl ${timeLeft < 10 ? 'text-red-500' : 'text-black'}`}>
                  00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </span>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-6">{questions[currentIndex]?.question}</h3>
                <div className="grid gap-4">
                  {questions[currentIndex]?.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleNext(i)}
                      className="w-full text-left p-4 rounded-xl border border-gray-200 hover:bg-[#0A68AD]/10 hover:border-[#0A68AD] transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
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
                ✓ Quiz Complete! Your Score: {score} / 10
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#0A68AD] mb-4">You&apos;ve taken a powerful resolution.</h2>
              <p className="text-gray-600 mb-8 text-base md:text-lg">The next step is learning CPR — because when every second matters, readiness saves lives.</p>
              <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0A68AD]/5 max-w-[280px] md:max-w-[420px]">
                <Image src="/pledge.png" alt="Resolution Poster" width={500} height={750} className="w-full h-auto" priority />
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