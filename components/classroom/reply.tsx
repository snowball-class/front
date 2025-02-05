import Stars from '@/components/ui/stars'
import { ReplyProps } from '@/types'

const Reply = ({ reply }: { reply: ReplyProps }) => {
  const { id, nickname, starCount, content, createdAt, isOwner } = reply
  return (
    <div className="flex py-4 border-b-gray-200 border-b w-3/5 justify-between">
      <div className="">
        <div className="flex items-center">
          <div className="mr-2">{nickname} 님</div>
          <Stars starCount={starCount} />
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
      <div className="">{createdAt}</div>
    </div>
  )
}

export default Reply
