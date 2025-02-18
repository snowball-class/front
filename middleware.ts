import { jwtVerify } from 'jose'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refreshToken')?.value
  const secret = new TextEncoder().encode(process.env.REFRESH_TOKEN_SECRET)
  const { payload } = await jwtVerify(refreshToken as string, secret)
  console.log('토큰 페이로드:', payload)

  return NextResponse.next()

  // return NextResponse.next()
}
