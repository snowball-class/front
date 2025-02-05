'use client'

import React, { useState } from 'react'
import { CardListProps } from '@/types'
import Card from './card'
import Pagination from './pagination'

const CardList = (props: CardListProps) => {
  const { cards } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(4)
  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.id} cardInfo={card} />
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
