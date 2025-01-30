import React from 'react'
import Search from './search'
import { Button } from './button'

const Navbar = () => {
  return (
    <div className="w-3/4 mx-auto flex items-center justify-between mt-4 mb-12">
      <div>Logo</div>
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
