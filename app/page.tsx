import ClassListHome from '@/components/home/classListHome'
import Developers from '@/components/home/developers'
import IconBtn from '@/components/home/iconBtn'
import Popular from '@/components/home/popular'
import Carousel from '@/components/ui/carousel'
import { bannerInfo } from '@/constants'

export default async function Home() {
  const url = process.env.NEXT_PUBLIC_LESSON_API + '/Lesson/category/' + '8'

  const data = await fetch(url)
  const cardInfo = await data.json()

  return (
    <div className=" md:w-3/4 mx-auto relative mb-12 object-cover w-[90%]">
      <div className="aspect-[1140/300]">
        <Carousel withIndicator bannerInfo={bannerInfo} />
      </div>
      <IconBtn />
      <Popular />
      <ClassListHome
        title="영어인척 하지만 실은 개발입니다"
        cardList={cardInfo.data}
      />
      <Developers />
    </div>
  )
}
