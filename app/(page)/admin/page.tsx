import AdminTab from '@/components/admin/adminTab'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const Admin = () => {
  return <AdminTab />
}

export default Admin
