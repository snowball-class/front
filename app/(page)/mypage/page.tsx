'use client'

import { useEffect, useState } from 'react'
import Tab from '@/components/classroom/tab'
import Title from '@/components/ui/title'
import { Profile } from '@/types'

import MyReview from '@/components/mypage/myReview'
import MyClass from '@/components/mypage/myClass'
import MyProfile from '@/components/mypage/myProfile'
const MyPage = () => {
  const [nickname, setNickname] = useState('')
  const [profile, setProfile] = useState<Profile | null>(null)
  const tabList = [
    {
      id: 0,
      tabName: '나의 프로필',
      tabContent: profile ? <MyProfile profile={profile} /> : null,
    },
    { id: 1, tabName: '나의 클래스', tabContent: <MyClass /> },
    { id: 2, tabName: '나의 후기', tabContent: <MyReview /> },
  ]
  const [currentTab, setCurrentTab] = useState(0)
  const handleTabChange = (tabId: number) => {
    setCurrentTab(tabId)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    try {
      const fetchData = async () => {
        const response = await fetch(
          process.env.NEXT_PUBLIC_MEMBER_API + '/member',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        const data = await response.json()
        if (data.status === 200) {
          setNickname(data.data.nickname)
          setProfile(data.data)
          console.log(data.data)
        }
      }
      fetchData()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [])
  return (
    <div className="bg-gray-100 w-full h-full min-h-[600px]">
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
