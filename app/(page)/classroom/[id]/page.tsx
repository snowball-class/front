'use client'

import React, { useState, useEffect } from 'react'
import ClassroomTopContent from '@/components/classroom/topContent'
import Tab from '@/components/classroom/tab'
import ReplyList from '@/components/classroom/replyList'
import Description from '@/components/classroom/description'
import { LessonDetail, ReviewList } from '@/types'

const Classroom = ({ params }: { params: { id: string } }) => {
  const { id } = params
  const url = process.env.NEXT_PUBLIC_VIEW_API + `/view/lessons/${id}`
  const [lessonData, setLessonData] = useState<LessonDetail>()
  const [reviewList, setReviewList] = useState<ReviewList[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
        setLessonData(data.data.lesson)
        setReviewList(data.data.reviewList)
      } catch (error) {
        console.error('Fetch error details:', error)
      }
    }

    fetchData()
  }, [url])
  const [currentTab, setCurrentTab] = useState(0)
  const handleTabChange = (index: number) => {
    setCurrentTab(index)
  }

  const tabList = [
    {
      id: 0,
      tabName: '클래스 설명',
      tabContent: (
        <Description
          {...(lessonData || {
            lessonId: 0,
            categoryId: 0,
            categoryName: '',
            title: '',
            content1: '',
            content2: '',
            thumbnailUrl: '',
            videoUrl: '',
            tutor: '',
            price: 0,
            createdAt: '',
          })}
        />
      ),
    },
    {
      id: 1,
      tabName: '클래스 후기',
      tabContent: <ReplyList reviewList={reviewList} />,
    },
  ]
  return (
    <>
      <ClassroomTopContent
        {...(lessonData || {
          lessonId: 0,
          categoryId: 0,
          categoryName: '',
          title: '',
          content1: '',
          content2: '',
          tutor: '',
          price: 0,
          thumbnailUrl: '',
          videoUrl: '',
          createdAt: '',
        })}
      />
      <Tab
        tabList={tabList}
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
    </>
  )
}

export default Classroom
