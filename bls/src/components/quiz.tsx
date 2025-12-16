'use client';

import { useState } from 'react';

export default function QuizSection() {
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'malayalam' | null>(null);

  const quizUrls = {
    english: 'https://tally.so/embed/VLGkyE?hideTitle=1&transparentBackground=1&dynamicHeight=1',
    malayalam: 'https://tally.so/embed/68LXy5?hideTitle=1&transparentBackground=1&dynamicHeight=1'
  };

  if (selectedLanguage) {
    return (
      <section className="relative bg-white px-4 overflow-hidden" style={{ paddingTop: '8px', paddingBottom: '0' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full" style={{ background: '#0A68AD' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full" style={{ background: '#EE5A22' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="my-4">
            <button
              onClick={() => setSelectedLanguage(null)}
              className="inline-flex items-center mt-12 text-gray-600 font-bold cursor-pointer hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Change language
            </button>
          </div>
          <div style={{ marginTop: '40px' }}>
            <iframe
                src={selectedLanguage === 'english' ? quizUrls.english : quizUrls.malayalam}
                width="100%"
                style={{ 
                display: 'block', 
                border: 'none', 
                margin: 0, 
                padding: 0,
                minHeight: '428px', 
                height: 'auto'      
                }}
                frameBorder="0"
                title="Quiz Form"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full" style={{ background: '#0A68AD' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full" style={{ background: '#EE5A22' }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-2" style={{ backgroundColor: '#0A68AD' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-[#0A68AD]">Take <span className='text-[#EE5A22]'>Our</span> Quiz</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Choose your preferred language to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
            <button
              onClick={() => setSelectedLanguage('english')}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-transparent transform hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto transition-all group-hover:scale-110" style={{ backgroundColor: '#0A68AD' }}>
                  <span className="text-xl font-bold text-white">EN</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">English</h3>
                <p className="text-sm text-gray-600">Take the quiz in English</p>
                <div className="pt-2">
                  <span className="inline-flex items-center font-medium group-hover:gap-2 transition-all" style={{ color: '#0A68AD' }}>
                    Start Quiz
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedLanguage('malayalam')}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-transparent transform hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto transition-all group-hover:scale-110" style={{ backgroundColor: '#EE5A22' }}>
                  <span className="text-xl font-bold text-white">മ</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">മലയാളം</h3>
                <p className="text-sm text-gray-600">മലയാളത്തിൽ ക്വിസ് എടുക്കുക</p>
                <div className="pt-2">
                  <span className="inline-flex items-center font-medium group-hover:gap-2 transition-all" style={{ color: '#EE5A22' }}>
                    ക്വിസ് ആരംഭിക്കുക
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}