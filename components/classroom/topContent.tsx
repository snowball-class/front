'use client'

import Image from 'next/image'
import Stars from '@/components/ui/stars'
import { useCartStore, useModalStore } from '@/lib/store'
import { LessonDetail } from '@/types'
import { useRouter } from 'next/navigation'
import { formatPrice } from '@/lib/utils'

const ClassroomTopContent = (props: LessonDetail) => {
  const {
    lessonId,
    categoryName,
    title,
    thumbnailUrl,
    price,
    discountedPrice,
    averageStarScore,
    numOfStudents,
  } = props
  const { onOpen, onClose, setTitle, setHandleSubmit } = useModalStore()
  const { addItem } = useCartStore()
  const router = useRouter()

  const handleOpen = () => {
    onOpen()
    setTitle('장바구니에 담겼습니다. 장바구니를 확인해보시겠습니까?')
    setHandleSubmit(() => {
      onClose()
      router.push('/cart')
      // addItem()
    })
  }
  return (
    <div className="flex justify-around w-3/4 mx-auto mb-12">
      {thumbnailUrl ? (
        <Image src={thumbnailUrl} alt="classroom" width={800} height={480} />
      ) : (
        <div className="w-[800px] h-[400px] bg-gray-300" />
      )}
      <div className="ml-12 w-full flex flex-col justify-between">
        <div className="">
          <div className="text-gray-500 mb-4">{categoryName}</div>
          <Stars starCount={averageStarScore ?? 0} />
          <div className="text-xl">{title}</div>
          {discountedPrice === 0 ? (
            <div className="text-xl mt-2">{formatPrice(price ?? 0)}원</div>
          ) : (
            <div className="flex items-center">
              <span className="text-xl mt-2 line-through">
                {formatPrice(price ?? 0)}원
              </span>
              <span className="mx-4">&rarr;</span>
              <span className="text-xl mt-2 ">
                {formatPrice(discountedPrice ?? 0)}원
              </span>
            </div>
          )}
        </div>
        <button
          onClick={handleOpen}
          className="flex items-center text-lg justify-center gap-2 w-full py-2 border border-mainBlue bg-blue-100 bg-opacity-40 text-mainBlue rounded-lg"
        >
          <Image src="/ico-cart.png" alt="cart" width={24} height={24} />
          장바구니 담기
        </button>
      </div>
    </div>
  )
}

export default ClassroomTopContent
