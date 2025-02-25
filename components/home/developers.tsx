import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 찬의 from '@/public/찬의.png'
import 안병현 from '@/public/안병현.png'
import 김남주 from '@/public/김남주.png'
import 다솔 from '@/public/다솔.png'
import 정길웅 from '@/public/정길웅.png'

const Developers = () => {
  const developerInfo = [
    {
      name: '전찬의',
      image: 찬의,
      description: '백엔드/관리자',
      github: 'https://github.com/jerry0339',
    },
    {
      name: '안병현',
      image: 안병현,
      description: '백엔드/결제',
      github: 'https://github.com/bhyunnie',
    },
    {
      name: '김남주',
      image: 김남주,
      description: '백엔드/회원',
      github: 'https://github.com/anjoo-k',
    },
    {
      name: '이다솔',
      image: 다솔,
      description: '백엔드/강의',
      github: 'https://github.com/Leedasol2',
    },
    {
      name: '정길웅',
      image: 정길웅,
      description: '프론트',
      github: 'https://github.com/doggysummer',
    },
  ]
  return (
    <div className="mt-12">
      <div className="text-2xl font-bold mb-4">
        눈송이의 개발자를 소개합니다!
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-4">
        {developerInfo.map((developer, i) => (
          <Link href={developer.github} key={i}>
            <div className="flex flex-col items-center">
              <Image
                src={developer.image}
                alt={developer.name}
                width={100}
                height={100}
                className="rounded-full w-24 h-24 object-cover"
              />
              <div className="mt-2">{developer.name}</div>
              <div className="text-gray-500">{developer.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Developers
