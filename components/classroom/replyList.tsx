'use client'

import Reply from './reply'
import { ReviewList } from '@/types'

interface ReplyListProps {
  reviewList: ReviewList[]
}

const ReplyList = ({ reviewList }: ReplyListProps) => {
  return (
    <div>
      {reviewList.map((reply: ReviewList) => {
        return <Reply key={reply.writer} reply={reply} />
      })}
    </div>
  )
}

export default ReplyList
