import { create } from 'zustand'
import {
  UserInfo,
  UserInfoState,
  ModalState,
  CardInfo,
  CartState,
  ItemDetail,
} from '@/types'

const userInfoExample: UserInfo = {
  id: 'qwer',
  name: '홍길동',
  email: 'qwer@qwer.com',
  password: '1234',
  role: 'normal',
}

const userAdminExample: UserInfo = {
  id: 'admin',
  name: '관리자',
  email: 'admin@gmail.com',
  password: 'admin',
  role: 'admin',
}
const useUserStore = create<UserInfoState>((set) => ({
  userInfo: userInfoExample,
  createUser: (newUser: UserInfo) => {
    set({ userInfo: newUser })
  },
}))

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  content: '',
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setTitle: (title: string) => set({ title }),
  setContent: (content: string) => set({ content }),
  handleSubmit: () => set({ isOpen: false }),
  setHandleSubmit: (fn: () => void) => set({ handleSubmit: fn }),
}))

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addItem: (item: ItemDetail) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  deleteItem: (item: ItemDetail) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.lessonId !== item.lessonId
      ),
    })),
}))

export { useUserStore, useModalStore, useCartStore }
