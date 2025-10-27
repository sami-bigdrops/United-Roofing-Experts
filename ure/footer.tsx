import React from 'react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white p-4 md:px-6 lg:px-8" style={{ background: '#f8f9fa' }}>
      <div className="container mx-auto">
        <div className="content flex flex-col items-center justify-center gap-3 ">
          <div className="footer-logo mb-2 md:mb-2">
            <Image 
              src="/logo.webp" 
              alt="United Roofing Expert" 
              width={200} 
              height={60}
              className="w-38 md:w-45 "
            />
          </div>
          
          <div className="footer-links flex flex-col items-center justify-center mb-1 gap-2 md:flex-row md:gap-3">
            <a 
              href="/privacy-policy" 
              className="text-xs lg:text-sm xl:text-base text-primary hover:text-[#333333] transition-colors duration-300"
              
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-use" 
              className="text-xs lg:text-sm xl:text-base text-primary hover:text-[#333333] transition-colors duration-300"
              
            >
               Terms of Use
            </a>
            <a 
              href="#" 
              className="text-xs lg:text-sm xl:text-base text-primary hover:text-[#333333] transition-colors duration-300"
             
            >
              Unsubscribe
            </a>
          </div>
          
          <div className="copyright text-center 2xl:mb-2">
            <p className="text-xs lg:text-sm xl:text-base text-color " >
              &copy; {currentYear}  United Roofing Experts. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
