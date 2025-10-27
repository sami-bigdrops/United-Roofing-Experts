import React from 'react';
import Image from 'next/image';

export default function Ratings() {
  return (
    <div className="ratings p-4 w-full h-full xl:px-40">
      <div className="container mx-auto">
        <div className="ratings-grid grid grid-cols-2 md:grid-cols-4 gap-[8px] md:gap-[30px] lg:gap-[10px]">
          <div className="rating-card flex flex-col items-center justify-center gap-[8px] md:gap-[2px]  md:min-h-[100px]">
            <div className="flex items-center justify-center h-[30px]">
              <Image 
                className="stars-1 w-[100px] h-[30px] md:w-[150px] md:h-[40px] object-contain" 
                src="/stars-1.svg" 
                alt="5 stars-1"
                width={150}
                height={40}
              />
            </div>
            <div className="flex items-center justify-center h-[50px]">
              <Image 
                className="platform w-[80px] h-[50px] md:w-[120px] md:h-[60px] object-contain" 
                src="/fb.webp" 
                alt="Facebook"
                width={120}
                height={60}
              />
            </div>
          </div>

          <div className="rating-card flex flex-col items-center justify-center gap-[8px] md:gap-[2px]  md:min-h-[100px]">
            <div className="flex items-center justify-center h-[30px]">
              <Image 
                className="stars-1 w-[100px] h-[30px] md:w-[150px] md:h-[40px] object-contain" 
                src="/stars-1.svg" 
                alt="5 stars-1"
                width={150}
                height={40}
              />
            </div>
            <div className="flex items-center justify-center h-[50px]">
              <Image 
                className="platform w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[170px] xl:w-[180px] object-contain" 
                src="/guild-quality.webp" 
                alt="Guild Quality"
                width={120}
                height={60}
              />
            </div>
          </div>

          <div className="rating-card flex flex-col items-center justify-center gap-[8px] md:gap-[2px]  md:min-h-[100px]">
            <div className="flex items-center justify-center h-[30px]">
              <Image 
                className="stars-1 w-[100px] h-[25px] md:w-[150px] md:h-[40px] object-contain" 
                src="/stars-1.svg" 
                alt="5 stars-1"
                width={150}
                height={40}
              />
            </div>
            <div className="flex items-center justify-center h-[50px]">
              <Image 
                className="platform w-[80px] h-[40px] md:w-[100px] md:h-[60px] object-contain" 
                src="/google.webp" 
                alt="Google"
                width={120}
                height={60}
              />
            </div>
          </div>

          <div className="rating-card flex flex-col items-center justify-center gap-[8px] md:gap-[2px]  md:min-h-[100px]">
            <div className="flex items-center justify-center h-[30px]">
              <h3 className="text-[1.2rem] md:text-[1.5rem] font-semibold mb-0">A+</h3>
            </div>
            <div className="flex items-center justify-center h-[50px]">
              <Image 
                className="platform w-[80px] h-[40px] md:w-[100px] md:h-[50px] object-contain" 
                src="/bbb.webp" 
                alt="BBB"
                width={120}
                height={60}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
