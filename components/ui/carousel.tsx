'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import Card from './card'
import { BannerInfo, CardInfo } from '@/types'
import CarouselSkeleton from './carousel-skeleton'
import Link from 'next/link'

interface CarouselProps {
  withIndicator?: boolean
  cardInfo?: CardInfo[]
  bannerInfo?: BannerInfo[]
}

const Carousel = ({
  cardInfo,
  bannerInfo,
  withIndicator = false,
}: CarouselProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 100)
  useEffect(() => {
    timer
  }, [])
  const handlePrev = () => {
    swiper?.slidePrev()
  }

  const handleNext = () => {
    swiper?.slideNext()
  }

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
        {bannerInfo?.map((item) => (
          <SwiperSlide key={item.id} className="w-full h-full">
            <Link href={`/subject/${item.id}`}>
              <Image
                src={item.image || ''}
                alt="carousel"
                fill
                className="object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    )
  } else {
    return isLoading ? (
      <CarouselSkeleton />
    ) : (
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: '.swiper-button-nextBtn',
            prevEl: '.swiper-button-prevBtn',
          }}
          modules={[Navigation]}
        >
          {cardInfo?.map((item, index) => (
            <SwiperSlide key={index} className="">
              <Card cardInfo={item} />
            </SwiperSlide>
          ))}
          <Image
            src="/prev.png"
            alt="arrow-left"
            width={36}
            height={36}
            onClick={handlePrev}
            className="swiper-button-prevBtn absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
          />
          <Image
            src="/next.png"
            alt="arrow-right"
            width={36}
            height={36}
            onClick={handleNext}
            className="swiper-button-nextBtn absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
          />
        </Swiper>
      </div>
    )
  }
}

export default Carousel
