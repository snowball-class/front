'use client'
import { useRouter } from 'next/navigation'

const Video = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const router = useRouter()
  const clickBackground = () => {
    router.back()
  }
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-50 bg-black/50"
      onClick={clickBackground}
    >
      <iframe
        src={`https://www.youtube.com/embed/19g66ezsKAg`}
        allowFullScreen
        className="w-full h-full absolute top-0 left-0 z-50 p-6"
      />
    </div>
  )
}

export default Video
