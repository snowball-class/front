'use client'

import { Button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import Title from '@/components/ui/title'
import React, { useState } from 'react'

function validateEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

const Signup = async () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(formData.email)) {
      alert('유효한 이메일 주소를 입력해주세요.')
      return
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('회원가입이 성공적으로 완료되었습니다!')
      } else {
        alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch (error) {
      console.error('회원가입 중 오류가 발생했습니다:', error)
      alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <div className="w-full pb-20 bg-gray-100">
      <Title title="스노우볼에 오신 것을 환영합니다!" />
      <div className="w-full flex justify-center items-center mt-12">
        <div className="w-1/3 bg-white rounded-md px-12 py-16">
          <form method="POST" action="/api/auth/signup" onSubmit={handleSubmit}>
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

            <div className="text-gray-600 font-semibold  mt-4 mb-2">
              비밀번호
            </div>
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
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
