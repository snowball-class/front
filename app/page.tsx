import IconBtn from '@/components/home/iconBtn'
import Popular from '@/components/home/popular'
import Carousel from '@/components/ui/carousel'

export default function Home() {
  const imageList = [
    '/banner-01.png',
    '/banner-02.png',
    '/banner-03.png',
    '/banner-04.png',
    '/banner-05.png',
    '/banner-06.png',
    '/banner-07.png',
  ]
  return (
    <div className="w-3/4 mx-auto relative mb-12  object-cover">
      <div className="aspect-[970/263] ">
        <Carousel withIndicator images={imageList} />
      </div>
      <IconBtn />
      <Popular />
    </div>
  )
}
