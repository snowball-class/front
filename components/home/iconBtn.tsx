import React from 'react'
import Image from 'next/image'
import iconC1 from '@/public/ico-c-1.png'
import iconC2 from '@/public/ico-c-2.png'
import iconC3 from '@/public/ico-c-3.png'
import iconC4 from '@/public/ico-c-4.png'
import iconC5 from '@/public/ico-c-5.png'
import iconC6 from '@/public/ico-c-6.png'
import iconC7 from '@/public/ico-c-7.png'
import iconC8 from '@/public/ico-c-8.png'
import Link from 'next/link'

const IconBtn = () => {
  const icons = [
    {
      id: 1,
      icon: iconC1,
      title: '운동',
    },
    {
      id: 2,
      icon: iconC2,
      title: '요리',
    },
    {
      id: 3,
      icon: iconC3,
      title: '미술',
    },
    {
      id: 4,
      icon: iconC4,
      title: '사진/영상',
    },
    {
      id: 5,
      icon: iconC5,
      title: '개발',
    },
    {
      id: 6,
      icon: iconC6,
      title: '음악',
    },
    {
      id: 7,
      icon: iconC7,
      title: '외국어',
    },
    {
      id: 8,
      icon: iconC8,
      title: '기타',
    },
  ]

  return (
    <div className="w-full flex flex-wrap justify-around items-center mt-12">
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
