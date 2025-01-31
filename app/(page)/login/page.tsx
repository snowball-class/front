import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="w-full pb-20 bg-gray-100">
      <Title title="로그인" />
      <div className="w-full flex justify-center items-center mt-12">
        <div className="w-1/3 bg-white rounded-md px-12 py-16">
          <div className="text-gray-600 font-semibold">이메일</div>
          <input
            className="w-full h-10 rounded-md border border-gray-300 outline-none px-2 py-2 my-4"
            type="text"
            placeholder="이메일을 입력해주세요"
          />
          <div className="text-gray-600 font-semibold">비밀번호</div>
          <input
            className="w-full h-10 rounded-md border border-gray-300 outline-none px-2 py-2 my-4"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <Button bgColor="blue" size="long">
            이메일 로그인
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
