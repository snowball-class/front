'use client'

import React, { useEffect, useState } from 'react'
import { ko } from 'date-fns/locale'

import Input from '../ui/input'
import { Calendar } from '../ui/calendar'
import { DateRange } from 'react-day-picker'
import { Button } from '../ui/button'
import EventList from './event/eventList'

const AddEvent = () => {
  const [lessonIds, setLessonIds] = useState('')

  const handleLessonIdsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLessonIds(e.target.value)
  }
  const [date, setDate] = React.useState<DateRange | undefined>()

  const [form, setForm] = useState({
    issuer: 'Jerry',
    title: '',
    discountRate: 0,
    startDateTime: '',
    endDateTime: '',
    lessonIds: [],
  })

  useEffect(() => {
    if (date?.from && date?.to) {
      setForm((prev) => ({
        ...prev,
        startDateTime: date?.from?.toISOString() ?? '',
        endDateTime: date?.to?.toISOString() ?? '',
      }))
    }
  }, [date])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const splitLessonIds = (value: string) => {
    return value.split(',').map(Number)
  }

  const handleAddEvent = async () => {
    console.log(form)
    // const url = process.env.NEXT_PUBLIC_ADMIN_API + '/event'

    // const response = await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(form),
    // })
    // if (response.ok) {
    //   alert('이벤트가 성공적으로 추가되었습니다.')
    // }
  }

  return (
    <div className="w-1/2 mt-6 ">
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/2">이벤트 제목</div>
        <Input
          placeholder="이벤트 제목을 입력해주세요"
          type="text"
          name="title"
          value={form.title}
          onChange={handleFormChange}
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/2">할인율 (%)</div>
        <Input
          placeholder="할인율을 입력해주세요"
          type="number"
          name="discountRate"
          value={form.discountRate.toString()}
          onChange={handleFormChange}
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
        <div className="w-1/2">레슨 아이디를 ,로 나누어 입력해주세요</div>
        <Input
          placeholder="레슨 아이디를 ,로 나누어 입력해주세요"
          type="text"
          value={lessonIds}
          onChange={handleLessonIdsChange}
        />
      </div>
      <div className="flex flex-wrap gap-4"></div>
      <div className="w-1/2 mx-auto mb-12">
        <Button bgColor="blue" size="long" onClick={handleAddEvent}>
          이벤트 추가
        </Button>
      </div>
      {/* <EventList search={lessonIds} /> */}
    </div>
  )
}

export default AddEvent
