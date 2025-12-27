'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function NewYear() {
  const [showQuiz, setShowQuiz] = useState(false)

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://tally.so/widgets/embed.js'
        script.async = true
        document.body.appendChild(script)
      } else {
        // @ts-ignore
        if (typeof Tally !== 'undefined') {
          // @ts-ignore
          Tally.loadEmbeds()
        }
      }
    }

    if (showQuiz) {
      loadTally()
    }
  }, [showQuiz])

  return (
    <main className="min-h-screen bg-white pb-24">
      <AnimatePresence mode="wait">
        {!showQuiz ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center pt-12 px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
              <span className="text-[#0A68AD]">
                My LifeLin<span className="text-[#EE5A22]">ER</span> Resolution
              </span>
              <br />
              <span className="text-[#0A68AD]">
                for <span className="text-[#EE5A22]">2026</span>
              </span>
            </h1>

            <div className="relative w-full max-w-4xl">
              <Image
                src="/newyear.png"
                alt="New Year Resolution"
                width={1200}
                height={675}
                priority
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowQuiz(true)}
                  className="bg-[#EE5A22] hover:bg-[#d44d1d] text-white text-lg md:text-2xl font-bold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-2xl transition-all border-2 border-white/20 backdrop-blur-sm"
                >
                  Make Your Promise
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center pt-8 px-4"
          >
            <div className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="bg-[#0A68AD] p-4 flex justify-between items-center px-8">
                <span className="text-white font-bold text-lg">My LifeLinER Resolution</span>
                <button 
                  onClick={() => setShowQuiz(false)}
                  className="text-white/80 hover:text-white text-sm font-medium"
                >
                  ✕ Close
                </button>
              </div>
              <div className="w-full min-h-[700px]">
                <iframe
                  src="https://tally.so/embed/aQePxv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  width="100%"
                  height="700"
                  title="LifeLinER Resolution Form"
                  className="border-0"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}