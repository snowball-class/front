'use client'

import React, { useState } from 'react'
import Input from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const CreateLesson = () => {
  const [form, setForm] = useState({
    title: '',
    tutor: '',
    categoryId: '',
    price: '',
    content1: '',
    content2: '',
    thumbnailUrl: '',
    videoUrl: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'categoryId' ? Number(value) : value,
    }))
  }

  const handleSubmit = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_LESSON_API + '/lessons'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      if (response.ok) {
        alert('강의가 성공적으로 생성되었습니다.')
      }
    } catch (error) {
      console.error('강의 생성 중 오류 발생:', error)
    }
  }

  return (
    <div className="w-1/2 mt-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="w-1/2">강의 제목</div>
          <Input
            type="text"
            name="title"
            placeholder="강의 제목을 입력해주세요"
            value={form.title}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2">강사명</div>
          <Input
            type="text"
            name="tutor"
            placeholder="강사명을 입력해주세요"
            value={form.tutor}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2">카테고리 ID</div>
          <Input
            type="number"
            name="categoryId"
            placeholder="카테고리 ID를 입력해주세요"
            value={form.categoryId}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2">가격</div>
          <Input
            name="price"
            type="number"
            placeholder="가격을 입력해주세요"
            value={form.price}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2">내용 1</div>
          <Input
            type="text"
            name="content1"
            placeholder="첫 번째 내용을 입력해주세요"
            value={form.content1}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2">내용 2</div>
          <Input
            type="text"
            name="content2"
            placeholder="두 번째 내용을 입력해주세요"
            value={form.content2}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2">썸네일 URL</div>
          <Input
            type="text"
            name="thumbnailUrl"
            placeholder="썸네일 URL을 입력해주세요"
            value={form.thumbnailUrl}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2">비디오 URL</div>
          <Input
            type="text"
            name="videoUrl"
            placeholder="비디오 URL을 입력해주세요"
            value={form.videoUrl}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-1/2 mx-auto mt-12">
        <Button bgColor="blue" size="long" onClick={handleSubmit}>
          강의 생성
        </Button>
      </div>
    </div>
  )
}

export default CreateLesson
