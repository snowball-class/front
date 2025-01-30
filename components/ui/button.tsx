// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button"
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// export { Button, buttonVariants }

interface ButtonProps {
  bgColor: 'blue' | 'gray' | 'yellow' | 'none'
  size: 'default' | 'long' | 'small'
  rounded?: boolean
  children: React.ReactNode
}

/**
 *
 * @param props bgColor: blue, gray, yellow
 * size : default, long
 * rounded : boolean
 * @returns
 */
export const Button = (props: ButtonProps) => {
  const { children, bgColor, size, rounded } = props

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
      {children}
    </button>
  )
}
