'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function NewYearResolutionPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-[#0A68AD]">My LifeLin<span className="text-[#EE5A22]">ER</span> Resolution</span>
            <br />
            <span className="text-[#0A68AD]">for <span className="text-[#EE5A22]">2026</span></span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8"
        >
          <div className="bg-gradient-to-r from-[#0A68AD] to-[#0880D7] p-8 md:p-12">
            <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
              Every year, we make promises to ourselves. To be better. Faster. Stronger.
            </p>
            <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed mb-6">
              But this year… what if the promise wasn't about you?
            </p>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              This year, make a promise for the people who matter most to you.
              Because, <span className="font-bold">the most meaningful promises are made for someone else.</span>
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="rounded-2xl overflow-hidden border-2 border-gray-100 shadow-inner bg-gradient-to-br from-gray-50 to-white">
              <iframe
                data-tally-src="https://tally.so/embed/aQePxv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="700"
                title="LifeLinER Resolution Form"
                className="border-0"
              ></iframe>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic text-base md:text-lg">
                Your story may inspire someone else to make a promise that truly matters.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-[#EE5A22] to-[#FF7040] rounded-3xl shadow-xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Make a Promise That Matters
          </h3>
          <p className="text-lg md:text-xl opacity-95">
            Join the LifeLinER movement and commit to making 2026 a year of meaningful impact.
          </p>
        </motion.div>
      </div>
    </main>
  )
}