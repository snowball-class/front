import Stars from '@/components/ui/stars'
import { ReviewList } from '@/types'
import { formatDate } from '@/lib/utils'
const Reply = ({ reply }: { reply: ReviewList }) => {
  const { writer, starScore, content, createdAt } = reply
  //jgw
  const isOwner = false
  return (
    <div className="flex py-4 border-b-gray-200 border-b w-3/5 justify-between">
      <div className="">
        <div className="flex items-center">
          <div className="mr-2">{writer} 님</div>
          <Stars starCount={starScore} />
          {isOwner && (
            <div className="flex items-center ml-4">
              <button className="text-sm text-gray-500">수정</button>
              <span className="mx-1">|</span>
              <button className="text-sm text-gray-500">삭제</button>
            </div>
          )}
        </div>
        <div className="my-2">{content}</div>
      </div>
      <div className="">{formatDate(createdAt)}</div>
    </div>
  )
}

export default Reply
