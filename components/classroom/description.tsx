import { ClassroomDetail } from '@/types'

const Description = (props: ClassroomDetail) => {
  const { title, content1, content2 } = props
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm w-3/5">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        <p className="text-gray-700">{content1}</p>
        <p className="text-gray-700">{content2}</p>
      </div>
    </div>
  )
}

export default Description
