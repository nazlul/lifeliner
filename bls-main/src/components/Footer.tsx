'use client'

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-xl font-sans w-full">
      <div className="max-w-[1444px] mx-auto px-6 py-12 text-[#AFAFAF]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-[180px] h-[100px] relative cursor-pointer shrink-0">
            <Image
              src="/logo-bmh.png"
              alt="BMH Logo"
              onClick={() => window.open('https://babymhospital.org/', '_blank')}
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center text-center sm:text-center gap-20 md:gap-30 lg:gap-40">
            <div>
              <h3 className="text-white font-semibold uppercase mb-4">Who We Are</h3>
              <ul className="space-y-2 font-extralight text-sm">
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#goals" className="hover:underline">Goals</a></li>
                <li><a href="#blogs" className="hover:underline">Blog</a></li>
                <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
                <li><a href="https://wa.me/+918589023000" target="_blank" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-[200px] shrink-0">
            <div className="w-[200px] h-[120px] relative mb-4">
              <Image
                src="/logo2.png"
                alt="logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className="text-sm tracking-wide font-normal mb-4 max-w-[300px]">
              If you would like to organize a LifeLinER training in your organization or partner with us, Get in Touch
            </p>
            <button className="bg-red-600 text-white py-2 px-6 cursor-pointer rounded hover:bg-red-700 transition text-sm uppercase" onClick={() => window.open('https://wa.me/+918589023000', '_blank')}>
              Partner with LifeLinER
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#2D2D2D] w-full py-6 px-4">
        <div className="max-w-[1444px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#AFAFAF] italic font-light tracking-wide text-[16px]">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">Terms of Service</a>
            <span className="select-none">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>

          <div className="flex space-x-6">
            <a href="https://www.instagram.com/lifeliner.clt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2D2D2D" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
              </svg>
            </a>

            <a href="https://www.youtube.com/user/BabyMemorialHospital" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2D2D2D" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.952 2.952 0 00-2.078-2.09C19.59 3.5 12 3.5 12 3.5s-7.59 0-9.42.596a2.952 2.952 0 00-2.078 2.09A30.31 30.31 0 000 12a30.31 30.31 0 00.502 5.814 2.952 2.952 0 002.078 2.09C4.41 20.5 12 20.5 12 20.5s7.59 0 9.42-.596a2.952 2.952 0 002.078-2.09A30.31 30.31 0 0024 12a30.31 30.31 0 00-.502-5.814zM9.546 15.568V8.432l6.09 3.568-6.09 3.568z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/babymhospital" target="_blank" aria-label="Facebook" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2D2D2D" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.593 0 0 .592 0 1.326v21.348C0 23.406.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.314h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right max-w-[350px]">
            © 2025 BMH. All rights reserved. <br />
          </div>
        </div>
      </div>
    </footer>
  )
}
