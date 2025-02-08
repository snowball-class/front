'use client'

import { useState } from 'react'
import Tab from '../classroom/tab'
import AddEvent from './addEvent'

const AdminTab = () => {
  const tabList = [
    { id: 0, tabName: '이벤트 추가', tabContent: <AddEvent /> },
    { id: 1, tabName: '이벤트 수정', tabContent: <AddEvent /> },
    { id: 2, tabName: '이벤트 삭제', tabContent: <AddEvent /> },
  ]
  const [currentTab, setCurrentTab] = useState(0)
  const handleTabChange = (tabId: number) => {
    setCurrentTab(tabId)
  }
  return (
    <Tab
      tabList={tabList}
      currentTab={currentTab}
      handleTabChange={handleTabChange}
    />
  )
}

export default AdminTab
