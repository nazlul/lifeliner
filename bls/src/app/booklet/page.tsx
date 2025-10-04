import React from 'react';
import { Download, FileText, ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function BookletPage() {
  return (
    <div className="min-h-screen bg-[#E0F5FE]">
      <NavBar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-15">
      <Link 
        href="/"
        className="inline-flex items-center justify-center w-12 h-12 bg-[#EE5A22] hover:bg-[#d94f1c] text-white rounded-full transition shadow-md hover:shadow-lg mt-13"
        >
        <ArrowLeft className="w-6 h-6" />
        </Link>

        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-40 h-56 sm:w-48 sm:h-64 mx-auto bg-gradient-to-br from-red-600 to-blue-900 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-10"></div>
              <div className="relative z-10 text-white">
                <FileText className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" />
                <div className="text-sm font-semibold">FIRST AID</div>
                <div className="text-xs mt-1">GUIDE</div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
            LifeLinER First Aid Booklet
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            A comprehensive bilingual guide covering essential emergency procedures including CPR, 
            choking, burns, poisoning, and more. Available in English and Malayalam.
          </p>

          <a 
            href="/LifeLinER_Booklet.pdf" 
            download
            className="inline-flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Download PDF</span>
          </a>
        </div>
      </main>
    </div>
  );
}