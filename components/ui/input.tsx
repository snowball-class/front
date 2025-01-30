'use client'

import { CiSearch } from 'react-icons/ci'

interface InputProps {
  type: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  isSearch?: boolean
}

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  isSearch,
}: InputProps) => {
  if (isSearch) {
    return (
      <div className="flex items-center border border-gray-300 rounded-sm w-full">
        <CiSearch className="stroke-2 stroke-gray-500 mx-3" />
        <input
          className="w-full outline-none px-2 py-2"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    )
  } else {
    return (
      <div className="flex items-center border border-gray-300 rounded-sm w-full">
        <input
          className="w-full outline-none px-2 py-2"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    )
  }
}

export default Input
