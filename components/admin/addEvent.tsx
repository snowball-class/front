'use client'

import React, { useState } from 'react'
import Input from '../ui/input'
import { Calendar } from '../ui/calendar'
import { DateRange } from 'react-day-picker'
import { Button } from '../ui/button'

const AddEvent = () => {
  const [title, setTitle] = useState('')
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const [date, setDate] = React.useState<DateRange | undefined>()

  const [form, setForm] = useState({
    title: '',
    dateFrom: date?.from,
    dateTo: date?.to,
  })
  const [classes, setClasses] = useState([
    '거리두기 해제! 보복회식엔 황태미역국',
    '봉고데기 입문',
    '밥 한공기 뚝딱! 사먹는 김치찌게 대신 만드는 햄 김치찌게',
  ])

  return (
    <div className="w-1/2 mt-6 ">
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/2">이벤트 제목</div>
        <Input
          placeholder="이벤트 제목을 입력해주세요"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="">이벤트 기간</div>
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/2">이벤트에 해당하는 클래스</div>
        <Input
          placeholder="클래스 제목을 입력해주세요"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-wrap gap-4"></div>
      <div className="w-1/2 mx-auto mb-12">
        <Button bgColor="blue" size="long">
          이벤트 추가
        </Button>
      </div>
    </div>
  )
}

export default AddEvent
