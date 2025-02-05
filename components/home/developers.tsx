import React from 'react'
import Image from 'next/image'
import developerImg from '@/public/hyun.png'
import Link from 'next/link'

const Developers = () => {
  const developerInfo = [
    {
      name: '김현',
      image: developerImg,
      description: '백엔드 개발자',
    },
    {
      name: '김현',
      image: developerImg,
      description: '백엔드 개발자',
    },
    {
      name: '김현',
      image: developerImg,
      description: '백엔드 개발자',
    },
    {
      name: '김현',
      image: developerImg,
      description: '백엔드 개발자',
    },
    {
      name: '김현',
      image: developerImg,
      description: '백엔드 개발자',
    },
    {
      name: '김현',
      image: developerImg,
      description: '프론트 개발자',
    },
  ]
  return (
    <div className="mt-12">
      <div className="text-2xl font-bold mb-4">
        눈송이의 개발자를 소개합니다!
      </div>
      <div className="flex justify-around">
        {developerInfo.map((developer, i) => (
          <Link href={`/developers/${developer.name}`} key={i}>
            <div className="flex flex-col items-center">
              <Image
                src={developer.image}
                alt={developer.name}
                width={100}
                height={100}
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
