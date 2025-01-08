import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cn } from "../../lib/utils"
import { Toggle } from "./toggle"

const ToggleGroupContext = React.createContext<{
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline"
}>({})

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & {
    type: "single" | "multiple"
  }
>(({ className, children, variant, size, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, value, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      value={value}
      className={cn(
        "toggle-group-item",
        context.variant === "outline" && "toggle-group-item-outline",
        context.size === "sm" && "toggle-group-item-sm",
        context.size === "lg" && "toggle-group-item-lg",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }