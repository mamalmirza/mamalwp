import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-2 border-black shadow-[2px_2px_0_#000000,-2px_-2px_0_#000000,2px_-2px_0_#000000,-2px_2px_0_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0_#000000,-4px_-4px_0_#000000,0px_-4px_0_#000000,-4px_0px_0_#000000]",
        destructive: "bg-red-500 text-white border-2 border-red-700 shadow-[2px_2px_0_#7f1d1d,-2px_-2px_0_#7f1d1d,2px_-2px_0_#7f1d1d,-2px_2px_0_#7f1d1d] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0_#7f1d1d,-4px_-4px_0_#7f1d1d,0px_-4px_0_#7f1d1d,-4px_0px_0_#7f1d1d]",
        outline: "bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200",
        secondary: "bg-gray-900 text-white border-2 border-white shadow-[2px_2px_0_#000000,-2px_-2px_0_#000000,2px_-2px_0_#000000,-2px_2px_0_#000000] hover:border-green-500",
        ghost: "hover:bg-gray-900 hover:text-green-500",
        link: "text-green-500 underline-offset-4 hover:underline",
        pixel: "bg-green-500 text-black border-2 border-black shadow-[2px_2px_0_#000000,-2px_-2px_0_#000000,2px_-2px_0_#000000,-2px_2px_0_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0_#000000,-4px_-4px_0_#000000,0px_-4px_0_#000000,-4px_0px_0_#000000]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-none px-3",
        lg: "h-11 rounded-none px-8",
        xl: "h-12 rounded-none px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
