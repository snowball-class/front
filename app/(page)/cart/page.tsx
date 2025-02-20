'use client'
import CartCard from '@/components/cart/card'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { useCartStore } from '@/lib/store'
import { formatPrice } from '@/lib/utils'
import { useCallback, useState, ChangeEvent } from 'react'

const Cart = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const { cartItems, addItem, deleteItem } = useCartStore()
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    if (checked) {
      setCheckedItems((prev) => [...prev, value])
    } else {
      setCheckedItems((prev) => prev.filter((item) => item !== value))
    }
  }

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedItems(cartItems.map((item) => item.title))
    } else {
      setCheckedItems([])
    }
  }
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    },
    [checkedItems]
  )
  return (
    <div className="w-3/4 mx-auto">
      <Title title="장바구니" />
      <form onSubmit={onSubmit}>
        <div className="px-2 py-4 mb-4 mt-8 border-b-2 border-b-gray-200 flex items-center">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={checkedItems.length === cartItems.length}
          />
          <div className="ml-8 font-semibold text-lg">클래스 선택</div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <CartCard
                key={item.lessonId}
                title={item.title}
                price={item.netPrice}
                image={item.thumbnail}
                checkedItemHandler={handleCheckboxChange}
              />
            )
          })
        ) : (
          <div className="text-center text-gray-500">
            장바구니가 비었습니다.
          </div>
        )}
        <div className="w-full flex justify-end font-semibold text-xl py-12">
          총 결제금액 : {formatPrice(10300)}원
        </div>
        <div className="flex justify-end mb-12 w-full">
          <Button bgColor="blue" href="toss" size="default">
            구매하기
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Cart
