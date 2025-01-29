import React from 'react'
import Search from './search'

const Navbar = () => {
  return (
    <div className="w-3/4 mx-auto flex items-center justify-between mb-12">
      <div>Logo</div>
      <Search />
      <div className="">ddd</div>
    </div>
  )
}

export default Navbar
