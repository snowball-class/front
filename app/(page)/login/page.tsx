'use client'

import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { validateEmail } from '@/lib/utils'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useModalStore } from '@/lib/store'

const Login = () => {
  const router = useRouter()
  const { onOpen, isOpen, title, setHandleSubmit, setTitle, onClose } =
    useModalStore()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setHandleSubmit(() => {
      onClose()
    })
    if (formData.password === null) {
      onOpen()
      setTitle('패스워드를 입력해주세요')
      return
    } else if (formData.email === null) {
      onOpen()
      setTitle('유저 이름을 입력해주세요.')
      return
    } else {
      try {
        const formBody = new URLSearchParams({
          username: formData.email,
          password: formData.password,
        }).toString()

        const response = await fetch(
          process.env.NEXT_PUBLIC_MEMBER_API + '/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
          }
        )
        if (response.status === 200) {
          const authHeader = response.headers.get('Authorization')
          const token = authHeader?.replace('Bearer ', '') ?? ''
          localStorage.setItem('token', token ?? '')
          onOpen()
          setTitle('로그인에 성공했습니다.')
          setHandleSubmit(() => {
            onClose()
            router.replace('/')
          })
          return
        } else {
          setTitle('아이디 또는 비밀번호가 일치하지 않습니다.')
          onOpen()
          return
        }
      } catch (error) {
        console.error(error)
        setTitle('아이디 또는 비밀번호가 일치하지 않습니다.')
        onOpen()
        return
      }
    }
  }

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin(e)
    }
  }

  return (
    <div className="w-full pb-20 bg-gray-100">
      <Title title="로그인" />
      <div className="w-full flex justify-center items-center mt-12">
        <div className="lg:w-1/3 w-[90%] bg-white rounded-md px-12 py-16">
          <div className="text-gray-600 font-semibold">유저 이름</div>
          <input
            className="w-full h-10 rounded-md border border-gray-300 outline-none px-2 py-2 my-4"
            type="text"
            placeholder="이메일을 입력해주세요"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={pressEnter}
          />
          <div className="text-gray-600 font-semibold">비밀번호</div>
          <input
            className="w-full h-10 rounded-md border border-gray-300 outline-none px-2 py-2 my-4"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onKeyDown={pressEnter}
          />
          <Button bgColor="blue" size="long" onClick={handleLogin}>
            로그인
          </Button>
          <Link
            href="/signup"
            className="w-3/4 mx-auto flex justify-center items-center mt-4 text-gray-500 cursor-pointer"
          >
            계정이 없으신가요?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
