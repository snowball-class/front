import Image from 'next/image'
import Stars from '@/components/ui/stars'
import { ClassroomTopContentProps } from '@/types'
import { Button } from '../ui/button'
import Link from 'next/link'

const ClassroomTopContent = (props: ClassroomTopContentProps) => {
  const { id, subject, title, price, starCount } = props
  return (
    <div className="flex justify-around w-3/4 mx-auto mb-12">
      <Image
        src={`/categori07/영어${id}.jpg`}
        alt="classroom"
        width={800}
        height={480}
      />
      <div className="ml-12 w-full flex flex-col justify-between">
        <div className="">
          <div className="text-gray-500 mb-4">{subject}</div>
          <Stars starCount={starCount} />
          <div className="text-xl">{title}</div>
          <div className="text-xl mt-2">{price}원</div>
        </div>
        <Link
          href="/cart"
          className="flex items-center text-lg justify-center gap-2 w-full py-2 border border-mainBlue bg-blue-100 bg-opacity-40 text-mainBlue rounded-lg"
        >
          <Image src="/ico-cart.png" alt="cart" width={24} height={24} />
          장바구니 담기
        </Link>
      </div>
    </div>
  )
}

export default ClassroomTopContent
