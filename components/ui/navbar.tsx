import React from 'react'
import Search from './search'
import { Button } from './button'
import Image from 'next/image'
import logo from '@/public/logo.png'

const Navbar = () => {
  const isLoggedIn = false
  return (
    <div className="w-3/4 mx-auto flex items-center justify-between mt-4 mb-12 relative">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="mr-4"
        />
        <Search />
      </div>
      <div className="flex">
        {isLoggedIn ? (
          <>
            <div className="p-2 cursor-pointer mr-4">로그인</div>
            <Button bgColor="blue" size="small">
              회원가입
            </Button>
          </>
        ) : (
          <>
            <div className="p-2 cursor-pointer mr-4">로그아웃</div>
            <div className="p-2 cursor-pointer mr-4">장바구니</div>
            <Button bgColor="blue" size="small">
              마이 페이지
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
