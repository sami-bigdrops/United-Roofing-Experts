'use client'
import React from 'react'
import Image from 'next/image'
import { IMAGE_SLIDER_SECTION } from '@/lib/constant'
// @ts-ignore
import { Swiper, SwiperSlide } from 'swiper/react'
// @ts-ignore
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

export default function ImageSlider() {
  return (
    <div className="w-full py-10 lg:px-10 xl:px-40 xl:py-20 overflow-hidden">
      <div className="container">
        <div className="content flex flex-col">
          <div className="swiper image-swiper w-full py-5">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              allowTouchMove={false}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1440: {
                  slidesPerView: 4,
                }
              }}
              className="image-swiper w-full py-5"
              style={{ width: '100%', height: 'auto' }}
            >
              {IMAGE_SLIDER_SECTION.images.map((image, index) => (
                <SwiperSlide key={index} className="swiper-slide h-[210px] md:h-[240px] lg:h-[280px] xl:h-[350px] rounded-[10px] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={210}
                    className="w-full h-[210px] md:h-[240px] md lg:h-[280px] xl:h-[350px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}