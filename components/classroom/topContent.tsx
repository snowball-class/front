'use client'

import Image from 'next/image'
import Stars from '@/components/ui/stars'
import { useCartStore, useModalStore } from '@/lib/store'
import { ClassroomTopContentProps } from '@/types'
import { useRouter } from 'next/navigation'
import { formatPrice } from '@/lib/utils'

const ClassroomTopContent = (props: ClassroomTopContentProps) => {
  const { id, category, title, price, starCount } = props
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
      <Image
        src={`/categori07/영어11.jpg`}
        alt="classroom"
        width={800}
        height={480}
      />
      <div className="ml-12 w-full flex flex-col justify-between">
        <div className="">
          <div className="text-gray-500 mb-4">{category}</div>
          <Stars starCount={starCount} />
          <div className="text-xl">{title}</div>
          <div className="text-xl mt-2">{formatPrice(price)}원</div>
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
