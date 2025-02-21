'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useModalStore } from '@/lib/store'

const UserAdmin = () => {
  // 목업 데이터 추가
  const mockUsers = [
    {
      id: 'USER001',
      email: 'user1@example.com',
      joinDate: '2024-03-15',
    },
    {
      id: 'USER002',
      email: 'john.doe@example.com',
      joinDate: '2024-03-14',
    },
    {
      id: 'USER003',
      email: 'jane.smith@example.com',
      joinDate: '2024-03-13',
    },
    {
      id: 'USER004',
      email: 'kim.dev@example.com',
      joinDate: '2024-03-12',
    },
    {
      id: 'USER005',
      email: 'park.test@example.com',
      joinDate: '2024-03-11',
    },
  ]
  const { onOpen, onClose, setTitle, setHandleSubmit } = useModalStore()

  const handleWithdraw = (userId: string) => {
    onOpen()
    setTitle(`${userId}님을 탈퇴시키겠습니까?`)
    setHandleSubmit(() => {
      alert('탈퇴완료')
      onClose()
    })
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">회원정보</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                유저 ID
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                이메일
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                가입일자
              </th>
              <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                관리
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.joinDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Button
                    bgColor="gray"
                    size="default"
                    onClick={() => handleWithdraw(user.id)}
                  >
                    탈퇴
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserAdmin
