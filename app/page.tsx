import Carousel from '@/components/ui/carousel'

export default function Home() {
  const imageList = [
    'https://ultra-pet.co.za/wp-content/uploads/2020/08/socialising.jpg',
    'https://ultra-pet.co.za/wp-content/uploads/2020/04/banner-DOG2-450x450.jpg',
    'https://ultra-pet.co.za/wp-content/uploads/2020/04/banner-GENERAL-450x450.jpg',
  ]
  return (
    <div className="w-3/4 h-[300px] mx-auto relative mb-12">
      <Carousel withIndicator images={imageList} />
    </div>
  )
}
