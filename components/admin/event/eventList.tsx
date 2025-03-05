import { CardInfo } from '@/types'
import Image from 'next/image'
import { useEffect } from 'react'

const EventList = ({ search }: { search: string }) => {
  const url = process.env.NEXT_PUBLIC_LESSON_API + '/lessons/search/' + search
  let cardData: CardInfo[] = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = await res.json()
        cardData = data.data
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [search])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {cardData.map((card) => (
        <div
          key={card.lessonId}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 
                     hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 
                     focus:ring-blue-500 focus:border-blue-500"
          tabIndex={0}
        >
          <div className="relative w-full h-48">
            <Image
              src={card.thumbnailUrl || ''}
              alt={card.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 text-sm">{card.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventList
