import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-xl font-sans w-full">
      <div className="max-w-[1444px] mx-auto px-6 py-12 text-[#AFAFAF]">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-semibold uppercase mb-4">Who We Are</h3>
            <ul className="space-y-2 font-extralight text-sm">
              <li>About Us</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Testimonials</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold uppercase mb-4">Industries</h3>
            <ul className="space-y-2 font-extralight text-sm">
              <li>Corporations</li>
              <li>Government</li>
              <li>Healthcare</li>
              <li>Home Care</li>
              <li>Instructors</li>
              <li>Individuals</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-center lg:items-center text-center md:text-left lg:text-center">
            <div className="relative w-[250px] h-[150px] ">
              <Image
                src="/logo.png"
                alt="life liner"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <p className="text-sm uppercase tracking-wide font-light mb-4 max-w-[300px]">
              Contact us. Let us customize a solution for your company!
            </p>
            <button className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition text-sm uppercase">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#2D2D2D] w-full py-6 px-4">
        <div className="max-w-[1444px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#AFAFAF] italic font-light tracking-wide text-[16px]">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <span className="select-none">|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#2D2D2D"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.593 0 0 .592 0 1.326v21.348C0 23.406.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.314h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#2D2D2D"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.165-2.724c-.951.566-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482A13.955 13.955 0 011.671 3.149a4.902 4.902 0 001.523 6.574 4.903 4.903 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084 4.927 4.927 0 004.6 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.035 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#2D2D2D"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.369 4.268 5.455v6.288zM5.337 7.433c-1.144 0-2.068-.927-2.068-2.068 0-1.143.924-2.068 2.068-2.068s2.068.925 2.068 2.068c0 1.141-.924 2.068-2.068 2.068zM6.766 20.452H3.91V9h2.856v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.22.792 24 1.771 24h20.451C23.2 24 24 23.22 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right max-w-[350px]">
            © 2025 BMH. All rights reserved. <br />
          </div>
        </div>
      </div>
    </footer>
  );
}
