'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ROOFING_STYLES_SECTION } from '@/lib/constant';
import FormPopup from './form-popup';

export default function RoofingStyles() {
  const [activeTab, setActiveTab] = useState('metal-shingles');
  const [activeCard, setActiveCard] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? -1 : index);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div
      className="roofing-styles p-4 w-full h-full lg:p-10 xl:p-14 xl:px-38"
      style={{
        background: "linear-gradient(to left, #FFFFFF, #FFFFFF80), url('/roofingStyles-bg.webp') no-repeat center center",
        backgroundSize: "cover"
      }}
    >
      <div className="container mx-auto">
        <div className="content flex flex-col items-center justify-center  gap-2 lg:gap-5 xl:gap-7">
          <div className="subtitle flex items-end justify-center gap-[10px] lg:gap-[8px] mb-2">
            <Image
              src={ROOFING_STYLES_SECTION.subtitle.icon}
              alt="United Roofing Experts"
              width={50}
              height={50}
              className="w-[50px] lg:w-[100px] h-auto"
            />
            <p className="text-[0.5rem] lg:text-[0.85rem] font-normal mb-0 text-primary -ml-[15px]">
              {ROOFING_STYLES_SECTION.subtitle.text}
            </p>
          </div>
          <div
            className="title text-center  max-w-[430px] lg:text-left text-xl md:text-3xl md:max-w-full lg:text-6xl lg:max-w-[500px] xl:text-[2.8rem] xl:max-w-[640px] font-semibold text-white"
            style={{ lineHeight: '1.3' }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-semibold text-center  mb-0 text-black">
              {ROOFING_STYLES_SECTION.title.main}{' '}
              <span className="text-primary block">
                {ROOFING_STYLES_SECTION.title.highlight}
              </span>
            </h2>
          </div>
          <div className="other-description ">
            <p className="text-[0.7rem] md:text-[0.75rem] md:max-w-[530px] xl:max-w-[680px] lg:text-[1rem] xl:text-[1.1rem] font-normal text-color mb-0 text-center ">
              {ROOFING_STYLES_SECTION.description}
            </p>
          </div>

          <div className="mobile-view md:hidden">
            <div className="mobile-cards w-full flex flex-col gap-2.5">
              {ROOFING_STYLES_SECTION.styles.map((style, index) => (
                <div
                  key={style.id}
                  className={`card w-full overflow-hidden ${
                    activeCard === index ? 'active' : ''
                  }`}
                  style={{
                    border: '1px solid var(--placeholder-color)',
                    borderRadius: '8px'
                  }}
                >
                  <div
                    className="card-header flex justify-between items-center px-3 py-2 bg-white cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <h3 className="heading text-sm font-semibold m-0 text-text-color">{style.title}</h3>
                    <span className={`toggle-icon flex items-center justify-center text-2xl font-light text-primary transition-transform duration-300 ease-in-out ${
                      activeCard === index ? 'rotate-45' : ''
                    }`}>
                      +
                    </span>
                  </div>
                  <div className={`card-content overflow-hidden transition-all duration-300 ease-out bg-white ${
                    activeCard === index 
                      ? 'max-h-[1000px] p-4' 
                      : 'max-h-0 px-4'
                  }`}>
                    <p className="m-0 text-[0.65rem] text-color font-normal text-justify">{style.description}</p>
                    <div className="card-image w-full h-auto hidden">
                      <Image
                        src={style.image}
                        alt={style.title}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded"
                      />
                    </div>
                    <div className="color-options pt-4">
                      <h4 className="heading text-sm font-semibold mb-2.5 text-left">Popular Colours</h4>
                      <div className="color-grid grid grid-cols-3 gap-2.5">
                        {style.colors.map((color, colorIndex) => (
                          <div key={colorIndex} className="color-item flex flex-col items-center gap-1.5">
                            <div
                              className="color-circle w-7.5 h-7.5 rounded-full border-2 border-white shadow-sm"
                              style={{
                                background: `url(${color.image}) no-repeat center center`,
                                backgroundSize: 'cover',
                              }}
                            ></div>
                            <span className="text-[0.6rem] text-text-color">{color.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={openForm}
              className="cta-btn w-full md:w-[240px] lg:w-[280px] text-xs md:text-sm lg:text-lg bg-primary text-white font-normal py-3 px-8 rounded-md border-0 my-8 mx-auto relative z-10 overflow-hidden transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:bg-secondary before:content-[''] before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:rotate-45 before:animate-shimmer before:z-[-1] before:animate-[shimmer_2s_infinite]">
              {ROOFING_STYLES_SECTION.ctaButton.text}
            </button>
          </div>

          <div className="desktop-view hidden md:block">
            <div className="tabs-nav flex items-center justify-center gap-2 my-4 w-full max-w-[700px] lg:max-w-[780px] xl:max-w-[880px]   border-2 border-[#333333] p-1  rounded-lg text-sm mx-auto">
              {ROOFING_STYLES_SECTION.styles.map((style) => (
                <div
                  key={style.id}
                  className={`tab-btn flex-1 p-3 border-0 font-medium text-center text-xs lg:text-sm xl:text-lg text-colour rounded transition-all duration-400 ease-in-out cursor-pointer ${
                    activeTab === style.id 
                      ? 'bg-[#333333] text-white' 
                      : 'bg-transparent text-color  hover:bg-[#999999]'
                  }`}
                  onClick={() => setActiveTab(style.id)}
                >
                  {style.title}
                </div>
              ))}
            </div>

            <div className="tabs-content w-full mt-8">
              {ROOFING_STYLES_SECTION.styles.map((style) => (
                <div
                  key={style.id}
                  className={`tab-panel transition-opacity duration-300 ease-in-out ${
                    activeTab === style.id 
                      ? 'flex opacity-100 gap-10' 
                      : 'hidden opacity-0'
                  }`}
                  id={style.id}
                >
                  <div className="tab-info flex flex-col-reverse items-center justify-center lg:flex-row lg:items-start lg:justify-center xl:justify-center xl:items-center gap-5 xl:gap-1">
                    <div className="left xl:w-[50%] flex flex-col items-center justify-center lg:items-start lg:justify-start  gap-4 xl:gap-5">
                      <h3 className="text-base lg:text-lg xl:text-[1.4rem] font-semibold m-0 text-color lg:text-left">{style.title}</h3>
                      <p className="text-sm xl:text-base leading-relaxed text-color font-normal lg:text-left">{style.description}</p>
                      <div className="color-options">
                        <h4 className="heading text-sm lg:text-base xl:text-[1.15rem] font-semibold mb-4 text-center lg:text-left">Popular {style.title} Colours</h4>
                        <div className={`color-grid grid self-center gap-5 ${
                          style.id === 'metal-spanish-tiles' 
                            ? 'grid-cols-3' 
                            : 'grid-cols-5'
                        }`}>
                          {style.colors.map((color, colorIndex) => (
                            <div key={colorIndex} className="color-item flex flex-col items-center gap-4">
                              <div
                                className="color-circle w-11 h-11 xl:w-12 xl:h-12 rounded-full border-2 border-white shadow-sm"
                                style={{
                                  background: `url(${color.image}) no-repeat center center`,
                                  backgroundSize: 'cover',
                                }}
                              ></div>
                              <span className="text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] text-color">{color.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <button 
                        onClick={openForm}
                        className="cta-btn w-full md:w-[240px] lg:w-[280px] text-xs md:text-sm lg:text-lg bg-primary text-white font-normal py-3 px-8 rounded-md border-0 my-8 lg:my-0 mx-auto lg:mx-0 relative z-10 overflow-hidden transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:bg-secondary before:content-[''] before:absolute before:-top-1/2 before:-left-1/2 before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:rotate-45 before:animate-shimmer before:z-[-1] before:animate-[shimmer_2s_infinite]">
                        {ROOFING_STYLES_SECTION.ctaButton.text}
                      </button>
                    </div>
                    <div className="right xl:w-[50%] flex items-center justify-center">
                      <div className="tab-image w-[400px] xl:w-[550px] h-auto  xl:w-[50%] rounded-lg overflow-hidden">
                        <Image
                          src={style.image}
                          alt={style.title}
                          width={500}
                          height={400}
                          className="w-full h-auto  lg:h-[340px] xl:w-[600px] xl:h-[410px] object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Popup */}
      <FormPopup isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}