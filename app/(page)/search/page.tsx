'use client'

import CardList from '@/components/ui/cardList'
import { useSearchParams } from 'next/navigation'
const Search = () => {
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
  const searchParams = useSearchParams()
  const search = searchParams.get('q')
  return (
    <div className="mt-12 w-3/4 mx-auto relative">
      {search !== 'none' ? (
        <CardList cards={cardInfo} />
      ) : (
        <div className="text-2xl font-bold mt-12 mb-4">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  )
}

export default Search
