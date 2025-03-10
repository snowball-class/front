const Title = ({ title }: { title: string }) => {
  return (
    <div className="pt-12 pb-8 w-full flex justify-center items-center font-semibold text-2xl text-gray-500">
      {title}
    </div>
  )
}

export default Title
