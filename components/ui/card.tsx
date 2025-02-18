import React from 'react'
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
      <div className="block">
        {cardInfo.thumbnail ? (
          <Image
            src={cardInfo.thumbnail}
            alt={cardInfo.title}
            width={300}
            height={10}
          />
        ) : (
          <div className="w-full h-48 bg-gray-200"></div>
        )}

        <div className="my-1">{cardInfo.title}</div>
        <div className="text-sm">{formatPrice(cardInfo.netPrice) + '원'}</div>
      </div>
    </Link>
  )
}

export default Card
