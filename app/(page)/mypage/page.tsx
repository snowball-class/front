'use client'

import Tab from '@/components/classroom/tab'
import MyReview from '@/components/mypage/myReview'
import Title from '@/components/ui/title'
import { useState } from 'react'
const MyPage = () => {
  const nickname = '홍길동'
  const tabList = [
    { id: 0, tabName: '나의 프로필', tabContent: <div>프로필</div> },
    { id: 1, tabName: '나의 클래스', tabContent: <div>클래스</div> },
    { id: 2, tabName: '나의 후기', tabContent: <MyReview /> },
  ]
  const [currentTab, setCurrentTab] = useState(0)
  const handleTabChange = (tabId: number) => {
    setCurrentTab(tabId)
  }
  return (
    <div className="bg-gray-100 w-full">
      <Title title={nickname + '님 환영합니다'} />
      <Tab
        tabList={tabList}
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
    </div>
  )
}

export default MyPage
