export interface CardInfo {
  id: string
  title: string
  description: string
  price?: string
  image: string
}

export interface InputProps {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  name?: string
  isSearch?: boolean
}
