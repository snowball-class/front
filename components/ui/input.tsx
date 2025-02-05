'use client'

import { InputProps } from '@/types'
import { CiSearch } from 'react-icons/ci'

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  isSearch,
  name,
  onKeyDown,
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
          name={name}
          onKeyDown={onKeyDown}
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
          name={name}
        />
      </div>
    )
  }
}

export default Input
