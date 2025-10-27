'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { WHY_CHOOSE_SECTION } from '@/lib/constant'
import FormPopup from './form-popup'

export default function Choose() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setIsFormOpen(false)
  }

  return (
    <div 
      className="choose p-4 w-full h-full lg:p-10 xl:p-14 xl:px-20"
      style={{
        background: "linear-gradient(to right, #1E1E1E, #1E1E1E80, #1E1E1E50), url('/choose-bg.webp') no-repeat center center",
        backgroundSize: "cover"
      }}
    >
      <div className="container mx-auto">
        <div className="content flex flex-col items-center justify-center lg:flex-row gap-5 lg:gap-7 xl:gap-18">
          <div className="left lg:max-w-[50%] xl:max-w-[50%] 2xl:max-w-[50%] flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 md:gap-3 lg:gap-8 xl:gap-8">
            <div className="subtitle flex items-end justify-center gap-[10px] lg:gap-[8px] mb-2">
              <Image
                src={WHY_CHOOSE_SECTION.subtitle.icon}
                alt="United Roofing Experts"
                width={50}
                height={50}
                className="w-[50px] lg:w-[100px] h-auto"
              />
              <p className="text-[0.5rem] lg:text-[0.85rem] font-normal mb-0 text-white -ml-[15px]">
                {WHY_CHOOSE_SECTION.subtitle.text}
              </p>
            </div>
            <div className="title text-center lg:text-left max-w-[430px] lg:text-left text-xl md:text-3xl md:max-w-full lg:text-6xl lg:max-w-[500px] xl:text-[2.8rem] xl:max-w-[640px] font-semibold text-white"
              style={{ lineHeight: "1.3" }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-semibold text-center lg:text-left mb-0 text-white">
                {WHY_CHOOSE_SECTION.title.main} <span className="text-white block">{WHY_CHOOSE_SECTION.title.highlight}</span>
              </h2>
            </div>
            <div className="other-description lg:text-left">
              <p className="text-[0.7rem] md:text-[0.75rem] md:max-w-[530px] lg:text-[1rem] xl:text-[1.1rem] font-normal text-white mb-0 text-center lg:text-left">{WHY_CHOOSE_SECTION.description}</p>
            </div>
            <div className="image">
              <Image
                src={WHY_CHOOSE_SECTION.image.src}
                alt={WHY_CHOOSE_SECTION.image.alt}
                width={500}
                height={400}
                className="w-full h-auto md:h-[240px] lg:w-[500px] lg:h-[230px] xl:w-[500px] xl:h-[250px] object-cover"
              />
            </div>
          </div>
          <div className="right flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 md:gap-3 lg:gap-3 xl:gap-8">
            <div className="choose-container flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 md:gap-3 lg:gap-5 xl:gap-7">
              {WHY_CHOOSE_SECTION.features.map((feature, index) => (
                <div key={feature.id} className="choose-item flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 md:gap-3 lg:gap-3 xl:gap-5">
                  <div className="choose-item flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start gap-3 md:gap-3 lg:gap-6 xl:gap-5">
                    <div className="choose-icon">
                      <Image
                        src={feature.icon}
                        alt="Choose"
                        width={38}
                        height={38}
                        className="w-[32px] h-[32px] md:w-[38px] md:h-[38px] lg:w-[50px] lg:h-[50px] xl:w-[50px] xl:h-[50px]"
                      />
                    </div>
                    <div className="choose-info flex flex-col items-center justify-center md:items-start md:justify-start gap-2 md:gap-3 lg:gap-2 xl:gap-5">
                      <div className="subheading">
                        <h3 className="text-sm md:text-base lg:text-[1.15rem] xl:text-[1.2rem] font-medium text-white mb-0 text-center md:text-left">{feature.title}</h3>
                      </div>
                      <div className="other-description">
                        <p className="text-[0.7rem] md:text-[0.75rem] md:max-w-[530px] lg:text-[1rem] xl:text-[1.1rem] font-normal text-white mb-0 text-center md:text-left">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                  
                    <div className="line w-full h-[0.5px] bg-placeholder my-4 xl:my-3"></div>
                  
                </div>
              ))}
              <div className="choose-service-container flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2 md:gap-3 lg:gap-3 xl:gap-5">
                <div className="choose-service-grid grid grid-cols-1 md:grid-cols-2 gap-3  lg:gap-8 xl:gap-7">
                  {WHY_CHOOSE_SECTION.services.map((service) => (
                    <div key={service.id} className="choose-service-item flex flex-row items-center justify-center lg:items-start lg:justify-start gap-2 md:gap-3 lg:gap-3 xl:gap-3">
                      <div className="choose-service-icon">
                        <Image src={service.icon} alt="Choose" width={24} height={24}
                        className="w-[32px] h-[32px] lg:w-[38px] lg:h-[38px]  xl:w-[45px] xl:h-[45px]"
                        />
                      </div>
                      <div className="choose-service-info">
                        <h3 className="text-sm  lg:text-base xl:text-lg font-medium text-white mb-0 text-center md:text-left">{service.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={openForm}
                className="cta-btn  my-6 w-full md:w-[240px] lg:w-[280px] text-xs md:text-sm lg:text-lg bg-primary text-white font-normal py-3 px-8 rounded-md border-0  mx-auto relative z-10 overflow-hidden transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:bg-secondary before:content-[''] before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:rotate-45 before:animate-shimmer before:z-[-1] before:animate-[shimmer_2s_infinite]">
                 {WHY_CHOOSE_SECTION.ctaButton.text}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Popup */}
      <FormPopup isOpen={isFormOpen} onClose={closeForm} />
    </div>
  )
}
