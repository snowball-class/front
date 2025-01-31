'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import Card from './card'
import { CardInfo } from '@/types'

interface CarouselProps {
  withIndicator?: boolean
  images?: string[]
  cardInfo?: CardInfo[]
}

const Carousel = ({
  images,
  cardInfo,
  withIndicator = false,
}: CarouselProps) => {
  if (withIndicator) {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-full mx-auto"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Image src={image} alt="carousel" fill className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  } else {
    return (
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-full mx-auto"
      >
        {cardInfo?.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Card cardInfo={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
}

export default Carousel
