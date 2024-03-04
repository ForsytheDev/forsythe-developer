import React from 'react'

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Navigation } from 'swiper/modules'

import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr'

import { SlideType } from '@/components/Roadmap'

interface TimelineSwiperProps {
  slides: SlideType[]
}

SwiperCore.use([Navigation])

export const Timeline: React.FC<TimelineSwiperProps> = React.memo(({ slides }) => {
  const breakpoints = {
    0: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 3,
    },
    780: {
      slidesPerView: 4,
    },
  }

  return (
    <>
      <Swiper
        className="swiper-timeline"
        spaceBetween={0}
        slidesPerView={4}
        mousewheel={false}
        freeMode={true}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        breakpoints={breakpoints}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <h5 className="timestamp">{slide?.timestamp}</h5>
              <span className="month">{slide?.month}</span>
              <div className="axis" />
              <div className="description">
                <span className="phase">{slide?.phase}</span>
                <p className="paragraph">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="controls">
        <button className="prev">
          <GrFormPreviousLink />
        </button>
        <button className="next">
          <GrFormNextLink />
        </button>
      </div>
    </>
  )
})
