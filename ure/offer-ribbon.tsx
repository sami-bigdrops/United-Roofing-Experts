import React from 'react';
import Image from 'next/image';
import { RIBBON_SECTION } from '@/lib/constant';

export default function OfferRibbon() {
  return (
    <div className="ribbon w-full h-auto bg-primary py-[15px] overflow-hidden relative">
      <div className="ribbon-track flex w-fit animate-scroll">
        <div className="ribbon-content flex gap-[40px] xl:gap-[50px] px-[20px] whitespace-nowrap">
          {RIBBON_SECTION.features.map((feature) => (
            <div key={feature.id} className="ribbon-text flex items-center gap-[15px]">
              <h3 className="text-[1rem] md:text-lg xl:text-2xl font-medium text-white mb-0">{feature.title}</h3>
              <Image 
                src={feature.icon} 
                alt={feature.title}
                width={130}
                height={22}
                className="w-[130px] h-[22px] xl:w-[170px] xl:h-[28px]"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="ribbon-content flex gap-[40px] xl:gap-[50px] px-[20px] whitespace-nowrap" aria-hidden="true">
          {RIBBON_SECTION.features.map((feature) => (
            <div key={`duplicate-1-${feature.id}`} className="ribbon-text flex items-center gap-[15px]">
              <h3 className="text-[1rem] font-medium md:text-lg xl:text-2xl text-white mb-0">{feature.title}</h3>
              <Image 
                src={feature.icon} 
                alt={feature.title}
                width={130}
                height={22}
                className="w-[130px] h-[22px] xl:w-[170px] xl:h-[28px]"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="ribbon-content flex gap-[40px] xl:gap-[50px] px-[20px] whitespace-nowrap" aria-hidden="true">
          {RIBBON_SECTION.features.map((feature) => (
            <div key={`duplicate-2-${feature.id}`} className="ribbon-text flex items-center gap-[15px]">
              <h3 className="text-[1rem] font-medium md:text-lg xl:text-2xl text-white mb-0">{feature.title}</h3>
              <Image 
                src={feature.icon} 
                alt={feature.title}
                width={130}
                height={22}
                className="w-[130px] h-[22px] xl:w-[170px] xl:h-[28px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
