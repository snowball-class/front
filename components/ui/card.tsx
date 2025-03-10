'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { CardInfo } from '@/types'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

interface CardProps {
  cardInfo: CardInfo
}

const Card = ({ cardInfo }: CardProps) => {
  return (
    <Link href={`/classroom/${cardInfo.lessonId}`}>
      {cardInfo.thumbnailUrl ? (
        <Image
          src={cardInfo.thumbnailUrl}
          alt={cardInfo.title}
          width={300}
          height={300}
          className="w-full aspect-square"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200"></div>
      )}
      <div className="my-1">{cardInfo.title}</div>
      <div className="text-sm">{formatPrice(cardInfo?.price ?? 0)}원</div>
    </Link>
  )
}

export default Card
