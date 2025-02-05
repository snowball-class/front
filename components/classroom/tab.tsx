'use client'

import React, { useState } from 'react'
import { TabProps, TabSingle } from '@/types'

const Tab = (props: TabProps) => {
  const { tabList, currentTab, handleTabChange } = props

  return (
    <div className="w-3/4 mx-auto">
      <div className="flex gap-8 justify-start items-center w-3/5 border-b-gray-200 border-b-2 relative">
        {tabList.map((item: TabSingle, index: number) => (
          <button
            key={index}
            className={`text-lg pb-4 ${
              currentTab === item.id ? 'text-black' : 'text-gray-300'
            }`}
            onClick={() => handleTabChange(item.id)}
          >
            {item.tabName}
          </button>
        ))}
      </div>
      {tabList.map((item, index) => (
        <div key={index}>{currentTab === item.id && item.tabContent}</div>
      ))}
    </div>
  )
}

export default Tab
