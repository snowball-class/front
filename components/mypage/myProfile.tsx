import { Profile } from '@/types'

const MyProfile = ({ profile }: { profile: Profile }) => {
  return (
    <div className="mt-8 max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">내 프로필</h2>

      <div className="space-y-4">
        <div className="flex items-center border-b border-gray-200 pb-4">
          <div className="w-24 text-gray-600 font-medium">이름</div>
          <div className="flex-1 text-gray-900">{profile.name}</div>
        </div>

        <div className="flex items-center border-b border-gray-200 pb-4">
          <div className="w-24 text-gray-600 font-medium">닉네임</div>
          <div className="flex-1 text-gray-900">{profile.nickname}</div>
        </div>

        <div className="flex items-center border-b border-gray-200 pb-4">
          <div className="w-24 text-gray-600 font-medium">이메일</div>
          <div className="flex-1 text-gray-900">{profile.email}</div>
        </div>

        <div className="flex items-center">
          <div className="w-24 text-gray-600 font-medium">가입일</div>
          <div className="flex-1 text-gray-900">{profile.joinDate}</div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
