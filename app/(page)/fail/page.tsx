'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function FailPageContent() {
  const searchParams = useSearchParams()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            결제 실패
          </h2>
          <div className="error-circle mt-4 mb-8">
            <svg
              className="w-16 h-16 mx-auto text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="space-y-4 text-gray-600">
          <p className="flex justify-between border-b pb-2">
            <span className="font-medium">에러 코드:</span>
            <span>{searchParams.get('code')}</span>
          </p>
          <p className="flex justify-between border-b pb-2">
            <span className="font-medium">실패 사유:</span>
            <span>{searchParams.get('message')}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FailPage() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <FailPageContent />
    </Suspense>
  )
}
