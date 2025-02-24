'use client'

import { Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function SuccessPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
    const requestData = {
      orderId: searchParams.get('orderId'),
      amount: searchParams.get('amount'),
      paymentKey: searchParams.get('paymentKey'),
    }
    async function confirm() {
      const response = await fetch('/confirm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      })

      const json = await response.json()

      if (!response.ok) {
        // 결제 실패 비즈니스 로직을 구현하세요.
        router.push(`/fail?message=${json.message}&code=${json.code}`)
        return
      }

      // 결제 성공 비즈니스 로직을 구현하세요.
    }
    confirm()
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            결제 성공
          </h2>
          <div className="checkmark-circle mt-4 mb-8">
            <svg
              className="w-16 h-16 mx-auto text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-4 text-gray-600">
          <p className="flex justify-between border-b pb-2">
            <span className="font-medium">주문번호:</span>
            <span>{searchParams.get('orderId')}</span>
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="font-medium">결제 금액:</span>
            <span>{Number(searchParams.get('amount')).toLocaleString()}원</span>
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="font-medium">결제 키:</span>
            <span className="text-sm">{searchParams.get('paymentKey')}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <SuccessPageContent />
    </Suspense>
  )
}
