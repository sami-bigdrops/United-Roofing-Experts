'use client'

import React from 'react'

export default function Ribbon() {
  return (
    <>
      <style jsx>{`
        @keyframes scaleUpDown {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .ribbon-animation {
          animation: scaleUpDown 2s ease-in-out infinite;
          transform-origin: center;
          will-change: transform;
        }
        
        .ribbon-container {
          overflow: hidden;
          position: relative;
        }
      `}</style>
      
      <div className='ribbon p-3 px-4 py-2 md:py-2 xl:py-1 bg-primary  mt-2 '>
          <div className="container mx-auto ribbon-container">
              <div className="offer-ribbon-content text-center font-medium text-[0.65rem] md:text-sm lg:text-base  text-white ribbon-animation">
                  <p >
                      <span style={{ lineHeight: '2.5' }}>
                         SAVE UP TO <span className=' bg-white px-2 py-1 mx-1 rounded-sm shadow-md text-primary' style={{  boxShadow: '5px 6px 7px rgba(0, 0, 0, 0.2)' }}>50%</span> TODAY ON NEW INSTALLATIONS
                      </span>
                  </p>
              </div>
          </div>
      </div>
    </>
  )
}