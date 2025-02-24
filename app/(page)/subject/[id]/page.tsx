import Image from 'next/image'

import CardList from '@/components/ui/cardList'
import IconBtn from '@/components/home/iconBtn'
import { bannerInfo } from '@/constants'
import banner01 from '@/public/banner_1.png'
import banner02 from '@/public/banner_2.png'
import banner03 from '@/public/banner_3.png'
import banner04 from '@/public/banner_4.png'
import banner05 from '@/public/banner_5.png'
import banner06 from '@/public/banner_6.png'
import banner07 from '@/public/banner_7.png'
import banner08 from '@/public/banner_8.png'

const Subject = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const bannerPic = [
    banner01,
    banner02,
    banner03,
    banner04,
    banner05,
    banner06,
    banner07,
    banner08,
  ]
  const url = process.env.NEXT_PUBLIC_LESSON_API + '/Lesson/category/' + id
  const data = await fetch(url)
  const cardInfo = await data.json()
  const cards = cardInfo.data
  return (
    <div className="mt-12 w-3/4 mx-auto relative">
      <Image
        src={bannerPic[Number(id)-1]}
        alt="banner"
        className="w-full aspect-[1140/300] object-cover "
      />
      <IconBtn />
      <div className="text-2xl font-bold mt-12 mb-4">
        {bannerInfo[Number(id)-1].title}
      </div>

      <CardList cards={cards} />
    </div>
  )
}

export default Subject
