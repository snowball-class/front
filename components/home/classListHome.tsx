import React from 'react'
import Carousel from '../ui/carousel'
import { CardInfo } from '@/types'

interface ClassListHomeProps {
  title: string
  cardList: CardInfo[]
}

const ClassListHome = (props: ClassListHomeProps) => {
  const { title, cardList } = props
  return (
    <div className="mt-12">
      <div className="text-2xl font-bold mb-4">{title}</div>
      <Carousel cardInfo={cardList} />
    </div>
  )
}

export default ClassListHome
