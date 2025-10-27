'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { REVIEW_SECTION, WHY_CHOOSE_SECTION } from '@/lib/constant'
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

export default function Review() {
  return (
    <div
      className="review p-4 lg:p-8 xl:p-14 xl:px-42 w-full"
      style={{ background: "linear-gradient(to right, #f8f9fa, #ffffff)" }}
    >
      <div className="container mx-auto">
        <div className="content flex flex-col items-center justify-center gap-1 md:gap-2 xl:gap-3">
        <div className="title-container flex flex-col items-center justify-center gap-2 md:gap-2 xl:gap-5">
          <div className="subtitle flex items-end justify-center gap-[10px] lg:gap-[8px] mb-2">
              <Image
                src={REVIEW_SECTION.subtitle.icon}
                alt="United Roofing Experts"
                width={50}
                height={50}
                className="w-[50px] lg:w-[100px] h-auto"
              />
              <p className="text-[0.5rem] lg:text-[0.85rem] font-normal mb-0 text-primary -ml-[15px]">
                {REVIEW_SECTION.subtitle.text}
              </p>
            </div>
            <div className="title text-center  max-w-[430px]  text-xl md:text-3xl md:max-w-full lg:text-6xl lg:max-w-[500px] xl:text-[2.8rem] xl:max-w-[640px] font-semibold text-white"
              style={{ lineHeight: "1.3" }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[2.5rem] font-semibold text-center mb-0 text-black">
                {REVIEW_SECTION.title.main} <span className="text-primary block">{REVIEW_SECTION.title.highlight}</span>
              </h2>
            </div>
            <div className="other-description lg:text-left">
              <p className="text-[0.7rem] md:text-[0.75rem] md:max-w-[530px] lg:max-w-[650px] xl:max-w-[750px] lg:text-[1rem] xl:text-[1.1rem] font-normal text-color mb-0 text-center ">{REVIEW_SECTION.description}</p>
            </div>
        </div>  
          <div className="w-full py-5 pt-10 pb-8 px-2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={1000}
              grabCursor={true}
              centeredSlides={false}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                }
              }}
              className="reviews-swiper"
              style={{ width: '100%', height: 'auto' }}
            >
              {REVIEW_SECTION.reviews.map((review: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="review-card bg-white rounded-[15px] px-6 py-7 xl:px-8 xl:py-9 shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 ease-in-out h-full flex flex-col gap-7 xl:gap-8 border border-[rgba(0,0,0,0.05)] cursor-pointer hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                    <div className="review-header flex flex-row items-center justify-between gap-3">
                      <img 
                        src={review.stars} 
                        alt="5 stars-1"
                        className="w-[100px] md:w-[110px] lg:w-[140px] xl:w-[130px] h-auto"
                      />
                      <p className="review-date text-[0.8rem] lg:text-[0.9rem] text-placeholder">Verified Review</p>
                    </div>
                    <p className="review-text mt-1.5 text-[0.9rem] md:text-[0.85rem] lg:text-[0.95rem] xl:text-[1.06rem]" style={{ lineHeight: 1.5 }}>
                      "{review.text}"
                    </p>
                    <div className="reviewer">
                      <p className="name text-[1rem] md:text-[0.95rem] lg:text-[1.05rem] xl:text-[1.2rem] font-semibold text-black mb-1">
                        {review.name}
                      </p>
                      <p className="location text-[0.8rem] lg:text-[0.9rem] text-placeholder">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

