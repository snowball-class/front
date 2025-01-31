import React from 'react'
import Image from 'next/image'
import { CardInfo } from '@/types'

interface CardProps {
  cardInfo: CardInfo
}

const Card = ({ cardInfo }: CardProps) => {
  return (
    <div className="w-full h-full">
      <Image
        src={cardInfo.image}
        alt={cardInfo.title}
        width={300}
        height={300}
        className="relative"
      />
      <div className="mt-1 mb-1">{cardInfo.description}</div>
      <div className="text-sm">{cardInfo.price}</div>
    </div>
  )
}

export default Card
