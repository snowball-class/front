import React from 'react'
import Image from 'next/image'
import { CardInfo } from '@/types'
import Link from 'next/link'

interface CardProps {
  cardInfo: CardInfo
}

const Card = ({ cardInfo }: CardProps) => {
  return (
    <>
      {cardInfo.href ? (
        <Link href={cardInfo.href}>
          <div className="block">
            <Image
              src={cardInfo.image}
              alt={cardInfo.title}
              width={300}
              height={10}
            />
            <div className="my-1">{cardInfo.description}</div>
            <div className="text-sm">{cardInfo.price}</div>
          </div>
        </Link>
      ) : (
        <div className="block">
          <Image
            src={cardInfo.image}
            alt={cardInfo.title}
            width={300}
            height={10}
          />
          <div className="my-1">{cardInfo.description}</div>
          <div className="text-sm">{cardInfo.price}</div>
        </div>
      )}
    </>
  )
}

export default Card
