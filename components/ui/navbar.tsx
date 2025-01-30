import React from 'react'
import Search from './search'
import { Button } from './button'
import Image from 'next/image'
import logo from '@/public/logo.png'

const Navbar = () => {
  return (
    <div className="w-3/4 mx-auto flex items-center justify-between mt-4 mb-12">
      <div>
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <Search />
      <div className="flex">
        <div className="p-2 cursor-pointer mr-4">로그인</div>
        <Button bgColor="blue" size="small">
          회원가입
        </Button>
      </div>
    </div>
  )
}

export default Navbar
