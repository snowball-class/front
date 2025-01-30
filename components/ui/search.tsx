'use client'

import React, { useState } from 'react'
import Input from './input'

const Search = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="w-3/4 min-w-[300px]">
      <Input
        type="text"
        placeholder="무엇을 배우고 싶나요?"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        isSearch
      />
    </div>
  )
}

export default Search
