import CardList from '@/components/ui/cardList'
import { cardDummy } from '@/constants'

const MyClass = () => {
  const cards = cardDummy
  return (
    <div className="mt-8">
      <CardList cards={cards} />
    </div>
  )
}

export default MyClass
