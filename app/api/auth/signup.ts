import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json()
  console.log(name, email, password)
  return NextResponse.json({ message: 'Signup successful' })
}
