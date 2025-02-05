import Image from 'next/image'
import star from '@/public/ico-star.png'
import starEmpty from '@/public/ico-starout.png'

interface StarsProps {
  starCount: number
}
const Stars = ({ starCount }: StarsProps) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: starCount }).map((_, index) => (
        <Image key={index} src={star} alt="star" width={16} height={16} />
      ))}
      {Array.from({ length: 5 - starCount }).map((_, index) => (
        <Image
          key={index}
          src={starEmpty}
          alt="starEmpty"
          width={16}
          height={16}
        />
      ))}
      <div className="text-gray-500 ml-2">&#40;{starCount}&#41;</div>
    </div>
  )
}

export default Stars
