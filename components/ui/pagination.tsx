'use client'

import { PaginationProps } from '@/types'
import React, { useEffect, useState } from 'react'

const Pagination = (props: PaginationProps) => {
  const { totalPages, currentPage, onPageChange } = props

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  const renderPageNumbers = () => {
    const pages = []
    // 현재 페이지가 속한 그룹의 시작과 끝 페이지 계산
    const groupSize = 5
    const currentGroup = Math.floor((currentPage - 1) / groupSize)
    const startPage = currentGroup * groupSize + 1
    const endPage = Math.min(startPage + groupSize - 1, totalPages)

    // 첫 페이지로 이동 버튼 (현재 그룹이 첫 그룹이 아닐 때만 표시)
    if (currentGroup > 0) {
      pages.push(
        <button
          key="first"
          onClick={() => onPageChange(1)}
          className="px-3 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          1
        </button>
      )
      pages.push(
        <span key="ellipsis1" className="mx-1">
          ...
        </span>
      )
    }

    // 현재 그룹의 페이지 번호들
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      )
    }

    // 마지막 페이지로 이동 버튼 (현재 그룹이 마지막 그룹이 아닐 때만 표시)
    if (endPage < totalPages) {
      pages.push(
        <span key="ellipsis2" className="mx-1">
          ...
        </span>,
        <button
          key="last"
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-1 mx-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          {totalPages}
        </button>
      )
    }

    return pages
  }

  return (
    <div className="flex items-center justify-center space-x-2 my-4">
      {isClient && renderPageNumbers()}
    </div>
  )
}

export default Pagination
