'use client'

import React, { useState } from 'react'
import ClassroomTopContent from '@/components/classroom/topContent'
import Tab from '@/components/classroom/tab'
import ReplyList from '@/components/classroom/replyList'
import Description from '@/components/classroom/description'

const Classroom = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const replyList = [
    {
      id: '1',
      nickname: '홍길동',
      starCount: 5,
      content: '좋은 강의입니다.',
      createdAt: '2024-01-01',
      isOwner: false,
    },
    {
      id: '2',
      nickname: '김철수',
      starCount: 4,
      content: '무난하네요.',
      createdAt: '2024-01-02',
      isOwner: true,
    },
    {
      id: '3',
      nickname: '이영희',
      starCount: 3,
      content: '조금 어렵네요.',
      createdAt: '2024-01-03',
      isOwner: false,
    },
    {
      id: '4',
      nickname: '박지영',
      starCount: 2,
      content: '조금 어렵네요.',
      createdAt: '2024-01-04',
      isOwner: false,
    },
  ]
  const [currentTab, setCurrentTab] = useState(0)
  const handleTabChange = (index: number) => {
    setCurrentTab(index)
  }

  const classData = {
    id: id,
    category: '영어',
    title: 'RP11 이거 하나로 끝!',
    price: 50000,
    starCount: 3,
  }
  const tabList = [
    { id: 0, tabName: '클래스 설명', tabContent: <Description /> },
    {
      id: 1,
      tabName: '클래스 후기',
      tabContent: <ReplyList replyList={replyList} />,
    },
  ]
  return (
    <>
      <ClassroomTopContent {...classData} />
      <Tab
        tabList={tabList}
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
    </>
  )
}

export default Classroom
