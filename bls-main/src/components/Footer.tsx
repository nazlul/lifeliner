'use client'

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#E0F5FE] text-xl font-sans w-full">
      <div className="max-w-[1444px] mx-auto mb-6 px-6 py-4 text-black">
        <div className="flex flex-col items-center justify-center gap-12 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-col mt-7 items-center lg:items-start">
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
            <div className="md:ml-8">
              <h3 className="text-black font-semibold uppercase mb-4 text-center mt-5 md:mt-[3px] lg:mt-[37px]">Our Network</h3>
              <ul className="space-y-1 md:space-y-3 text-sm font-light text-center">
                <li><a href="https://babymhospital.org/" target="_blank" className="hover:underline">Kozhikode</a></li>
                <li><a href="https://bmhkannur.com/" target="_blank" className="hover:underline">Kannur</a></li>
                <li><a href="https://bmhthodupuzha.com/" target="_blank" className="hover:underline">Thodupuzha</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-center">
            <ul className="space-y-1 md:space-y-3 md:mt-25 font-extralight text-sm text-center">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#goals" className="hover:underline">Goals</a></li>
              <li><a href="#team" className="hover:underline">Team</a></li>
              <li><a href="#blogs" className="hover:underline">Blog</a></li> 
              <li><a href="https://wa.me/+918589023000" target="_blank" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center w-full lg:w-[200px] shrink-0 mx-auto lg:mx-0">
            <div className="w-[285px] h-[168px] relative">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className="text-sm tracking-wide font-semibold mb-2 lg:mb-1 max-w-[300px]">
              If you would like us to organise a special session for your associates or members or beneficiaries
            </p>
            <button className="bg-[#EE5A22] hover:bg-[#ee4422] text-white py-2 px-6 cursor-pointer rounded transition text-sm uppercase" onClick={() => window.open('https://wa.me/+918589023000', '_blank')}>
              Get In Touch With Us
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
          <div className="flex space-x-6 mr-0 lg:mr-6">
            <a href="https://www.instagram.com/lifeliner.clt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2D2D2D" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" /></svg>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLY-QIed6nlopDjih0WgbweLPLmnPcrriu" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2D2D2D" viewBox="0 0 24 24"><path d="M23.498 6.186a2.952 2.952 0 00-2.078-2.09C19.59 3.5 12 3.5 12 3.5s-7.59 0-9.42.596a2.952 2.952 0 00-2.078 2.09A30.31 30.31 0 000 12a30.31 30.31 0 00.502 5.814 2.952 2.952 0 002.078 2.09C4.41 20.5 12 20.5 12 20.5s7.59 0 9.42-.596a2.952 2.952 0 002.078-2.09A30.31 30.31 0 0024 12a30.31 30.31 0 00-.502-5.814zM9.546 15.568V8.432l6.09 3.568-6.09 3.568z" /></svg>
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
