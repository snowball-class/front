import { CardInfo } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { v4 as uuidv4 } from 'uuid'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function validateEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

export function formatPrice(price: number) {
  return price.toLocaleString('ko-KR')
}

export function generateOrderId() {
  return uuidv4()
}

export function pagingFunction(currentPage: number, totalData: any[]) {
  const displayedDataLength = 8
  const totalPages = Math.ceil(totalData.length / displayedDataLength)
  const startIndex = (currentPage - 1) * displayedDataLength
  const endIndex = startIndex + 7
  const displayedData: CardInfo[] = totalData.slice(startIndex, endIndex + 1)

  return { totalPages, displayedData }
}
