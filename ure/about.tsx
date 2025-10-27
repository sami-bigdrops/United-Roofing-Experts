'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ABOUT_SECTION } from '@/lib/constant'
import FormPopup from './form-popup'

export default function About() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }

  return (
    <div className="about p-4 lg:p-8 xl:p-14 xl:px-20 w-full h-full">
      <div className="container mx-auto">
        <div className="content flex flex-col-reverse items-center justify-center  lg:flex-row-reverse lg:items-center lg:justify-start xl:flex-row-reverse xl:items-center xl:justify-center   gap-5 lg:gap-7 xl:gap-3">
          <div className="left lg:max-w-[50%] xl:max-w-[50%] 2xl:max-w-[50%] flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 md:gap-3 lg:gap-4 xl:gap-6">
          <div className="subtitle flex items-end justify-center gap-[10px] lg:gap-[8px] mb-2">
              <Image
                src={ABOUT_SECTION.subtitle.icon}
                alt="United Roofing Experts"
                width={50}
                height={50}
                className="w-[50px] lg:w-[100px] h-auto"
              />
              <p className="text-[0.5rem]  lg:text-[0.85rem] font-normal mb-0 text-primary -ml-[15px]">
                {ABOUT_SECTION.subtitle.text}
              </p>
            </div>
            <div className="title text-center lg:text-left max-w-[430px]  lg:text-left text-xl md:text-3xl md:max-w-full lg:text-6xl lg:max-w-[500px] xl:text-[2.8rem] xl:max-w-[640px]  font-semibold text-white"
            style={{ lineHeight: "1.3" }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-semibold text-center lg:text-left mb-0 text-black">
                {ABOUT_SECTION.title.main} <span className="text-primary block">{ABOUT_SECTION.title.highlight}</span>
              </h2>
            </div>
            <div className="other-description lg:text-left">
              <p className="text-[0.7rem] md:text-[0.75rem] md:max-w-[530px] lg:text-[1rem] xl:text-[1.1rem] font-normal text-color  mb-0 text-center lg:text-left">{ABOUT_SECTION.description}</p>
            </div>
            <div className="line w-full h-[0.5px] bg-placeholder my-2.5"></div>
            <div className="subheading lg:text-left">
              <h3 className="text-sm md:text-base lg:text-[1.2rem] xl:text-[1.3rem] font-medium text-heading-color mb-0 text-center lg:text-left">{ABOUT_SECTION.subheading}</h3>
            </div>
            <div className="other-description lg:text-left">
              <p className="text-[0.7rem] md:text-[0.75rem] lg:text-[1rem] xl:text-[1.1rem] font-normal text-color  mb-0 text-center lg:text-left">{ABOUT_SECTION.roofTypesDescription}</p>
            </div>
            <div className="roof-grid grid grid-cols-1 md:grid-cols-3 lg:items-center lg:justify-center gap-2.5 md:gap-5 lg:gap-8">
              {ABOUT_SECTION.roofTypes.map((roofType) => (
                <div key={roofType.id} className="roof-item flex flex-col items-center justify-center gap-2.5 lg:items-center lg:justify-center">
                  <div className={`${roofType.image} w-25 h-25 md:w-26 md:h-26 xl:w-30 xl:h-30   bg-cover bg-center bg-no-repeat rounded-lg transition-all duration-300 ease-in-out hover:scale-110`}></div>
                  <p className="text-[0.7rem] md:text-[0.75rem] lg:text-sm xl:text-[1.1rem] font-normal text-color  mb-0 text-center">{roofType.name}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={openForm}
              className="cta-btn w-full md:w-[240px] lg:w-[280px] text-xs md:text-sm lg:text-lg bg-primary text-white font-normal py-3 px-8 rounded-md border-0 my-5 mx-auto relative z-10 overflow-hidden transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:bg-secondary before:content-[''] before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:rotate-45 before:animate-shimmer before:z-[-1] before:animate-[shimmer_2s_infinite]">
              {ABOUT_SECTION.ctaButton.text}
            </button>
          </div>
          <div className="right lg:max-w-[50%] xl:max-w-[50%] 2xl:max-w-[50%] flex flex-col items-center justify-center w-full h-full">
            <div className="image w-full h-full flex items-center justify-center">
              <Image 
                src={ABOUT_SECTION.image.src} 
                alt={ABOUT_SECTION.image.alt} 
                width={500}
                height={400}
                className="w-full h-auto md:w-[300px] md:h-[300px] lg:w-[550px] lg:h-[550px] xl:w-[550px] xl:h-[600px] transition-transform duration-300 ease-in-out hover:scale-110 hover:translate-x-[var(--mouse-x,0)] hover:translate-y-[var(--mouse-y,0)]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Popup */}
      <FormPopup isOpen={isFormOpen} onClose={closeForm} />
    </div>
  )
}