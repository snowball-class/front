import Link from 'next/link'

interface ButtonProps {
  bgColor: 'blue' | 'gray' | 'yellow' | 'none'
  size: 'default' | 'long' | 'small'
  rounded?: boolean
  children: React.ReactNode
  href?: string
}

/**
 *
 * @param props bgColor: blue, gray, yellow
 * size : default, long
 * rounded : boolean
 * @returns
 */
export const Button = (props: ButtonProps) => {
  const { children, bgColor, size, rounded, href } = props

  let backColor = ''
  if (bgColor === 'blue') {
    backColor = 'bg-mainBlue text-white'
  } else if (bgColor === 'gray') {
    backColor = 'bg-gray-100  text-black'
  } else if (bgColor === 'yellow') {
    backColor = 'bg-mainYellow  text-white'
  } else {
    backColor = 'bg-transparent text-black'
  }

  let btnSize = ''
  if (size === 'default') {
    btnSize = 'py-2 px-8'
  } else if (size === 'small') {
    btnSize = 'py-2 px-2'
  } else if (size === 'long') {
    btnSize = 'w-full py-2'
  }

  let roundedBtn = ''
  if (rounded) {
    roundedBtn = 'rounded-full'
  } else {
    roundedBtn = 'rounded-lg'
  }

  return (
    <button
      className={
        backColor +
        ' ' +
        btnSize +
        ' ' +
        roundedBtn +
        ' ' +
        'font-medium text-sm flex justify-center items-center'
      }
    >
      {href ? <Link href={href}>{children}</Link> : children}
    </button>
  )
}
