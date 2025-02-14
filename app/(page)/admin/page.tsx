import AdminTab from '@/components/admin/adminTab'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const Admin = () => {
  try {
    const token = cookies().get('token')?.value
    if (!token) {
      redirect('/')
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      role?: string
    }
    if (!decoded || !decoded.role || decoded.role !== 'admin') {
      redirect('/')
    }

    return <AdminTab />
  } catch (error) {
    redirect('/')
  }
}

export default Admin
