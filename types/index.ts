import React from 'react'

export interface BannerInfo {
  id: string
  image: string
  href: string
}

export interface CardInfo {
  lessonId: number
  title: string
  categoryId: number
  description: string
  netPrice: number
  salePrice: number
  thumbnail: string
  eventId: number
  discountRate: number
  discountStartDate: string
  discountFinishDate: string
}

export interface InputProps {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  name?: string
  isSearch?: boolean
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export interface CardListProps {
  cards: CardInfo[]
}

export interface ReplyProps {
  id: string
  nickname: string
  starCount: number
  content: string
  createdAt: string
  isOwner: boolean
}

export interface ReplyListProps {
  replyList: ReplyProps[]
}

export interface ClassroomTopContentProps {
  id: string
  category: string
  title: string
  price: number
  starCount: number
}

export interface TabProps {
  tabList: TabSingle[]
  currentTab: number
  handleTabChange: (index: number) => void
}

export interface TabSingle {
  id: number
  tabName: string
  tabContent: React.ReactNode
}

export interface UserInfo {
  id: string
  name: string
  email: string
  password: string
  role: 'normal' | 'admin'
  createdAt?: string
  updatedAt?: string
}

export interface UserInfoState {
  userInfo: UserInfo
  createUser: (newUser: UserInfo) => void
}

export interface ModalState {
  isOpen: boolean
  title: string
  content?: string
  onOpen: () => void
  onClose: () => void
  setTitle: (title: string) => void
  setContent?: (content: string) => void
  handleSubmit: () => void
  setHandleSubmit: (fn: () => void) => void
}

export interface ItemDetail {
  lessonId: number
  title: string
  categoryId: number
  description: string
  netPrice: number
  salePrice: number
  thumbnail: string
  rating: number
  instructor: string
  replyList: ReplyProps[]
}

export interface CartState {
  cartItems: ItemDetail[]
  addItem: (item: ItemDetail) => void
  deleteItem: (item: ItemDetail) => void
}
