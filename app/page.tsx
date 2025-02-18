import ClassListHome from '@/components/home/classListHome'
import Developers from '@/components/home/developers'
import IconBtn from '@/components/home/iconBtn'
import Popular from '@/components/home/popular'
import Carousel from '@/components/ui/carousel'

export default function Home() {
  const bannerInfo = [
    {
      id: '0',
      image: '/banner-01.png',
      href: '/subject/0',
    },
    {
      id: '1',
      image: '/banner-02.png',
      href: '/subject/1',
    },
    {
      id: '2',
      image: '/banner-03.png',
      href: '/subject/2',
    },
    {
      id: '3',
      image: '/banner-04.png',
      href: '/subject/3',
    },
    {
      id: '4',
      image: '/banner-05.png',
      href: '/subject/4',
    },
    {
      id: '5',
      image: '/banner-06.png',
      href: '/subject/5',
    },
    {
      id: '6',
      image: '/banner-07.png',
      href: '/subject/6',
    },
    {
      id: '7',
      image: '/banner-08.png',
      href: '/subject/7',
    },
  ]
  const cardInfo = [
    {
      id: '1',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어1.jpg',
    },
    {
      id: '2',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어2.jpg',
    },
    {
      id: '3',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어3.jpg',
    },
    {
      id: '4',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어4.jpg',
    },
    {
      id: '5',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어5.jpg',
    },
    {
      id: '6',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어6.jpg',
    },
    {
      id: '7',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어7.jpg',
    },
    {
      id: '8',
      title: '영어',
      description: '영어 클래스',
      price: '100,000원',
      image: '/categori07/영어8.jpg',
    },
  ]

  return (
    <div className="w-3/4 mx-auto relative mb-12  object-cover">
      <div className="aspect-[1140/300]">
        <Carousel withIndicator bannerInfo={bannerInfo} />
      </div>
      <IconBtn />
      <Popular />
      <ClassListHome
        title="영어인척 하지만 실은 개발입니다"
        cardList={cardInfo}
      />
      <Developers />
    </div>
  )
}
