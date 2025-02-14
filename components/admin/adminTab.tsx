'use client'

import { useState } from 'react'
import Tab from '../classroom/tab'
import AddEvent from './addEvent'
import { TabSingle } from '@/types'
import SubTab from './subTab'

const AdminTab = () => {
  const [currentTab, setCurrentTab] = useState(0)
  const [currentSubTab, setCurrentSubTab] = useState(0)
  const handleTabChange = (tabId: number) => {
    setCurrentTab(tabId)
    setCurrentSubTab(0)
  }
  const handleSubTabChange = (tabId: number) => {
    setCurrentSubTab(tabId)
  }

  const userTabList = [
    { id: 0, tabName: '회원 정보', tabContent: <AddEvent /> },
    { id: 1, tabName: '회원 수정', tabContent: <AddEvent /> },
    { id: 2, tabName: '회원 삭제', tabContent: <AddEvent /> },
  ]
  const eventTabList = [
    { id: 0, tabName: '이벤트 추가', tabContent: <AddEvent /> },
    { id: 1, tabName: '이벤트 수정', tabContent: <AddEvent /> },
    { id: 2, tabName: '이벤트 삭제', tabContent: <AddEvent /> },
  ]
  const classTabList = [
    { id: 0, tabName: '클래스 추가', tabContent: <AddEvent /> },
    { id: 1, tabName: '클래스 수정', tabContent: <AddEvent /> },
    { id: 2, tabName: '클래스 삭제', tabContent: <AddEvent /> },
  ]
  const mainTabList: TabSingle[] = [
    {
      id: 0,
      tabName: '회원관리',
      tabContent: (
        <SubTab
          tabList={userTabList}
          currentTab={currentSubTab}
          handleTabChange={handleSubTabChange}
        />
      ),
    },
    {
      id: 1,
      tabName: '이벤트관리',
      tabContent: (
        <SubTab
          tabList={eventTabList}
          currentTab={currentSubTab}
          handleTabChange={handleSubTabChange}
        />
      ),
    },
    {
      id: 2,
      tabName: '클래스관리',
      tabContent: (
        <SubTab
          tabList={classTabList}
          currentTab={currentSubTab}
          handleTabChange={handleSubTabChange}
        />
      ),
    },
  ]

  return (
    <Tab
      tabList={mainTabList}
      currentTab={currentTab}
      handleTabChange={handleTabChange}
    />
  )
}

export default AdminTab
