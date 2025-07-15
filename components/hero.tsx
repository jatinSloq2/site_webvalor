"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* 3D Scene Background */}
      {/* <Scene className="absolute inset-0 opacity-30" /> */}
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary text-sm font-medium"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Premium Web Development Agency
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight"
          >
            We Build{" "}
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              Confident
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Websites.
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Crafting premium digital experiences that convert visitors into customers. 
            We deliver high-performance websites for ambitious brands.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <AnimatedButton size="lg" glowing className="group">
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              View Our Work
            </AnimatedButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">24h</div>
              <div className="text-sm text-muted-foreground">Response</div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}