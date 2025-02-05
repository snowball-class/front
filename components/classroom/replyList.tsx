'use client'

import { ReplyListProps, ReplyProps } from '@/types'
import Reply from './reply'

const ReplyList = (props: ReplyListProps) => {
  const { replyList } = props
  return (
    <div>
      {replyList.map((reply: ReplyProps) => {
        return <Reply key={reply.id} reply={reply} />
      })}
    </div>
  )
}

export default ReplyList
