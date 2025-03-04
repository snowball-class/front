import Carousel from '@/components/ui/carousel'

export default async function Popular() {
  const url = process.env.NEXT_PUBLIC_LESSON_API + '/lessons/category/' + '2'
  const data = await fetch(url)
  const cardInfo = await data.json()
  console.log(cardInfo.data.content)
  return (
    <div className="mt-12">
      <div className="text-2xl font-bold mb-4">
        지금 원하는 클래스를 찾아보세요!
      </div>
      <Carousel cardInfo={cardInfo.data.content} />
    </div>
  )
}
