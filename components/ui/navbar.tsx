'use client'

import React, { useEffect, useState } from 'react'
import Search from './search'
import { Button } from './button'
import Image from 'next/image'
import logo from '@/public/logo.jpg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useModalStore } from '@/lib/store'
const Navbar = () => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
  const { onOpen, setTitle, setHandleSubmit, onClose } = useModalStore()
  let tokenValue = null
  if (typeof window !== 'undefined') {
    tokenValue = localStorage.getItem('token')
  }
  useEffect(() => {
    setIsLoggedIn(!!tokenValue)
  }, [tokenValue])

  const handleLogout = () => {
    onOpen()
    setTitle('로그아웃 하시겠습니까?')
    setHandleSubmit(() => {
      localStorage.removeItem('token')
      router.push('/')
      onClose()
    })
  }

  return (
    <div className="w-3/4 mx-auto flex items-center justify-between  mt-4 mb-0 relative lg:mt-2 lg:mb-4">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="mr-4"
          />
        </Link>
        <div className="lg:block hidden">
          <Search />
        </div>
      </div>
      <div className="flex">
        {isLoggedIn === true ? (
          <>
            <div className="p-2 cursor-pointer mr-4" onClick={handleLogout}>
              로그아웃
            </div>
            <div
              className="p-2 cursor-pointer mr-4"
              onClick={() => router.push('/cart')}
            >
              장바구니
            </div>
            <Button bgColor="blue" size="small" href="/mypage">
              마이 페이지
            </Button>
          </>
        ) : isLoggedIn === false ? (
          <>
            <Link href="/login">
              <div className="p-2 cursor-pointer mr-4">로그인</div>
            </Link>
            <Link href="/signup">
              <Button bgColor="blue" size="small">
                회원가입
              </Button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Navbar
