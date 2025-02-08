import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  const { email, password } = await req.json()
  if (email === 'qwer@qwer.com' && password === '1234') {
    const token = jwt.sign(
      { email, role: 'user' },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1h',
      }
    )
    const response = NextResponse.json(
      { message: '로그인 성공' },
      { status: 200 }
    )
    response.cookies.set('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60,
    })
    return response
  } else if (email === 'qwer@admin.com' && password === '1234') {
    const token = jwt.sign(
      { email, role: 'admin' },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1h',
      }
    )
    const response = NextResponse.json(
      { message: '관리자 로그인 성공' },
      { status: 200 }
    )
    response.cookies.set('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60,
    })
    return response
  } else {
    return NextResponse.json({ message: '로그인 실패' }, { status: 401 })
  }
}
