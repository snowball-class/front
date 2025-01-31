import React from 'react'

const CarouselSkeleton = () => {
  return (
    <div className="w-full h-full flex items-center justify-between mb-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mainBlue" />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mainBlue" />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mainBlue" />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-mainBlue" />
    </div>
  )
}

export default CarouselSkeleton
