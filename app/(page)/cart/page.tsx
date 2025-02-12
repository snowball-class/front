'use client'
import CartCard from '@/components/cart/card'
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { formatPrice } from '@/lib/utils'
import { useCallback, useState, ChangeEvent } from 'react'

const Cart = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

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
  const cartItems = [
    {
      title: '인스타로 배우는 사진찍기 노하우',
      price: 80000,
      image: '/categori04/사진-1.jpg',
    },
    {
      title: '나의 사진 답사기',
      price: 90000,
      image: '/categori04/사진-2.jpg',
    },
    {
      title: '도대체 왜 페트병을 자르는 사진이 있는 걸까요?',
      price: 100000,
      image: '/categori04/사진-3.jpg',
    },
  ]

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
        {cartItems.map((item, i) => {
          return (
            <CartCard
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
              checkedItemHandler={handleCheckboxChange}
            />
          )
        })}
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
