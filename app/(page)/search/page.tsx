'use client'

import CardList from '@/components/ui/cardList'
import { useSearchParams } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

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
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <MagnifyingGlassIcon className="w-24 h-24 text-gray-300 mb-4" />
          <div className="text-2xl font-bold mb-2">검색 결과가 없습니다.</div>
          <p className="text-gray-500">다른 검색어로 다시 시도해보세요.</p>
        </div>
      )}
    </div>
  )
}

export default Search
