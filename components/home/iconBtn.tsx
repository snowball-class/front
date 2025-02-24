import React from 'react'
import Image from 'next/image'
import iconC1 from '@/public/icon_1.png'
import iconC2 from '@/public/icon_2.png'
import iconC3 from '@/public/icon_3.png'
import iconC4 from '@/public/icon_4.png'
import iconC5 from '@/public/icon_5.png'
import iconC6 from '@/public/icon_6.png'
import iconC7 from '@/public/icon_7.png'
import iconC8 from '@/public/icon_8.png'
import Link from 'next/link'

const IconBtn = () => {
  const icons = [
    {
      id: 1,
      icon: iconC1,
      title: '개발',
    },
    {
      id: 2,
      icon: iconC2,
      title: '음악',
    },
    {
      id: 3,
      icon: iconC3,
      title: '운동',
    },
    {
      id: 4,
      icon: iconC4,
      title: '요리',
    },
    {
      id: 5,
      icon: iconC5,
      title: '외국어',
    },
    {
      id: 6,
      icon: iconC6,
      title: '사진/영상',
    },
    {
      id: 7,
      icon: iconC7,
      title: '미술',
    },
    {
      id: 8,
      icon: iconC8,
      title: '기타',
    },
  ]

  return (
    <div className="w-full flex flex-wrap justify-around items-center mt-12 ">
      {icons.map((icon) => (
        <Link
          href={`/subject/${icon.id}`}
          key={icon.id}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <Image
            src={icon.icon}
            alt={icon.title}
            width={40}
            height={40}
            className="mb-3"
          />
          {icon.title}
        </Link>
      ))}
    </div>
  )
}

export default IconBtn
