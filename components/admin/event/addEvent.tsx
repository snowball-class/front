'use client'

import React, { useState } from 'react'
import { ko } from 'date-fns/locale'

import Input from '@/components/ui/input'
import { Calendar } from '@/components/ui/calendar'
import { DateRange } from 'react-day-picker'
import { Button } from '@/components/ui/button'
import { useModalStore } from '@/lib/store'

interface LessonList {
  id: string
  title: string
}

const AddEvent = () => {
  const { onOpen, setTitle } = useModalStore()
  const [eventTitle, setEventTitle] = useState('')
  const [discountRate, setDiscountRate] = useState('')
  const handleEventTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventTitle(e.target.value)
  }
  const handleDiscountRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountRate(e.target.value)
  }
  const [date, setDate] = React.useState<DateRange | undefined>()
  const [lessonID, setLessonID] = useState('')

  const [lessonList, setLessonList] = useState<LessonList[]>([])
  const getLessonName = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_LESSON_API + '/lessons/' + lessonID
      const data = await fetch(url)
      const lesson = await data.json()
      setLessonList([...lessonList, { id: lessonID, title: lesson.data.title }])
    } catch (error) {
      onOpen()
      setTitle('존재하지 않는 클래스입니다.')
    }
  }

  const handleRemoveLesson = (index: number) => {
    setLessonList(lessonList.filter((_, i) => i !== index))
  }

  const formattedStartDate = date?.from?.toISOString().slice(0, 19)
  const formattedEndDate = date?.to?.toISOString().slice(0, 19)
  const formattedLessonIds = lessonList.map((item) => item.id)

  const handleSubmit = async () => {
    const form = {
      issuer: 'admin',
      title: eventTitle,
      discountRate: discountRate,
      startDateTime: formattedStartDate,
      endDateTime: formattedEndDate,
      lessonIds: formattedLessonIds,
    }
    try {
      const url = process.env.NEXT_PUBLIC_ADMIN_API + '/events'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (data.status === 'CREATED') {
        onOpen()
        setTitle('이벤트 추가 성공')
      } else {
        onOpen()
        setTitle('이벤트 추가 실패')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-1/2 mt-6 ">
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/2">이벤트 제목</div>
        <Input
          placeholder="이벤트 제목을 입력해주세요"
          type="text"
          value={eventTitle}
          onChange={handleEventTitleChange}
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/2">할인율</div>
        <Input
          placeholder="할인율을 입력해주세요"
          type="text"
          value={discountRate}
          onChange={handleDiscountRateChange}
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="">이벤트 기간</div>
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          locale={ko}
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/2">이벤트에 해당하는 클래스</div>
        <div className="flex gap-2">
          <Input
            placeholder="클래스 아이디를 입력해 주세요"
            type="text"
            value={lessonID}
            onChange={(e) => setLessonID(e.target.value)}
          />
          <Button bgColor="blue" size="small" onClick={getLessonName}>
            조회
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div>레슨 리스트</div>
      </div>
      {lessonList.map((item, i) => {
        return (
          <div
            key={i}
            className="flex items-center justify-between p-2 mb-2 border rounded-md bg-gray-50"
          >
            <span>{item.title}</span>
            <button
              onClick={() => handleRemoveLesson(i)}
              className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-100"
            >
              ✕
            </button>
          </div>
        )
      })}
      <div className="flex flex-wrap gap-4"></div>
      <div className="w-1/2 mx-auto mb-12">
        <Button bgColor="blue" size="long" onClick={handleSubmit}>
          이벤트 추가
        </Button>
      </div>
    </div>
  )
}

export default AddEvent
