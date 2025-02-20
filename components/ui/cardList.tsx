'use client'

import React, { useState } from 'react'
import { CardListProps } from '@/types'
import Card from './card'
import Pagination from './pagination'
import { pagingFunction } from '@/lib/utils'
const CardList = (props: CardListProps) => {
  const { cards } = props
  const [currentPage, setCurrentPage] = useState(1)
  const { totalPages, displayedData } = pagingFunction(currentPage, cards)

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedData.map((card) => (
          <Card key={card.lessonId} cardInfo={card} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default CardList
