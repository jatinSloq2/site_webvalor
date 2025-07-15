"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(99,102,241,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal className="space-y-8">
          <motion.h2 
            className="text-4xl md:text-6xl font-serif font-bold"
            whileInView={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            Ready to Build Something{" "}
            <span className="gradient-text">Amazing?</span>
          </motion.h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and create a website that drives results. 
            Book a free consultation call and let's bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AnimatedButton size="lg" glowing className="group">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              View Pricing
            </AnimatedButton>
          </div>

          <motion.div 
            className="pt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>Free consultation • No commitment • Quick response</p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}