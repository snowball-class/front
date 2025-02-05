'use client'

import Carousel from '@/components/ui/carousel'

export default function Popular() {
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
    <div className="mt-12">
      <div className="text-2xl font-bold mb-4">
        지금 원하는 클래스를 찾아보세요!
      </div>
      <Carousel cardInfo={cardInfo} />
    </div>
  )
}
