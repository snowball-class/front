import React from 'react'

const CarouselSkeleton = () => {
  return (
    <div className="flex items-center  justify-between w-full h-full my-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mainBlue" />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mainBlue" />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mainBlue" />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mainBlue" />
    </div>
  )
}

export default CarouselSkeleton
