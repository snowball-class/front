import { formatPrice } from '@/lib/utils'
import Image from 'next/image'
import { ChangeEvent } from 'react'

interface CartCard {
  title: string
  price: number
  image: string
  checkedItemHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const CartCard = ({ title, price, image, checkedItemHandler }: CartCard) => {
  return (
    <div className="flex justify-between w-full py-4 px-2 items-center border-b border-gray-200">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          value={title}
          id={title}
          onChange={checkedItemHandler}
        />
        <Image src={image} alt="cart" width={200} height={200} />
        <div className="ml-4">{title}</div>
      </div>
      <div className="">{formatPrice(price)}원</div>
    </div>
  )
}

export default CartCard
