import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all backdrop-blur-xl animate-gradient-shift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20",
  {
    variants: {
      variant: {
        default: "bg-primary/80 text-white hover:bg-primary/90",
        destructive:
          "bg-destructive/80 text-white hover:bg-destructive/90",
        outline:
          "border-2 border-primary/40 bg-background/60 text-foreground hover:bg-background/80 shadow-md",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary/90",
        ghost: "bg-accent/60 hover:bg-accent/80 text-foreground shadow-md",
        link: "text-primary underline-offset-4 hover:underline shadow-none backdrop-blur-none border-none",
      },
      size: {
        default: "px-6 py-2.5",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-3 text-base",
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
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Apply gradient animation style for default variant
    const gradientStyle = variant === "default" || !variant ? {
      backgroundSize: '200% 100%',
      ...style
    } : style;
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={gradientStyle}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
