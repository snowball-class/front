'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import banner01 from '@/public/banner-01.png'
import banner02 from '@/public/banner-02.png'
import banner03 from '@/public/banner-03.png'
import banner04 from '@/public/banner-04.png'
import banner05 from '@/public/banner-05.png'
import banner06 from '@/public/banner-06.png'
import banner07 from '@/public/banner-07.png'
import Carousel from '@/components/ui/carousel'
import Input from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CardList from '@/components/ui/cardList'
import IconBtn from '@/components/home/iconBtn'

const Subject = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const [search, setSearch] = useState('')
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const classList = [
    {
      id: '1',
      title: '눈송이와 함께하는 운동루틴',
      image: banner01,
    },
    {
      id: '2',
      title: '오늘의 메뉴 고르기',
      image: banner02,
    },
    {
      id: '3',
      title: '미술 클래스',
      image: banner03,
    },
    {
      id: '4',
      title: '인스타에 올리는 영상 편집',
      image: banner04,
    },
    {
      id: '5',
      title: '개발이란 무엇인가?',
      image: banner05,
    },
    {
      id: '6',
      title: '우리의 첫 취미는 음악이었다',
      image: banner06,
    },
    {
      id: '7',
      title: '2025년도에는 외국어 하셔야죠',
      image: banner07,
    },
    {
      id: '8',
      title: '당신의 취미는 무엇인가요?',
      image: banner01,
    },
  ]
  const cardInfo = [
    {
      id: '1',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어1.jpg',
    },
    {
      id: '2',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어2.jpg',
    },
    {
      id: '3',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어3.jpg',
    },
    {
      id: '4',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어4.jpg',
    },
    {
      id: '5',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어5.jpg',
    },
    {
      id: '6',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어6.jpg',
    },
    {
      id: '7',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어7.jpg',
    },
    {
      id: '8',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어8.jpg',
    },
  ]
  return (
    <div className="mt-12 w-3/4 mx-auto relative">
      <Image
        src={classList[Number(id) - 1].image}
        alt="banner"
        className="w-full h-auto aspect-[970/263] "
      />
      <IconBtn />
      <div className="text-2xl font-bold mt-12 mb-4">
        {classList[Number(id)].title}
      </div>

      <CardList cards={cardInfo} />
    </div>
  )
}

export default Subject
