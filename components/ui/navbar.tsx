'use client'

import React from 'react'
import Search from './search'
import { Button } from './button'
import Image from 'next/image'
import logo from '@/public/logo.jpg'
import Link from 'next/link'

const Navbar = () => {
  const isLoggedIn = false
  const handleLogout = async () => {
    const response = await fetch('/api/signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 200) {
      alert('로그아웃 성공')
    } else {
      alert('로그아웃 실패')
    }
  }
  return (
    <div className="w-3/4 mx-auto flex items-center justify-between mt-4 mb-12 relative">
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
        {isLoggedIn ? (
          <>
            <div className="p-2 cursor-pointer mr-4">로그아웃</div>
            <div className="p-2 cursor-pointer mr-4">장바구니</div>
            <Button bgColor="blue" size="small" href="/mypage">
              마이 페이지
            </Button>
          </>
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default Navbar
