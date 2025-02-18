import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (process.env.JWT_SECRET === undefined) {
    return NextResponse.json({ message: 'JWT_SECRET 확인' }, { status: 500 })
  } else if (process.env.REFRESH_TOKEN_SECRET === undefined) {
    return NextResponse.json(
      { message: 'REFRESH_TOKEN_SECRET 확인' },
      { status: 500 }
    )
  }

  if (email === 'qwer@qwer.com' && password === '1234') {
    const accessToken = jwt.sign(
      { email, nick: '홍길동', role: 'user', type: 'access' },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1h',
      }
    )

    const refreshToken = jwt.sign(
      { email, type: 'refresh' },
      process.env.REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: '30d',
      }
    )

    const response = NextResponse.json(
      { message: '로그인 성공' },
      { status: 200 }
    )

    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 10, // 10분
    })

    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30일
    })
    return response
  } else if (email === 'qwer@admin.com' && password === '1234') {
    const token = jwt.sign(
      { email, nick: '관리자', role: 'admin' },
      process.env.JWT_SECRET as string,
      {
        expiresIn: '1h',
      }
    )
    const response = NextResponse.json(
      { message: '관리자 로그인 성공' },
      { status: 200 }
    )
    response.cookies.set('accessToken', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60,
    })
    return response
  } else {
    return NextResponse.json({ message: '로그인 실패' }, { status: 401 })
  }
}
