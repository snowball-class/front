'use client'

import { useState } from 'react'
import Tab from '../classroom/tab'
import AddEvent from './addEvent'
import { TabSingle } from '@/types'
import SubTab from './subTab'
import UserAdmin from './user/userAdmin'
import CreateLesson from './lesson/createLesson'
import ModifyLesson from './lesson/modifyLesson'

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
    { id: 0, tabName: '회원 정보', tabContent: <UserAdmin /> },
    { id: 1, tabName: '회원 수정', tabContent: <UserAdmin /> },
    { id: 2, tabName: '회원 삭제', tabContent: <UserAdmin /> },
  ]
  const eventTabList = [
    { id: 0, tabName: '이벤트 추가', tabContent: <AddEvent /> },
    { id: 1, tabName: '이벤트 수정', tabContent: <AddEvent /> },
    { id: 2, tabName: '이벤트 삭제', tabContent: <AddEvent /> },
  ]
  const classTabList = [
    { id: 0, tabName: '레슨 추가', tabContent: <CreateLesson /> },
    { id: 1, tabName: '레슨 수정', tabContent: <ModifyLesson /> },
    { id: 2, tabName: '레슨 삭제', tabContent: <AddEvent /> },
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
      tabName: '레슨관리',
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
