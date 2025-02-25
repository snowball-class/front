'use client'

import React, { useEffect, useState } from 'react'
import { CardListProps } from '@/types'
import Card from './card'
import Pagination from './pagination'
import { pagingFunction } from '@/lib/utils'
import { useMediaQuery } from 'react-responsive'
import CarouselSkeleton from './carousel-skeleton'

const CardList = (props: CardListProps) => {
  const { cards } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const isDesktop = useMediaQuery({ minWidth: 768 })
  const displayedDataLength = isDesktop ? 8 : 2

  const { totalPages, displayedData } = pagingFunction(
    displayedDataLength,
    currentPage,
    cards
  )

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="mb-12">
      {isLoading ? (
        <CarouselSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedData?.map((card) => (
            <Card key={card.lessonId} cardInfo={card} />
          ))}
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default CardList
