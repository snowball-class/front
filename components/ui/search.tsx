import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className="rounded-sm border border-gray-500 flex justify-start items-center">
      <FaSearch className="" />
      <input className="" type="text" placeholder="무엇을 배우고 싶나요?" />
    </div>
  )
}

export default Search
