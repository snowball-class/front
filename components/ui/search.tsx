'use client'

import React, { useState } from 'react'
import Input from './input'
import { useRouter } from 'next/navigation'

const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && search) {
      router.push(`/search?q=${search}`)
    }
  }
  return (
    <div className="w-3/4 min-w-[300px]">
      <Input
        type="text"
        placeholder="무엇을 배우고 싶나요?"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        isSearch
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Search
