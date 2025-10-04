import React from 'react';
import { FileText, Download, Heart, AlertCircle } from 'lucide-react';

export default function BookletSection() {
  return (
    <section id="booklet" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#E0F5FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            First Aid Guide
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Download our comprehensive bilingual emergency response booklet
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Booklet Preview */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-80 bg-gradient-to-br from-[#BF2C2F] to-[#005AAC] rounded-xl shadow-2xl flex items-center justify-center relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-white opacity-10"></div>
                <div className="relative z-10 text-white text-center p-8">
                  <FileText className="w-24 h-24 mx-auto mb-6" strokeWidth={1.5} />
                  <div className="text-xl font-bold mb-2">LIFELINER</div>
                  <div className="text-sm font-semibold mb-1">FIRST AID</div>
                  <div className="text-xs opacity-90">Emergency Guide</div>
                  <div className="mt-6 text-xs opacity-75">English & Malayalam</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#EE5A22] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#005AAC] rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#BF2C2F] bg-opacity-10 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#BF2C2F]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Life-Saving Techniques
                </h3>
                <p className="text-gray-600">
                  Learn CPR, choking response, and critical emergency procedures
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#005AAC] bg-opacity-10 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-[#005AAC]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Common Emergencies
                </h3>
                <p className="text-gray-600">
                  Coverage of burns, poisoning, fractures, bleeding, and more
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#EE5A22] bg-opacity-10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#EE5A22]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bilingual Format
                </h3>
                <p className="text-gray-600">
                  Available in both English and Malayalam for wider accessibility
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="/booklet"
                className="inline-flex items-center space-x-3 bg-[#BF2C2F] hover:bg-[#a02527] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <Download className="w-6 h-6" />
                <span>Get the Booklet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}