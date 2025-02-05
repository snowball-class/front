import Link from 'next/link'
import Stars from '../ui/stars'

const MyReview = () => {
  const reviewData = [
    {
      classname: '재미있는 영어교실',
      classId: 1,
      starCount: 5,
      content: '재미있게 즐겼어요',
      createdAt: '2024-01-01',
    },
    {
      classname: '쉽게 배우는 알짜 코딩',
      classId: 2,
      starCount: 4,
      content: '무난하네요',
      createdAt: '2024-01-01',
    },
    {
      classname: '개나 소나 연봉 1억 버는 법',
      classId: 3,
      starCount: 1,
      content: '흠...그정둔가....',
      createdAt: '2024-01-01',
    },
  ]
  return (
    <div>
      {reviewData.map((review, index) => (
        <Link
          href={'/classroom/' + review.classId.toString()}
          key={index}
          className="flex py-4 border-b-gray-200 border-b w-3/5 justify-between"
        >
          <div className="">
            <div className="flex items-center">
              <div className="mr-2">{review.classname}</div>
              <Stars starCount={review.starCount} />
            </div>
            <div className="my-2">{review.content}</div>
          </div>
          <div className="">{review.createdAt}</div>
        </Link>
      ))}
    </div>
  )
}

export default MyReview
