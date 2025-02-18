import CardList from '@/components/ui/cardList'
import { useSearchParams } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { CardInfo } from '@/types'
const Search = async ({ searchParams }: { searchParams: { q: string } }) => {
  const search = searchParams.q
  const url = process.env.NEXT_PUBLIC_LESSON_API + '/Lesson/search/' + search
  let cardData: CardInfo[] = []
  try {
    const res = await fetch(url, {
      method: 'GET',
    })
    const data = await res.json()
    cardData = data.data
  } catch (error) {
    console.error(error)
  }

  return (
    <div className="mt-12 w-3/4 mx-auto relative">
      {cardData?.length > 0 ? (
        <CardList cards={cardData} />
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
