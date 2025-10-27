'use client'
import { FAQ_SECTION } from '@/lib/constant'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Faq() {

    const [activeIndex, setActiveIndex] = useState(0)

    const toggleFAQ = (index: number) => {
      setActiveIndex(activeIndex === index ? -1 : index)
    }



  return (
    <div
      className="faq w-full h-full p-5 lg:p-10 xl:px-48 xl:py-15 bg-white"
      
    >
      <div className="container mx-auto">
        <div className="content flex flex-col items-center justify-center gap-3 xl:gap-5">
        <div className="subtitle flex items-end justify-center gap-[10px] lg:gap-[8px] mb-2">
              <Image
                src={FAQ_SECTION.subtitle.icon}
                alt="United Roofing Experts"
                width={50}
                height={50}
                className="w-[50px] lg:w-[100px] h-auto"
              />
              <p className="text-[0.5rem]  lg:text-[0.85rem] font-normal mb-0 text-primary -ml-[15px]">
                {FAQ_SECTION.subtitle.text}
              </p>
            </div>
            <div className="title text-center lg:text-left max-w-[430px]  lg:text-left text-xl md:text-3xl md:max-w-full lg:text-6xl lg:max-w-[500px] xl:text-[2.8rem] xl:max-w-[640px]  font-semibold text-white"
            style={{ lineHeight: "1.3" }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-semibold text-center lg:text-left mb-0 text-black">
                {FAQ_SECTION.title} 
              </h2>
            </div>

          <div className="quetions-container">
            <div className="faq-container w-full max-w-[800px] mx-auto my-5 flex flex-col gap-4">
              {FAQ_SECTION.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item border border-[#03334E] rounded-lg overflow-hidden ${activeIndex === index ? 'active' : ''}`}
                >
                  <div
                    className="faq-header flex justify-between items-start gap-3 p-4 bg-white cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-[0.85rem] md:text-base lg:text-lg xl:text-xl font-semibold m-0 text-primary flex-1 leading-tight">
                      {faq.question}
                    </h3>
                    <svg
                      className={`toggle-icon w-4 h-4 md:w-4 lg:w-5 lg:h-5 md:h-4 xl:w-6 xl:h-6 transition-transform font-semibold duration-300 ease-in-out text-primary flex-shrink-0 mt-1 ${activeIndex === index ? 'rotate-45' : ''}`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div
                    className={`faq-content overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white px-4 ${
                      activeIndex === index
                        ? 'max-h-[1000px] pb-4 opacity-100 transform translate-y-0'
                        : 'max-h-0 opacity-0 transform -translate-y-2.5'
                    }`}
                  >
                    <div className="faq-description text-justify max-w-[800px]">
                      <p className="text-xs md:text-sm lg:text-base xl:text-[0.98rem]  text-color">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

            
  )
}