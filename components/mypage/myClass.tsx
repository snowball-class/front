import CardList from '@/components/ui/cardList'
import { CardInfo } from '@/types'

const MyClass = () => {
  const cards: CardInfo[] = [
    {
      id: '0',
      title: '음악 클래스',
      image: '/categori06/음악1.jpg',
      price: '100,000',
      href: '/video/0',
    },
    {
      id: '1',
      title: '음악 클래스2',
      image: '/categori06/음악2.jpg',
      price: '100,000',
      href: '/video/1',
    },
    {
      id: '2',
      title: '음악 클래스3',
      image: '/categori06/음악3.jpg',
      price: '100,000',
      href: '/video/2',
    },
    {
      id: '3',
      title: '음악 클래스4',
      image: '/categori06/음악4.jpg',
      price: '100,000',
      href: '/video/3',
    },
    {
      id: '4',
      title: '음악 클래스5',
      image: '/categori06/음악5.jpg',
      price: '100,000',
      href: '/video/4',
    },
  ]
  return (
    <div className="mt-8">
      <CardList cards={cards} />
    </div>
  )
}

export default MyClass
