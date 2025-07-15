"use client"

import { motion } from "framer-motion"
import { Card, CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export interface AnimatedCardProps {
  glowing?: boolean
  hoverScale?: number
  className?: string
  children: React.ReactNode
}

export function AnimatedCard({ 
  children, 
  className, 
  hoverScale = 1.02,
  glowing = false,
  ...props 
}: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        y: -5
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full transition-all duration-300 backdrop-blur-sm",
          glowing && "shadow-lg shadow-primary/10 hover:shadow-primary/20",
          "border-border/50 hover:border-primary/30",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    </motion.div>
  )
}