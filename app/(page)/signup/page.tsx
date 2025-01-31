'use client'

import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import Title from '@/components/ui/title'
import Link from 'next/link'
import React, { useState } from 'react'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <div className="w-full pb-20 bg-gray-100">
      <Title title="스노우볼에 오신 것을 환영합니다!" />
      <div className="w-full flex justify-center items-center mt-12">
        <div className="w-1/3 bg-white rounded-md px-12 py-16">
          <div className="text-gray-600 font-semibold  mt-4 mb-2">이름</div>
          <Input
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={handleChange}
            value={formData.name}
            name="name"
          />
          <div className="text-gray-600 font-semibold  mt-4 mb-2">이메일</div>
          <Input
            type="text"
            placeholder="이메일을 입력해주세요"
            onChange={handleChange}
            value={formData.email}
            name="email"
          />

          <div className="text-gray-600 font-semibold  mt-4 mb-2">비밀번호</div>
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChange}
            value={formData.password}
            name="password"
          />
          <div className="text-gray-600 font-semibold  mt-4 mb-2">
            비밀번호 확인
          </div>
          <Input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={handleChange}
            value={formData.passwordCheck}
            name="passwordCheck"
          />
          <div className="my-4" />
          <Button bgColor="blue" size="long">
            회원가입
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Signup
