import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <div className="rounded-sm border border-gray-500 flex justify-start items-center py-2 pr-1">
      <CiSearch className="stroke-2 stroke-gray-500 mx-3" />
      <input
        className="outline-none"
        type="text"
        placeholder="무엇을 배우고 싶나요?"
      />
    </div>
  )
}

export default Search
