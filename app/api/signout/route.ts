import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const response = NextResponse.json(
    { message: '로그아웃 성공' },
    { status: 200 }
  )
  response.cookies.delete('token')
  return response
}
